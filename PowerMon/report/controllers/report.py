from django.views.generic import View
from django.http import JsonResponse, response
from django.shortcuts import render
from PowerMon.models import Power
import datetime, pytz, json
from django.core.serializers.json import DjangoJSONEncoder

#http://127.0.0.1:8080/report/report/
class ReportView(View):
    def get(self, request):
        data = request.GET
        ret={}
        today = datetime.date.today()
        #iterate through all locations in the GET
        ret = Power.objects.filter(reported_time__year=today.year,
                                   reported_time__month=today.month,
                                   reported_time__day=today.day)\
            .order_by('-reported_time')[0:10]\
            .values('Vrms','Irms','Irms2', 'Pa', 'reported_time')


        #Return JSON
        return JsonResponse({'results': json.dumps(list(ret), cls=DjangoJSONEncoder)})

class GraphView(View):
    def get(self, request):
        return render(request, 'index.html')