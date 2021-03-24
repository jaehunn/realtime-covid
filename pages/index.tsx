import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Cases from "../components/Cases";
import Confirmed from "../components/Confirmed";
import RegionalTable from "../components/RegionalTable";

type HomeProps = {};

const Home = () => {
  return (
    <div>
      <Header nation={"Korea"} />
      <Navbar />
      <Cases />
      <Confirmed />
      <RegionalTable />
    </div>
  );
};

export default Home;
