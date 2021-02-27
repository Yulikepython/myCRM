import React, {Component} from "react"

import LeadForm from "./LeadForm"

class LeadCreate extends Component{
    render(){
        return (
            <div>
                <h1>Create Lead</h1>
                <LeadForm />
            </div>
        )
    }
}

export default LeadCreate