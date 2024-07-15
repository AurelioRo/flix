import styles from "./CampoDescripcion.module.css"

const CampoDescripcion = (props) => {

    return (
        <>
            <label>{props.titulo}</label>
            <input placeholder={props.placeholder} type={props.type} ></input>
        </>
    )


}

export default CampoDescripcion