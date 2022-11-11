import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
const PostNav = (name) => {
  return (
    <div style={{width:"100%",backgroundColor:"grey",height:"60px"}}>
     <span style={{paddingTop:""}}><Link to={name}><AiOutlineArrowLeft style={{marginLeft:"3%",height:"100%",fontSize:"30px",}} /></Link> </span>  
    </div>
  )
}

export default PostNav