import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="/aboutme"
                    element={<AboutMe/>}
                />
                <Route
                    path="*"
                    element={<h1>Página não encontrada</h1>}
                    />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
