import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Blogs = () => {
  const[blogs,setBlogs] = useState([]);

  // getblogs
  const getAllBlogs = async() => {
    try {
      const{data} = await axios.get('/api/v1/blog/all-blog')
      if(data?.success){
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getAllBlogs();
  },[]);
  return (
    <div>Blogs</div>
  )
}

export default Blogs