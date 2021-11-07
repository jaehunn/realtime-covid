import VaccineScreen from "../components/screens/VaccineScreen";
import { getVaccineItems } from "../api/vaccine";

const Vaccine = ({ vaccineItems }) => (
  <VaccineScreen vaccineItems={vaccineItems} />
);

export const getServerSideProps = async () => {
  const vaccineItems = await getVaccineItems();

  return {
    props: {
      vaccineItems,
    },
  };
};

export default Vaccine;
