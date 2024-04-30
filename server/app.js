import OpenAI from "openai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/", async (request, response) => {
  const { allMessages } = request.body;

  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are Daniel, a doctor from Romania!",
      },
      ...allMessages,
    ],
  });

  response.json({
    output: result.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
