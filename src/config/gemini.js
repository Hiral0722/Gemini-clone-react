
// const apikey = "AIzaSyBo5URFHryrsFJLsn7O__KPCbUsuRyz28I";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"

// const apiKey = process.env.GEMINI_API_KEY;
// const apiKey = import.meta.env.VITE_GEMINI_API_KEY;



const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY is not defined. Check your .env file.");
}

console.log("API Key Loaded Successfully:", apiKey);

const genAI = new GoogleGenerativeAI(apiKey);



const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    // return response.text();
    return result.response.text();
}

export default run;