import React,{useState,useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'

import '../../App.css'
import NavBarCustom from '../Nav'

export default function MyStdGroups() {

    const [data, setData] = useState([])
    const [haveGroup, setHaveGroup] = useState(false)


    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }
    useEffect(()=>{
        if(localStorage.getItem("af-group") !== undefined){
            setHaveGroup(true)
 
            Api.post("/studentgroups/byId" ,{groupId : localStorage.getItem("af-group")}).then((res)=>{
                setData(res.data)
                console.log(res.data)
            }).catch((err)=>{
                console.error(err)
            })
        } 
 
 
     },[])


    return (
        <div className="text-center">
            <NavBarCustom/>
            <h2>Join us</h2>
            <h5>My Student Group</h5>
            <form>
                <p>
                    <label>Topic</label><br/>
                    <input type="text" name="topic" value={data.topic} required onChange={handleChange}  disabled/>
                </p>
                <p>
                    <label>Member 1</label><br/>
                    <input type="text" name="member1Id" value={data.member1Id}  required onChange={handleChange} disabled/>
                </p>
                <p>
                    <label>Member 2</label><br/>
                    <input type="text" name="member2Id" value={data.member2Id}  required onChange={handleChange} disabled/>
                </p>
                <p>
                    <label>Member 3</label><br/>
                    <input type="text" name="member3Id" value={data.member3Id}  required onChange={handleChange} disabled/>
                </p>
                <p>
                    <label>Member 4</label><br/>
                    <input type="text" name="member4Id"  value={data.member4Id} required onChange={handleChange} disabled/>
                </p>
                <p>
                    <label>Supervisor</label><br/>
                    <input type="text" name="supervisorId" value={data.supervisorId}  required onChange={handleChange} disabled/>
                </p>
                <p>
                    <label>Co supervisor</label><br/>
                    <input type="text" name="cosupervisorId"  value={data.cosupervisorId} required onChange={handleChange} disabled/>
                </p>

                <a href='./send'>request supervisor/co sipervisor</a>
            </form>
            
        </div>
    )

}
