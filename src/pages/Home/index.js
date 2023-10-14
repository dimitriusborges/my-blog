import styles from "./Home.module.css"

//directly import a JSON file into a list
import posts from 'assets/json/posts.json'
import PostCard from "components/PostCard";

export default function Home(){
    return (
        <ul className={styles.posts}>
            {
                posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))
            }
        </ul>

    )
}