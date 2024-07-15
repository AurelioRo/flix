import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import styles from "./Inicio.module.css"

function Inicio() {

    const [equipos, setEquipos] = useState([])

    return (
        <>
            <Banner />

            <section className={styles.sectionCard}>
                {equipos.map((equipo) => {
                    return <Card {...equipo} key={equipo.id} />
                })}
            </section>

        </>
    )
}

//<Card />

export default Inicio