"use client";

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  hover: boolean;
  type: "primary" | "secondary";
  className: any;
  text: string;
}

export const Buttons = ({
  hover,
  type,
  className,
  text,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    hover: hover,

    type: type || "secondary",
  });

  return (
    <div
      className={`inline-flex items-center gap-[8px] px-[16px] pb-0 h-[32px] rounded-[10px] justify-center relative ${
        state.type === "secondary" ? "border border-solid" : ""
      } ${state.type === "secondary" ? "border-colors-dividers" : ""} ${
        state.type === "secondary" && state.hover
          ? "bg-colors-dividers"
          : state.type === "primary" && !state.hover
          ? "bg-colors-primary"
          : state.type === "primary" && state.hover
          ? "bg-colors-primary-hover"
          : "bg-colors-background"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`[font-family:'Nunito',Helvetica] w-fit tracking-[0] text-[14px] font-bold text-center whitespace-nowrap leading-[16px] relative ${
          state.type === "primary" ? "text-[#fcfeff]" : "text-[#192431]"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}

Buttons.propTypes = {
  icon: PropTypes.bool,
  hover: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string,
};
