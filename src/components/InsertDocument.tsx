import React from "react";
import Link from "next/link";
import { Editor } from "./Editor";
// import { Button } from "./Buttons";
import { Button } from "./Button";
import { Icons } from "./Icons";

export const InsertDocument = (): JSX.Element => {
  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center px-4 pt-4 pb-20">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-[50vh]"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-flex flex-col items-start gap-[32px] p-[32px] relative bg-colors-foreground rounded-[18px] overflow-hidden border border-solid border-colors-dividers">
          <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
            <div className="flex w-[670px] items-start gap-[24px] relative flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-title font-[number:var(--title-font-weight)] text-colors-body-primary text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
                Insert Document
              </div>
              <Link href="/">
                <Button btntype="nav">
                  <Icons.Close className="!relative !w-[20px] !h-[20px]" />
                </Button>
              </Link>
            </div>
            <div className="relative w-fit font-body font-[number:var(--body-font-weight)] text-colors-body-primary text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
              To collection game.characters
            </div>
          </div>
          <div className="flex items-center justify-end gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-bold text-colors-body-secondary text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
              VIEW
            </div>
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <Button btntype="nav">
                <Icons.Curly className="!relative !w-[20px] !h-[20px]" />
              </Button>
              <Button className="!flex-[0_0_auto]" btntype="nav">
                <Icons.Lines className="!relative !w-[20px] !h-[20px]" />
              </Button>
            </div>
            <div className="relative w-px h-[16px] bg-colors-body-secondary rounded-[8px]" />
            <Button className="!flex-[0_0_auto]" btntype="nav">
              <Icons.Copy className="!relative !w-[20px] !h-[20px]" />
            </Button>
            <Button className="!flex-[0_0_auto]" btntype="nav">
              <Icons.Auto className="!relative !w-[20px] !h-[20px]" />
            </Button>
          </div>
          <div className="flex flex-col items-start self-stretch w-full bg-colors-background relative flex-[0_0_auto]">
            <Editor className="h-[670px] w-[190px]" />
          </div>
          <div className="flex items-center justify-end gap-[16px] self-stretch w-full relative flex-[0_0_auto]">
            <Link href="/">
              <Button variant="secondary" className="!border">
                Cancel
              </Button>
            </Link>
            <Button variant="primary">Insert</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
