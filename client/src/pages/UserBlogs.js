import React, { useEffect, useState } from 'react'
import axios from "axios";
import BlogCard from "../components/BlogCard";


const UserBlogs = () => {
    const [blogs,setBlogs] = useState([])
    // getuser blogs
    const getUserBlogs = async()=>{
        try {
            const id = localStorage.getItem("userId");
            const { data } = await axios.get(`/api/v1/blogs/user-blog/${id}`);
            if (data?.success) {
              setBlogs(data?.userBlog.blogs);
            }
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
      getUserBlogs();
    },[]);
  return (
    <div>
        
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={localStorage.getItem('userId')=== blog.user._id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))
      ) : (
        <h1>You Havent Created a blog</h1>
      )}

    </div>
  );
};

export default UserBlogs;