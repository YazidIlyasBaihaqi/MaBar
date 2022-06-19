import styles from "./Hero.module.css";

function Hero() {
  return (
    <>
     <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.header}>
          <u>MADING</u>
        </p>
        <p className={styles.detail}>
          Manajemen <br />
          Proyek
        </p>
      </div>
      </div>
    </>
  );
}

export default Hero;
