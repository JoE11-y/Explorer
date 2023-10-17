"use client";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

const code = `/**
* Paste one or more documents here
*/
{
  “_id”: {
  “$oid”: “29jn8hz29u833bs82b73v63g”,
  “name”: “Ripley”,
  “class”: “barbarian”,
  “race”: “high elf”,
  }
}`;

export default function Editor() {
  return (
    <CodeMirror
      value={code}
      theme="light"
      width="670px"
      height="190px"
      onChange={() => {}}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
    />
  );
}
