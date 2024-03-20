from fastapi import FastAPI
import base64

app = FastAPI()

def image():
    image_file_path = './sample3.jpg'
    with open(image_file_path, mode='rb') as f:
        image_file = f.read()
    # base64エンコードする
    binary_file_b64 = base64.b64encode(image_file)
    return binary_file_b64

@app.post('/image/')
async def response_image():
    binary_file = image()
    return {"file":binary_file}