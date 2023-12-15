from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.forms.models import model_to_dict
from .models import User
import json


@csrf_exempt
@require_http_methods(["GET", "POST", "PUT", "DELETE"])
def home(request, user_id=None):
    if request.method == 'GET':
        return get_form_data(request, user_id)

    elif request.method == 'POST':
        return create_form_data(request)

    elif request.method == 'PUT':
        return update_form_data(request)

    elif request.method == 'DELETE':
        return delete_form_data()

def get_form_data(request, user_id=None):
    if user_id:
        form_data = User.objects.filter(id=user_id).first()
        if form_data:
            response_data = {
            'id':form_data.id,
            'UserName': form_data.UserName,
            'UserEmail': form_data.UserEmail,
            'UserMobileNumber': form_data.UserMobileNumber,
            'UserPassword': form_data.UserPassword,
            }
            return JsonResponse(response_data)
        else:
            return JsonResponse({"error": "User not found"}, status=404)
    else:
        form_data = User.objects.all()
        response_data = [
            {
            'id': user.id,
            'UserName': user.UserName,
            'UserEmail': user.UserEmail,
            'UserMobileNumber': user.UserMobileNumber,
            'UserPassword': user.UserPassword,
            } for user in form_data
        ]
        return JsonResponse(response_data, safe=False)


@csrf_exempt
def create_form_data(request):
    try:
        form_data_json = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid request format"}, status=400)


    form_data = User(
       UserName=form_data_json.get('UserName', ''),
       UserEmail=form_data_json.get('UserEmail', ''),
       UserMobileNumber=form_data_json.get('UserMobileNumber', ''),
       UserPassword=form_data_json.get('UserPassword', ''),
    )
    form_data.save()
    print(form_data.id)


    return JsonResponse({'message': 'POST request successful', 'formData': model_to_dict(form_data)})

@csrf_exempt
def update_form_data(request):
    form_data_json = json.loads(request.body)
    form_data = User.objects.first()

    if form_data:
        form_data.UserName = form_data_json.get('UserName', form_data.UserName)
        form_data.UserEmail = form_data_json.get('UserEmail', form_data.UserEmail)
        form_data.UserMobileNumber = form_data_json.get('UserMobileNumber', form_data.UserMobileNumber)
        form_data.UserPassword = form_data_json.get('UserPassword', form_data.UserPassword)

        form_data.patient.clear()
        for patient_data in form_data_json.get('patient', []):
            patient = Patient(**patient_data)
            patient.save()
            form_data.patient.add(patient)

        form_data.save()
        return JsonResponse({'message': 'PUT request successful', 'formData': model_to_dict(form_data)})
    else:
        return JsonResponse({'error': 'No FormData found'}, status=404)

def delete_form_data():
    form_data = User.objects.first()
    if form_data:
        form_data.delete()
        return JsonResponse({'message': 'DELETE request successful'})
    else:
        return JsonResponse({'error': 'No FormData found'}, status=404)




