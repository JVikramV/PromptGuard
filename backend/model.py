from transformers import pipeline

# Zero-shot classifier for moderation-style reasoning
classifier = pipeline(
    "zero-shot-classification",
    model="facebook/bart-large-mnli"
)

UNSAFE_CATEGORIES = [
    "sexual content",
    "nudity",
    "pornography",
    "explicit imagery",
    "non-consensual content"
]

def get_risk_score(prompt: str):
    """
    Returns:
    - risk_score: float (0 to 1)
    - top_category: str
    """

    result = classifier(prompt, UNSAFE_CATEGORIES)

    scores = result["scores"]
    labels = result["labels"]

    # Highest risk category
    max_score = max(scores)
    top_category = labels[scores.index(max_score)]

    return round(max_score, 3), top_category

