"use client";
import { NavButton } from "./NavButton";
import { Icons } from "./Icons";
import { useState } from "react";

interface Props {
  dbName: string;
}

export const DBItem = ({ dbName }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems = [
    {
      title: "characters",
    },
    {
      title: "class",
    },
    {
      title: "race",
    },
    {
      title: "weapons",
    },
    {
      title: "armors",
    },
  ];

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transIcon = isOpen ? "rotate(90)" : "rotate(0)";
  const transClass = isOpen ? "flex" : "hidden";

  const log = () => {
    console.log("dater");
  };

  return (
    <>
      {" "}
      <div
        className="relative !flex items-center gap-[8px] p-[4px] !left-[8px]"
        onClick={toggle}
      >
        <Icons.triangle
          className="!w-[15px] !h-[20px] pointer-events-none"
          transform={`${transIcon}`}
        />
        <NavButton
          className="absolute !w-[200px]"
          icon={<Icons.DB className="!w-[20px] !h-[20px]" />}
          status="default"
          hasText={true}
          text={dbName}
          dropdown={true}
        />
      </div>
      <div className={` flex flex-col ${transClass}`}>
        {menuItems.map((item, index) => (
          <NavButton
            className="!flex !left-[8px] !w-[186px] !pl-[48px] !pr-[8px] !py-[8px]"
            icon={<Icons.Folder className="!w-[20px] !h-[20px]" />}
            status="default"
            hasText={true}
            text={item.title}
            key={index}
            onClick={log}
          />
        ))}
      </div>
    </>
  );
};
