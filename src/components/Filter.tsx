import React from "react";
import { Icons } from "./Icons";
import { Button } from "./Button";

export const Filter = (): JSX.Element => {
  return (
    <div className="self-stretch w-full flex-[0_0_auto]">
      <div
        className={`flex flex-row relative flex-[0_0_auto] gap-[12px] px-[16px] py-[8px] bg-colors-background rounded-[18px] border border-solid border-colors-dividers item-center`}
      >
        <div className="inline-flex h-[32px] items-center gap-[4px] relative flex-[0_0_auto] rounded-[24px]">
          <div className="relative w-fit font-nunito font-medium text-colors-primary text-[14px] tracking-[0] leading-[normal]">
            Filter
          </div>
        </div>
        <Button
          className="inline-flex h-8 items-center gap-1 relative rounded-[24px]"
          btntype="nav"
        >
          <Icons.Clock className="w-[20px] h-[20px]" />
          <Icons.triangle
            transform={"rotate(90)"}
            className=" !w-[12px] !h-[16px]"
          />
        </Button>
        <label className="flex flex-1 grow items-center gap-[8px] p-[8px] left-0 bg-colors-foreground rounded-[10px] border-[1.5px] border-solid border-colors-dividers text-gray-400 focus-within:text-gray-600">
          <Icons.SearchBar className="relative w-[16px] h-[16px] pointer-events-none transform" />
          <input
            className="relative flex-1 mt-[-1.50px] font-sourcecode text-colors-body-secondary font-normal text-[12px] tracking-[0] leading-[16px] border-0 focus:outline-none appearance-none text-gray-500 "
            placeholder="type a query"
          />
        </label>

        <Button variant="secondary" className="!border border-colors-dividers">
          Explain
        </Button>
        <Button variant="secondary" className="!border border-colors-dividers">
          Reset
        </Button>
        <Button variant="primary">Find</Button>
        <Button variant="secondary" className="!border  border-colors-dividers">
          <Icons.Code />
        </Button>
        <Button variant="secondary" className="inline-flex h-[32px]">
          <div className="relative w-fit font-nunito font-medium text-colors-primary text-[14px] tracking-[0] leading-[normal]">
            Options
          </div>
          <Icons.triangle
            transform={"rotate(90)"}
            className=" !w-[12px] !h-[16px]"
            color="#EC4525"
          />
        </Button>
      </div>
    </div>
  );
};
