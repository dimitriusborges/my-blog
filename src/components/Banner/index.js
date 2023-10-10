import styles from './Banner.module.css'
import circuloCololorido from 'assets/circulo_colorido.png'


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hi!
                </h1>

                <p className={styles.paragrafo}>
                    Welcome to my Personal Blog! My name is Dimitrius Borges and I'm a React student. Here I will share some of my recently acquired knowledges
                </p>
                <div className={styles.imagens}>
                    <img className={styles.circuloColorido}
                         src={circuloCololorido}
                         aria-hidden={true}
                         alt="background element"
                    />
                </div>
                    <img className={styles.minhaFoto}
                         src="https://github.com/dimitriusborges.png"
                         alt="Dimitrius selfie"
                    />
            </div>
        </div>
    )
}