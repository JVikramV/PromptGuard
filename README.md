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
## 📸 Screenshots

### 🧠 Prompt Analysis Interface
<img width="1919" height="976" alt="image" src="https://github.com/user-attachments/assets/1ed45fc4-a3e7-48ad-8168-ccfe92b5a94c" />


### ❌ Blocked Prompt Example
<img width="1919" height="964" alt="image" src="https://github.com/user-attachments/assets/39424bd5-a6f0-4307-86cd-a4fc273708c6" />


### ✏️ Rewrite Suggestion Example
<img width="1915" height="867" alt="image" src="https://github.com/user-attachments/assets/60cff99f-07d5-4c10-9499-2e403831ea7a" />
### ✅Safe Prompt Example
<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/73de180d-8398-4186-ba1d-5a17868b2312" />




---

## ⚙️ Run Locally

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --reload
cd frontend/promptguard-ui
npm install
npm run dev

