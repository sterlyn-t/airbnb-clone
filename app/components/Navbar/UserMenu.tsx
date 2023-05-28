"use client";
import React from "react";
import Avatar from "../Avatar";
import { AiOutlineMenu } from "react-icons/ai";

const UserMenu = () => {
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
          onClick={() => {}}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center rounded-full hover:shaow-md transition gap-3 cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="hidden sm:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
