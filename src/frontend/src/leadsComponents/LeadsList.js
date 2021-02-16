import React, {Component } from "react"

class LeadsList extends Component {
    state = {
        view:"Lead List View", 
        api: "",
    }

    componentDidMount(){
        fetch("/api/leads")
            .then(response => response.json())
            .then(dataList => {
                this.setState({
                    api:dataList,
                })
            })
    }

    render(){
        return(
            <div>
                {this.state.view}
            </div>
        )
    }
}

export default LeadsList