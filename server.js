import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai"; 

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const AnalysisSchema = new mongoose.Schema({
  originalText: String,
  tone: String,
  toxicity: String,
  suggestedRewrite: String,
  createdAt: { type: Date, default: Date.now }
});

const Analysis = mongoose.model("Analysis", AnalysisSchema);

app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", //  keep model at 2.5 flash
      contents: `Analyze the following comment. Return JSON ONLY with keys: tone, toxicity, suggestedRewrite. Comment: "${text}"`,
      config: {
        responseMimeType: "application/json", 
        thinkingConfig: { includeThoughts: false } 
      }
    });

    const parsed = JSON.parse(response.text);

    const saved = await Analysis.create({
      originalText: text,
      tone: parsed.tone,
      toxicity: parsed.toxicity,
      suggestedRewrite: parsed.suggestedRewrite
    });

    res.json(saved);
  } catch (err) {
    console.error("Analysis Error:", err);
    res.status(500).json({ error: "Analysis failed", details: err.message });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);