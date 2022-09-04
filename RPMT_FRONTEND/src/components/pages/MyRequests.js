import React,{useState , useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'

import '../../App.css'
import NavBarCustom from '../Nav'

export default function MyRequest() {

    const [data, setData] = useState([])
    const [haveGroup, setHaveGroup] = useState(false)

    useEffect(()=>{
       if(localStorage.getItem("af-group") !== undefined){
           setHaveGroup(false)

           Api.get("/request/all").then((res)=>{
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
     
    }


    return (
        <div className="text-center">
            <NavBarCustom/>
            <h2>Join us</h2>
            <h5>My Request</h5>
           {data.map((record)=>{
                return( <form onSubmit={handleSubmit}>
                 <p>
                     <label>Category</label><br/>
                     <input type="text" name="category" value={record.category} required onChange={handleChange} disabled={true}/>
                 </p>
                 <p>
                     <label>Topic</label><br/>
                     <input type="text" name="topic" value={record.topic} required onChange={handleChange} disabled={true} />
                 </p>
                 <p>
                     <label>Description</label><br/>
                     <input type="text" name="description" value={record.description} required onChange={handleChange} disabled={true} />
                 </p>
                 <p>
                     <label>Supervisor</label><br/>
                     <input type="text" name="description" value={record.supervisorId} required onChange={handleChange} disabled={true} />
                 </p>
                 <p>
                     <label>Co Supervisor</label><br/>
                     <input type="text" name="description" value={record.cosupervisorId} required onChange={handleChange} disabled={true} />
                 </p>

                 <p>
                     <label>Choosing Role</label><br/>
                     <select type="text" name="role" required onChange={handleChange} >
                         <option value={"supervisor"}>Supervisor</option>
                         <option value={"cosupervisor"}>Co Supervisor</option>
                     </select>
                 </p>

                 <button id='sub_btn' type='submit'>send</button>
             </form>
                )
           })}



            
        </div>
    )

}
