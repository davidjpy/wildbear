import requests
from bs4 import BeautifulSoup

baseurl = 'https://www.rei.com/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
}

productlinks = []

# for x in range(1, 2):

#     r = requests.get(f'https://www.rei.com/c/hiking-backpacks?page={x}')
#     soup = BeautifulSoup(r.content, 'lxml')

#     productlist = soup.find_all('li', class_='pPe0GNuagvmEFURs1Q_vm')

#     for item in productlist:
#         for link in item.find_all('a', href=True):
#             productlinks.append(baseurl + link['href'][1:])
            
# print(productlinks)
            
testlink = 'https://www.rei.com/product/168484/rei-co-op-trail-25-pack-mens/'

r = requests.get(testlink, headers=headers)

soup = BeautifulSoup(r.content, 'lxml')

name = soup.find('h1', class_='product-title product-header__product-title').text.strip()
price = soup.find('span', class_='price-value').text.strip()


print(name, price)
