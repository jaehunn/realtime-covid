import Link from "next/link";

import NavbarStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={NavbarStyles.container}>
      <Link href="#" as="/">
        <a>Korea</a>
      </Link>
    </div>
  );
};

export default Navbar;
