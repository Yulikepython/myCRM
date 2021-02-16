import React, { Component } from "react"

class LeadInline extends Component {
    
    render(){
        const {name, category, description, stage, person, elClass} = this.props
        return(
            <div className={elClass}>
                { name } - { category } - {description} - {stage} - {person}
            </div>
        )
    }
}

export default LeadInline