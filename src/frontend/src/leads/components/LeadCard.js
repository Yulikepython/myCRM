import React from "react"
import { Card } from 'antd';

const LeadCard = (props) => {
    return (
        <div className="site-card-border-less-wrapper">
            <Card title={props.st.name} bordered={false} style={{ width: 300 }}>
                <div>カテゴリー：　{props.st.category}</div>
                <div>{props.st.description}</div>
                <div>{props.st.stage}</div>
            </Card>
        </div>
)
}

export default LeadCard
  
