import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Cases from "../components/Cases";
import Confirmed from "../components/Confirmed";
import RegionalTable from "../components/RegionalTable";

import HomeStyles from "../styles/Home.module.css";

import { fetchData } from "./api/fetchData";

type HomeProps = {
  covidData: {};
};

const Home = ({ data }) => {
  console.log(data);

  return (
    <div className={HomeStyles.container}>
      <Header nation={"Korea"} />
      <Navbar />
      <Cases />
      <Confirmed />
      <RegionalTable />
    </div>
  );
};

Home.getInitialProps = async () => {
  const data = await fetchData();

  return {
    data,
  };
};

export default Home;
