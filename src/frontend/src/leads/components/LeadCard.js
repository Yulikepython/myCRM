import React from "react"
import { Card } from 'antd';

const LeadCard = ({name, description}) => {
    return (
        <div className="site-card-border-less-wrapper">
            <Card title={name} bordered={false} style={{ width: 300 }}>
            <p>{description}</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
        </div>
    )
}

export default LeadCard
  
