// import express from "express";
// import { generateImage } from  "../controllers/GenerateAIImage.js";
// import { generateImage } from "../controllers/GenerateAIImage";
// import { generateImage } from "../controllers/generate.js";
// import generateImage from "../controllers/generate.js"


// const router = express.Router();

// router.post("/", generateImage);

// export default router;

import express from "express";
import generateImage from "../controllers/generate.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        const { prompt } = req.body;
        console.log("Received prompt:", prompt); // Log the received prompt
        const image = await generateImage(prompt);
        res.status(200).json({ photo: image });
    } catch (error) {
        console.error("Error in route handler:", error);
        next(error);
    }
});

export default router;
