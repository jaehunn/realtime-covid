import React from "react";
import Link from "next/link";
import { ToggleSwitcher } from ".";
import { navInfos } from "../../data";

const Navbar = () => {
  return (
    <div className="fixed flex flex-col top-1/4 left-full transform -translate-x-full dark:text-gray-200 pr-8 z-10 font-medium">
      {navInfos.map(({ name, href }, index) => (
        <Link key={index} href={href}>
          <span className="w-28 h-10 flex justify-start items-center p-6 shadow-lg rounded-lg bg-blue-50 hover:bg-blue-200 dark:bg-gray-600 dark:border-gray-500 dark:hover:bg-gray-700 cursor-pointer ">
            <a>{name}</a>
          </span>
        </Link>
      ))}

      <ToggleSwitcher />
    </div>
  );
};

export default React.memo(Navbar);
