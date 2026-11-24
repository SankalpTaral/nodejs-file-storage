import express from 'express'
import fs from 'fs'
import dotenv from'dotenv'
import { uploadImage } from './controllers/fileController.js';
import upload from './middleware/upload.js';
import multer from 'multer';
dotenv.config();
const app = express();

app.use(express.json());

// check wheter the uploads folder exist or no at start

if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads', { recursive: true });
}


app.post("/upload", upload.single("image"), uploadImage);

// if multer throws any error
app.use((err, req, res, next) => {

    // Check whether the error came from Multer
    if (err instanceof multer.MulterError) {

        return res.status(400).json({
            success: false,
            message: "File upload failed",
            error: err.message,
            code: err.code
        });
    }

    // Handle other errors, including fileFilter errors
    return res.status(400).json({
        success: false,
        message: err.message || "Something went wrong"
    });

});


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
})
