import React, { Component } from "react"

import LeadsList from "./leadsComponents/LeadsList"

class App extends Component {
    render(){
        return(
            <div className="container mt-3">
                My CRM is working!
                <LeadsList />
            </div>
        )
    }
}

export default App