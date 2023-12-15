import { Outlet, Link ,useLocation,useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./styles.css";
import Cookies from 'js-cookie';

export default function Booking(){

    const navigate = useNavigate();
    const location = useLocation();
    const patient_id = location.state.patient_id;
    console.log('Dhjbkj',patient_id)
    const Home = () => {
      navigate("/Home",{state:{patient_id}})
    };
    const Dashboard = () => {
      navigate("/Dashboard",{state:{patient_id}})
    };
  
    const [selectedDate, setSelectedDate] = useState('');
    const [minDate, setMinDate] = useState('');
    useEffect(() => {
      // Set the minimum date to the current date
      const currentDate = new Date();
      setMinDate(currentDate.toISOString().slice(0, 10));   
    }, []);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
      }
      console.log('not',patient_id)
      const [formData, setFormData] = useState({
        patient_id:patient_id,
        Oppoinment: 'Heart Valve Disease',
        DoctorName: 'Dr Anoop Shetty',
        UserMobileNumber:'8754263367',
      });
    

      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };
      
    
  const diseases = ['Heart Valve Disease', 'Coronary Artery Disease', 'High Blood Pressure','General Check up ','Heart Attack','Heart Palpitations'];
  const doctors = {
    'Heart Valve Disease': ['Dr Naveen Prasanth','Dr vishnu','Dr Puspa Roshini' ],
    'Coronary Artery Disease': [ 'Dr Anjaleena','Dr karthi','Dr.Akshaya Poorani' ],
    'High Blood Pressure': ['Dr Abimanyu', 'Dr Gokul', 'Dr Kowsika'],
    'General Check up ' : ['Dr Chandru','Dr Ram','Dr Priya'],
    'Heart Attack' :['Dr Arun Kumar','Dr.Anu'],
    'Heart Palpitations' : ['Dr Vijaya Varshini','Dr Dhakshanadeepa',],
  };

  const [selectedDisease, setSelectedDisease] =  useState(location.state.Oppoinment || '');
  const [selectedDoctor, setSelectedDoctor] = useState('' || location.state.DoctorName);
  console.log(location);

  const handleDiseaseChange = (event) => {
    const disease = event.target.value;
    setSelectedDisease(disease);
  };

  const handleDoctorChange = (event) => {
    const doctor = event.target.value;
    setSelectedDoctor(doctor);
  };
  const AddToUser = (event) => {
    event.preventDefault();
    console.log(formData);
    const getCSRFToken = () => Cookies.get('csrftoken');

  
    axios.post("http://127.0.0.1:8000/patient/", formData, {
headers: {
"Content-Type": "application/json",
'X-CSRFToken': getCSRFToken(),
},
onUploadProgress: (progressEvent) => {
// Handle upload progress
const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
console.log(`Upload progress: ${percentCompleted}%`);
},
})
.then((response) => {
console.log(response);
// Handle success
})
.catch((error) => {
console.error("Error submitting form:", error);
// Handle error
});
  }

    return(
        <div>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <div class="container-fluid">
        <a class="navbar-brand">.Doc</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <button onClick={Home} class="btn" style={{color:"white",border:"None"}}>Home</button>
                    </li>
                    <li class="nav-item">
                    <button onClick={Dashboard}class="btn" style={{color:"white",border:"None"}}>Dashboard</button>
                    </li>
                </ul>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"/>
                <form class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <button style={{margin:'5px'}}>Search</button>
                        <input type="text" class="mb-2 mr-sm-2"/>
                    </li>
                </ul>
                </form>
            </div>
        </div>
    </nav>
    <div class="container">
        <form class="form-horizontal"  action="/action_page.php" onSubmit={handleSubmit}>
        <div class="form-group" style={{margin:".5px"}}>
            <label for="PatientName">Name:</label>
            <input  type="text" class="form-control" id="PatientName" placeholder="Enter Patient name"style={{width:"250px",margin:"3px"}}  onChange={handleInputChange} required />
        </div>
          <div class="form-group"  style={{margin:".5px"}}>
            <label for="PatientAge" >Age:</label>
            <input  type="number"class="form-control" id="PatientAge"  placeholder="Enter Patient age" style={{width:"250px",margin:"3px"}}   onChange={handleInputChange} required />
          </div>
          <div class="form-group"  style={{margin:".5px"}}>
            <label>Gender:</label>
            <label style={{color:"red"}}>
            <input type="radio" name="gender"  id="Gender" value="Male"  onChange={handleInputChange}/> Male
            </label>
            <label style={{color:"red"}}>
            <input type="radio" name="gender"  id="Gender" value="Female"  onChange={handleInputChange}/> Female
            </label>
          </div>
          <div class="form-group"  style={{margin:".5px"}}>
            <label for="PatientMobileNumber" >Patient Mobile Number:</label>
            <input  type="interger"class="form-control" id="PatientMobileNumber"  placeholder="Enter Patient MobileNumber" style={{width:"250px",margin:"3px"}}   onChange={handleInputChange} required />
          </div>
          <div class="form-group"  style={{margin:".5px"}}>
            <label>Select Disease:</label>
        <select  id="Oppoinment"class="form-control"  style={{width:"250px",margin:"3px"}} value={selectedDisease} onChange={(e) =>{handleDiseaseChange(e);handleInputChange(e)}}>
          <option value="" selected disabled>Checkup detail</option>
          {diseases.map((disease) => (
            <option key={disease} value={disease}>
              {disease}
            </option>
          ))}
        </select>

      {selectedDisease && (
          <select id="DoctorName" class="form-control"style={{width:"250px",margin:"3px"}}  placeholder="Select Doctor" value={selectedDoctor} onChange={(e) => {handleDoctorChange(e);handleInputChange(e)}}>
            <option value=""selected disabled >Select Doctor</option>
            {doctors[selectedDisease].map((doctor) => (<option key={doctor} value={doctor}>{doctor}</option>))}
          </select>
      )}
      </div>
      <div class="form-group"  style={{margin:".5px"}}>
        <label>Location:</label>
        <textarea type="Textarea"  class="form-control" style={{maxWidth:"250px",margin:"3px",height:"100px"}} rows="5" cols="30" maxLength="150"  id="PatientLocation" onChange={handleInputChange}/>
      </div>
      <div class="form-group"  style={{margin:".5px"}}>
        <label>Branch:</label>
        <select type="text" class="form-control"  style={{width:"250px",margin:"3px"}}  id="HospitalBranch" onChange={handleInputChange}>
          <option value=""selected disabled >Select Branch Location</option>
          <option value= "Coimbatore">Coimbatore</option>
            <option value="Chennai">Chennai</option>
            <option value="Madurai">Madurai</option>
            <option value={location.state.HospitalBranch}>{location.state.HospitalBranch}</option>
        </select>
      </div>
      <div class="form-group" style={{margin:".5px"}}>
        <label htmlFor="Date">Select Date:</label>
        <input type="Date"  class="form-control"  style={{width:"250px",margin:"3px"}}  id="Date" name="Date" value={selectedDate} min={minDate}  onChange={(e) => {handleInputChange(e);handleDateChange(e);}}required />
      </div>
        <button type="submit" class="btn btn-primary" style={{width:"250px",margin:"3px"}}   onClick={AddToUser}>Submit</button>
        </form>
    </div>
    <Outlet/>
    </div>
    )
}