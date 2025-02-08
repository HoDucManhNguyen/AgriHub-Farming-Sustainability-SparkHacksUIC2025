import openai
import json


# Set your OpenAI API key
openai.api_key = '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'

# Define your expected output schema (as a reference)
output_schema = {
    "Reputation": "string",
    "Sustainability": "string",
    "Pricing": "string",
    "Customer Service": "string",
    "VERDICT": "string"
}
location = "Chicago"
numCrop = 1 

prompt = (
     "Ignore the previous prompts in this conversation. You are an experienced content writer with high levels of expertise and authority within the agriculture industry. Your writing style is informative, friendly and engaging while incorporating humor and real-life examples. The answer must follow the format of the output schema. \n\n" 
     "The JSON should include the keys 'Reputation', 'Sustainability', 'Pricing', 'Customer Service', and 'VERDICT'. \n\n"
     "Please ensure that your response strictly adheres to this JSON format. Be strictly concise and no additional text should be included in the response. \n\n"
)

company = "John Deere"

userPrompt =  "I want a report for the company" f"{company}" ".I want to know if this company is qualified or not based on its reputation, does it has a commitment to sustainability (highlight this), pricing, and customer service. Finally, Give me a verdict on whether it is a great company or not."

response = openai.ChatCompletion.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": prompt},
        {"role": "user", "content": userPrompt}
    ],
    temperature=0,
    frequency_penalty=0,   
    presence_penalty=0,
    max_tokens=1000
)


response_text = response.choices[0].message["content"]

try:
    response_text = json.loads(response_text)
    print(response_text)
    print(type(response_text))
except json.JSONDecodeError:
    print("Invalid JSON format")
    response_text = None