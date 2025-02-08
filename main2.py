import openai
import json

# Set your OpenAI API key
openai.api_key = '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'

# Define your expected output schema (as a reference)
output_schema = {
    "location": "string",
    "recommended_crops": [
        {
            "name": {
                "common": "string",
                "scientific": "string"
            },
            "description": "string",
            "reasoning": "string",
            "farming_advice": {
                "seasons": "string",
                "fertilizer_use": "string",
                "pesticide_use": "string",
                "challenges": "string",
                "estimated_costs": "string"
            },
            "startup_resources": {
                "seeding": "string",
                "irrigation_systems": "string",
                "fertilizers_and_pest_controls": "string",
                "soil_testing": "string"
            },
            "service_providers": {
                "seed_supplier": "string",
                "irrigation_systems": "string",
                "fertilizers_and_pest_controls": "string",
                "soil_testing": "string"
            }
        }
    ]
}
location = "Chicago"
# Create the prompt with clear instructions and include the JSON schema as a guide
prompt = (
    "Ignore the previous prompts in this conversation. You are an experienced content writer with high levels of expertise and authority within the agriculture industry. Your writing style is informative, friendly and engaging while incorporating humor and real-life examples. Provide detailed two crop recommendation in" f"{location}" "the following JSON format."
    "The JSON should include the keys 'location' and 'recommended_crops', where 'recommended_crops' is a list "
    "of crop objects. Each crop object should have the following structure:\n\n"
    f"{json.dumps(output_schema, indent=2)}\n\n"
    "Please ensure that your response strictly adheres to this JSON format."
)

# Make the API call
response = openai.ChatCompletion.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": prompt}
    ],
    temperature=0  # Lower temperature for more deterministic output
)

# Extract the content from the response
response_text = response['choices'][0]['message']['content']

# Try to parse the response as JSON
try:
    structured_output = json.loads(response_text)
    print("Structured Output:")
    print(json.dumps(structured_output, indent=2))
except json.JSONDecodeError as e:
    print("Failed to parse JSON. Response text:")
    print(response_text)
