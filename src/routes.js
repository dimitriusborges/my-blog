import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";
import Footnote from "./components/Footnote"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DefaultPage from "./components/DefaultPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                {/*nested routes*/}
                <Route
                    path="/"
                    element={<DefaultPage/>}
                >

                    <Route
                        index
                        element={<Home/>}
                    />{/*index means "same path as parent"*/}

                    <Route
                        path="aboutme"
                        element={<AboutMe/>}
                    />{/*we can skip the "/", it is added automatically*/}

                </Route>

                <Route
                    path="*"
                    element={<h1>Página não encontrada</h1>}
                    />
            </Routes>
            <Footnote/>
        </BrowserRouter>
    )
}

export default AppRoutes;
