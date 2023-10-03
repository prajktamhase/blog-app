import { useParams } from "react-router-dom"
import blog from"./../../config/blog.json";
import { useEffect, useState } from "react";
import "./ReadPost.css";
function ReadPost(){

    const {id} = useParams()

    const [post,setPost]=useState({})

    useEffect(()=>{
        blog.forEach((postObj) =>{
            if(postObj.id==id){
                setPost(postObj)
            } })
    },[id])
        return(
        <div className="blog-flex">
            <div>
            <h1>Read Post{id}</h1>
            <img src={post.img}/>
             <h2 className="text">{post.title} </h2>
                <p className="author">{post.description}</p>
               <p>{post.date}</p>
               </div>
            </div>
    )
}
export default ReadPost