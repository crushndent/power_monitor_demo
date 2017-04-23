from .controllers import devicepost
from django.conf.urls import url


urlpatterns = [
    url(r'^post/', devicepost.DevicePost.as_view(), name='dev_report'),
]
