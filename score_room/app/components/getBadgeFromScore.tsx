//スコアとバッジの対応関係の設定をするファイル

const badges_rule = [
    // min_score高い順に入れてください　※今の関数の書き方上、そうしないとこわれる
    {name:"A",color:"lightblue",min_score:80},
    {name:"B",color:"lightgreen",min_score:70},
    {name:"C",color:"lightyellow",min_score:60},
    {name:"D",color:"orange",min_score:40},
    {name:"E",color:"lightpink",min_score:20},
    {name:"F",color:"#f99",min_score:0}
]

function getBadgeFromScore(SCORE){
    for (var i = 0;i<badges_rule.length;i++){
        if (SCORE >= badges_rule[i].min_score){
            return (badges_rule[i])
        }
    }
    return  {name:"-",color:"lightgray"} //条件をみたすバッジがなかった場合
}

export default getBadgeFromScore;