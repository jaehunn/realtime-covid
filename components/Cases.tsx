import styles from "../styles/Cases.module.css";

type CasesProps = {};

const Cases = () => {
  return (
    <div className={styles.container}>
      <div>
        <span>99,846</span>
        <div>Confirmed</div>
        <span>+428</span>
      </div>
      <div>
        <span>1,707</span>
        <div>Deaths</div>
        <span>+3</span>
      </div>
      <div>
        <span>91,560</span>
        <div>Recovered</div>
        <span>+481</span>
      </div>
      <div>
        <span>7,441,210</span>
        <div>Tested</div>
        <span>+40,220</span>
      </div>
    </div>
  );
};

export default Cases;
