const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");

const Order = require("../models/Order");




const router=require("express").Router();
//create order
router.post("/",async (req,res)=>{
    console.log("router reached")
    
    const newOrder = new Order(req.body)
    try{
        const savedOrder= await newOrder.save();
        res.status(200).json(savedOrder);

    }catch(err){
        res.status(500).json(err);
    }
})
//update
router.put("/:id",verifyTokenAndAdmin,async (req,res)=>{
  
    try{
        const updatedOrder = await  Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }

    
})
//delete
router.delete("/:id",verifyTokenAndAdmin, async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Product  has been deleted....")

    }catch(err){
        res.status(500).json(err)
    }

});
//GET userorders
router.get("/find/:userId",verifyTokenAndAuthorization,async (req,res)=>{
    try{
       const orders= await Ordder.find({userId: req.params.userId});
        
        res.status(200).json(orders);

    }catch(err){
        res.status(500).json(err)
    }

});


//get all orders
router.get("/",async (req,res)=>{
    try{
        const carts = await Order.find();
        res.status(200).json(carts);

    }catch(err){
        res.status(500).json(err)
    }

})

//get monthly income
const { ObjectId } = require("mongodb");

router.get("/income", async (req, res) => {
    console.log("Router reached income");
    const productId = req.query.pid ? new ObjectId(req.query.pid) : null;
    console.log("Product ID:", productId);

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
    console.log("Last Month:", lastMonth);
    console.log("Previous Month:", prevMonth);

    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: prevMonth },
                    ...(productId && {
                        products: { $elemMatch: { _id: productId } }, // Corrected field name and type
                    }),
                },
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        console.log("Income Data:", income);
        res.status(200).json(income);
    } catch (err) {
        console.error("Error fetching income:", err);
        res.status(500).json(err);
    }
});


module.exports=router;