from analyze.utils.image_utils import load_and_resize_image
from analyze.utils.contour_utils import find_obeya_contours
from analyze.utils.scoring_utils import calculate_obeya_score
from analyze.utils.ranking_utils import rank_obeya_score
from analyze.utils.display_utils import display_obeya_score
from analyze.utils.split_utils import split_image
from analyze.utils.synthesis_utils import merge_images

target_width = 1000
target_height = 600

# 画像を読み込み、リサイズする
def play(img):
    print(img)
    resized_img = load_and_resize_image(img, target_width, target_height)

    #画像の分割
    split_images = split_image(resized_img,rows=8,cols=8)

    #分割画像のスコア出し
    for sub_image in split_images:
        # OBEYA 輪郭を検出する
        sub_contours = find_obeya_contours(sub_image)

        # OBEYA スコアを計算する
        sub_score = calculate_obeya_score(sub_contours)
        print(sub_score)

    #分割画像を再構築
    image = merge_images(split_images,rows=8,cols=8)

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

    return result

play("./samole.jpg")