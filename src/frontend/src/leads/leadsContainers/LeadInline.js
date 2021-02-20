import React, { Component } from "react"
import { Steps } from 'antd';

class LeadInline extends Component {
    
    render(){
        const {id, name, category, description, stage, stageNum, person} = this.props
        const { Step } = Steps;
        const shortenDescription = description.length > 30 ? description.slice(0,30) + "...（続き）"
                                    :description

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
                    <td>{shortenDescription}</td>
                </tr>
        )
    }
}

export default LeadInline