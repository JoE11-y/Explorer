import { Icons } from "@/components/Icons";
import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { DashboardMenu } from "@/components/DashboardMenu";
import { NoData } from "@/components/NoData";
import { Editor } from "@/components/Editor";
import { DocumentData } from "./DocumentCard";
import { useState } from "react";

export const Document = (): JSX.Element => {
  const data = true;
  return <>{data ? <DocumentData /> : <NoData />}</>;
};
