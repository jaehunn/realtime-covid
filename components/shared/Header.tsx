import React from "react";
import Link from "next/link";

const Header = ({ title }) => {
  return (
    <div className="text-center dark:text-gray-200">
      <h1 className="sm:text-5xl text-3xl">
        <Link href="#" as="/">
          <a>RealTime Covid-19</a>
        </Link>
        <br />
        <Link href="#" as="/">
          <a className="sm:text-3xl text-2xl">{title}</a>
        </Link>
      </h1>
    </div>
  );
};

export default React.memo(Header);
