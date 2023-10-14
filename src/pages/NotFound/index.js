import styles from "./NotFound.module.css"
import error404 from "assets/erro_404.png"
import ButtonDefault from "../../components/ButtonDefault";
import {useNavigate} from "react-router-dom";

export default function NotFound(){

    const nav = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>
                    Oh, well... Page not found.
                </h1>
                <p className={styles.paragrafo}>
                    Are you sure you are in the right place?
                </p>
                <p className={styles.paragrafo}>
                    If you think so, wait a couple of minutes then refresh the page
                    or go back to the previous one. Cheers!
                </p>
                <div className={styles.botaoContainer}
                    onClick={() => nav(-1)}> {/*returns to the last page.
                    The browser builds a stack while we navigate the pages
                    and the useNavigate can use this to go backwards (and forwards*/}
                    <ButtonDefault size="lg">Back</ButtonDefault>
                </div>
                <img className={styles.imagemCachorro}
                     src={error404}
                     alt='A very unusual dog'
                />
            </div>
            <div className={styles.espacoEmBranco}/>
        </>
    )
}