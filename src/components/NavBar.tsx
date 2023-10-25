import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Icons } from "./Icons";
import { DBItem } from "./DBItem";

export const NavBar = (): JSX.Element => {
  const dbs = ["admin", "game", "users"];
  return (
    <>
      <div className="flex flex-col relative w-[262px] h-[804px] bg-colors-background rounded-[18px] overflow-hidden border border-solid border-colors-dividers shadow-[0px_0px_12px_1px_#1924310a] gap-2 items-center">
        <div className="w-[230px] p-[16px] [background:linear-gradient(180deg,rgb(187,49,53)_0%,rgb(237,69,37)_38.54%,rgb(238,97,73)_100%)] flex items-center gap-[8px] top-0 left-0">
          <Icons.Logo className="relative w-[26.25px] h-[20px]" />
          <div className="relative flex-1 mt-[-1.00px] font-nunito font-[number:var(--subtitle-font-weight)] text-colors-background text-[length:var(--subtitle-font-size)] tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--subtitle-font-style)]">
            Orochi’s space
          </div>
          <Icons.Settings className="relative w-[20px] h-[20px]" />
        </div>

        <Button className="px-2 w-60" btntype="nav">
          <Icons.Home className="relative w-[20px] h-[20px]" /> {"Home"}
        </Button>
        <Button className="px-2 w-60" btntype="nav">
          <Icons.Query className=" w-[20px] h-[20px]" color="#192431" />{" "}
          {"My Queries"}
        </Button>
        <div className="py-2 ">
          <div className="w-[216px] h-10 flex items-center gap-[8px]">
            <div className="relative flex-1 font-quicksand font-bold text-colors-body-secondary text-[14px] tracking-[0] leading-[24px]">
              DATABASES
            </div>
            <Link href="/?newDatabaseModal=true">
              <Button className="!h-8 w-fit" btntype="nav">
                <Icons.Add
                  className="relative w-[20px] h-[20px]"
                  color="#ABAFC7"
                />
              </Button>
            </Link>
          </div>
          <label className="flex w-[190px] items-center gap-[8px] p-[8px] left-0 bg-colors-background rounded-[10px] border-[1.5px] border-solid border-colors-dividers  text-gray-400 focus-within:text-gray-600">
            <Icons.SearchBar className="relative w-[16px] h-[16px] pointer-events-none transform" />
            <input
              className="relative w-[168px] mt-[-1.00px] font-quicksand font-semibold text-[12px] tracking-[0] leading-[normal] border-0 focus:outline-none appearance-none text-gray-500 "
              placeholder="Search..."
            />
          </label>
        </div>

        <div className="h-[520px] overflow-x-hidden overflow-y-auto">
          {dbs.map((db, index) => (
            <DBItem key={index} dbName={db} />
          ))}
        </div>
      </div>
    </>
  );
};
