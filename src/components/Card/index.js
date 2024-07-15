import styles from "./Card.module.css"
import players from "../../data/db.json"
import ImagenCard from "../ImagenCard"

function Card({img, id, titulo, url, grupo}) {
    return (
        <section className={styles.sectionCard}>

            <h1 className={styles.grupos}>{grupo}</h1>

            <div>

                <img src={img} alt={titulo} />

                <div>

                    <button></button>

                    <button></button>

                </div>
            </div>
        </section>
    )
}

console.log(Card)

export default Card