from bokeh.plotting import figure, output_file, show
from bokeh.embed import components
from django.views.generic import View
from django.http import JsonResponse, response
from django.shortcuts import render
from PowerMon.models import Power
import datetime, pytz, json
from django.core.serializers.json import DjangoJSONEncoder


# http://127.0.0.1:8080/report/report/


class ReportView(View):
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
                  .order_by('-reported_time')[0:10] \
            .values('Vrms', 'Irms', 'Irms2', 'Pa', 'reported_time')
        return JsonResponse({'results': json.dumps(list(ret), cls=DjangoJSONEncoder)})


class GraphView(View):
    def get(self, request):
        x = [1, 2, 3, 4, 5]
        y = [1, 2, 3, 4, 5]
        plot = figure(title='Line Graph', x_axis_label='X Axis', y_axis_label='Y Axis', plot_width=400, plot_height=400)
        plot.line(x, y, line_width=2)
        script, div = components(plot)
        return render(request, template_name='base.html', context={'script': script, 'div': div})
