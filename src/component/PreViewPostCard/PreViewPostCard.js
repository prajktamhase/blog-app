import "./PreViewPostCard.css";
import { Link } from "react-router-dom";

 export default function PreViewPostCard({id,img,title,description,date}){
    return(
        <div className="post">
                <p>{id}</p>
                <img src={img}/>
                <h2 className="text">{title} </h2>
                <p className="author">By {description}</p>
                <p>{date}</p>
                <Link to ={`/post/read/${id}`} className="btn-blog">Read More</Link>
        </div>

    )
}