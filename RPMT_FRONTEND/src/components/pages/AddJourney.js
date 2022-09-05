import React,{useState, useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'
import {Container,Row,Col} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

import '../../App.css'

import BackgroundImage from '../../assets/images/image2.jpg'
import NavBarCustom from '../Nav'

export default function AddJourney() {



    const [data, setData] = useState([])
    const [vehicle, setVehicle] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let copyData = { ...data }
        // copyData.role="STUDENT"
        Api.post("/journey/create",copyData).then((res)=>{
            
            // return <Link to="/login"></Link>
        }).catch(err=>{console.log(err)})
    }
    useEffect(()=>{
        Api.get("/vehicle/findAll",data).then((res)=>{
            setVehicle(res.data);
        }).catch(err=>{console.log(err)})
      },[]);
    
                const[number1, setnumber1]=useState(0)
                const[number2, setnumber2]=useState(120)
                const[total, setTotal]=useState(number1*number2);

           function ADD(e){
            e.preventDefault()
            setTotal(number1* number2);
                    }
                    

    return (
        
<div className="text-center">
<NavBarCustom/>
<br/>
<Container>
    <Row>
        <Col>
       
<h1>Add Journey</h1>       
<form onSubmit={handleSubmit}>
                {/* <p>
                    <label>First Name</label><br/>
                    <input type="text" name="fname" required onChange={handleChange} />
                </p> */}
                {/* <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="lname" required onChange={handleChange} />
                </p> */}
                   <p>
                <label>Vehicle</label><br/>
                
                <select class="form-select" name="vehicle" onChange={handleChange} aria-label="Default select example">
                <option selected hidden>Select Vehicle</option>
                {
                    vehicle.map(value => {
                        return(
                            <option value={value.id}>{value.type}</option>
                        )
                    })
                }
                </select>
      </p>
                
                <p>
                <label>Pickup Location</label><br/>
                <select class="form-select" name="pickup" onChange={handleChange} aria-label="Default select example">
                <option selected>Pickup Location</option>
                <option value="Colombo">Colombo</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Kalutara">Kalutara</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Kandy">Kandy</option>
                </select>
      </p>
      <p>
                <label>Destination Location</label><br/>
                <select class="form-select" name="destination" onChange={handleChange} aria-label="Default select example">
                <option selected>Destination Location</option>
                <option value="Colombo">Colombo</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Kalutara">Kalutara</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Kandy">Kandy</option>
                </select>
      </p>
      
      
      <p>
                <label>KM</label><br/>
                <input type="number" name="distance"   required onChange={handleChange} />
                </p>
                <div class ='hello'>
                <p>
                    <button id="sub_btn"  onClick={ADD}>Calculate</button>
                </p>
                </div>
                
                
                <p>                
                    <label>Price</label><br/>
                    <input type="price" name="price"   required onChange={handleChange}  />
                </p>
                
                


                {/* <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={handleChange} />
                </p> */}
      
    <br></br>
                <p>
                    
                    <button id="sub_btn" type="submit">Add Journey</button>
                </p>
                {/* <a href='./register'>Are you Staff</a><br></br>
                <a href='./login'>Login</a> */}
            </form>
        </Col>
        <Col>
        <header style={ HeaderStyle }>

</header>
        </Col>
    </Row>
</Container>


</div>
    )

}

const HeaderStyle = {
    width: "100%",
    height: "80vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
 


