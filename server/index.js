import express from 'express'
import cors from 'cors'
const app = express();
const PORT = process.env.PORT ||8000;
import connectToMongo from './config/database.js';
import userRoutes from './routes/user.js'

connectToMongo();

app.use(express.json());

app.use(cors())
app.get("/",(req,res)=>{
    res.send("<h1>Hello Piyush chawla</h1>")
})

app.use("/api/v1",userRoutes);


app.listen(PORT,()=>{
    console.log(` This Server is on http://localhost:${PORT}`)
})