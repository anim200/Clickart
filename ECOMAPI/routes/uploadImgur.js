const imgur = require("imgur");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Set up Imgur client ID from environment variables
imgur.setClientId(process.env.IMGUR_CLIENT_ID);

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), "tmp");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const uploadImgur = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://clickart-beta.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
    console.log("imgur reached")
  if (req.method === "POST") {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      try {
        const response = await imgur.uploadFile(req.file.path);
        fs.unlinkSync(req.file.path);
        return res.status(200).json({ url: response.link });
      } catch (error) {
        return res.status(500).json({ error: "Failed to upload to Imgur" });
      }
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

module.exports = uploadImgur;

