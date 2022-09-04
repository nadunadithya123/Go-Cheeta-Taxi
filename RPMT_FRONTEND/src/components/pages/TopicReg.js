import React,{useState , useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'

import '../../App.css'
import NavBarCustom from '../Nav'

export default function Send() {

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
        let copyData = { ...data }
        copyData.groupId = localStorage.getItem("af-group")
        Api.post("/request/send",copyData).then((res)=>{
            
            return <Link to="/login"></Link>
        }).catch(err=>{console.log(err)})
    }


    return (
        <div className="text-center">
            <NavBarCustom/>
            <h2>Join us</h2>
            <h5>Send Request</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Category</label><br/>
                    <input type="text" name="category" required onChange={handleChange} />
                </p>
                <p>
                    <label>Topic</label><br/>
                    <input type="text" name="topic" required onChange={handleChange} />
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" name="description" required onChange={handleChange} />
                </p>
                <button id="sub_btn" type='submit'>send</button>
            </form>


            
        </div>
    )

}
