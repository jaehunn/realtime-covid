import { OverseasScreen } from "../components/screens";
import { getOverseasCovidItems } from "../api/overseas";

const Overseas = ({ overseasCovidItems }) => (
  <OverseasScreen overseasCovidItems={overseasCovidItems} />
);

export const getServerSideProps = async () => {
  const overseasCovidItems = await getOverseasCovidItems();

  return {
    props: {
      overseasCovidItems,
    },
  };
};

export default Overseas;
