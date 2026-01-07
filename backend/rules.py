BANNED_KEYWORDS = ["nude", "naked", "sex", "explicit"]
AMBIGUOUS_KEYWORDS = ["hot", "sexy", "attractive", "beautiful girl"]

def check_rules(prompt: str):
    prompt_lower = prompt.lower()

    # 1️⃣ BLOCK: Clearly unsafe
    for word in BANNED_KEYWORDS:
        if word in prompt_lower:
            return {
                "decision": "BLOCK",
                "reason": f"Sexual content detected (keyword: '{word}')",
                "suggestion": "Try generating a fictional character or artistic portrait instead."
            }

    # 2️⃣ REWRITE: Ambiguous intent
    for word in AMBIGUOUS_KEYWORDS:
        if word in prompt_lower:
            return {
                "decision": "REWRITE",
                "reason": f"Ambiguous or potentially sexualized term detected (keyword: '{word}')",
                "suggestion": "Rewrite prompt to describe a fictional character in a neutral, artistic style."
            }

    # 3️⃣ SAFE
    return {
        "decision": "SAFE",
        "reason": "No unsafe or ambiguous content detected",
        "suggestion": None
    }



