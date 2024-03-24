
from PIL import Image
import io

async def read(upload_file):
    # アップロードされたファイルが画像かどうかを確認
    if upload_file.content_type.startswith("image/"):
         # アップロードされたファイルのデータを読み取り
        contents = await upload_file.read()
            
            # バイナリデータからPILのImageオブジェクトを作成
        image = Image.open(io.BytesIO(contents))

        return image
            
