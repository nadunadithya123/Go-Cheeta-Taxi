import React,{useState} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'

import '../../App.css'
import NavBarCustom from '../Nav'

export default function SubType() {

    const [data, setData] = useState([])

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
        Api.post("/submissiontype/create",data).then((res)=>{
            
            return <Link to="/login"></Link>
        }).catch(err=>{console.log(err)})
    }


    return (
        <div className="text-center">
            <NavBarCustom/>
            <h5>Create Submission Type</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" required onChange={handleChange} />
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" name="description" required onChange={handleChange} />
                </p>
                <p>
                    <label>Type</label><br/>
                    <select  name="type" required onChange={handleChange} >
                        <option value={"pdf"}>PDF</option>
                        <option value={"word"}>WORD</option>
                        <option value={"pptx"}>PPTX</option>
                        <option value={"video"}>VIDEO</option>
                    </select>
                </p>
                <p>
                    <label>Deadline</label><br/>
                    <input type="date" name="date" required onChange={handleChange} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            
        </div>
    )

}
