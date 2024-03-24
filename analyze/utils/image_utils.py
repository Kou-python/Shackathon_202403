import cv2
import numpy as np

def load_and_resize_image(image, target_width, target_height):
    # PIL画像をnumpy配列に変換
    image_array = np.array(image)
    # RGBからBGRに変換（OpenCVではBGRを使用するため）
    image_array = cv2.cvtColor(image_array, cv2.COLOR_RGB2BGR)
    # 画像をリサイズする
    resized_img = cv2.resize(image_array, (target_width, target_height))
    return resized_img