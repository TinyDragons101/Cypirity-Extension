from rest_framework.serializers import ModelSerializer
from .models import Prediction

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Prediction
        fields = '__all__'