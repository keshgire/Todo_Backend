const express=require("express")
const mongoose=require("mongoose")
const url="mongodb+srv://suraj:suraj@cluster0.glwz2f4.mongodb.net/Todo?retryWrites=true&w=majority"

const app=express()

mongoose.connect(url).then((req,res)=>{
    console.log("database is connected")
}).catch((err)=>{
    console.log(err)
})

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine","ejs")

app.use(require("./routes/index"))
app.use(require("./routes/todo"))






app.listen(3000,()=>{
    console.log("server is running at port "+ 3000)
})



//