import styles from './Menu.module.css'
import MenuLink from "../MenuLink";

const Menu = () => {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink
                    landingPage = "/"
                    text= "Home"
                />
                <MenuLink
                    landingPage = "/aboutme"
                    text = "About Me"
                />
            </nav>
        </header>
    )
}

export default Menu