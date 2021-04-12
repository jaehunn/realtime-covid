import Link from "next/link";

interface HeaderProps {
  nation: NATION;
}
export enum NATION {
  domestic = "Domestic",
  overseas = "Overseas",
}

const Header = ({ nation }: HeaderProps) => {
  return (
    <div className="text-center">
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
