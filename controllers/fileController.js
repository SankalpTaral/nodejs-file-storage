
export const uploadImage = (req, res) => {

    // why this condition because multer will not throw error if u dont upload a file in body

    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "File does not exist please select a file",
        });
    }

        const {
        originalname,
        filename,
        mimetype,
        size,
        path
    } = req.file;


    return res.status(201).json({
        success : true,
        message : "File uploaded successfully",
        originalname, // orignal file name
        filename, // what multer you set up u can setup or orignal or unique
        mimetype,
        size,
        path

    })
}
