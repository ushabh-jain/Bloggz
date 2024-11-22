import React, { useState } from 'react'
import {} from '@mui/material'




const CreateBlog = () => {
    const [inputs,setInputs] = useState({
        title:'',
        description:'',
        image:''
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(inputs)
    }
  return (
    <form>
        
    </form>
  )
}

export default CreateBlog