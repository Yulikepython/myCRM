import React, { Component } from "react"

import loadAPIs from "../../functions/loadAPIs"

export default class LeadDetail extends Component{
    state = {
        id:null,
        leadItem: null,
        doneLoading:false,
    }

    loadLeadDetail(id){
        let thisComp = this
        const lookupOptions = {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("/api/leads/{id}", lookupOptions)
            .then(response => response.json())
            .then(responseData => {
                thisComp.setState({
                    loadItem: responseData,
                    doneLoading:true
                })
            })
            .catch(error=> console.log("error: ", error))
}

    componentDidMount(){
        this.setState({
            id:null,
            leadItem: null
        })
        if (this.props.match){
            const {id} = this.props.match.params
            console.log('id',id)
            this.setState({
                id:id,
                doneLoading:false,
            })
            this.loadLeadDetail(id)
            console.log(this.state)
        }
    }
    render(){
        const {id, doneLoading} = this.state
        return (
            <div>
                <p>{this.state.loadItem}</p>
            </div>
            
        )
    }
}