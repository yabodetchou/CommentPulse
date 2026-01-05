
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


git clone https://github.com/yabodetchou/CommentPulse.git
cd CommentPulse

---

### Step 2: Install Dependencies


npm install

—--

### 🔐 Step 3: Configure Environment Variables
Create a .env file in the root directory and add:
`
GEMINI_API_KEY=your_gemini_api_key_here
MONGODB_URI=your_mongodb_connection_string

—--

### ▶️ Step 4: Start the Server

`
node server.js
Once the server starts, open your browser and navigate to:
http://localhost:3000

—--

### 📸 Demo
Screenshots and a demo video are included in the repository to demonstrate the application workflow and user experience.

—--

### 📚 What I Learned
Integrating Generative AI APIs into production-style applications
Designing end-to-end AI pipelines (input → model → output → persistence)
Managing API keys and environment variables securely
Building a full-stack web application using Node.js and MongoDB

—--

### 🏆 Context
This project was built as part of the Hack for Hackers (MLH) Hackathon, focused on improving online communication through AI-powered moderation.

—--

### 📈 Future Improvements
Sentiment and toxicity score visualization
More granular toxicity categories
User authentication and saved analysis history
Public deployment (Vercel / Render)

—--

### 👤 Author
Yabo Detchou
GitHub: https://github.com/yabodetchou


- Shows it’s a terminal command  
- Helps readers copy-paste easily  
- Standard practice in READMEs  

---

💡 **Best practice for READMEs:**  
- Keep **commands in a code block** (bash/sh)  
- Keep instructions/text **outside the block**  

For example:

```markdown
Step 2: Install dependencies by running:

```bash
npm install


