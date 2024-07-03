from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from django.shortcuts import get_object_or_404
from rest_framework import status

from base.models import Registro
from .serializers import RegistroSerializer
"""
@api_view(['GET'])
def getData(request):
    items = Registro.objects.all()
    serializer = RegistroSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    serializer = RegistroSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
"""

class api(APIView):

    def get(self,request):
        items = Registro.objects.all()
        serializers = RegistroSerializer(items, many=True)
        return Response(serializers.data)
    
    def post(self,request):
        serializers = RegistroSerializer(data=request.data)

        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        
class updelview(APIView):
    def put(self,request, pk):
        item = get_object_or_404(Registro, pk=pk)
        serializers = RegistroSerializer(instance = item, data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        
    def delete(self,request,pk):
        item = get_object_or_404(Registro,pk=pk)
        item.delete()
        return Response(status=status.HTTP_202_ACCEPTED)

