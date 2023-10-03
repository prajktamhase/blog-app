
import blog from "./../../config/blog.json";
import "./Post.css";
import PreViewPostCard from "./../../component/PreViewPostCard/PreViewPostCard";
export default function Post() {
    return (
        <>
        <h1>Post</h1>
        <div className="post-card">
            {
                blog.map((post, index) => {
                    return <PreViewPostCard key={index}  img={post.img} title={post.title} description={post.description} />
                })
            }
        </div>
        </>
    )
}
