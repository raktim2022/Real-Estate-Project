import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userrouter from './routes/user.route.js';
import authrouter from './routes/auth.rout.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connect to mongodb");
}).catch((err) => {
    console.log(err);
})
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('listening on port 3000');
});


app.get('/', (req, res) => {
    res.send('hello world')
})
app.use('/test', userrouter)
app.use('/api/auth',authrouter)