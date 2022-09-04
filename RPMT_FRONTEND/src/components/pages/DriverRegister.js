import React,{useState} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'
import {Container,Row,Col} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

import '../../App.css'

import BackgroundImage from '../../assets/images/image2.jpg'
import NavBarCustom from '../Nav'

export default function Driver() {



    //     const[name,setName]=useState('')
    // const[email,setemail]=useState('')
    // const[username,setusername]=useState('')
    // const[password,setpassword]=useState('')
    // const[telephone,settelepone]=useState('')
    // const[role,setrole]=useState('driver')
    // const[students,setStudents]=useState([])

    // const handleClick=(e)=>{
    //     e.preventDefault()
    //     const customer={name,email,password,telephone,username,password,role}
    //     console.log(customer)
    //     fetch("http://localhost:8080/customer/add",{
    //       method:"POST",
    //       headers:{"Content-Type":"application/json"},
    //       body:JSON.stringify(customer)
    
    //   }).then(()=>{
    //         alert("New Driver added")
    //   })
    // }
    
    const [data, setData] = useState([])

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }
    const  handleSubmit = (e) => {
        e.preventDefault();
        let copyData = { ...data }
        copyData.role ="driver"
        Api.post("/auth/driver/create",copyData).then((res)=>{
            
            // return <Link to="/login"></Link>
        }).catch(err=>{console.log(err)})
    }
    
    return (
        
<div className="text-center">
<NavBarCustom/>
<br/>
<Container>
    <Row>
        <Col>
       
<h2>Driver Register</h2>       
<form onSubmit={handleSubmit}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="fullName" required  onChange={handleChange} />
                </p>
                {/* <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="lname" required onChange={handleChange} />
                </p> */}
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" required onChange={handleChange} />
                </p>
                <p>
                    <label>Telephone</label><br/>
                    <input type="text" name="telephone" required onChange={handleChange} />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={handleChange} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required onChange={handleChange}/>
                </p>

      <p>
                <label>Branch</label><br/>
                <select class="form-select" name="branch" onChange={handleChange} aria-label="Default select example">
                <option selected>Select Branch</option>
                <option value="Colombo">Colombo</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Kalutara">Kalutara</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Kandy">Kandy</option>
                </select>
      </p>
      
    <br></br>
                <p>
                    <button id="sub_btn" type="submit"  >Register</button>
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

