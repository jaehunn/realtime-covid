import ToggleSwitcher from "./ToggleSwitcher";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed flex flex-col justify-between top-2/4 left-full transform -translate-x-full dark:text-gray-200">
      <Link href="/">
        <a>Domestic</a>
      </Link>
      <Link href="/overseas">
        <a>Overseas</a>
      </Link>
      <ToggleSwitcher  />
    </div>
  );
};

export default Navbar;
