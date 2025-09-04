import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

const API_BASE_URL = "https://d3sgivh2kmd3c8.cloudfront.net";
const API_KEY = "xpectrum-ai@123";

// OpenAI configuration for AI conversation
let openai = null;

// Check if OpenAI API key is available
if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== "your-openai-api-key-here") {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  console.log("✅ OpenAI configured successfully");
} else {
  console.log("⚠️  OpenAI API key not set. AI conversation will not work.");
  console.log("   Set OPENAI_API_KEY environment variable or edit server.js");
}

app.get("/", (req, res) => {
  res.sendFile('./agent.html', { root: process.cwd() });
});

app.post("/generate-token", async (req, res) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tokens/generate?agent_name=pravina`, {
      method: "POST",
      headers: {
        "X-API-Key": API_KEY,
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// AI conversation endpoint
app.post("/chat", async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Check if OpenAI is configured
    if (!openai) {
      return res.status(503).json({ 
        error: "OpenAI not configured. Please set OPENAI_API_KEY environment variable.",
        response: "I'm sorry, but I'm not configured to respond to voice commands right now. Please check the server configuration."
      });
    }

    // Prepare conversation context
    const messages = [
      {
        role: "system",
        content: "You are Pravina, a helpful and friendly AI voice assistant. Keep your responses conversational, concise, and natural for voice interaction. Respond as if you're having a real conversation."
      },
      ...conversationHistory,
      {
        role: "user",
        content: message
      }
    ];

    // Get AI response
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 150,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0].message.content;

    res.json({
      response: aiResponse,
      conversationHistory: [
        ...conversationHistory,
        { role: "user", content: message },
        { role: "assistant", content: aiResponse }
      ]
    });

  } catch (err) {
    console.error("AI Chat Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Request new audio track endpoint
app.post("/request-audio-track", async (req, res) => {
  try {
    const { participant_id, room_name, action } = req.body;
    
    if (!participant_id || !room_name || !action) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    console.log(`🔄 Audio track request: ${action} for ${participant_id} in room ${room_name}`);

    // For now, just log the request
    // In a real implementation, you would call your backend to request a new audio track
    res.json({
      success: true,
      message: "Audio track request received",
      participant_id,
      room_name,
      action
    });

  } catch (err) {
    console.error("Audio Track Request Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Proxy running on http://localhost:3000"));
