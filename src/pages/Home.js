import { Outlet, Link,useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, {useState } from 'react';
import './styles.css';
import naveen from './naveen.jpg';
import dhakshana from './dhakshana.jpg';
import varshini from './varshini.jpg';
import aj from './aj.jpg';
import ca from './image/ca.jpg';
import ha from './image/ha.jpg';
import hb from './image/hb.jpg';
import hp1 from './image/hp1.jpg';
import hp2 from './image/hp2.jpg';
import hv from './image/hv.jpg';
import a1 from './image/a1.jpg';
import a2 from './image/a2.jpg';
import a3 from './image/a3.jpg';
import a4 from './image/a4.jpg';
import heart from './image/heart.png';
import wall from './image/wall.png';
import hand from './image/hand.png';


function Home() {

  let [PatientDetail,setPatientDetail] =useState({HospitalBranch:"",Date:"",Oppoinment:"",DoctorName:""});
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
  const handleInputChange = (e) => {
    setPatientDetail({
      ...PatientDetail,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log('Form data submitted:', PatientDetail);
    const HospitalBranch = PatientDetail.HospitalBranch;
    const Date = PatientDetail.Date;
    const DoctorName = PatientDetail.DoctorName;
    
    console.log(patient_id)

    navigate("/Booking",{state:{HospitalBranch,Date,DoctorName,patient_id}})
    
  };

  const handleMouseOver = (e) => {
    e.currentTarget.querySelector('.img-thumbnail').style.transform = 'scale(1.1)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.querySelector('.img-thumbnail').style.transform = 'scale(1)';
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#1e90ff',
    color: 'white',
    border: 'none',
    borderRadius: '15px',  // Set the border-radius for full curvature
    cursor: 'pointer',
  };
    const [showData1, setShowData1] = useState(true);
    const [showData2, setShowData2] = useState(false);
    const [showData3, setShowData3] = useState(false);
  
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
  
    const data1Short = "If one of the valves in your heart becomes diseased it can affect the flow of blood. This can happen in one of two ways: valve stenosis (where the valve does not fully open and obstructs or restricts flow) or valve incompetence (where the valve does not close properly and blood is allowed to leak backwards)...."; // Replace this with your shortened data for Button 1
    const data1Full = "Full data for Button 1"; // Replace this with your full data for Button 1
  
    const data2Short = "Shortened data for Button If one of the valves in your heart becomes diseased it can affect the flow of blood. This can happen in one of two ways: valve stenosis (where the valve does not fully open and obstructs or restricts flow) or valve incompetence (where the valve does not close properly and blood is allowed to leak backwards)...."; // Replace this with your shortened data for Button 2
    const data2Full = "Full data for Button 2"; // Replace this with your full data for Button 2
  
    const data3Full = "Shortened data for"; // Replace this with your shortened data for Button 3
    const data3Short = "If one of the valves in your heart becomes diseased it can affect the flow of blood. This can happen in one of two ways: valve stenosis (where the valve does not fully open and obstructs or restricts flow) or valve incompetence (where the valve does not close properly and blood is allowed to leak backwards)...."; // Replace this with your full data for Button 3
  
    const handleButtonClick = (buttonNumber) => {
      switch (buttonNumber) {
        case 1:
          setShowData1(true);
          setShowData2(false);
          setShowData3(false);
          break;
        case 2:
          setShowData1(false);
          setShowData2(true);
          setShowData3(false);
          break;
        case 3:
          setShowData1(false);
          setShowData2(false);
          setShowData3(true);
          break;
        default:
          break;
      }
    };
  
    const handleReadMoreClick = (buttonNumber) => {
      switch (buttonNumber) {
        case 1:
          setShowMore1(!showMore1);
          break;
        case 2:
          setShowMore2(!showMore2);
          break;
        case 3:
          setShowMore3(!showMore3);
          break;
        default:
          break;
      }
    };
    const Heart = ()=>{
      setPatientDetail={Oppoinment:"Heart Valve Disease",DoctorName:"Dr Naveen Prasanth"}
      const Oppoinment = setPatientDetail.Oppoinment;
      const DoctorName = setPatientDetail.DoctorName;
    
      navigate('/Booking', {state:{Oppoinment,DoctorName}})
    }
    const Coronary = ()=>{
      setPatientDetail={Oppoinment:"Coronary Artery Disease",DoctorName:"Dr Anjaleena"}
      const Oppoinment = setPatientDetail.Oppoinment;
      const DoctorName = setPatientDetail.DoctorName;
    
      navigate('/Booking', {state:{Oppoinment,DoctorName}})
    }
    const High = ()=>{
      setPatientDetail={Oppoinment:"High Blood Pressure",DoctorName:"Dr Abimanyu"}
      const Oppoinment = setPatientDetail.Oppoinment;
      const DoctorName = setPatientDetail.DoctorName;
    
      navigate('/Booking', {state:{Oppoinment,DoctorName}})
    }
    const HeartAttack = ()=>{
      setPatientDetail={Oppoinment:"Heart Attack",DoctorName:"Dr Arun Kumar"}
      const Oppoinment = setPatientDetail.Oppoinment;
      const DoctorName = setPatientDetail.DoctorName;
    
      navigate('/Booking', {state:{Oppoinment,DoctorName}})
    }
    const HeartPalpitations = ()=>{
      setPatientDetail={Oppoinment:"Heart Palpitations",DoctorName:"Dr Vijaya Varshini"}
      const Oppoinment = setPatientDetail.Oppoinment;
      const DoctorName = setPatientDetail.DoctorName;
    
      navigate('/Booking', {state:{Oppoinment,DoctorName}})
    }
    const HeartPalpitations1 = ()=>{
      setPatientDetail={Oppoinment:"Heart Palpitations",DoctorName:"Dr Dhakshanadeepa"}
      const Oppoinment = setPatientDetail.Oppoinment;
      const DoctorName = setPatientDetail.DoctorName;
    
      navigate('/Booking', {state:{Oppoinment,DoctorName}})
    }
    
    

  return (
    <div>
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark" >
                <div class="container-fluid">
                <a class="navbar-brand">.Doc</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <button onClick={Home} class="btn" style={{color:"white",border:"None"}}>Home</button>
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
                                <button type="submit" class="bg-primary" style={buttonStyle}>Search</button>
                                <input type="text"/>
                            </li>
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>  
            <Outlet/>   
            <div class="card" style={{width:"100%"}}>
                <img class="card-img-top" src="https://th.bing.com/th?id=OIP.NUJXMMuV9N8BigFFuAaKKwAAAA&w=16&h=16&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Card image"style={{width:"100%" , height:"400px"}}/>
                <div class="card-img-overlay">
                <div class="card-group">
    <div >
      <div class="card-body text-center"style={{marginTop:"40px"}} >
        <h5 style={{fontSize:"20px",color:"white"}}>🤍 Every Beat, Every Moment</h5>
        <h1 style={{fontSize:"50px",color:"white"}}>Preventive Care</h1>
        <h2 style={{fontSize:"35px",color:"white"}}>Is essential For</h2>
       	<h1 style={{fontSize:"50px",color:"white"}}>Healthy Heart</h1>
      </div>
    </div>
    <div >
      <div class="card-body text-center" style={{marginTop:"20px"}} >
        <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/heart-bg.3d871bbb.png" style={{width:"350px"}} />
      </div>
    </div>
    <div >
      <div class="card-body text-center" style={{marginTop:"77px"}} >
        <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/home-10-banner-img.5191ba68.png"style={{width:"300px"}}/>
      </div>
    </div>
  </div>
            </div>

              </div>
            <div>
           <p class="container" style={{color:"red",fontSize:"30px" ,margin:"30px",paddingLeft:"36%"}}> Book An Apppointment Today</p>
                <form onSubmit={handleSubmit}>
                <div class="container"style={{paddingLeft:"10%"}}>
                  <div class="row">
                    <div class="col-sm-4">
                      <select class="form-control mb-2 mr-sm-2" id="HospitalBranch" style={{width:"250px",margin:"3px"}} placeholder="loaction" onChange={handleInputChange} >
                        <option value= "Coimbatore">Coimbatore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Madurai">Madurai</option>
                      </select>
                    </div>
                    <div class="col-sm-4">
                      <input type="date"  class="form-control mb-2 mr-sm-2" id="Date" name="Date"style={{width:"250px",margin:"3px"}} onChange={handleInputChange}/>
                    </div>
                    <div class="col-sm-4">
                      <input class="form-control mb-2 mr-sm-2" id="DoctorName"style={{width:"250px",margin:"3px"}} placeholder="search doctor"onChange={handleInputChange}/>
                    </div>
                  </div>
                </div>
                <div class="center" style={{width:"50%",paddingLeft:"42%"}}>
                  <button type="submit" class="form-control btn btn-secondary" style={{width:"250px"}}>Submit</button>
                </div>
                </form>
            </div>
            <hr width="100%" color="#6699ff" size="6" />
            <div>
              <p style={{textAlign:"center" ,margin:"30px"}}>
              <span style={{color:"#1e90ff",fontSize:"35px"}}>Why</span>
              <span style={{fontSize:"35px"}}> .Doc ?</span>
              </p>
            </div>
            <div class="jumbotron jumbotron-fluid"  style={{ display:"flex",justifyContent: "space-between",marginLeft:"30px",marginRight:"30px"}}>
              <ul class="flex-container" style={{listStyle: "none" ,display: "flex"}}>
                <li style={{ marginRight: "10px" }}>
                  <div class="rounded border " style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s" ,boxSizing: 'border-box',padding: '10px',border: '2px solid #000'}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'} >
                    <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/health-care-love.c8f203f9.svg" style={{paddingLeft:"35%"}}/>
                    <p style={{textAlign:"center"}}>Personalized Health Care</p>
                  </div>
                </li>
                <li style={{ marginRight: "10px" }}>
                  <div class="rounded border " style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s" ,boxSizing: 'border-box',padding: '10px',border: '2px solid #000'}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'} >
                    <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/user-doctor.e815e112.svg" style={{paddingLeft:"35%"}}/>
                    <p style={{textAlign:"center"}}>World-Leading Experts</p>
                  </div>
                </li>
                <li style={{ marginRight: "10px" }}>
                  <div class="rounded border " style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s" ,boxSizing: 'border-box',padding: '10px',border: '2px solid #000'}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
                    <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/healthcare.d36e065a.svg" style={{paddingLeft:"33px"}}/>
                    <p style={{textAlign:"center"}}>Regularly Check Up</p>
                  </div>
                </li>
                <li style={{ marginRight: "10px" }}>
                  <div class="rounded border " style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s" ,boxSizing: 'border-box',padding: '10px',border: '2px solid #000'}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
                    <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/drugs-svg.ea67c603.svg" style={{paddingLeft:"40%"}}/>
                    <p style={{textAlign:"center"}}>Treatment For Complex Conditions</p>
                  </div>
                </li>
                <li style={{ marginRight: "10px" }}>
                  <div class="rounded border " style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s" ,boxSizing: 'border-box',padding: '10px',border: '2px solid #000'}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'} >
                    <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/syringe-svg.61144548.svg" style={{paddingLeft:"40%"}}/>
                    <p style={{textAlign:"center"}}>Minimally Invasive Procedures</p>
                  </div>
                </li>
                <li style={{ marginRight: "10px" }}>
                  <div class="rounded border " style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s",boxSizing: 'border-box',padding: '10px',border: '2px solid #000'}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
                    <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/healthcare.d36e065a.svg" style={{paddingLeft:"30%"}}/>
                    <p style={{textAlign:"center"}}>Regularly Check Up</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <p style={{textAlign:"center" ,margin:"30px"}}>
              <span style={{color:"blue",fontSize:"35px"}}>Our</span>
              <span style={{fontSize:"35px"}}> Services</span>
              </p>
            </div>
            <div>
  <div class="card img-fluid">
    <img class="card-img-top" src="https://media.gettyimages.com/id/1127139822/vector/abstract-spotted-background.jpg?s=612x612&w=0&k=20&c=jt09tdyPdQIO3h-Ykrid90cSBVKN4vk33XO_YmCSLGE=" alt="Card image" style={{width:"100%",height:"880px"}}/>
    <div class="card-img-overlay" style={{paddingLeft:"3%"}}>
      <ul class="flex-container" style={{listStyle: "none" ,display: "flex"}}>
        <div class="card " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{margin:"6px"}}>
          <div class="card-body text-center">
            <img src={hv} class="img-thumbnail" alt="Cinque Terre" style={{ transition: 'transform 0.3s ease-in-out' }}/>
          </div>
          <h3 style={{textAlign:"center"}} id="Oppoinment" value="Heart Valve Disease">Heart Valve Disease</h3>
          <ul class="flex-container" style={{listStyle: "none" ,display: "flex",paddingLeft:"6px"}}>
            <li>
              <div class="container">
                <img src={naveen}  class="rounded-circle text-left" alt="Cinque Terre" style={{width:"30px",height:"40px"}}/>
              </div>
            </li>
            <li>
              <p style={{color:"gray",marginBottom:"3px"}}>Specialist</p>
              <p>Dr Naveen Prasanth</p>
            </li>
            <li style={{paddingLeft:"50px"}}>
              <button type="submit"  style={buttonStyle} onClick={Heart} > consult </button>
            </li>
          </ul>
        </div>
        <div class="card "onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{margin:"6px"}}>
          <div class="card-body text-center">
            <img src={ca} class="img-thumbnail" alt="Cinque Terre"/>
          </div>
          <h3 style={{textAlign:"center"}}>Coronary Artery Disease</h3>
          <ul class="flex-container" style={{listStyle: "none" ,display: "flex",paddingLeft:"6px"}}>
            <li>
              <div class="container">
                <img src={aj} class="rounded-circle text-left" alt="Cinque Terre" style={{width:"30px",height:"40px"}}/>
              </div>
            </li>
            <li>
              <p style={{color:"gray",marginBottom:"3px"}}>Specialist</p>
              <p>Dr  Anjaleena</p>
            </li>
            <li style={{paddingLeft:"50px"}}>
              <button type="submit"  style={buttonStyle} onClick={Coronary}>  consult  </button>
            </li>
          </ul>
        </div>
        <div class="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{margin:"6px"}}>
          <div class="card-body text-center">
            <img src={hb} class="img-thumbnail" alt="Cinque Terre"/>
          </div>
          <h3 style={{textAlign:"center"}}>High Blood Pressure</h3>
          <ul class="flex-container" style={{listStyle: "none" ,display: "flex",paddingLeft:"6px"}}>
            <li>
              <div class="container">
                <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/doctor-21.db2f4430.jpg" class="rounded-circle text-left" alt="Cinque Terre" style={{width:"30px",height:"40px"}}/>
              </div>
            </li>
            <li>
              <p style={{color:"gray",marginBottom:"3px"}}>Specialist</p>
              <p>Dr Abimanyu</p>
            </li>
            <li style={{paddingLeft:"50px"}}>
              <button type="submit"  style={buttonStyle} onClick={High}>  consult  </button>
            </li>
          </ul>
        </div>
        </ul>
        <ul class="flex-container" style={{listStyle: "none" ,display: "flex"}}>
        <div class="card " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{margin:"6px"}}>
          <div class="card-body text-center">
            <img src={ha} class="img-thumbnail" alt="Cinque Terre"/>
          </div>
          <h3 style={{textAlign:"center"}}>Heart Attack</h3>
          <ul class="flex-container" style={{listStyle: "none" ,display: "flex",paddingLeft:"6px"}}>
            <li>
              <div class="container">
                <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/doctor-22.0dff0691.jpg" class="rounded-circle text-left" alt="Cinque Terre" style={{width:"30px",height:"40px"}}/>
              </div>
            </li>
            <li>
              <p style={{color:"gray",marginBottom:"3px"}}>Specialist</p>
              <p>Dr Arun Kumar</p>
            </li>
            <li style={{paddingLeft:"70px"}}>
              <button type="submit"  style={buttonStyle} onClick={HeartAttack}>  consult  </button>
            </li>
          </ul>
        </div>  
        <div class="card " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{margin:"6px"}}>
          <div class="card-body text-center">
            <img src={hp2} class="img-thumbnail" alt="Cinque Terre"/>
          </div>
          <h3 style={{textAlign:"center"}}>Heart Palpitations</h3>
          <ul class="flex-container" style={{listStyle: "none" ,display: "flex",paddingLeft:"6px"}}>
            <li>
              <div class="container">
                <img src={varshini} class="rounded-circle text-left" alt="Cinque Terre" style={{width:"30px",height:"40px"}}/>
              </div>
            </li>
            <li>
              <p style={{color:"gray",marginBottom:"3px"}}>Specialist</p>
              <p>Dr Vijaya Varshini</p>
            </li>
            <li style={{paddingLeft:"60px"}}>
              <button type="submit"   data={setPatientDetail} style={buttonStyle} onClick={HeartPalpitations}>  consult  </button>
            </li>
          </ul>
        </div>
        <div class="card " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{margin:"6px"}}>
          <div class="card-body text-center">
            <img src={hp1} class="img-thumbnail" alt="Cinque Terre"/>
          </div>
          <h3 style={{textAlign:"center"}}>Heart Palpitations</h3>
          <ul class="flex-container" style={{listStyle: "none" ,display: "flex",paddingLeft:"6px"}}>
            <li>
              <div class="container">
                <img src={dhakshana} class="rounded-circle text-left" alt="Cinque Terre" style={{width:"30px",height:"40px"}}/>
              </div>
            </li>
            <li>
              <p style={{color:"gray",marginBottom:"3px"}}>Specialist</p>
              <p>Dr Dhakshanadeepa</p>
            </li>
            <li style={{paddingLeft:"90px"}}>
              <button type="submit"  style={buttonStyle} onClick={HeartPalpitations1}>  consult  </button>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</div>
<div style={{padding:"10px"}}>
<div class="row">
    <div class="col-sm-8">
      <div>
  <p style={{textAlign:"center" ,margin:"30px"}}>
    <span style={{fontSize:"35px"}}>Need To Know </span>
    <span style={{fontSize:"35px",color:"#1e90ff"}}> Cardiac Conditions</span>
  </p>
  <div>
      <button style={{margin: '10px',padding: '10px 20px',backgroundColor: '#1e90ff',color: 'white',border: 'none',borderRadius: '50px',cursor: 'pointer',}} onClick={() => handleButtonClick(1)}>
      Heart Valve Disease
      </button>
      <button style={{margin: '10px',padding: '10px 20px',backgroundColor: '#1e90ff',color: 'white',border: 'none',borderRadius: '50px',cursor: 'pointer',}} onClick={() => handleButtonClick(2)}>
      Heart Failure
      </button>
      <button style={{margin: '10px',padding: '10px 20px',backgroundColor: '#1e90ff',color: 'white',border: 'none',borderRadius: '50px',cursor: 'pointer',}} onClick={() => handleButtonClick(3)}>
      Pacemakers And Defibrillators
      </button>
      {showData1 && (
        <div style={{marginTop: '20px',padding: '20px',borderRadius: '10px',}}><h4>Heart Valve Disease</h4>
          <p>{showMore1 ? data1Full : data1Short}</p>
          <button style={{marginTop: '10px',padding: '5px 10px',backgroundColor: '#1e90ff',color: 'white',border: 'none', borderRadius: '50px',cursor: 'pointer',}} onClick={() => handleReadMoreClick(1)}>
            {showMore1 ? 'Read Less' : 'Read More'}
          </button>
        </div>
      )}

      
      {showData2 && (
        <div style={{marginTop: '20px',padding: '20px',borderRadius: '10px',}}><h4>Heart Failure</h4>
          <p>{showMore2 ? data2Full : data2Short}</p>
          <button style={{marginTop: '10px',padding: '5px 10px',backgroundColor: '#1e90ff',color: 'white',border: 'none', borderRadius: '50px',cursor: 'pointer',}} onClick={() => handleReadMoreClick(2)}>
            {showMore2 ? 'Read Less' : 'Read More'}
          </button>
        </div>
      )}
      
      {showData3 && (
        <div style={{marginTop: '20px',padding: '20px',borderRadius: '10px',}}><h4>Pacemakers And Defibrillators</h4>
          <p>{showMore3 ? data3Full : data3Short}</p>
          <button style={{marginTop: '10px',padding: '5px 10px',backgroundColor: '#1e90ff',color: 'white',border: 'none', borderRadius: '50px',cursor: 'pointer',}} onClick={() => handleReadMoreClick(3)}>
            {showMore3 ? 'Read Less' : 'Read More'}
          </button>
        </div>
      )}
    </div>
  </div>
</div>
    <div class="col-sm-4">
      <div class="row">
    <div class="col-sm-6">
      <ul  style={{listStyle: "none",marginBottom:"3px",paddingLeft:"0px"}}>
        <li>
          <div>
              <img src={a1}  class="rounded border "style={{width:"100%",marginTop:"100px",marginBottom:"20px"}}/>
          </div>
          <div>
             <img src={a2}class="rounded border " style={{width:"100%"}}/>
         </div>
       </li>
      </ul>
    </div>
    <div class="col-sm-6">
     <ul  style={{listStyle: "none",marginBottom:"3px",paddingLeft:"0px"}}>
      <li>
        <div>
            <img src={a3}  class="rounded border "style={{width:"100%",marginTop:"40px",marginBottom:"20px"}}/>
        </div>
        <div>
          <img src={a4} class="rounded border " style={{width:"100%"}}/>
        </div>
      </li>
      </ul>
    </div>
      </div>
</div>
</div>
</div>
<div style={{padding:"10px"}}>
  <div class="row"style={{height:"450px"}}>
    <div class="col-sm-5">
    <div class="row">
    <div class="col-sm-6">
      <ul  style={{listStyle: "none",marginBottom:"3px",paddingLeft:"0px"}}>
        <li>
        <div class="card img-fluid rounded border" style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s" ,boxSizing: 'border-box',padding: '10px',border: '2px solid #000',margin:"10px"}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
    <img class="card-img-top" src="https://doccure.dreamstechnologies.com/vuejs/template/img/hreat-pulse.561d4dca.svg" alt="Card image" />
    <div class="card-img-overlay">
      <h3 class="card-text" style={{textAlign:"center",color:"#1e90ff ",paddingTop:"6px"}}>1</h3>
    </div>
    <p style={{textAlign:"center"}}><h6>Choose Your Doctor</h6>Lorem Ipsum is simply dummy text of the printing..</p>
  </div>
        <div class="card img-fluid rounded border" style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s" ,boxSizing: 'border-box',padding: '10px',border: '2px solid #000',margin:"10px"}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
    <img class="card-img-top" src="https://doccure.dreamstechnologies.com/vuejs/template/img/hreat-pulse.561d4dca.svg" alt="Card image" />
    <div class="card-img-overlay">
      <h3 class="card-text" style={{textAlign:"center",color:"#1e90ff ",paddingTop:"6px"}}>3</h3>
    </div>
    <p style={{textAlign:"center"}}><h6>Consult With Doctor</h6>Lorem Ipsum is simply dummy text of the printing..</p>
  </div>
       </li>
      </ul>
    </div>
    <div class="col-sm-6">
     <ul  style={{listStyle: "none",marginBottom:"3px",paddingLeft:"0px"}}>
      <li>
        <div class="card img-fluid rounded border" style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s" ,boxSizing: 'border-box',padding: '10px',border: '2px solid #000',margin:"10px"}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
    <img class="card-img-top" src="https://doccure.dreamstechnologies.com/vuejs/template/img/hreat-pulse.561d4dca.svg" alt="Card image" />
    <div class="card-img-overlay">
      <h3 class="card-text" style={{textAlign:"center",color:"#1e90ff ",paddingTop:"6px"}}>2</h3>
    </div>
    <p style={{textAlign:"center"}}><h6>Set Appointment</h6>Lorem Ipsum is simply dummy text of the printing..</p>
  </div>
        <div class="card img-fluid rounded border" style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s" ,boxSizing: 'border-box',padding: '10px',border: '2px solid #000',margin:"10px"}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
    <img class="card-img-top" src="https://doccure.dreamstechnologies.com/vuejs/template/img/hreat-pulse.561d4dca.svg" alt="Card image" />
    <div class="card-img-overlay">
      <h3 class="card-text" style={{textAlign:"center",color:"#1e90ff ",paddingTop:"6px"}}>4</h3>
    </div>
    <p style={{textAlign:"center"}}><h6>Get Recommendation</h6>Lorem Ipsum is simply dummy text of the printing..</p>
  </div>
      </li>
      </ul>
    </div>
      </div>
    </div>
    <div class="col-sm-7">
      <div class="container">
      <p style={{textAlign:"center" ,marginTop:"70px"}}>
              <span style={{color:"#1e90ff",fontSize:"35px"}}>Easy Steps For </span>
              <span style={{fontSize:"35px"}}> New Patients</span>
      </p>
      <span style={{textAlign:"justify"}}>If one of the valves in your heart becomes diseased it can affect the flow of blood. This can happen in one of two ways: valve stenosis (where the valve does not fully open and obstructs or restricts flow) or valve incompetence (where the valve does not close properly and blood is allowed to leak backwards)....</span>
      <p style={{margin:"20px"}}><button type="submit"  style={buttonStyle}>  <Link to="/Booking" style={{ color: 'white', textDecoration: 'none' }}>Book Appointment </Link> </button></p>
      </div>
    </div>
</div>
</div>
<div class="card img-fluid"style={{height:"530px"}}>
    <img class="card-img-top" src="https://media.istockphoto.com/id/519486429/vector/world-map-with-paper-cut-effect.jpg?s=612x612&w=0&k=20&c=UgX9a9HxAMkpVJ-4BJJQbSdTAL0HBfR8PdqR05L_2qU=" alt="Card image" style={{height:"530px"}}/>
    <div class="card-img-overlay">
    <div class="row">
    <div class="col-sm-6">
    <p style={{textAlign:"center" ,margin:"30px"}}>
      <span style={{fontSize:"35px",}}>What Our </span>
      <span style={{fontSize:"35px",color:"gold"}}> Patients Say</span>
    </p>
    <p>If one of the valves in your heart becomes diseased it can affect the flow of blood. This can happen in one of two ways: valve stenosis (where the valve does not fully open and obstructs or restricts flow) or valve incompetence (where the valve does not close properly and blood is allowed to leak backwards)....</p>
    <p><img src="https://www.androiddata-recovery.com/blog/wp-content/uploads/2021/03/Kaspersky-Internet-Security-for-Android-Ratings-1024x274.png" style={{width:"50%"}}/>(4.8/5)</p>
    <h6 style={{color:"gold"}}>Overall Customer Ratings</h6>
    </div>
    <div class="col-sm-3">
    <ul  style={{listStyle: "none",marginBottom:"3px",paddingLeft:"0px"}}>
      <li>
      <div class="rounded border " style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s", background:"white",boxSizing: 'border-box',padding: '10px',border: '2px solid #000'}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
        <div class="row">
        <div class="col-sm-5" style={{paddingRight:"5px",paddingLeft:"20px"}}>
        <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/feature-14.a36e1f00.jpg" class="rounded-circle" style={{width:"80%"}}/>
        </div>
        <div class="col-sm-7" style={{alignItems:"center",paddingLeft:"0px",marginTop:"6px"}}>
          <h5>Martin Philips</h5>
          <img src="https://tall3dinteriors.com/images/ratings.png" style={{width:"70%"}}/>
        </div>
        </div>
        <h4>“Awesome Impact ”</h4>
        <p>After suffering from a heart condition for a number of years I was very happy to meet Doccure, from the first</p>
      </div>
      </li>
      <li style={{marginTop:"10px"}}>
      <div class="rounded border " style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s", background:"white",boxSizing: 'border-box',padding: '10px',border: '2px solid #000'}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
        <div class="row">
        <div class="col-sm-5" style={{paddingRight:"5px",paddingLeft:"20px"}}>
        <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/feature-14.a36e1f00.jpg" class="rounded-circle" style={{width:"80%"}}/>
        </div>
        <div class="col-sm-7" style={{alignItems:"center",paddingLeft:"0px",marginTop:"6px"}}>
          <h5>Martin Philips</h5>
          <img src="https://tall3dinteriors.com/images/ratings.png" style={{width:"70%"}}/>
        </div>
        </div>
        <h4>“ I Am Very Grateful ”</h4>
        <p>Doctors explains everything clearly and helps you to understand even the most complex medical terms</p>
      </div>
      </li>
    </ul>
    </div>
    <div class="col-sm-3 rounded border " style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s", background:"white",marginTop:"120px",boxSizing: 'border-box',padding: '10px',border: '2px solid #000',height:"243px"}}onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}>
        <div class="row">
        <div class="col-sm-5" style={{paddingRight:"5px",paddingLeft:"20px"}}>
        <img src="https://doccure.dreamstechnologies.com/vuejs/template/img/feature-14.a36e1f00.jpg" class="rounded-circle" style={{width:"80%"}}/>
        </div>
        <div class="col-sm-7" style={{alignItems:"center",paddingLeft:"0px",marginTop:"6px"}}>
          <h5>Martin Philips</h5>
          <img src="https://tall3dinteriors.com/images/ratings.png" style={{width:"70%"}}/>
        </div>
        </div>
        <h4>“ Excellent Clinician ”</h4>
        <p>Excellent clinician. Endlessly patient and reassuring.Also a very efficient back up team. He was prepared to spend as long</p>
      </div>
 
  </div>
    </div>
  </div>
  <br></br>
<div class="card img-fluid" style={{marginRight:"70px", marginLeft:"70px"}}>
    <img class="card-img-top" src="https://th.bing.com/th?id=OIP.NUJXMMuV9N8BigFFuAaKKwAAAA&w=16&h=16&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Card image"style={{height:"330px", borderRadius: '50px',borderBlockColor:"None"}}/>
    <div class="card-img-overlay">
      <ul  style={{listStyle: "none",marginBottom:"3px",paddingLeft:"0px"}}>
        <li>
        <div style={{color:"white",textAlign:"center",paddingRight:"300px",paddingLeft:"260px",marginTop: '50px'}}>
      <h4 class="card-title">JBook An Appointment Today</h4>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
        </li>
        <li><p><img src={heart} style={{ float: 'right',paddingRight:"240px",paddingBottom:"100px" }}/></p></li>
        <li> <img src={hand} style={{ position: 'absolute', bottom: 0, right: 0 }}/></li>
        <li><img src={wall}style={{ position: 'absolute', bottom: 0 }}/></li>
      </ul>
    </div>
  </div>
</div>
  );
}
export default Home;