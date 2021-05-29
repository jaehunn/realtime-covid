import React, { useRef } from "react";
import Link from "next/link";
import { ToggleSwitcher } from ".";
import { navInfos } from "../../data";

// hover 시 나타나게 만들기
const Navbar = () => {
  const linksEl = useRef(null);
  const switcherEl = useRef(null);

  const handleButtonClick = () => {
    linksEl.current.classList.toggle("hidden");
  };

  return (
    <nav className="relative top-4 left-1 w-12 h-12 flex justify-center items-center rounded bg-white">
      <button className="w-8 h-8 flex flex-col justify-evenly items-center focus:outline-none" onClick={handleButtonClick}>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
      </button>

      <div
        className="hidden flex absolute top-0 left-full transition-transform sm:text-sm sm:leading-4 text-xs leading-4 tracking-wide"
        ref={linksEl}
      >
        {navInfos.map(({ name, href }, index) => (
          <Link key={index} href={href}>
            <div className="sm:w-20 w-16 h-12 bg-blue-50 ml-1 flex flex-col justify-center items-center shadow-lg rounded-lg dark:bg-gray-600 dark:border-gray-500 cursor-pointer transition duration-500 ease-in-out dark:hover:bg-gray-700 hover:bg-blue-200 transform hover:-translate-y-1 hover:scale-100">
              <a>{name}</a>
            </div>
          </Link>
        ))}

        <div className="flex justify-center items-center ml-1 sm:w-24 w-16 h-12 sm:p-6 p-3 shadow-lg rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-gray-600 dark:border-gray-500 dark:hover:bg-gray-700 cursor-pointer">
          <ToggleSwitcher />
        </div>
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
