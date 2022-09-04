import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getUserDetails} from "../service/Roles";
import {Container,Row,Col ,Navbar,NavLink,NavDropdown,Nav} from 'react-bootstrap'

export default function NavBarCustom() {

    const[role, setRole] = useState(null);

    const [iscustomer , setIscustomer] = useState(false)
    const [isadmin , setIsadmin] = useState(false)
    const [isdriver , setIsdriver] = useState(false)

    useEffect(()=>{
      setRole(getUserDetails().role);
    },[]);

    useEffect(()=>{   
        if(role==="admin"){
            setIsadmin(true)
        }
        if(role==="customer"){
            setIscustomer(true)
        }
        if(role==="driver"){
          setIsdriver(true)
      }
    },[role])

    useEffect(()=>{
      console.log(iscustomer);
    },[iscustomer]);

    return (
    
      <Navbar  bg="dark" expand="xl" variant="dark">
  <Container>
      <Navbar.Brand href="#home">GoCheeta</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        {(isadmin) && <Nav.Link href="./home">Home</Nav.Link>}
        {(isadmin) && <Nav.Link href="./DriverRegister">Register Driver  </Nav.Link>}
        {(isadmin) && <Nav.Link href="./RegisterVehicle">Register Vehicle</Nav.Link>}
        {(isadmin) &&  <Nav.Link href="./ViewReports" >View Reports</Nav.Link>}
        {(isadmin || iscustomer) && <Nav.Link href="./AddJourney" >Add Journey </Nav.Link>}
        {(isadmin || iscustomer) && <Nav.Link href="./ViewJourney" >View Journey</Nav.Link>}
        {(isadmin || isdriver) && <Nav.Link href="/"  >Manage Journey</Nav.Link>}

        <NavDropdown title="Student Grroup" id="basic-nav-dropdown" >
          <NavDropdown.Item href="./stdgroups" >Add Group</NavDropdown.Item>
          <NavDropdown.Item href="./getgroup">My Group</NavDropdown.Item>
        </NavDropdown>


        {/* <NavDropdown title="Submission" id="basic-nav-dropdown" >
          <NavDropdown.Item href="./subtype" hidden={!isStaff} >Add Submission type</NavDropdown.Item>
          <NavDropdown.Item href="./allsubtype" >View Submission type</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Request" id="basic-nav-dropdown">
          <NavDropdown.Item href="./send" hidden={!isStudent}>Send new request</NavDropdown.Item>
          <NavDropdown.Item href="./req/all" hidden={!isStaff}>Recived request</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       
    )
}


