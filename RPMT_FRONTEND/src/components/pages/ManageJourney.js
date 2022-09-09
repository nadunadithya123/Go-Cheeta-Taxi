import React,{useState , useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'
import Table from 'react-bootstrap/Table';
import {getUserDetails} from "../../service/Roles";

import '../../App.css'
import NavBarCustom from '../Nav'

export default function ManageJourney() {

    const [data, setData] = useState([])
    const [haveGroup, setHaveGroup] = useState(false)
    const [journey, setJourney] = useState([]);
    const [vehicle, setVehicle] = useState([]);
    const[role, setRole] = useState(null);

    useEffect(()=>{
        Api.get("/journey/findAll",data).then((res)=>{
          console.log(res)
            setJourney(res.data);
        }).catch(err=>{console.log(err)})
      },[]);

      useEffect(()=>{
        setRole(getUserDetails().role);
      },[]);

      function alert2(){
        alert("Journey Accepted");
    }
    // useEffect(()=>{
    //    if(localStorage.getItem("af-group") !== undefined){
    //        setHaveGroup(false)

    //        Api.post("/studentgroups/byId" ,{groupId : localStorage.getItem("af-group")}).then((res)=>{
    //            setData(res.data)
    //            setHaveGroup(true)
    //            console.log(res.data)
    //        }).catch((err)=>{
    //            console.error(err)
    //        })
    //    } 


    // },[])


    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setData({
    //         ...data,
    //         [e.target.name]: value
    //     });
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const copyData = { ...data }
    //     Api.post("/studentgroups/create",data).then((res)=>{
            
    //         return <Link to="/login"></Link>
    //     }).catch(err=>{console.log(err)})
    // }


    return (
        <div className="text-center">
            <NavBarCustom/>
            
            <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Journey ID</th>
          <th>Pickup</th>
          <th>Destination</th>
          <th>Distance</th>
          <th>Price</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
     
        {
                    journey.map(value => {
                      if(getUserDetails().userID == value.vehicle.driver.userID) {
                        return(
                          <tr>
                          <td>{value.id}</td>
                          <td>{value.pickup}</td>
                          <td>{value.destination}</td>
                          <td>{value.distance}</td>
                          <td>{value.price}</td>
                          <td><button type="button" class="btn btn-primary" onClick={alert2}>Accept</button></td>
                          </tr>                         
                      )
                      }
                    })
                }
          
       
        
      </tbody>
    </Table>

            
        </div>
    )

}
