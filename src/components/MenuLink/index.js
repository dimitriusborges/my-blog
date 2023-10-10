import {Link, useLocation} from "react-router-dom";
import styles from "./MenuLink.module.css";


const MenuLink = ({landingPage, text}) => {
    //Alternatively, we could use the component NavLink, from react-router-dom
    //available to deal with this exactly situation here: change a component behavior
    //(or appearance, or whatever) based on the current active page/component
    const currLocal = useLocation();
    return (
        <Link className={`
                    ${styles.link}
                    ${currLocal.pathname === landingPage ? styles.linkHighlight : ""}`
        }
              to={landingPage}>
            {text}
        </Link>
    )
}

export default MenuLink