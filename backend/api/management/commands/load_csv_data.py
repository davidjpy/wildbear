from django.core.management import BaseCommand
import csv
import os

from api.models import Category, Product

def get_absolute_path(path):
    absolute_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), path)
    
    return absolute_path

class Command(BaseCommand):
    help = 'Reading data from csv file'
    
    def handle(self, *args, **kwargs):
        
        csv_files = [
            'tents', 
            'camp-furniture', 
            'camp-kitchen', 
            'gadgets', 
            'hiking-backpacks', 
            'hiking-clothing',
            'hiking-footwear',
            'sleeping-bags-and-accessories', 
            'water-bottles-and-treatment'
        ]
        
        for file in csv_files:
            
            foreign_key = Category(
                name = file
            )
            
            print(f'~~~~~~~~~~~~~~ Adding {file} Category ~~~~~~~~~~~~~~')
            
            foreign_key.save()
        
            with open(get_absolute_path(f'../../../../webspider/{file}.csv'), encoding='utf-8') as data_file:
                reader = csv.DictReader(data_file)
                
                for row in reader:

                    product = row['title']
                    price = row['price']
                    
                    for string_replace in (('$', ''), (',', '')):
                        price = price.replace(*string_replace)
                    
                    data = Product(
                        category =          Category.objects.get(name=file),
                        title =             row['title'],
                        price =             price,
                        description =       row['description'],
                        rating =            row['rating'],
                        image =             row['image']
                    )
                    data.save()
                    
                    print(f'Adding {product}')
                    