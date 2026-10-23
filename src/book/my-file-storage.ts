import fs from "fs";
import multer from "multer";

const storage = multer.diskStorage({
    destination(req, file, callback) {
        try {
            fs.mkdirSync('uploads');
        } catch (e) { }
        callback(null, 'uploads');
    },
    filename(req, file, callback) {
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9) + '_' + file.originalname;
        callback(null, uniqueSuffix);
    },
})

export { storage }