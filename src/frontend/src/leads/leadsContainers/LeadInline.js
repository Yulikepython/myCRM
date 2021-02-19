import React, { Component } from "react"
import { Steps } from 'antd';

class LeadInline extends Component {
    
    render(){
        const {id, name, category, description, stage, stageNum, person, elClass} = this.props
        const showContent = elClass.includes("card") ? "d-block": "d-none"
        const { Step } = Steps;
        return(
                <tr>
                    {/* { category } - {elClass}>  {person} </span> */}
                    <th scope="row">{ id + 1 }</th>
                    <td>{ name }</td>
                    <td>{stage}:
                    <Steps current={stageNum}>
                        <Step title="反響" description="This is a description." />
                        <Step title="案内" subTitle="subtitle" description="This is a description." />
                        <Step title="検討" description="This is a description." />
                        <Step title="クロージング" description="This is a description." />
                    </Steps>,
                    </td>
                    <td>{description}</td>
                </tr>
        )
    }
}

export default LeadInline