from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from base.models import Item
from .serializers import ItemSerializer
"""
@api_view(['GET'])
def getData(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    serializer = ItemSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
"""

class api(APIView):
    renderer_classes = [JSONRenderer]

    def get(self,request):
        items = Item.objects.all()
        serializers = ItemSerializer(items, many=True)
        return Response(serializers.data)
    
    def post(self,request):
        serializers = ItemSerializer(data=request.data)

        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)