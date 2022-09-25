const express = require("express")
const router = express.Router()


// 2. setup router

router.post("/score", (req, res)=>{
    res.send("hello world")
})

module.exports = router