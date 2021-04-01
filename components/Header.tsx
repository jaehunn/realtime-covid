import HeaderStyles from "../styles/Header.module.css";

type HeaderProps = {
  nation: string;
};

const Header = ({ nation }: HeaderProps) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl">
        RealTime Covid-19
        <br />
        <span className="text-3xl">{nation}</span>
      </h1>
    </div>
  );
};

export default Header;
