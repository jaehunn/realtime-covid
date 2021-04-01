import Link from "next/link";

import NavbarStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className="fixed top-2/4 left-full transform -translate-x-full">
      <Link href="#" as="/">
        <a>Korea</a>
      </Link>
    </div>
  );
};

export default Navbar;
