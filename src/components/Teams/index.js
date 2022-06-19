import Team from "../Team";
import styles from "./Team.module.css";

function Teams(props) {
  const { team } = props;
  return (
    <div className={styles.container}>
      <section className={styles.group}>
        <h3 className={styles.header}>Our Team</h3>
        <div className={styles.piece}>
          {team.map((data) => {
            return (
              <>
                <Team team={data} />
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Teams;
