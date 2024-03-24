from fastapi import FastAPI,UploadFile

from fastapi.middleware.cors import CORSMiddleware

from pymongo import MongoClient
from dotenv import load_dotenv
import os

from analyze.obeya import play
from read_file import read

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

@app.post('/upload/')
async def response_image(upload_file:UploadFile):

    image = await read(upload_file)
    # Base64エンコードされたファイルデータを取得
    print(image)

    result = play(image)
    # data = collection1.insert_one({"score":result["score"],"sub_scores":result["sub_scores"]})
    # print(result)
    # result.pop('_id', None)  # '_id'フィールド（ObjectId）を削除
    print(result)
    return result