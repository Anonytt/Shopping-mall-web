from django.db import models
from django.contrib.auth.models import User

class Goods(models.Model):
    webname = models.CharField(max_length=20,blank=True)
    belong = models.CharField(max_length=20,blank=True)
    name = models.CharField(max_length=50,blank=True)
    source = models.CharField(max_length=256,blank=True)
    price = models.IntegerField(blank=True)
    describe = models.TextField(max_length=256,blank=True)
    def __str__(self):
        return self.webname
