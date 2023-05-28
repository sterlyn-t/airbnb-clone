"use client";
import React, { useState, useCallback } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { AiOutlineMenu } from "react-icons/ai";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold rounded-full py-3 px-4 hover:bg-neutral-100 cursor-pointer transition"
          onClick={() => {}}
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center rounded-full hover:shaow-md transition gap-3 cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="hidden sm:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className=" 
        absolute
        rounded-xl
        shadow-md
        w-[40vw]
        md:w-3/4
        bg-white
        overflow-hidden
        top-12
        right-0
        text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
