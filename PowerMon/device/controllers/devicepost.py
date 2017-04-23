from django.views.generic import View
from django.http import JsonResponse, HttpResponse
from PowerMon.models import Power

import json, requests


#http://127.0.0.1:8080/device/post/?Vrms=120.0&Irms=3.13&Irms2=1.414&Pa=1&Preact=2&Preal=3&site="AABBCCDDEEFF"
class DevicePost(View):
    def get(self, request):
        #Note that the SITE parameter is the MAC ID (which can be spoofed - but really?)
        values = request.GET.dict()
        ret = Power.objects.create(**values)

        #Return some over the firewall lines - like query time, report time,
        # Return JSON with the success code.
        return HttpResponse(ret)

    #In case we want to make it a POST later on.
    def post(self, request):
        pass

