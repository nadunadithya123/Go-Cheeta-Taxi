import React,{useState , useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'

import '../../App.css'
import NavBarCustom from '../Nav'

export default function SubmissionView() {

    const [data, setData] = useState([])
    const [haveGroup, setHaveGroup] = useState(false)

    useEffect(()=>{
       if(localStorage.getItem("af-group") !== undefined){
           setHaveGroup(false)

           Api.get("/submissiontype/all").then((res)=>{
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
            <h5>View Submission Type</h5>
           {data.map((record)=>{
                return( 
                    <form onSubmit={handleSubmit}>
                    <p>
                        <label>Name</label><br/>
                        <input type="text" name="name"  value={record.name} required onChange={handleChange} disabled={true} />
                    </p>
                    <p>
                        <label>Description</label><br/>
                        <input type="text" name="description" value={record.description} required onChange={handleChange} />
                    </p>
                    <p>
                        <label>Type</label><br/>
                        <select  name="type" required  value={record.type} onChange={handleChange} >
                            <option value={"pdf"}>PDF</option>
                            <option value={"word"}>WORD</option>
                            <option value={"pptx"}>PPTX</option>
                            <option value={"video"}>VIDEO</option>
                        </select>
                    </p>
                    <p>
                        <label>Deadline</label><br/>
                        <input type="date" name="date" required value={record.deadDate} onChange={handleChange} />
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Register</button>
                    </p>
                </form>
                )
           })}



            
        </div>
    )

}
