import Banner from "../Banner";
import {Outlet} from "react-router-dom"

export default function DefaultPage(){
    return(
        <main>
            <Banner/>
            <Outlet/> {/*it renders the elements from child route if this element is a parent route*/}
        </main>
    )
}