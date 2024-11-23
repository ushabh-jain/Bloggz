import React, { useState } from "react";
import axios from "axios";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const CreateBlog = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("userId")
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleChange = (e)=>{
    setInputs(prevstate =>({
      ...prevstate,
      [e.target.name]:e.target.value,
    }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/blogs/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Created");
        navigate("/my-blogs");
      }
      
    } catch (error) {
      console.log(error)
      
    }
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        width={"60%"}
        border={3}
        borderRadius={10}
        padding={3}
        margin="auto"
        marginTop={10}
        marginBottom={10}
        boxShadow={"10px 10px 20px #ccc"}
        display="flex"
        flexDirection={"column"}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight="bold"
          padding={3}
          color="gray"
        >
          Create A BLOGZ
        </Typography>
        <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}>
          Title
        </InputLabel>
        <TextField
          name="title"
          value={inputs.title}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}>
          Description
        </InputLabel>
        <TextField
          name="description"
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}>
          Image URL
        </InputLabel>
        <TextField
          name="image"
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <Button type="submit" color="primary" variant="contained">
          SUBMIT
        </Button>
      </Box>
    </form>
  );
};

export default CreateBlog;
