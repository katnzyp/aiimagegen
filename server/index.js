// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import * as dotenv from 'dotenv';
// import PostRouter from "./routes/Posts.js";
// import GenerateImageRouter from "./routes/GenerateImage.js";
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/post", PostRouter);
// app.use("/api/generateImage",GenerateImageRouter)

// app.get("/", async (req, res) => {
//     res.status(200).json({
//         message: "Hello developers"
//     });
// });

// // Connect to MongoDB using Mongoose
// const startServer = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB");

//         app.listen(8080, () => console.log("Server started on 8080"));
//     } catch (error) {
//         console.error("Failed to connect to MongoDB", error);
//     }
// };

// // Error handling middleware
// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || "Something went wrong";
//     return res.status(status).json({
//         success: false,
//         status,
//         message,
//     });
// });

// startServer();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import PostRouter from "./routes/Posts.js";
import GenerateImageRouter from "./routes/GenerateImage.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Hello developers"
    });
});

// Connect to MongoDB using Mongoose
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        app.listen(8080, () => console.log("Server started on 8080"));
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

// Error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

startServer();

