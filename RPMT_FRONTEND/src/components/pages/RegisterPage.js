import React,{useState} from 'react'
import { Link, NavLink, Redirect ,useHistory} from 'react-router-dom'
import Api from '../../service/Api'
import {Container,Row,Col} from 'react-bootstrap'

import '../../App.css'

import BackgroundImage from '../../assets/images/image2.jpg'
import NavBarCustom from '../Nav'
export default function SignUpPage() {

    const [data, setData] = useState([])
    const history = useHistory()

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
        copyData.role ="customer"
        Api.post("/auth/customer/signup",copyData).then((res)=>{
            
            if(res.status == 201){
                history.push("/login")
            }
        }).catch(err=>{console.log(err)})
    }

//     const[name,setName]=useState('')
//     const[email,setemail]=useState('')
//     const[username,setusername]=useState('')
//     const[password,setpassword]=useState('')
//     const[telephone,settelepone]=useState('')
//     const[role,setrole]=useState('customer')
//     const[students,setStudents]=useState([])
//     //  const classes = useStyles();

//   const handleClick=(e)=>{
//     e.preventDefault()
//     const customer={name,email,password,telephone,username,password,role}
//     console.log(customer)
//     fetch("http://localhost:8080/api/vi/auth/customer/signup",{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify(customer)

//   }).then(()=>{
//         alert("New Student added")
//   })
// }


    return (
        <div className="text-center m-5-auto">
            <Container>
                <Row>
                    <Col>
                    <h1>Join us GO Cheeta</h1>
            <h5>Create Your account</h5>
                    
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" id="name" name="fullName" required onChange={handleChange} />
                </p>
                {/* <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="lname" required  />
                </p> */}
                <p>
                    <label>Email address</label><br/>
                    <input type="email" id="email" name="email" required  onChange={handleChange}/>
                </p>
                
                <p>
                    <label>Telephone</label><br/>
                    <input type="text" id="telephone" name="telephone" required onChange={handleChange}/>
                </p>
                <p>
                <p>
                    <label>Username</label><br/>
                    <input type="text" id="username" name="username" required onChange={handleChange} />
                </p>
                    <label>Password</label><br/>
                    <input type="password" id="password" name="password" required onChange={handleChange} />
                </p>
                <p>
                    <button id="sub_btn"  type="submit">Register </button>
                </p>
                {/* <a href='./studentRegister'>Are you student</a><br></br> */}
                <a href='./login'>Login</a>
                <p><Link to="/">Back to Homepage</Link>.</p>
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
