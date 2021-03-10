import React, {Component} from "react"

import PersonForm from "./PersonForm"

class PersonCreate extends Component{
    render(){
        const {handleNewApi} = this.props.location.state
        console.log(this.props.location.state)
        return (
            <div>
                <h1>Create People</h1>
                <PersonForm newApiCreated={handleNewApi} />
            </div>
        )
    }
}

export default PersonCreate