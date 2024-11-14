const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');


dotenv.config();



const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes');
const { default: mongoose } = require('mongoose');

const app = express();



app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(`mongodb://127.0.0.1:27017/userblog`);

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blogs', blogRoutes);


const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`chalda peya on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white)
});

