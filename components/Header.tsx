import Link from "next/link";
import { HeaderProps } from "../types";

const Header = ({ nation }: HeaderProps) => {
  return (
    <div className="text-center dark:text-gray-200">
      <h1 className="text-5xl">
        <Link href="#" as="/">
          <a>RealTime Covid-19</a>
        </Link>
        <br />
        <Link href="#" as="/">
          <a className="text-3xl">{nation}</a>
        </Link>
      </h1>
    </div>
  );
};

export default Header;
