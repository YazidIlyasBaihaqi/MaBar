import Card from "../Card";
import styles from "./Mading.module.css";

function Mading(props) {
  const { madingData } = props;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Mading - NF</p>
        </div>
        <div className={styles.group}>
          <div className={styles.row}>
            <div className={styles.row__item}>
              {madingData.map((mading) => (
                <Card data={mading} />
              ))}
              <img
                className={styles.image}
                src={"https://picsum.photos/100/150"}
                alt={"placeholder"}
              />
            </div>
          </div>
          <div className={styles.column}>
            <h4 className={styles.column__header}>Kategori</h4>
            <ul className={styles.column__items}>
              <li className={styles.column__link}>Mading - NF</li>
              <li className={styles.column__link}>Event Mading</li>
              <li className={styles.column__link}>Webinar Mading</li>
              <li className={styles.column__link}>Poster MaBar</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mading;
