from rest_framework import viewsets

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

class CategoryViewset(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    
class ProductViewset(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()