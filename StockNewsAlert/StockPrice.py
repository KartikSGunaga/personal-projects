import requests, json

class StockPrice:
    def __init__(self):
        self.apiKey = "GKVHKSQLNNS81TBQ"
        self.url = f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=compact&apikey={self.apiKey}"