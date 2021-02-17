import React, { Component } from "react"

class LeadInline extends Component {
    
    render(){
        const {name, category, description, stage, person, elClass} = this.props
        const showContent = elClass.includes("card") ? "d-block": "d-none"

        return(
            <div>
                <p>
                    { name } - { category } - <span className={elClass}> {description} - {stage} - {person} </span>
                </p>
            </div>
        )
    }
}

export default LeadInline