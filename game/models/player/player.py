from django.db import models
from django.contrib.auth.models import User

class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.URLField(max_length=256,blank=True)
    price = models.IntegerField(blank=True)
    qq =models.CharField(max_length=11,blank=True)
    sign =models.TextField(max_length=256,blank=True)
    def __str__(self):
        return str(self.user)
