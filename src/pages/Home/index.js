import styles from "./Home.module.css"

//directly import a JSON file into a list
import posts from 'assets/json/posts.json'
import Post from "components/Post";

export default function Home(){
    return (
        <ul className={styles.posts}>
            {
                posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))
            }
        </ul>

    )
}