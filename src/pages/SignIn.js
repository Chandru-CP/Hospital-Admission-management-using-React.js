import {useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";


function SignIn(){
    const [formData, setFormData] = useState({}); 
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setFormData(values => ({...values, [name]: value}))
      }  
      
      
      const handlesubmit = (event) => {
        event.preventDefault();
        console.log(formData);
      
        axios.post("http://127.0.0.1:8000/api/", formData, {
  headers: {
    "Content-Type": "application/json",
  },
})
.then((response) => {
  console.log(response);
  if (response.status === 200)
  {
    navigate('/');
  }
  // Handle success
})
.catch((error) => {
  console.error("Error submitting form:", error);
  // Handle error
});

      }


    return (
      <div className="card" style={{ width: '100%' }}>
      <img className="card-img-top"src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" alt="Card image" style={{height:"679px"}}/>
      <div className="card-img-overlay">
        <div className="card text-center" style={{ width: '300px', marginTop:"160px",marginLeft:"390px",opacity:0.8 }}>
          <div className="card-body text-center" style={{ width: '80%', margin: 'auto' }}>
            <form onSubmit={handlesubmit} >
              <label style={{color:"red"}}>Name:</label>
              <input type="text"id="UserName" className="form-control" placeholder="Ram Kumar" onChange={handleChange} style={{margin:3}} />
              <label style={{color:"red"}}>Email ID:</label>
              <input type="text" id="UserEmail" className="form-control" placeholder="123@gmail.com"  onChange={handleChange} style={{margin:3}} />
              <label style={{color:"red"}}>Mobile Number:</label>
              <input type="integer" id="UserMobileNumber" className='form-control' placeholder="1234567890"  onChange={handleChange} style={{margin:3}} />
              <label style={{color:"red"}}>Password:</label>
              <input type="password" id="UserPassword" className="form-control" placeholder="******" onChange={handleChange} style={{margin:3}} />
              <button type="submit" className="btn btn-primary" style={{margin:2}}>Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
      );
      
}
export default SignIn;