const mongoose = require("mongoose");
const blogModel = require('../models/blogModel')
const userModel = require("../models/userModel");

// GET ALL BlOGS 
exports.getAllBlogsController = async(req,res) =>{
    try {
        const blogs = await blogModel.find({}).populate("user");

        if(!blogs){
            return res.status(200).send({
                success: false,
                message: "No Blogs Found",
              });
        }
        return res.status(200).send({
            success: true,
            BlogCount: blogs.length,
            message: "All Blogs lists",
            blogs,
          });
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message:"Error while getting Blogs",
            error
        })
        
    }
}

// CREATE BLOGS
exports.createBlogController = async(req,res) =>{
    try {

        const {title,description,image, userId} = req.body
        if(!title||!description||!image||!userId){
            return res.status(400).send({
                success: false,
                message: "Please Provide ALl Fields",
            }); 
        }
        const existingUser = await userModel.findById(userId)
        if(!existingUser){
            return res.status(404).send({
                success:false,
                message:'unable to find user'
            })
        }
        const newBlog = new blogModel({title,description,image, user : userId});
        // const session = await mongoose.startSession()
        // session.startTransaction()
        // await newBlog.save({session})
        existingUser.blogs.push(newBlog)
        // await existingUser.save({session})
        // await session.commitTransaction()
        await newBlog.save();
        return res.status(201).send({
            success: true,
            message: "Blog Created!",
            newBlog,
        });

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            message: "Error While Creating blog",
            error,
        });
        
    }
};

// update Blog
exports.updateblogController = async(req,res)=>{
    try {
        const {id} = req.params
        const {title,description,image} = req.body
        const blog = await blogModel.findByIdAndUpdate(id,{...req.body},{new:true})
        return res.status(200).send({
            success: true,
            message: "Blog Updated!",
            blog,  
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            message: "Error WHile Updating Blog",
            error,
        })
        
    }
}

// single blog
exports.getBlogByidController = async(req,res)=>{
  
}

// delete blog
exports.deleteBlogController = async(req,res) =>{
    try {
        const blog = await blogModel
          // .findOneAndDelete(req.params.id)
          .findByIdAndDelete(req.params.id)
          .populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
        return res.status(200).send({
          success: true,
          message: "Blog Deleted!",
        });
      } catch (error) {
        console.log(error);
        return res.status(400).send({
          success: false,
          message: "Erorr WHile Deleteing BLog",
          error,
        });
      }
};

// GET user blog
exports.userBlogController = async(req,res) =>{
    try {
        const userBlog = await userModel.findById(req.params.id).populate('blogs');
        if (!userBlog) {
            return res.status(404).send({
              success: false,
              message: "blogs not found with this id",
            });
          }
          return res.status(200).send({
            success: true,
            message: "user blogs",
            userBlog,
          });
        
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            message: "error in user blog",
            error,
        });
        
    }
};