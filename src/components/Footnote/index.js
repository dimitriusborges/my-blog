import styles from './Footnote.module.css'
import {ReactComponent as Trandmark} from "assets/marca_registrada.svg";
//SVGR package, default in React (at least from npx create) allows to
//import a svg file as a component

export default function Footnote(){
    return (
        <footer className={styles.rodape}>
            <Trandmark/>
            Desenvolvido por Mim =D
        </footer>
    )
}