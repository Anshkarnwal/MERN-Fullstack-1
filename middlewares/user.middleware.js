export const myMiddleware = (req,res,next)=>{
    console.log("my middleware got called at: ", Date.now)
    // res.status(200).send("response sent from middleware")
    next();
}