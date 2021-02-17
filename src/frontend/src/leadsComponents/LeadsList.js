import React, {Component } from "react"
import "whatwg-fetch"
import cookie from "react-cookies"

import LeadInline from "./LeadInline"
import LeadCreate from "./LeadCreate"

class LeadsList extends Component {
    constructor(props){
        super(props)
        this.toggleLeadListClass = this.toggleLeadListClass.bind(this)
    }
    state = {
        view:"Lead List View", 
        leads: [],
        leadListClass: "card my-2 p-3",
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

    toggleLeadListClass(event){
        event.preventDefault()
        this.setState(prevState => {
            if (prevState.leadListClass === ""){
                return {leadListClass: "card my-2 p-3"}
            } else {
                return {leadListClass: ""}
            }
        })
    }

    componentDidMount(){
        this.setState({
            leads: [],
        })
        this.loadLeads()
    }

    render(){
        const {leads, leadListClass} = this.state
        return(
            <div>
                <p>{this.state.view}</p>
                <button onClick={this.toggleLeadListClass}>Toggle Class</button>
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
                <LeadCreate />
            </div>
        )
    }
}

export default LeadsList