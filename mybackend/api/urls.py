from django.urls import path
from .views import *

urlpatterns = [
    path('', home),
    path('get_form_data',get_form_data),
    path('get_form_data/<int:user_id>/', get_form_data),
    path('create_form_data',create_form_data),
    path('update_form_data',update_form_data),
    path('delete_form_data',delete_form_data),
]

