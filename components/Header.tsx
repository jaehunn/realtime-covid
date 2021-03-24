import HeaderStyles from "../styles/Header.module.css";

type HeaderProps = {
  nation: string;
};

const Header = ({ nation }: HeaderProps) => {
  return (
    <div className={HeaderStyles.container}>
      <h1>
        RealTime Covid-19
        <br />
        <span>{nation}</span>
      </h1>
    </div>
  );
};

export default Header;
