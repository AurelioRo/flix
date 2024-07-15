import styles from "./CampoOpciones.module.css"

const CampoOpciones = (props) => {

    return (
        <>
            <label>{props.titulo}</label>
            <select>
                <option value="" disabled defaultValue="" hidden>{props.placeholder}</option>
                {props.grupo.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
            </select>
        </>
    )


}

export default CampoOpciones