# CommentPulse 🗣️📊

CommentPulse is an AI-powered web application that analyzes the tone and toxicity of user comments and rewrites them in a more constructive, respectful way. The project leverages **Google Gemini** for natural language understanding and **MongoDB** for storing analysis history.

Built as a hackathon project, CommentPulse demonstrates how **Generative AI can be applied to real-world communication and moderation challenges**.

---

## 🚀 Features

- 🔍 AI-powered comment tone & toxicity analysis  
- ✍️ AI-generated rewritten comments to reduce negativity  
- 🧠 Google Gemini API integration for NLP tasks  
- 💾 MongoDB storage for comment history  
- 🌐 Interactive and simple web interface  

---

## 🧰 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **AI / NLP:** Google Gemini API  
- **Database:** MongoDB  
- **APIs:** RESTful API architecture  

---

## 🧠 How It Works

1. User submits a comment through the web interface  
2. The backend server receives the input  
3. The server calls the **Google Gemini API** to:
   - Analyze tone and toxicity
   - Generate a more constructive rewritten version
4. Results are stored in **MongoDB**  
5. The analyzed output is returned and displayed to the user  

---

## ⬇️ Download & Run the Application

### ✅ Prerequisites

- **Node.js** (v18 or higher recommended)
- **MongoDB** (local or MongoDB Atlas)
- **Google Gemini API key**

---

### 📥 Step 1: Clone the Repository

```bash
git clone https://github.com/yabodetchou/CommentPulse.git
cd CommentPulse
