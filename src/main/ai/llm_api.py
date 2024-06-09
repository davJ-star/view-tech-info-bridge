import json
import google.generativeai as genai


# from dotenv import load_dotenv
# import os

# # .env 파일 활성화
# load_dotenv()

# SERVICE_KEY = os.getenv('SERVICE_KEY')
# SECURITY WARNING: keep the secret key used in production secret!
with open("../../../secrets.json") as f:
    secrets = json.loads(f.read())
    
SECRET_KEY = secrets['Secret_key']

#GOOGLE_API_KEY = "AIzaSyCv9Eqc_l9Ue8bs09jPUB_PR3D85HxDZnQ"
GOOGLE_API_KEY = SECRET_KEY
genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-pro')

response = model.generate_content("중세시대 배경에서 의사의 삶에 대해 작성해줘.")

print(response.text)
