from rest_framework import serializers

from .models import Category, Product
      
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id', 
            'category', 
            'title',
            'brand',
            'price', 
            'description', 
            'rating', 
            'image',
            'feature'
        ]
        
class CategorySerializer(serializers.ModelSerializer):
    
    products = ProductSerializer(many=True, read_only=True)
    
    class Meta:
        model = Category
        fields = [
            'name', 
            'products'
        ]