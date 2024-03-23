import base64

def b64_image(image_data):
    # 読み取ったファイルデータをBase64エンコードする
    binary_file_b64 = base64.b64encode(image_data)
    # Base64エンコードされたデータを返す
    return binary_file_b64