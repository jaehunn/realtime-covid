import React, { useRef } from "react";
import Link from "next/link";
import { ToggleSwitcher } from ".";
import { navInfos } from "../../data";

// hover 시 나타나게 만들기
const Navbar = () => {
  const linksEl = useRef(null);

  return (
    <nav className="absolute top-2 left-2 w-16 h-16 flex justify-center items-center rounded bg-white">
      <button className="w-8 h-8 flex flex-col justify-evenly items-center">
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
      </button>

      <div className="hidden flex" ref={linksEl}>
        {navInfos.map(({ name, href }, index) => (
          <Link key={index} href={href}>
            <span className="inline-flex hidden">
              <a>{name}</a>
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
  
};

export default React.memo(Navbar);

{
  /* <div className="absolute flex flex-col left-0 top-0 dark:text-gray-200 z-10 font-semibold lg:text-lg sm:leading-4 text-xs leading-2 tracking-wide">
      {navInfos.map(({ name, href }, index) => (
        <Link key={index} href={href}>
          <span className="inline-flex justify-center items-center lg:p-6 p-3 shadow-lg rounded-lg bg-blue-50 hover:bg-blue-200 dark:bg-gray-600 dark:border-gray-500 dark:hover:bg-gray-700 cursor-pointer ">
            <a>{name}</a>
          </span>
        </Link>
      ))}

      <span className="inline-flex justify-center items-center lg:p-6 p-3 shadow-lg rounded-lg bg-blue-50 hover:bg-blue-200 dark:bg-gray-600 dark:border-gray-500 dark:hover:bg-gray-700 cursor-pointer ">
        <ToggleSwitcher />
      </span>
    </div> */
}
