import React, { Component } from "react"

class LeadInline extends Component {
    
    render(){
        const {id, name, category, description, stage, person, elClass} = this.props
        const showContent = elClass.includes("card") ? "d-block": "d-none"

        return(
                <tr>
                    {/* { category } - {elClass}>  {person} </span> */}
                    <th scope="row">{ id + 1 }</th>
                    <td>{ name }</td>
                    <td>{stage}</td>
                    <td>{description}</td>
                </tr>
        )
    }
}

export default LeadInline