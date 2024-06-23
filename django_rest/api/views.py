from rest_framework.response import Response
from rest_framework.decorators import api_view

@login_required
@api_view(['GET'])
def getData(request):
    person = {'name':'Douglas', 'age':25}
    return Response(person)
