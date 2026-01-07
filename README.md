# 🛡️ PromptGuard

PromptGuard is a **full-stack AI safety system** designed to analyze user prompts and prevent unsafe or unethical requests **before** they reach generative AI models.

It combines **rule-based filtering**, **machine learning risk scoring**, and **explainable decisions** in a clean, production-style architecture.

---

## 🚀 Why PromptGuard?

Recent incidents involving generative AI misuse highlight the need for **pre-generation safety layers**.

PromptGuard focuses on:
- Preventing harmful prompts (e.g., explicit, abusive, exploitative)
- Providing **transparent reasons** for decisions
- Suggesting **safe rewrites** instead of hard blocking when possible

---

## 🧠 How It Works

1. **User enters a prompt**
2. **Rule-based checks** detect explicit violations
3. **ML model** computes a risk score
4. **Decision engine** determines:
   - ✅ SAFE
   - ✏️ REWRITE
   - ❌ BLOCK
5. User receives:
   - Decision
   - Risk score
   - Explanation
   - Suggested rewrite (if applicable)

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS v4
- Dark mode with persistent theme toggle

### Backend
- FastAPI
- Hugging Face Transformers
- Rule-based + ML hybrid logic

---

## 📂 Project Structure
PromptGuard/
├── backend/
│ ├── app.py # FastAPI entry point
│ ├── model.py # ML risk scoring
│ ├── rules.py # Rule-based checks
│ ├── decision.py # Final decision logic
│ └── requirements.txt
├── frontend/
│ └── promptguard-ui/
│ ├── src/
│ ├── index.html
│ ├── tailwind.config.js
│ └── package.json
└── README.md
