DIG最終日発表用サイト製作

概要
・ティッカーコードを複数選択して比率を入力すると
　これまでの株価のグラフが表示される。
　表示されたグラフには各ポイントにマウスをあてると
　日付と額が表示される

必要なファイル
index.html メインサイト
style.css　見た目
stock.js 動きを与える

必要な機能
・株価の取得
    データ
        最新がない場合
            事前にpythonでcsvファイルを取得しておく？
        最新がある場合
            javascriptがcsvファイルを読み込む
・ティッカーコードおよび比率の入力フォーム
    htmlのform
        ティッカーコード
        比率
        サブミット
    formからjavascriptに送信
        submitクリックのイベント発生
    datalistでティッカーコードの候補を作成
        javascriptでcsvファイル全体から作る
・グラフ用のデータ作成
    シンボルと比率を取得
・グラフ表示
    方法
        google chartsの折れ線
    各ポイントでの株価の表示

残りの機能