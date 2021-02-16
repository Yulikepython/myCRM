import React, {Component } from "react"
import "whatwg-fetch"
import cookie from "react-cookies"

import LeadInline from "./LeadInline"

class LeadsList extends Component {
    state = {
        view:"Lead List View", 
        leads: [],
        leadListClass: "card my-2",
    }

    loadLeads(){
        const endpoint = "/api/leads/create/"
        let thisComp = this
        const lookupOptions = {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(endpoint, lookupOptions)
            .then(response => response.json())
            .then(responseData => {
                thisComp.setState({
                    leads: responseData
                })
            })
            .catch(error=> console.log("error: ", error))
    }

    createLead(){
        const endpoint = "/api/leads/create/"
        const csrfToken = cookie.load('csrftoken')
        let data = {
            name: "",
            category: "",
            description:  "",
            stage: "",
            person: "",
        }

        if (csrfToken !== undefined) {
            const lookupOptions = {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken
                },
                body: JSON.stringify(data),
                credentials: "include"
            }
            fetch(endpoint, lookupOptions)
                .then(response => response.json())
                .then(responseData => {
                    console.log(responseData)
                })
                .catch(error=> console.log("error: ", error))
        }

    }

    componentDidMount(){
        this.setState({
            leads: []
        })
        this.loadLeads()
    }

    render(){
        const {leads, leadListClass} = this.state
        return(
            <div>
                {this.state.view}
                {leads.length > 0 ? 
                    leads.map((leadItem, index)=>{
                        return (
                            <LeadInline 
                                key={index}
                                name = {leadItem.name}
                                category={leadItem.category}
                                description={leadItem.description}
                                stage={leadItem.stage}
                                person={leadItem.person}
                                elClass={leadListClass}
                            />
                        )
                    }) : 
                    '<p>No Leads Found</p>'
                }
                
            </div>
        )
    }
}

export default LeadsList