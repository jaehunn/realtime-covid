import ToggleSwitcher from "./ToggleSwitcher";
import Link from "next/link";

// TODO) responsive ui, focus active
const Navbar = () => {
  const navInfos = [
    { name: "Domestic", href: "/" },
    {
      name: "Overseas",
      href: "/overseas",
    },
    { name: "Vaccine", href: "/vaccine" },
  ];

  const NavLink = (href: string, name: string) => (
    <Link href={href} passHref>
      <span className="w-28 h-10 flex justify-start items-center p-6 shadow-lg rounded-lg bg-blue-50 dark:bg-gray-600 dark:border-gray-500 cursor-pointer">
        <a>{name}</a>
      </span>
    </Link>
  );

  return (
    <div className="fixed flex flex-col top-1/4 left-full transform -translate-x-full dark:text-gray-200 pr-8 z-10">
      {navInfos.map(({ name, href }) => NavLink(href, name))}

      <ToggleSwitcher />
    </div>
  );
};

export default Navbar;
