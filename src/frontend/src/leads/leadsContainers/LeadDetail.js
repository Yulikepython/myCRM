import React, { Component } from "react"
import LeadCard from "../components/LeadCard"
import cookie from "react-cookies"
import 'whatwg-fetch'
import { Link } from 'react-router-dom'

import LeadForm from "../leadsContainers/LeadForm"


class LeadDetail extends Component{

    constructor(props){
        super(props)
        this.state = {
            id:null,
            leadItem: "",
            doneLoading:false
        }
        this.handleLeadItemUpdated = this.handleLeadItemUpdated.bind(this)
        }
    
    handleLeadItemUpdated(leadItemData){
        this.setState({
            leadItem: leadItemData
        })
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
        const {doneLoading, leadItem} = this.state
        const displayText = doneLoading ? < LeadCard st={leadItem}/> : "loading..."
        return (
            <div>
                <div>{displayText}</div>
                <Link 
                        to={{
                            pathname: `/leads/`,
                            }}
                >Back to Leads</Link>
                {leadItem.owner === true ? <LeadForm lead={leadItem} leadItemUpdated={this.handleLeadItemUpdated} /> : ""}
            </div>
            
        )
    }
}

export default LeadDetail