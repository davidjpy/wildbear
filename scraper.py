
import requests
from bs4 import BeautifulSoup
import pandas as pd

base_url = 'https://www.rei.com/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
}

product_links = []
backpack_list = []

for page_num in range(1, 4):
    
    r = requests.get(f'https://www.rei.com/c/hiking-backpacks?page={page_num}')
    soup = BeautifulSoup(r.content, 'lxml')
    productlist = soup.find_all('li', class_='pPe0GNuagvmEFURs1Q_vm')

    for item in productlist:
        
        for link in item.find_all('a', {'class': '_1A-arB0CEJjk5iTZIRpjPs _1K5N3WSl_8ywawYr0tzSgT'}, href=True):
            product_links.append(base_url + link['href'][1:])
              
    for link in product_links:
        
        try:
            r = requests.get(link, headers=headers)
            soup = BeautifulSoup(r.content, 'lxml')
            title =              soup.find('h1', class_='product-title product-header__product-title').text.strip()
            price =             soup.find('span', class_='price-value').text.strip()
            description =       soup.find('p', class_='product-description__text').text.strip()
            rating =            soup.find('span', class_='cdr-rating__number_11-3-1').text.strip()
            image =             soup.find('img', class_='generic-image__img')['src']
            
        except:
            pass
        
        backpack = {
            'title': title,
            'price': price,
            'description': description,
            'rating': rating,
            'image': base_url + image[1:]
        }
        
        backpack_list.append(backpack)
        print(f'Adding {title}')

df = pd.DataFrame(backpack_list)
df.to_csv('backpack.csv', index=False)