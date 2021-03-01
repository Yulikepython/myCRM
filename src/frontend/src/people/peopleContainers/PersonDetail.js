import React, { Component } from "react"
import cookie from "react-cookies"
import 'whatwg-fetch'
import { Link } from 'react-router-dom'
import PersonForm from "./PersonForm"


class PersonDetail extends Component{

    constructor(props){
        super(props)
        this.state = {
            id:null,
            personItem: "",
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
        const endpoint = `/api/people/${id}/`
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
                        personItem: null
                    })
                } else {
                thisComp.setState({      
                        doneLoading: true,
                        personItem: responseData,
                    })
                }
            }).catch(function(error){
                console.log("error", error)
            })
    }

    componentDidMount(){
        this.setState({
            id: null,
            personItem: ""
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
        const {doneLoading, personItem} = this.state
        
        return (
            <div>
                <ul>
                    <li>
                        {personItem.lastName} {personItem.firstName}
                    </li>
                    <li>
                        {personItem.email}
                    </li>
                    <li>
                        {personItem.phone_number}
                    </li>
                </ul>
                <Link 
                        to={{
                            pathname: `/people/`,
                            }}
                >Back to People</Link>
                <PersonForm />
            </div>
            
        )
    }
}

export default PersonDetail