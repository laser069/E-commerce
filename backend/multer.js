const multer = require("multer");
const path = require("path");
const fs = require('fs');

const uploadDir = path.join(__dirname, "uploads"); 


if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0]; 
        const fileExt = path.extname(file.originalname); 
        console.log('File saved to:', path.join(uploadDir, filename));  
        cb(null, filename + uniqueSuffix + fileExt); 
    }
});

const pstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); 
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split('.')[0]; 
        const fileExt = path.extname(file.originalname); 
        cb(null, uniqueSuffix + filename + fileExt);
    }
});

// Multer upload configurations
const pupload = multer({ storage: pstorage });
const upload = multer({ storage: storage });

module.exports = { upload, pupload };
