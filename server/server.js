require("dotenv").config();
const { Configuration: OpenAIConfig, OpenAIApi } = require("openai");

const openaiconfig = new OpenAIConfig({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(openaiconfig);
