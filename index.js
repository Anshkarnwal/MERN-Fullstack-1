import express from 'express';
import UserRoute from './routes/user.routes.js'
import { myMiddleware } from './middlewares/user.middleware.js';

const app = express();


app.use(express.json()); // It is middleware that parses json present in request with header set to application/json. In other words it creates the reqeust.body object.  
app.use(myMiddleware)
app.use('/api/user', UserRoute);

// app.all("*", (req,res)=>{
//     res.status(200).send("Default page!")
// })

app.listen(3000, ()=>{
    console.log("Server is running...")
})

