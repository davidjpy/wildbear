import requests
from bs4 import BeautifulSoup
import pandas as pd

base_url = 'https://www.rei.com/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
}

page_links = [
    'https://www.rei.com/c/hiking-backpacks?pagesize=90',
    'https://www.rei.com/c/tents?pagesize=90',
    'https://www.rei.com/c/sleeping-bags-and-accessories?pagesize=90',
    'https://www.rei.com/c/camp-kitchen?pagesize=90',
    'https://www.rei.com/c/camp-furniture?pagesize=90',
    'https://www.rei.com/c/water-bottles-and-treatment?pagesize=90',
    'https://www.rei.com/c/gadgets?pagesize=90',
    'https://www.rei.com/c/hiking-clothing?pagesize=90',
    'https://www.rei.com/c/hiking-footwear?pagesize=90'
]

page_categories = [
    'hiking-backpacks',
    'tents',
    'sleeping-bags-and-accessories',
    'camp-kitchen',
    'camp-furniture',
    'water-bottles-and-treatment',
    'gadgets',
    'hiking-clothing',
    'hiking-footwear'
]

for category in page_categories:
    
    product_links = []
    product_lists = []
    
    r = requests.get(f'https://www.rei.com/c/{category}?pagesize=90')
    soup = BeautifulSoup(r.content, 'lxml')
    productlist = soup.find_all('li', class_='pPe0GNuagvmEFURs1Q_vm')

    for item in productlist:
        
        for link in item.find_all('a', {'class': '_1A-arB0CEJjk5iTZIRpjPs _1K5N3WSl_8ywawYr0tzSgT'}, href=True):
            product_links.append(base_url + link['href'][1:])
                
    for link in product_links:
        
        try:
            feature_list = []
            
            r =                     requests.get(link, headers=headers)
            soup =                  BeautifulSoup(r.content, 'lxml')
            title =                 soup.find('h1', class_='product-title product-header__product-title').text.strip()
            brand =                 soup.find('a', attrs={'class':'cdr-link_11-3-1', 'id': 'product-brand-link'}).text.strip()
            price =                 soup.find('span', class_='price-value').text.strip()
            description =           soup.find('p', class_='product-description__text').text.strip()
            rating =                soup.find('span', class_='cdr-rating__number_11-3-1').text.strip()
            image =                 soup.find('img', class_='generic-media__img')['src']
            unordered_feature =     soup.find_all('ul', class_='product-features__list cdr-list_11-3-1 cdr-list--unordered_11-3-1')
            
            for item in unordered_feature:
                new_soup = BeautifulSoup(str(item), 'html.parser')
                lis = new_soup.find_all('li')
                
                for li in lis:
                    feature_list.append(li.text.strip())
            
            feature =               feature_list
            
            product_details = {
                'title': title,
                'brand': brand,
                'price': price,
                'description': description,
                'rating': rating,
                'image': base_url + image[1:],
                'feature': feature_list
            }
            
            product_lists.append(product_details)
            print(f'Adding {title}')
            
        except:
            print('Unable to locate the product')
            pass
        

    df = pd.DataFrame(product_lists)
    df.to_csv(f'{category}.csv', index=False)
    print(f'Creating {category}.csv')
