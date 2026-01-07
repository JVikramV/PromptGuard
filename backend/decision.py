def final_decision(rule_result, risk_score, category):
    """
    Combines rules + ML risk score.
    Rules always win.
    """

    # Rule-based BLOCK
    if rule_result["decision"] == "BLOCK":
        return {
            **rule_result,
            "risk_score": risk_score,
            "ml_category": category
        }

    # High ML risk → BLOCK
    if risk_score > 0.75:
        return {
            "decision": "BLOCK",
            "reason": f"High ML risk detected ({category})",
            "suggestion": "Use fictional or non-sexual descriptions",
            "risk_score": risk_score,
            "ml_category": category
        }

    # Medium ML risk → REWRITE
    if risk_score > 0.45:
        return {
            "decision": "REWRITE",
            "reason": f"Moderate ML risk detected ({category})",
            "suggestion": "Rewrite prompt in a neutral, artistic manner",
            "risk_score": risk_score,
            "ml_category": category
        }

    # Low risk → SAFE
    return {
        **rule_result,
        "risk_score": risk_score,
        "ml_category": category
    }
