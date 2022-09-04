import React,{useState , useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'
import Table from 'react-bootstrap/Table';

import '../../App.css'
import NavBarCustom from '../Nav'

export default function ViewReports() {

    const [data, setData] = useState([])
    const [haveGroup, setHaveGroup] = useState(false)

    useEffect(()=>{
       if(localStorage.getItem("af-group") !== undefined){
           setHaveGroup(false)

           Api.post("/studentgroups/byId" ,{groupId : localStorage.getItem("af-group")}).then((res)=>{
               setData(res.data)
               setHaveGroup(true)
               console.log(res.data)
           }).catch((err)=>{
               console.error(err)
           })
       } 


    },[])

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
        Api.post("/studentgroups/create",data).then((res)=>{
            
            return <Link to="/login"></Link>
        }).catch(err=>{console.log(err)})
    }


    return (
        <div className="text-center">
            <NavBarCustom/>
            
            <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>ID</th>
          <th>Pickup</th>
          <th>Destination</th>
          <th>Driver</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Kalutara</td>
          <td>Colombo</td>
          <td>DR01</td>
          <td>200.00</td>
        </tr>
        
      </tbody>
    </Table>

            
        </div>
    )

}
