from django.views.generic import View
from django.http import JsonResponse, response
from django.shortcuts import render
from PowerMon.models import Power
import datetime, pytz, json
from django.core.serializers.json import DjangoJSONEncoder

from bokeh.plotting import figure, output_file, show
from bokeh.embed import components
from bokeh.models import ColumnDataSource, FactorRange
# from bokeh.palettes import d3
from bokeh.transform import factor_cmap
from bokeh.models import DatetimeTickFormatter

#http://127.0.0.1:8080/report/report/


class ReportView(View):
    def get(self, request):
        data = request.GET
        ret={}
        today = datetime.date.today()
        # iterate through all locations in the GET
        ret = Power.objects.filter(reported_time__year=today.year,
                                   reported_time__month=today.month,
                                   reported_time__day=today.day)
        ret = Power.objects.filter(reported_time__year=2017,
                                   reported_time__month=4,
                                   reported_time__day=22)\
            .order_by('-reported_time')[0:10]\
            .values('Vrms','Irms','Irms2', 'Pa', 'reported_time')
        return JsonResponse({'results': json.dumps(list(ret), cls=DjangoJSONEncoder)})


class GraphView(View):
    def get(self, request):
        data = request.GET
        ret = {}
        today = datetime.date.today()
        # iterate through all locations in the GET
        ret = Power.objects.filter(reported_time__year=today.year,
                                   reported_time__month=today.month,
                                   reported_time__day=today.day)
        ret = Power.objects.filter(reported_time__year=2017,
                                   reported_time__month=4,
                                   reported_time__day=22) \
                  .order_by('-reported_time') \
            .values('Vrms', 'Irms', 'Irms2', 'Pa', 'reported_time')
        x = []
        y1 = []
        for i in ret:
            x.append(i['reported_time'])
            y1.append(i['Irms'])
        plot = figure(title='Line Graph', x_axis_label='X Axis', y_axis_label='Y Axis', plot_width=1200, plot_height=1600)
        xformatter = DatetimeTickFormatter(
           minutes=['%M %h %a %b %Y'], hours=['%h %a %b %Y'], days=['%a %b %Y'], months=["%b %Y"], years=["%Y"])
        plot.xaxis.formatter = xformatter
        plot.line(x, y1, line_width=2)
        script, div = components(plot)
        return render(request, template_name='base.html', context={'script': script, 'div': div})