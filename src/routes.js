import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";
import Footnote from "./components/Footnote"
import Post from "./pages/Post"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import NotFound from "./pages/NotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                {/*nested routes*/}
                <Route
                    path="/"
                    element={<DefaultPage/>}>

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
                    path="posts/:id/*"
                    element={<Post/>}/> {/* `:<_name>` indicates route parameter, which is a value to be captured or used*/}

                <Route
                    path="*"
                    element={<NotFound/>}
                    />
            </Routes>
            <Footnote/>
        </BrowserRouter>
    )
}

export default AppRoutes;
