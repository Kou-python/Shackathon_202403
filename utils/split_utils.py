import cv2
import numpy as np
from collections import deque
from statistics import median
import math

def split_image(image, rows, cols):

    # 画像の高さと幅を取得する
    height, width = image.shape[:2]

    # 分割後の各サブイメージの高さと幅を計算する
    sub_img_height = height // rows
    sub_img_width = width // cols

    # 分割されたイメージを保存するためのリストを作成する
    sub_images = []

    # 画像を行と列に分割する
    for y in range(0, height, sub_img_height):
        for x in range(0, width, sub_img_width):
            # サブイメージを取得する
            sub_image = image[y:y+sub_img_height, x:x+sub_img_width]
            sub_images.append(sub_image)

    #下のはテスト
    # for i, sub_image in enumerate(sub_images):
    #     cv2.imshow(f'Sub Image {i+1}', sub_image)

    # cv2.waitKey(0)
    # cv2.destroyAllWindows()

    return sub_images
    
    

def score_and_color(image, score):
    # スコアに応じて赤みを調整
    if score >= 20:
        alpha_red = 0.8  # 最も強い赤
    elif score >= 15:
        alpha_red = 0.6  # 二番目に強い赤
    elif score >= 10:
        alpha_red = 0.4  # 三番目に強い赤
    elif score >= 5:
        alpha_red = 0.2  # 四番目に強い赤
    else:
        alpha_red = 0  # 五番目に強い赤

    # 赤チャンネルを調整
    red_channel = image[:, :, 2] * (1 + alpha_red*5)  # 赤チャンネルを調整

    # 元の範囲に制限して変換
    red_channel = np.clip(red_channel, 0, 255).astype(np.uint8)

    # 調整された赤チャンネルをマージして新しい画像を作成
    new_image = cv2.merge((image[:, :, 0], image[:, :, 1], red_channel))

    return new_image








    



