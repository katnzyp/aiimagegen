// import * as dotenv from "dotenv";
// import { createError } from "../error.js";
// import { Configuration, OpenAIApi } from "openai";

// dotenv.config();

// // Setup open ai api key
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // Controller to generate Image

// export const generateImage = async (req, res, next) => {
//   try {
//     const { prompt } = req.body;

//     const response = await openai.createImage({
//       prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });
//     const generatedImage = response.data.data[0].b64_json;
//     return res.status(200).json({ photo: generatedImage });
//   } catch (error) {
//     next(
//       createError(
//         error.status,
//         error?.response?.data?.error?.message || error?.message
//       )
//     );
//   }
// };

// import * as dotenv from "dotenv";
// import { createError } from "../error.js";
// import OpenAI from "openai";

// dotenv.config();

// // Setup OpenAI API key
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// console.log("OpenAI API Key:", process.env.OPENAI_API_KEY); // Log the API key to verify it's loaded

// // Controller to generate Image
// export const generateImage = async (req, res, next) => {
//   try {
//     const { prompt } = req.body;
//     console.log("Received prompt:", prompt); // Log the received prompt

//     const response = await openai.images.generate({
//       prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });
//     console.log("OpenAI response:", response); // Log the response from OpenAI

//     const generatedImage = response.data[0].b64_json;
//     return res.status(200).json({ photo: generatedImage });
//   } catch (error) {
//     console.error("Error generating image:", error); // Log the error
//     next(
//       createError(
//         error.status || 500,
//         error?.response?.data?.error?.message || error?.message
//       )
//     );
//   }
// };

// import * as dotenv from "dotenv";
// import axios from "axios";

// dotenv.config();

// const apiKey = process.env.AZURE_OPENAI_API_KEY;
// const endpoint = process.env.AZURE_OPENAI_ENDPOINT;

// async function generateImage(prompt) {
//   try {
//     const response = await axios.post(
//       `${endpoint}/openai/images/generate`,
//       {
//         prompt,
//         n: 1,
//         size: "1024x1024",
//         response_format: "b64_json",
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     return response.data[0].b64_json;
//   } catch (error) {
//     console.error('Error generating image:', error);
//     throw error;
//   }
// }

// export default generateImage;
import * as dotenv from "dotenv";
import axios from "axios";
import https from "https"; // Use import instead of require

dotenv.config();

const apiKey = process.env.AZURE_OPENAI_API_KEY;
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;

async function generateImage(prompt) {
  try {
    console.log("Generating image with prompt:", prompt); // Log the prompt
    const response = await axios.post(
      `${endpoint}/openai/images/generate`,
      {
        prompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        httpsAgent: new https.Agent({ rejectUnauthorized: false }) // Disable SSL verification
      }
    );
    console.log("Response from Azure OpenAI:", response.data); // Log the response
    return response.data[0].b64_json;
  } catch (error) {
    console.error('Error generating image:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export default generateImage;
