import React,{useState} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'

import '../../App.css'

export default function SignUpPage() {

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
        Api.post("/auth/signup",data).then((res)=>{
            
            return <Link to="/login"></Link>
        }).catch(err=>{console.log(err)})
    }


    return (
        <div className="text-center m-5-auto">
            <ul>
                <li><a href=''>Student Group</a></li>
            </ul>
            <ul>
                <li><a>Student Group</a></li>
            </ul>
            <ul>
                <li><a>Student Group</a></li>
            </ul>
            
        </div>
    )

}
