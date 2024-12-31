const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require('dotenv');
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const cartRoute=require("./routes/cart");
const orderRoute=require("./routes/order");
const cors=require("cors");
const stripeRoute=require("./routes/stripe");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const uploadImgur = require("./routes/uploadImgur");




dotenv.config();
const port = process.env.PORT || 5000;
const allowedOrigins = [
  "https://clickart-admin.vercel.app"

];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true); // Allow the origin
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB database connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);  // Exit the process if DB connection fails
  }
};
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);
app.use("/productUpload", express.static(path.join(__dirname, "public/productUpload"))); // Serve uploaded images

// Configure Multer for image uploads


app.use("/api/upload-imgur", uploadImgur);
app.get('/', (req, res) => {
  res.send('App is working');
});





const startServer = async () => {
  await connect(); // Ensure database connection is established
  app.listen(port, () => {
    console.log(port);
  });
};

startServer();



