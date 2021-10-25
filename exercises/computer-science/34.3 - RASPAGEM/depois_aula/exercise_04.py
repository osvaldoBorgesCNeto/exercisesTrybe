import requests
from parsel import Selector


response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
selector = Selector(text=response.text)


title = selector.css(".product_main h1::text").get()
price = selector.css(".price_color::text").re_first(r"\d+\.\d{2}")
description = selector.css("#product_description ~ p::text").get()
image = selector.css(".active img::attr(src)").get()
url_image = "http://books.toscrape.com/catalogue/" + image
stock = selector.css(".product_main .availability::text").re_first('\d')

print(title, price, description, url_image, stock, sep=",")
