"use client";

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  dropdown?: boolean;
  hasText?: boolean;
  status: "active" | "default";
  className: any;
  icon: JSX.Element;
  text?: string;
  onClick?: Function;
}

export const NavButton = ({
  dropdown = false,
  hasText = false,
  status,
  className,
  icon,
  text = "",
  onClick = () => {},
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    status: status || "active",
  });
  return (
    <div
      className={`inline-flex items-center gap-[4px] p-[8px] h-[28px] relative ${
        state.status === "active" ? "rounded-[10px]" : "rounded-[24px]"
      } ${state.status === "active" ? "bg-colors-dividers" : ""} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => onClick()}
    >
      {icon}

      {hasText && (
        <div className="!font-nunito w-fit tracking-[0] text-[14px] text-colors-body-primary font-medium leading-[normal]">
          {text}
        </div>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        status: "active",
      };

    case "mouse_leave":
      return {
        ...state,
        status: "default",
      };
  }

  return state;
}

NavButton.propTypes = {
  dropdown: PropTypes.bool,
  text: PropTypes.string,
  hasText: PropTypes.bool,
  status: PropTypes.oneOf(["active", "default"]),
  text1: PropTypes.string,
};
