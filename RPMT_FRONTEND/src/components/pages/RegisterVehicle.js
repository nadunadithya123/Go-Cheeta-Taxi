import React,{useState, useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from "../../service/Api";
import {Container,Row,Col} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

import '../../App.css'

import BackgroundImage from '../../assets/images/image5.jpg'
import NavBarCustom from '../Nav'

export default function Vehicle() {

    const [data, setData] = useState([]);
    const [drivers, setDrivers] = useState([]);

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
        Api.post("/vehicle/create",copyData).then((res)=>{
            
            // return <Link to="/login"></Link>
        }).catch(err=>{console.log(err)})
    }

    useEffect(()=>{
        Api.get("/driver/findAll",data).then((res)=>{
            setDrivers(res.data);
        }).catch(err=>{console.log(err)})
      },[]);
    

    return (
        
<div className="text-center">
<NavBarCustom/>
<br/>
<Container>
    <Row>
        <Col>
       
<h2>Driver Vehicle</h2>       
<form onSubmit={handleSubmit}>
<p>
                <label>Select Vehicle Type</label><br/>
                <select class="form-select" name="type" onChange={handleChange} aria-label="Default select example">
                <option selected>Select Vehicle</option>
                <option value="Car">Car</option>
                <option value="Van">Van</option>
                <option value="Three Wheel">Three Wheel</option>
                <option value="Bike">Bike</option>
                </select>
      </p>
                {/* <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="lname" required onChange={handleChange} />
                </p> */}
                <p>
                    <label>Number Plate</label><br/>
                    <input type="text" name="numberPlate" required onChange={handleChange} />
                </p>
                {/* <p>
                    <label>Telephone</label><br/>
                    <input type="text" name="batch" required onChange={handleChange} />
                </p> */}
                {/* <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={handleChange} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required onChange={handleChange}/>
                </p> */}

      <p>
                <label>Select Driver</label><br/>
                <select class="form-select" name="driver" onChange={handleChange} aria-label="Default select example">
                <option selected hidden>Select Driver</option>
                {
                    drivers.map(value => {
                        return(
                            <option value={value.userID}>{value.username}</option>
                        )
                    })
                }
                </select>
      </p>
 {/* <p>
                    <label>Select Driver</label><br/>
                    <input type="text" name="driver" required onChange={handleChange} />
                </p> */}

    <br></br>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
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

