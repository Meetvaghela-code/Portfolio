import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Serve static files from the Vite build directory (dist)
app.use(express.static(path.join(__dirname, 'dist')));

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Send to your own email address
    subject: `Portfolio Contact: ${subject}`,
    text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h4>Message:</h4>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
});

// Secure Groq API Route
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    // If API key is not configured, fall back to a polite system message
    return res.json({ 
      text: "Developer note: The Groq API key is not configured on the server. Please set the GROQ_API_KEY environment variable in your deployment dashboard." 
    });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `You are Meet Vaghela's AI assistant inside an interactive terminal widget on his portfolio. 
            Here is Meet's background information:
            - About: AI/ML Engineer with 6 months of industry internship experience. He builds production-ready intelligent systems, agentic workflows, and RAG pipelines.
            - Skills: Python, LangChain, LangGraph, FastAPI, Flask, React.js, Docker, Git, N8N. Core focus on autonomous agents, deep learning, computer vision, and NLP.
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

    const data = await response.json();
    if (data.choices && data.choices[0] && data.choices[0].message) {
      res.json({ text: data.choices[0].message.content });
    } else {
      res.status(500).json({ error: "Invalid response from Groq." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to communicate with Groq API." });
  }
});

// All other requests serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
