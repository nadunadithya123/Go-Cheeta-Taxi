import React,{useState} from 'react'
import { Link,useHistory } from "react-router-dom";
import Api from "../../service/Api";
import {Container,Row,Col} from 'react-bootstrap'
import {setUserDetails} from '../../service/Roles';

import '../../App.css'

import BackgroundImage from '../../assets/images/image5.jpg'

export default function SignInPage() {

    
const history=useHistory()
    const [data, setData] = useState([])

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const copyData = { ...data }
        Api.post("/auth/login",data).then((res)=>{
            console.log(res)
            // localStorage.setItem("af-head", res.data.jwtheader)
            // localStorage.setItem("af-userrole", res.data.role)

            setUserDetails(res.data);
            history.push("/home")
        }).catch(err=>{console.log(err)})

    
    }
    return (
        <div className="text-center m-5-auto">
            
            <Container>
                <Row>
                    <Col>
                    <h1>GoCheeta Login</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" onChange={handleChange}  required />
                </p>
                <p>
                    <label>Password</label>
                    
                    <br/>
                    <input type="password" name="password" required  onChange={handleChange} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
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
    height: "60vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}