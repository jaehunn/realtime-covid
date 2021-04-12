import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed flex flex-col justify-between top-2/4 left-full transform -translate-x-full">
      <Link href="/">
        <a>Domestic</a>
      </Link>
      <Link href="/overseas">
        <a>Overseas</a>
      </Link>
    </div>
  );
};

export default Navbar;
