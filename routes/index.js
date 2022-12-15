const router=require("express").Router()
const Todo=require("../modules/Todo")


router.get("/",async (req,res)=>{
    const allTodo= await Todo.find()

    res.render("index",{todo:allTodo})
})





module.exports=router