import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


import {Container,Row,Col ,Navbar,NavLink,NavDropdown,Nav} from 'react-bootstrap'

import '../../App.css'

import BackgroundImage from '../../assets/images/bg.jpg'
import NavBarCustom from '../Nav'

export default function HomePage() {

    const [isStudent , setIsStudent] = useState(false)
    const [isStafft , setIsStaff] = useState(false)

    useEffect(()=>{
        let role =  localStorage.getItem("af-userrole")

        if(role==="STUDENT"){
            setIsStudent(true)
        }
        if(role==="STAFF"){
            setIsStaff(true)
        }

    },[])
    return (
        <div>
            <NavBarCustom/>
        <header style={ HeaderStyle }>
            
        </header>
       
        </div>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    ba : "50%"
}
