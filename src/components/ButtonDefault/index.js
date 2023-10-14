import styles from "./ButtonDefault.module.css"

export default function ButtonDefault(props){
    return (
        <button className={`${styles.botao} ${styles[props.size]}`}>
            {props.children}</button>
    )
}