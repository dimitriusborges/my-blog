import styles from "./PostCard.module.css"
import {Link} from "react-router-dom";
import ButtonDefault from "../ButtonDefault";


export default function PostCard({post}){

    return(

            <div className={styles.post}>
                <img className={styles.capa}
                     src={`/assets/posts/${post.id}/capa.png`}
                     alt="Imagem de capa do post"
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <Link to={`/posts/${post.id}`}>
                    <ButtonDefault>
                        Ler
                    </ButtonDefault>
                </Link>
            </div>

    )
}