from .controllers import report
from django.conf.urls import url


urlpatterns = [
    url(r'^report/', report.ReportView.as_view(),                               name='user_report'),
]
