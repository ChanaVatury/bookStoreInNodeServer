const bookController=require ("../controllers/bookController")
const express = require("express")
const router = express.Router()
const Book =require("../models/Book")
router.post("/",bookController.CreateBook)
router.get("/",bookController.getBooks)
router.put("/",bookController.updateBook)
router.delete("/",bookController.deleteBook)
router.get("/:type",bookController.getBooksByType)
module.exports=router