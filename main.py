from fastapi import FastAPI,UploadFile

from fastapi.middleware.cors import CORSMiddleware

from pymongo import MongoClient
from dotenv import load_dotenv
import os

from analyze.obeya import play

app = FastAPI()


load_dotenv()
uri = os.getenv("MONGO_URL")
client = MongoClient(uri)
db = client["Vol2Hack"]
collection1 = db["score"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # すべてのオリジンからのリクエストを許可
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # 許可するHTTPメソッド
    allow_headers=["*"],  # すべてのヘッダーを許可
)



@app.get('/')
async def root():
    return {"message":"Hello World"}

@app.post('/image/')

async def response_image(sample:str):



    # Base64エンコードされたファイルデータを取得

    image = "./analyze/sample.jpg"
    result = play(image)

    collection1.insert_one(result)

    return result