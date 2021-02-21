import React from "react"
import { Card } from 'antd';

const LeadCard = (props) => {
    return (
        <div className="site-card-border-less-wrapper">
            <Card title={props.st.name} bordered={false} style={{ width: 300 }}>
                <p>カテゴリー：　{props.st.category}</p>
                <p>{props.st.description}</p>
                <p>{props.st.step}</p>
            </Card>
        </div>
    )
}

export default LeadCard
  
