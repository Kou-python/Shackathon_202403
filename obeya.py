from utils.image_utils import load_and_resize_image
from utils.contour_utils import find_obeya_contours
from utils.scoring_utils import calculate_obeya_score
from utils.ranking_utils import rank_obeya_score
from utils.display_utils import display_obeya_score
from utils.split_utils import split_image,score_and_color
from utils.synthesis_utils import merge_images

img_path = "./sample.jpg"
target_width = 800
target_height = 600

# 画像を読み込み、リサイズする
resized_img = load_and_resize_image(img_path, target_width, target_height)

# 画像を64個に分割する
split_images = split_image(resized_img, rows=8, cols=8)

red_sub_images=[]

# 分割された各部分について処理を行う
for sub_image in split_images:
    # OBEYA 輪郭を検出する
    sub_contours = find_obeya_contours(sub_image)

    # OBEYA スコアを計算する
    sub_score = calculate_obeya_score(sub_contours)



    # ランクに基づいて赤みの濃い画像に変換する
    red_sub_image = score_and_color(sub_image, sub_score)
    red_sub_images.append(red_sub_image)
    print(sub_score)

# すべての部分画像をマージして元のサイズの画像に再構築する
image = merge_images(red_sub_images, rows=8, cols=8)

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
display_obeya_score(image, obeya_contours, score, rank)