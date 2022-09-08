import pandas as pd
import pandas_datareader.data as web
import matplotlib.pyplot as plt
import mplfinance as mpf
import datetime

#ティッカー
ticker="2914.JP"

#期間
end = datetime.datetime.today()
start='2015-01-01'

#データ取得
df=web.DataReader(ticker, "stooq",start,end).dropna()
df.sort_index(ascending=True,inplace=True)

#ダウンサンプリング
df=df.resample('W').agg({'Open': 'first', 'High': 'max', 'Low': 'min', 'Close': 'last','Volume':'sum'})

#グラフ表示
mpf.plot(df, type='candle', volume=True, mav=(5,13,26), style='charles')