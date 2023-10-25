import React from "react";
import { Icons } from "./Icons";
import { Button } from "./Button";

export const DashboardMenu = (): JSX.Element => {
  return (
    <div className="relative flex items-center self-stretch justify-between w-full">
      <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
        <Button className="inline-flex !h-7" variant="primary">
          <Icons.Add color="#FCFEFF" className="w-[16px] h-[16px]" />
          Create Database
        </Button>
        <Button
          variant="secondary"
          className="!border !border-colors-dividers inline-flex"
        >
          <Icons.Export className="w-[16px] h-[16px] " />
          Export Data
        </Button>
      </div>
      <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
        <p className="relative w-fit [font-family:'Nunito',Helvetica] font-bold text-colors-body-primary text-[14px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
          0 - 0 of 0
        </p>
        <Button btntype="nav">
          <Icons.Refresh className="w-[18px] h-[18px]" />
        </Button>
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <Button btntype="nav">
            <Icons.Arrow className="w-[14px] h-[14px]" color="#ABAFC7" />
          </Button>
          <Button btntype="nav">
            <Icons.Arrow
              className="w-[14px] h-[14px]"
              color="#ABAFC7"
              transform="rotate(180)"
            />
          </Button>
        </div>
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <Button
            btntype="nav"
            className="relative w-fit !font-quicksand !font-bold text-colors-body-secondary whitespace-nowrap"
          >
            VIEW
          </Button>
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <Button btntype="nav" className="h-[28px]">
              <Icons.Column className="w-[20px] h-[20px] mt-[-4.00px] mb-[-4.00px]" />
            </Button>
            <Button btntype="nav" className="h-[28px]">
              <Icons.Query className=" w-[20px] h-[20px] mt-[-4.00px] mb-[-4.00px]" />
            </Button>
            <Button btntype="nav" className="h-[28px]">
              <Icons.Grid className=" w-[20px] h-[20px] mt-[-4.00px] mb-[-4.00px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
