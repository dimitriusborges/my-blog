import {Route, Routes, useParams} from "react-router-dom";
import posts from 'assets/json/posts.json'
import PostModel from "../../components/PostModel";
import ReactMarkdown from "react-markdown"
import "./Post.css"
import NotFound from "../NotFound";
import DefaultPage from "../../components/DefaultPage";


export default function Post(){
    //react-router-dom hook to capture params passed in the URL
    const param = useParams()

    const post = posts.find((post) => {
        return Number(post.id) === Number(param.id)
    })

    if(!post){
        return (
            <NotFound/>
        )
    }

    return(
        <Routes>
            <Route path="*" element={<DefaultPage/>}>
                <Route index element={
                    <PostModel
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}>

                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModel>
                }/>
            </Route>
        </Routes>
    )
}