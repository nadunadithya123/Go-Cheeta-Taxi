import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'


import './App.css'
import Reports from './components/pages/ViewReports'
import SubType from './components/pages/CreateSubmissionType'
import Driver from './components/pages/DriverRegister'
import MyStdGroups from './components/pages/StudentGroupProfile'
import Send from './components/pages/TopicReg'
import MyRequest from './components/pages/MyRequests'
import SubmissionView from './components/pages/SubmissionView'
import Vehicle from './components/pages/RegisterVehicle'
import Journey from './components/pages/AddJourney'
import ViewJourney from './components/pages/ViewJourney'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/DriverRegister" component={ Driver } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/ViewReports" component={Reports}/>
                    <Route path="/getgroup" component={MyStdGroups}/>
                    <Route path="/send" component={Send}/>
                    <Route path="/req/all" component={MyRequest}/>
                    <Route path="/subtype" component={SubType}/>
                    <Route path="/allsubtype" component={SubmissionView}/>
                    <Route path="/RegisterVehicle" component={Vehicle}/>
                    <Route path="/AddJourney" component={Journey}/>
                    <Route path="/ViewJourney" component={ViewJourney}/>
                </Switch>
           
            </div>
        </Router>
    )
}



const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}