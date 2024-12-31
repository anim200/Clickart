const router=require("express").Router();
const User=require("../models/User");
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken");
//Register
router.post("/register",async (req,res)=>{
    console.log(req.body)
    const newUser=new User({
        username:req.body.name,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),

    });
    try{
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);

    }catch(err){
        res.status(500).json(err);
    }

     
})
//Login
router.post("/login", async (req, res) => {
    try {
        
        const user = await User.findOne({ username: req.body.username });
        console.log(user);
        if (!user) {
            return res.status(401).json({ error: "Wrong credentials" });
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        
        
        if (originalpassword !== req.body.password) {
            return res.status(401).json({ error: "Wrong credentials" });
            
        }
        const accessToken =jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin,



        },process.env.JWT_SEC,
        {expiresIn:"3d"}
    
    );
        const { password, ...others } = user._doc; // Convert Mongoose document to plain object

        
    

        // Password and username match, send user data
        res.status(200).json({...others,accessToken});
    } catch (err) {
        // Handle unexpected errors
        console.error("Login error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
