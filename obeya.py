import cv2
from image_utils import load_and_resize_image
from contour_utils import find_obeya_contours
from scoring_utils import calculate_obeya_score
from ranking_utils import rank_obeya_score
from display_utils import display_obeya_score

img_path = "/Users/taketaharashunsuke/Pictures/IMG_7157 2.jpeg"
target_width = 800
target_height = 600

# 画像を読み込み、リサイズする
resized_img = load_and_resize_image(img_path, target_width, target_height)

# OBEYA 輪郭を検出する
obeya_contours = find_obeya_contours(resized_img)

# OBEYA スコアを計算する
score = calculate_obeya_score(obeya_contours)

# OBEYA スコアに基づいてランク付けを行う
rank = rank_obeya_score(score)

# スコアとランクを出力する
print("OBEYA スコア:", score)
print("ランク付け:", rank)

# 画像を表示する
display_obeya_score(resized_img, obeya_contours, score, rank)
