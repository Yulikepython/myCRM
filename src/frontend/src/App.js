import React, { Component } from "react"
import LeadsList from "./leads/leadsContainers/LeadsList"
// import stepView from "./leads/leadsComponents/StepView"

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