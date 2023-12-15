from django.urls import path
from .views import *

urlpatterns = [
    path('', patient_data),
    path('get_patient_data', get_patient_data),
    path('get_patient_data/<str:patient_id>/', get_patient_data),
    path('create_patient_data', create_patient_data),
    path('delete_patient_data/<int:id>/', delete_patient_data, name='delete_patient_data'),
    path('update_patient_data/<int:id>/', update_patient_data, name='update_patient_data'),
]

