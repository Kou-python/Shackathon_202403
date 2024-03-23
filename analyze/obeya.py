import sys
sys.path.append("C:/Users/yuuta/OneDrive/デスクトップ/hackason")

from analyze.utils.image_utils import load_and_resize_image
from analyze.utils.contour_utils import find_obeya_contours
from analyze.utils.scoring_utils import calculate_obeya_score
from analyze.utils.ranking_utils import rank_obeya_score
from analyze.utils.display_utils import display_obeya_score

from analyze.utils.split.split_utils import split_image
from analyze.utils.split.synthesis_utils import merge_images
from analyze.utils.split.colors_utils import score_and_color

from analyze.utils.base64_utils import b64_image

target_width = 1000
target_height = 600

split_rows = 5
split_cols = 5

# 画像を読み込み、リサイズする
def play(img):
    print(img)
    resized_img = load_and_resize_image(img, target_width, target_height)

    #画像の分割
    split_images = split_image(resized_img,split_rows,split_cols)

    #分割画像のスコア出し
    scores_list = []
    color_images = []
    for sub_image in split_images:
        # OBEYA 輪郭を検出する
        sub_contours = find_obeya_contours(sub_image)

        # OBEYA スコアを計算する
        sub_score = calculate_obeya_score(sub_contours)

        #分割画像のlist
        scores_list.append(sub_score)
        print(scores_list)

        #OBEYA部分の表示
        color_images.append(score_and_color(sub_image,sub_score))

    #分割画像を再構築
    image = merge_images(color_images,split_rows,split_cols)

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
    result = display_obeya_score(image, obeya_contours, score, rank)

    #Base64エンコードする
    b64_result = b64_image(result)

    json = {"image":b64_result,"score":score,"sub_scores":scores_list}

    return json