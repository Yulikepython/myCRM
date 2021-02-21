import React, { Component } from "react"
import LeadCard from "../components/LeadCard"
import cookie from "react-cookies"
import 'whatwg-fetch'
import { Link } from 'react-router-dom'


class LeadDetail extends Component{

    constructor(props){
        super(props)
        this.state = {
            id:null,
            leadItem: "",
            doneLoading:false
        }
        }

    loadLeadDetail(id){
        let thisComp = this
        const endpoint = `/api/leads/${id}/`
        const lookupOptions = {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        }

        const csrfToken = cookie.load('csrftoken')
        if (csrfToken !== undefined) {
            lookupOptions["credentials"] = 'include'
            lookupOptions["headers"]["X-CSRFToken"] = csrfToken
        }

        
        fetch(endpoint, lookupOptions)
            .then(function(response){
                if (response.status == 404){
                    console.log('Page not found')
                }
                return response.json()
            }).then(function(responseData){
                if (responseData.detail){
                    thisComp.setState({
                        doneLoading: true,
                        leadItem: null
                    })
                } else {
                thisComp.setState({
                        doneLoading: true,
                        leadItem: responseData,
                    })
                }
            }).catch(function(error){
                console.log("error", error)
            })
    }

    componentDidMount(){
        this.setState({
            id: null,
            leadItem: ""
        })
    if (this.props.match){
        const {id} = this.props.match.params
        this.setState({
            id: id,
            doneLoading: false
        })
        this.loadLeadDetail(id)
    }
    }
    render(){
        const displayText = this.state.doneLoading ? < LeadCard st={this.state.leadItem}/> : "loading..."
        return (
            <div>
                <p>{displayText}</p>
                <Link 
                        to={{
                            pathname: `/leads/`,
                            }}
                >Back to Leads</Link>
                {this.state.leadItem.owner === true ? <p>Update Lead</p> : ""}
                
            </div>
            
        )
    }
}

export default LeadDetail