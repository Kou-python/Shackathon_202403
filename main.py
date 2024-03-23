from fastapi import FastAPI,UploadFile

from analyze.obeya import play

app = FastAPI()

@app.get('/')
async def root():
    return {"message":"Hello World"}

@app.post('/image/')
async def response_image(upload_file: UploadFile):
    # Base64エンコードされたファイルデータを取得

    image = "./analyze/sample.jpg"
    result = play(image)
    return result