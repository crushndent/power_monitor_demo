from django.db import models


''''
This is the records of power monitor reported
'''
class Power(models.Model):
    reported_time = models.DateTimeField(auto_now=True)
    time = models.DateTimeField(auto_now=True)
    Vrms = models.DecimalField(max_digits=8, decimal_places=3)
    Irms = models.DecimalField(max_digits=8, decimal_places=3)
    Irms2 = models.DecimalField(max_digits=8, decimal_places=3)
    Pa = models.DecimalField(max_digits=8, decimal_places=3)
    Preact = models.DecimalField(max_digits=8, decimal_places=3)
    Preal = models.DecimalField(max_digits=8, decimal_places=3)
    site = models.TextField()

    def __str__(self):
        return str(self.site) + str(self.time)
