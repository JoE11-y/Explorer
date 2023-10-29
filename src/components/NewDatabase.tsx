import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Icons } from "./Icons";

export const NewDatabase = (): JSX.Element => {
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
          <div className="w-[670px] items-start gap-[24px] flex relative flex-[0_0_auto]">
            <div className="font-nunito relative flex-1 mt-[-1.00px] font-[number:var(--title-font-weight)] text-colors-body-primary text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
              New Database
            </div>
            <Link href="/">
              <Button className="!flex-[0_0_auto]" btntype="nav">
                <Icons.Close className="!relative !w-[20px] !h-[20px]" />
              </Button>
            </Link>
          </div>
          <div className="flex-col items-start self-stretch w-full flex relative flex-[0_0_auto]">
            <div className="font-nunito relative self-stretch mt-[-1.00px] font-bold text-colors-body-primary text-[14px] tracking-[0] leading-[normal]">
              Database name
            </div>
            <input
              className="flex h-[40px] items-center gap-[8px] p-[8px] relative self-stretch w-full bg-colors-background rounded-[10px] border-[1.5px] border-solid border-colors-dividers"
              placeholder="database name"
            />
          </div>
          <div className="flex-col items-start self-stretch w-full flex relative flex-[0_0_auto]">
            <div className="font-nunito relative self-stretch mt-[-1.00px]  font-bold text-colors-body-primary text-[14px] tracking-[0] leading-[normal]">
              Collection name
            </div>
            <input
              className="flex h-[40px] items-center gap-[8px] p-[8px] relative self-stretch w-full bg-colors-background rounded-[10px] border-[1.5px] border-solid border-colors-dividers"
              placeholder="collection name"
            />
          </div>
          <div className="items-center justify-end gap-[16px] self-stretch w-full flex relative flex-[0_0_auto]">
            <Link href="/">
              <Button className="!flex-[0_0_auto] !border" variant="secondary">
                Cancel
              </Button>
            </Link>
            <Button className="!flex-[0_0_auto]" variant="primary">
              Create Database
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
