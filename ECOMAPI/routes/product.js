const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const User=require("../models/User");
const Product = require("../models/Product");


const router=require("express").Router();
//create 
router.post("/",async (req,res)=>{
    console.log(req.body)
    console.log("product route reached")
    const newProduct = new Product(req.body)
    try{
        const savedProduct= await newProduct.save();
        res.status(200).json(savedProduct);

    }catch(err){
        res.status(500).json(err);
    }
})
//update
router.put("/:id",verifyTokenAndAdmin,async (req,res)=>{
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(user.password, process.env.PASS_SEC).toString();

        
    }
    try{
        const updatedProduct = await  Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err);
    }

    
})
//delete
router.delete("/:id", async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product  has been deleted....")

    }catch(err){
        res.status(500).json(err)
    }

});
//GET Product
router.get("/find/:id",async (req,res)=>{
    try{
       console.log(req.params.id)
       const product= await Product.findById(req.params.id);
        
        res.status(200).json(product);

    }catch(err){
        res.status(500).json(err)
    }

});

router.get("/",async (req,res)=>{
    const qNew=req.query.new;
    const qCategory=req.query.category;
    console.log(qCategory,qNew);
    
    try{
        let products;

       if(qNew){
         products = await Product.find().sort({createdAt:-1}).limit(1)
       }else if(qCategory){
        console.log(qCategory)
         products = await Product.find({categories:{
            $in : [qCategory],
         }})
         console.log(products)
       }
       else{
        products=await Product.find();
       }
        
        res.status(200).json(products);

    }catch(err){
        res.status(500).json(err)
    }

});
//get user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await User.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastYear }
                }
            },
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports=router;