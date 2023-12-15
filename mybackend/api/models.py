from django.db import models


class User(models.Model):
    id = models.AutoField(primary_key=True)
    UserName = models.CharField(max_length=50)
    UserEmail = models.CharField(max_length=50)
    UserMobileNumber = models.CharField(max_length=10) # updated from IntegerField to CharField
    UserPassword = models.CharField(max_length=50)

    def __str__(self):
        return self.UserName
