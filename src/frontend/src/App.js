import React, { Component } from "react"
import LeadsList from "./leads/leadsContainers/LeadsList"
import { Button } from 'antd'
// import stepView from "./leads/leadsComponents/StepView"
import './App.css'

class App extends Component {
    render(){
        return(
            <div className="container mt-3">
                My CRM is working!
                <LeadsList />
                <hr />
                {/* <stepView /> */}
            </div>
        )
    }
}

export default App