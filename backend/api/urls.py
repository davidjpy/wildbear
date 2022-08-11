from django.urls import path, include
from rest_framework import routers

from .views import CategoryViewset, ProductViewset

router = routers.DefaultRouter()
router.register('category', CategoryViewset)
router.register('product', ProductViewset)

urlpatterns = [
    path('', include(router.urls))
]
