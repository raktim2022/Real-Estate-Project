import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userrouter from './routes/user.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connect to mongodb");
}).catch((err) => {
    console.log(err);
})
const app = express();
app.listen(3000, () => {
    console.log('listening on port 3000');
});


app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/test',userrouter)