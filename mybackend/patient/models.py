from django.db import models

class Patient(models.Model):
    id = models.AutoField(primary_key=True)
    patient_id = models.EmailField(max_length=50)
    PatientName = models.CharField(max_length=50)
    PatientAge = models.CharField(max_length=50)
    Gender = models.CharField(max_length=50)
    PatientMobileNumber = models.IntegerField()
    PatientLocation = models.CharField(max_length=50)
    HospitalBranch = models.CharField(max_length=50)
    DoctorName = models.CharField(max_length=50)
    Oppoinment = models.CharField(max_length=50)
    Date = models.CharField(max_length=50)

    def __str__(self):
        return self.PatientName
