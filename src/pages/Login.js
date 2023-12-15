import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Login(){

  const [formData, setFormData] = useState({});
  const [ID, setID] = useState(null); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setFormData(values => ({...values, [name]: value}))
      }  
      
      function isObjectSubset(subset, superset) {
        return Object.keys(subset).every(key => {
          // If the subset has a nested object, check if it is a subset of the superset's nested object.
          if (typeof subset[key] === 'object' && subset[key] !== null && !Array.isArray(subset[key])) {
              return isObjectSubset(subset[key], superset[key]);
          }
          // Otherwise, check if the key and value of the subset match the key and value of the superset.
          return superset.hasOwnProperty(key) && superset[key] === subset[key];
      });
    }
    const SignIn = () => {
      navigate('./signIn')
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    
        try{
          axios.get("http://127.0.0.1:8000/api/get_form_data", {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            const Data = response.data;
            var isSubset = false;
            let supersetObj = null;

            isSubset = Data.some(data => {
              if (isObjectSubset(formData, data)) {
                supersetObj = data;
              return true;
              }
            return false;
            });

    if (isSubset) {
        console.log("formData is a subset of the following object in Data:");
        setID (supersetObj.id);
        console.log(supersetObj);
        const patient_id = supersetObj.UserEmail;
        console.log('is ',patient_id)
        navigate('/Home',{state:{patient_id}});
    } else {
        setError('Invalid email or password. Please try again.');
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
    console.log(ID);
       
        });
        }
        catch (error) {
          console.error('Error:', error);
        }
         
    }
    

    return (
      
    <div className="card" style={{ width: '100%' }}>
    <img className="card-img-top"src="https://images.pexels.com/photos/2672808/pexels-photo-2672808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image" />
    <div className="card-img-overlay">
      <div className="card text-center" style={{ width: '350px', marginTop:"200px",marginLeft:"450px" }}>
        <div className="card-body text-center" style={{ width: '80%', margin: 'auto' }}>
        <form onSubmit={handleSubmit} >
              <label style={{margin:2}}>Email:</label>
              <input type="email" className="form-control" id="UserEmail" style={{margin:2}} onChange={handleChange}/>
              <label>Password:</label>
              <input type="password" className="form-control" id="UserPassword"  onChange={handleChange} style={{margin:2}} />
              <button type="submit" className=" btn btn-primary" style={{margin:2}}>Login</button>
              <p style={{margin:2}}>Don't have an account?
              <button type="button" className=" btn btn-secondary" onClick={SignIn} style={{margin:2}}>Sign In</button></p>
          </form>
          {error && <p className="error">{error}</p>}
          {ID && <p>Redirecting to the home page...</p>}
        </div>
      </div>
    </div>
  </div>



      );
}