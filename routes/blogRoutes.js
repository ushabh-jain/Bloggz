const express = require("express");
const { getAllBlogsController, createBlogController, updateblogController, getBlogByidController, deleteBlogController } = require("../controllers/blogController");

// router object

const router = express.Router();

// routes

// GET|| allblogs

router.get("/all-blog", getAllBlogsController);

// POST || create blog
router.post("/create-blog", createBlogController);

// PUT || update blog
router.put("/update-blog/:id", updateblogController);

// GET || single blog details
router.get("/get-blog/:id", getBlogByidController);

// DELETE || delete blog
router.delete("/delete-blog/:id", deleteBlogController);

module.exports = router;
