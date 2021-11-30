from django.db import models
from django.contrib.auth.models import User

class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.URLField(max_length=256,blank=True)
    price = models.IntegerField(blank=True)
    sex = models.CharField(max_length=256,blank=True)
    love = models.CharField(max_length=256,blank=True)
    def __str__(self):
        return str(self.user)
