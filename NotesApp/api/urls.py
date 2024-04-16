from django.urls import path
from . import views

urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    path('scam_prediction/<str:data>', views.getScamPrediction, name="scam_prediction"),
    path('toxic_prediction/<str:data>', views.getToxicPrediction, name="toxic_prediction")
]