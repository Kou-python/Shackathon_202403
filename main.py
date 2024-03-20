from fastapi import FastAPI,UploadFile,File
import base64

app = FastAPI()

def b64_image(upload_file):
    # アップロードされたファイルのデータを読み取る
    image_data = upload_file.file.read()
    # 読み取ったファイルデータをBase64エンコードする
    binary_file_b64 = base64.b64encode(image_data)
    # Base64エンコードされたデータを返す
    return binary_file_b64


@app.post('/image/')
async def response_image(upload_file: UploadFile = File(...)):
    # Base64エンコードされたファイルデータを取得
    binary_file = b64_image(upload_file)
    return {"file":binary_file}