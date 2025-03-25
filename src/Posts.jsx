import { use } from "react"
import Post from "./Post";
export default function Posts({ postsPromise }) {
    const posts = use(postsPromise);
    console.log(posts);
    return (
        <div className="card">
            <h4>All posts are here: {posts.length}</h4>

            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}