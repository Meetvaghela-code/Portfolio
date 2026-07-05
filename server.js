import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy if the app is behind a load balancer/reverse proxy (e.g., Render, Vercel, Nginx)
// This ensures req.ip gets the real client IP, not the proxy's IP.
app.set('trust proxy', 1);

app.use(express.json());
app.use(cors());

// --- Rate Limiting Configuration ---

// Contact Form Limiter: 5 submissions per hour
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { success: false, error: "You've sent too many messages recently. Please try again later or reach out directly via email." },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    console.warn(`[Rate Limit Exceeded] Contact form IP: ${req.ip}`);
    res.status(429).json(options.message);
  }
});

// Chat Rate Limiter: Strictly max 10 requests per minute
const chatRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: { text: "Wow, you're chatting fast! 🤖 Please take a quick breather for a minute before sending more messages." },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    console.warn(`[Rate Limit Exceeded] Chat API IP: ${req.ip}`);
    // We can return a 429 status code, but we still send {text} so the frontend handles it nicely
    res.status(429).json(options.message);
  }
});

// Serve static files from the Vite build directory (dist)
app.use(express.static(path.join(__dirname, 'dist')));

// Contact Route using Web3Forms (HTTP API)
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Web3Forms access key is missing on the server.' });
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: apiKey,
        name: name,
        email: email,
        subject: `Portfolio Contact: ${subject}`,
        message: message // Web3Forms automatically formats the email beautifully with these fields
      })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } else {
      console.error('Web3Forms error:', data);
      res.status(500).json({ success: false, error: 'Failed to send email via Web3Forms.' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
});

// Secure Groq API Route
app.post('/api/chat', chatRateLimiter, async (req, res) => {
  const { message } = req.body;

  // Request Validation
  if (!message || typeof message !== 'string' || message.trim() === '') {
    return res.json({ text: "Error: Message cannot be empty." });
  }

  if (message.length > 500) {
    return res.json({ text: "Error: Your message is too long! Please keep it under 500 characters." });
  }
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    // If API key is not configured, fall back to a polite system message
    return res.json({
      text: "Developer note: The Groq API key is not configured on the server. Please set the GROQ_API_KEY environment variable in your deployment dashboard."
    });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `You are Meet Vaghela's AI assistant inside an interactive terminal widget on his portfolio. 
            Here is Meet's background information:
            - About: AI/ML Engineer with 6 months of industry internship experience. He builds production-ready intelligent systems, agentic workflows, and RAG pipelines.
            - Skills: Python, LangChain, LangGraph, Crew AI, Autogen, FastAPI, Flask, React.js, Docker, Git, N8N. Core focus on autonomous agents, deep learning, computer vision, and NLP.
            - Location: Vadodara, Gujarat, India.
            - Education: B.Tech in Computer Science from ITM SLS Baroda University (2022 - 2026), CGPA 9.05/10.
            - Experience:
              1. McKH Technologies (AI/ML Intern, Dec 2025 - Apr 2026): Designed autonomous agentic workflows and automated LLM pipelines using FastAPI & N8N.
              2. CodeSoft (ML Intern, July - Aug 2025): Developed and deployed ML/NLP classifiers using Flask.
              3. CodeCraft Infotech (ML Intern, July 2025): Developed pattern recognition and regression models using Scikit-Learn and TensorFlow.
            - Projects:
              1. Apex-Agent: A secure multi-modal autonomous agent framework using MCP sandbox, LangChain, LangGraph, OpenAI, and Pinecone.
              2. Adaptive RAG: Knowledge Graph-enhanced RAG system using LangGraph and Gemini for explainable outputs.
              3. YouTube RAG Chatbot: Video transcript processor and Q&A assistant using FAISS and Gemini.
              4. Webionix Extension: Chrome RAG extension for chatting with active webpage contexts.
              5. AI Doc Assistant: PDF/doc queries via Pinecone vector search.
              6. Healthcare AI: Medical prediction portal (Heart, Diabetes, Lung) using ML classifiers.
              7. Sentiment Analysis: TF-IDF based classifier for tweet feedback.
              8. Gesture Recognizer: Real-time OpenCV & MediaPipe hand gesture computer control.
            - Contact: Email (meetv8540@gmail.com), Github (github.com/Meetvaghela-code), LinkedIn (linkedin.com/in/vaghelameet), Instagram (instagram.com/meett.vaghela).
            - Status: Open for AI/ML Engineer and Data Scientist roles.
            
            Answer any user query creatively, professionally, and matching a terminal console style. Stay on topic and keep responses concise and focused on Meet's career.`
          },
          { role: 'user', content: message }
        ]
      })
    });

    clearTimeout(timeoutId);

    const data = await response.json();
    if (data.choices && data.choices[0] && data.choices[0].message) {
      res.json({ text: data.choices[0].message.content });
    } else {
      console.error('Groq API Error Data:', data);
      res.json({ text: "Error: Received an invalid response from the AI." });
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.warn(`[Timeout] Chat API request timed out for IP: ${req.ip}`);
      return res.json({ text: "Error: The AI took too long to respond. Please try again." });
    }
    console.error('Error communicating with Groq API:', error);
    res.json({ text: "Error: Failed to communicate with the AI service." });
  }
});

// All other requests serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
