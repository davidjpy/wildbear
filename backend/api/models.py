from django.db import models

class Category(models.Model):
    name =              models.CharField(max_length=50, primary_key=True, unique=True)
    
    def __str__(self):
        return self.name
        
    
class Product(models.Model):
    category =          models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', to_field='name')
    title =             models.CharField(max_length=50, blank=True, null=True)
    brand =             models.CharField(max_length=50, blank=True, null=True)
    price =             models.FloatField(blank=True, null=True)
    description =       models.TextField(blank=True, null=True)
    rating =            models.FloatField(blank=True, null=True)
    image =             models.URLField(blank=True, null=True)
    feature =           models.TextField(blank=True, null=True)
    
