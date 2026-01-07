from fastapi import FastAPI
from pydantic import BaseModel
from rules import check_rules
from model import get_risk_score
from decision import final_decision
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PromptRequest(BaseModel):
    prompt: str

@app.post("/analyze")
def analyze_prompt(data: PromptRequest):
    rule_result = check_rules(data.prompt)
    risk_score, category = get_risk_score(data.prompt)

    final_result = final_decision(rule_result, risk_score, category)

    return {
        "prompt": data.prompt,
        **final_result
    }


