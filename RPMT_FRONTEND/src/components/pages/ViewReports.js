import React,{useState , useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'
import Table from 'react-bootstrap/Table';

import Card from 'react-bootstrap/Card';


import '../../App.css'
import NavBarCustom from '../Nav'

export default function ViewReports() {

    const [data, setData] = useState([])
    const [haveGroup, setHaveGroup] = useState(false)
    const [total, setTotal] = useState(0);
    const [journey, setJourney] = useState([]);
    const [vehicle, setVehicle] = useState([]);

    useEffect(()=>{
        Api.get("/journey/findAll",data).then((res)=>{
          console.log(res)
            setJourney(res.data);
        }).catch(err=>{console.log(err)})
      },[]);

      useEffect(()=>{
        let tot = 0;
        journey.map(value => {
            tot += value.price;
        });
        setTotal(tot);
        
      },[journey]);

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
    useEffect(()=>{
      Api.get("/vehicle/findAll",data).then((res)=>{
          
          setVehicle(res.data);
          
          
         
      }).catch(err=>{console.log(err); })
    },[]);

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }
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
        <br></br>
        <div class="container">
        <div class="row">
            <div class="col-md-4">
        <div class="card" >       
        <div class="card-body">
          <h5 class="card-title">Total Sales</h5>
          <p class="card-text">{total}</p>
          
        </div>
      </div>
      </div>
      <div class="col-md-4">
        <div class="card" >       
        <div class="card-body">
          <h5 class="card-title">Number of Vehicles</h5>
          <p class="card-text"></p>
          
        </div>
      </div>
      </div>
      <div class="col-md-4">
        <div class="card" >       
        <div class="card-body">
          <h5 class="card-title">Drivers</h5>
          <p class="card-text"></p>
          
        </div>
      </div>
      </div>
      </div>
      </div>
      <br></br>
      <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>ID</th>
          <th>Number Plate</th>
          <th>Status</th>
          <th>Driver</th>
          
        </tr>
      </thead>
      <tbody>
     
        {
                    vehicle.map(value => {
                        return(
                            <tr>
                            <td>{value.id}</td>
                            <td>{value.numberPlate}</td>
                            <td>{value.status}</td>
                            <td>{value.driver.userID}</td>
                            
                            
                            </tr>
                           
                        )
                    })
                }
          
       
        
      </tbody>
    </Table>
      </div>

    )

}
