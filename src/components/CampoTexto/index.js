import styles from "./CampoTexto.module.css"

const CampoTexto = (props) => {

    return (
        <>
            <label>{props.titulo}</label>
            <input type={props.type} placeholder={props.placeholder} required={props.required} ></input>
        </>
    )


}

export default CampoTexto

