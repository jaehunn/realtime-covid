import styles from "../styles/Cases.module.css";

// type covidItem = {
//   deathCnt: number;
//   decideCnt: number;
//   examCnt: number;
//   clearCnt: number;
// };

type CasesProps = { covidItems: any };

const Cases = ({ covidItems }: CasesProps) => {
  const [todayCovidItems, yesterdayCovidItems] = covidItems;

  const {
    decideCnt: todayDecideCnt,
    deathCnt: todayDeathCnt,
    examCnt: todayExamCnt,
    clearCnt: todayClearCnt,
  } = todayCovidItems;

  const {
    decideCnt: yesterdayDecideCnt,
    deathCnt: yesterdayDeathCnt,
    examCnt: yesterdayExamCnt,
    clearCnt: yesterdayClearCnt,
  } = yesterdayCovidItems;

  return (
    <div className={styles.container}>
      <div>
        <span>{todayDecideCnt}</span>
        <div>Confirmed</div>
        <span>{todayDecideCnt - yesterdayDecideCnt}</span>
      </div>
      <div>
        <span>{todayDeathCnt}</span>
        <div>Deaths</div>
        <span>{todayDeathCnt - yesterdayDeathCnt}</span>
      </div>
      <div>
        <span>{todayExamCnt}</span>
        <div>Recovered</div>
        <span>{todayExamCnt - yesterdayExamCnt}</span>
      </div>
      <div>
        <span>{todayClearCnt}</span>
        <div>Tested</div>
        <span>{todayClearCnt - yesterdayClearCnt}</span>
      </div>
    </div>
  );
};

export default Cases;
