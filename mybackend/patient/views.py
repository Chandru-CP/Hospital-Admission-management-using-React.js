from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.forms.models import model_to_dict
from .models import  Patient
import json

@csrf_exempt
@require_http_methods(["GET", "POST", "PUT", "DELETE"])
def patient_data(request, patient_id=None):
    if request.method == 'GET':
        return get_patient_data(request, patient_id)

    elif request.method == 'POST':
        return create_patient_data(request)

    elif request.method == 'PUT':
        return update_patient_data(request ,id=None)
    #
    elif request.method == 'DELETE':
        return delete_patient_data()

@csrf_exempt
def get_patient_data(request, patient_id=None):
    if patient_id:
        # Query the database for a patient with the given ID
        queryset = Patient.objects.filter(patient_id=patient_id)

        if queryset.exists():
            # Convert queryset to a list of dictionaries
            patient_data = [
                {
                    'id': item.id,
                    'PatientId': item.patient_id,
                    'PatientName': item.PatientName,
                    'Gender': item.Gender,
                    'PatientAge': item.PatientAge,
                    'PatientLocation': item.PatientLocation,
                    'Date': item.Date,
                    'DoctorName': item.DoctorName,
                    'HospitalBranch': item.HospitalBranch,
                    'PatientMobileNumber': item.PatientMobileNumber,
                    'Oppoinment': item.Oppoinment,
                }
                for item in queryset]
            return JsonResponse(patient_data, safe=False)
        else:
            # Return an error response if the patient is not found
            return JsonResponse({"error": "Patient not found"}, status=404)

    else:
        form_data = Patient.objects.all()
        response_data = [
            {
            'id': patient.id,
            'patient_id':patient.patient_id,
            'PatientName': patient.PatientName,
            'Gender': patient.Gender,
            'PatientAge': patient.PatientAge,
            'PatientLocation': patient.PatientLocation,
            'Date': patient.Date,
            'DoctorName': patient.DoctorName,
            'HospitalBranch': patient.HospitalBranch,
            'PatientMobileNumber': patient.PatientMobileNumber,
            'Oppoinment': patient.Oppoinment,
            } for patient in form_data
        ]
        return JsonResponse(response_data, safe=False)
@csrf_exempt
def create_patient_data(request):
    try:
        form_data_json = json.loads(request.body)
        form_data = Patient(
            patient_id=form_data_json.get('patient_id', ''),
            PatientName=form_data_json.get('PatientName', ''),
            Gender=form_data_json.get('Gender', ''),
            PatientAge=form_data_json.get('PatientAge', ''),
            PatientLocation=form_data_json.get('PatientLocation', ''),
            Date=form_data_json.get('Date', ''),
            DoctorName=form_data_json.get('DoctorName', ''),
            HospitalBranch=form_data_json.get('HospitalBranch', ''),
            PatientMobileNumber=form_data_json.get('PatientMobileNumber', ''),
            Oppoinment=form_data_json.get('Oppoinment', '')
        )
        form_data.save()
        return JsonResponse({'message': 'POST request successful', 'formData': model_to_dict(form_data)})
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid request format"}, status=400)
@csrf_exempt
def delete_patient_data(request, id):
    try:
        patient = Patient.objects.get(id=id)
        patient.delete()
        return JsonResponse({"message": "Patient data deleted successfully"})
    except Exception as e:
        print(f"An error occurred: {e}")
        return JsonResponse({"error": "An internal server error occurred"}, status=500)
@csrf_exempt
def update_patient_data(request, id):
    if request.method == 'PUT':
        try:
            form_data_json = json.loads(request.body)
            patient = Patient.objects.get(id=id)

            # Update patient data based on the JSON payload
            patient.PatientName = form_data_json.get('PatientName', patient.PatientName)
            patient.Gender = form_data_json.get('Gender', patient.Gender)
            patient.PatientAge = form_data_json.get('PatientAge', patient.PatientAge)
            patient.PatientLocation = form_data_json.get('PatientLocation', patient.PatientLocation)
            patient.Date = form_data_json.get('Date', patient.Date)
            patient.DoctorName = form_data_json.get('DoctorName', patient.DoctorName)
            patient.HospitalBranch = form_data_json.get('HospitalBranch', patient.HospitalBranch)
            patient.PatientMobileNumber = form_data_json.get('PatientMobileNumber', patient.PatientMobileNumber)
            patient.Oppoinment = form_data_json.get('Oppoinment', patient.Oppoinment)

            patient.save()

            return JsonResponse({'message': 'PUT request successful', 'formData': model_to_dict(patient)})
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid request format"}, status=400)
        except Patient.DoesNotExist:
            return JsonResponse({"error": "Patient not found"}, status=404)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)