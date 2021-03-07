import React, {Component} from "react"

import LeadForm from "./LeadForm"

class LeadCreate extends Component{
    render(){
        const {handleNewApi} = this.props.location.state
        return (
            <div>
                <h1>Create Lead</h1>
                <LeadForm newApiCreated={handleNewApi} />
            </div>
        )
    }
}

export default LeadCreate