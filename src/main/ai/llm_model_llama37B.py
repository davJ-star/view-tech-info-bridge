import torch
import requests
from transformers import AutoTokenizer, AutoModelForCausalLM

# Load the pre-trained model
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Meta-Llama-3-8B-Instruct")
model = AutoModelForCausalLM.from_pretrained("meta-llama/Meta-Llama-3-8B-Instruct")
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
model.eval()

# Define the API endpoint
api_url = "https://api.example.com/generate_code"

# Define the prompt to send to the API
prompt = "Write a function that takes two numbers as input and returns their sum."

# Encode the prompt using the model's tokenizer
encoded_prompt = tokenizer(prompt, return_tensors="pt").to(device)

# Generate code from the prompt using the API
response = requests.post(api_url, json={"input": encoded_prompt})
generated_code = response.json()["output"]

# Decode the generated code using the model's tokenizer
decoded_code = tokenizer.decode(generated_code.squeeze(0))

# Print the generated code
print(decoded_code)
