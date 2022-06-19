import styles from "./Card.module.css"

function Card (props) {
    const { data } = props
    return (
        <div className={styles.container}>
            <img className={styles.image} src={data.img} alt={data.title} />
            <h4 className={styles.title}>{data.title}</h4>
        </div>
    )
}

export default Card;