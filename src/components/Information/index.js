import styles from "./Information.module.css";

function Information(props) {
  const { information } = props;
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>About us</h3>
      {information.map((data) => {
        return (
          <>
            <div className={styles.group}>
              <p className={styles.paragraph}>{data.paragraph}</p>
              <img className={styles.image} src={data.img} alt="lorem" />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Information;
