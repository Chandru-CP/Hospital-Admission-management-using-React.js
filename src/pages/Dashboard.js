import { Outlet, Link, useNavigate,useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";

function Dashboard(){
    const navigate = useNavigate();
    const location = useLocation();
    const patient_id = location.state.patient_id;
    const [editingRow, setEditingRow] = useState(null);
  
    const Home = () => {
      navigate("/Home", { state: { patient_id } });
    };
  
    const Dashboard = () => {
      navigate("/Dashboard", { state: { patient_id } });
    };
    console.log(patient_id)
    const [selectedDate, setSelectedDate] = useState('');
    const [minDate, setMinDate] = useState('');
    useEffect(() => {
      // Set the minimum date to the current date
      const currentDate = new Date();
      setMinDate(currentDate.toISOString().slice(0, 10));   
    }, []);
    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#1e90ff',
        color: 'white',
        border: 'none',
        borderRadius: '15px',  // Set the border-radius for full curvature
        cursor: 'pointer',
      };
      const buttonStyle3 = {
        padding: '10px 20px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '15px',  // Set the border-radius for full curvature
        cursor: 'pointer',
      };
      const buttonStyle1 = {
        padding: '10px 20px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '15px',  // Set the border-radius for full curvature
        cursor: 'pointer',
        marginLeft:'10px',
      };
    const [PatientDetail, setPatientDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/patient/get_patient_data/${patient_id}/`)
          .then((response) => {
            console.log('API Response:', response.data);
            setPatientDetail(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching patient data:', error);
            setError(error.message);
            setLoading(false);
          });
      }, [patient_id]);

      const DeletePost = (id) => {
        axios.delete(`http://127.0.0.1:8000/patient/delete_patient_data/${id}`)
            .then(response =>{
                if(response.status === 200)
                {
                    axios.get(`http://127.0.0.1:8000/patient/get_patient_data/${patient_id}/`)
                    .then((response) => {
                      console.log('API Response:', response.data);
                      setPatientDetail(response.data);
                      setLoading(false);
                    })
                }
                else{
                    alert('Please try again !');
                }
            })
    }
      const handleEditClick = (rowId) => {
        setEditingRow(rowId);
      };
      const [changedRow, setchangedRow] = useState([]);
      const handleInputChange = (e, rowId, fieldName) => {
         var updatedPatientDetail = PatientDetail.map((p) =>
          p.id === rowId ? { ...p, [fieldName]: e.target.value } : p
        );
        setPatientDetail(updatedPatientDetail);
        const changedRow = updatedPatientDetail.find((p) => p.id === rowId);
        console.log('Changed Row:', changedRow);
        setchangedRow(changedRow)
      };
      
      
      const handleSaveClick = (rowId) => {
        axios.put(`http://127.0.0.1:8000/patient/update_patient_data/${rowId}/` , changedRow, {
            headers: {
            "Content-Type": "application/json",
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
            setEditingRow(null);
        };
      

    return(
        <div>
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark" style={{width:"100%"}}>
                <div class="container-fluid">
                <a class="navbar-brand">.Doc</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <button onClick={Home} class="btn" style={{color:"white",border:"None"}}>home</button>
                            </li>
                            <li class="nav-item">
                            <button onClick={Dashboard} class="btn" style={{color:"white",border:"None"}}>Dashboard</button>
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
            <Outlet/> 
            <table class="table table-striped" style={{width:"100%"}} >
        <tr border={3}>
            <th style={{ textAlign: 'center' }}>S.No</th>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Gender</th>
            <th style={{ textAlign: 'center' }}>Age</th>
            <th style={{ textAlign: 'left' }}>Disease</th>
            <th style={{ textAlign: 'center' }}>Phone Number</th>
            <th style={{ textAlign: 'left' }}>Doctor Name</th>
            <th style={{ textAlign: 'left' }}>Location</th>
            <th style={{ textAlign: 'center' }}>Date</th>
            <th style={{ textAlign: 'center' }}>Actions</th>
        </tr>
        <tbody border={3} style={{width:"100%"}}>
        {PatientDetail.map((p, index) => (
    <tr key={p.id}>
      <td style={{ textAlign: 'center' }}>{index + 1}</td>
      <td style={{ textAlign: 'left' }}>{editingRow === p.id ? (<input type="text" value={p.PatientName} onChange={(e) => handleInputChange(e, p.id, 'PatientName')}/>) : (p.PatientName)}</td>
      <td style={{ textAlign: 'left' }}>{editingRow === p.id ? (<input type="text" value={p.Gender} onChange={(e) => handleInputChange(e, p.id, 'Gender')}/>) : (p.Gender)}</td>
      <td style={{ textAlign: 'left' }}>{editingRow === p.id ? (<input type="number"  style={{width:"40px"}} value={p.PatientAge} onChange={(e) => handleInputChange(e, p.id, 'PatientAge')}/>) : (p.PatientAge)}</td>
      <td style={{ textAlign: 'left' }}>{p.Oppoinment}</td>
      <td style={{ textAlign: 'left' }}>{editingRow === p.id ? (<input type="text" value={p.PatientMobileNumber} onChange={(e) => handleInputChange(e, p.id, 'PatientMobileNumber')}/>) : (p.PatientMobileNumber)}</td>
      <td style={{ textAlign: 'left' }}>{p.DoctorName}</td>
      <td style={{ textAlign: 'left' }}>{editingRow === p.id ? (<input type="text" value={p.PatientLocation} onChange={(e) => handleInputChange(e, p.id, 'PatientLocation')}/>) : (p.PatientLocation)}</td>
      <td style={{ textAlign: 'left' }}>{editingRow === p.id ? (<input type="Date" value={p.Date} min={minDate}  onChange={(e) => handleInputChange(e, p.id, 'Date')}/>) : (p.Date)}</td>

      <td>
      {editingRow === p.id ? (<button onClick={() => handleSaveClick(p.id)} style={buttonStyle3}>Save</button>) : 
      (<button onClick={() => handleEditClick(p.id)} style={buttonStyle}>Edit</button>)}
        <button style={buttonStyle1}  onClick={() => DeletePost(p.id)} >Delete</button>
      </td>
    </tr>
  ))}
        </tbody>
      </table>    
        </div>
    )

}
export default Dashboard;