import { DomesticScreen } from '../components/screens';
import { getDomesticCovidItems, getDomesticRegionCovidItems } from '../api/domestic';

const Home = ({ domesticCovidItems, domesticRegionCovidItems }) => (
  <DomesticScreen
    domesticCovidItems={domesticCovidItems}
    domesticRegionCovidItems={domesticRegionCovidItems}
  />
);

export const getServerSideProps = async () => {
  const domesticCovidItems = await getDomesticCovidItems();
  const domesticRegionCovidItems = await getDomesticRegionCovidItems();

  return {
    props: {
      domesticCovidItems,
      domesticRegionCovidItems,
    },
  };
};

export default Home;
