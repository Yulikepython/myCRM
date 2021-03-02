import React, { Component } from "react"
import cookie from "react-cookies"
import 'whatwg-fetch'
import {Descriptions } from "antd"
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
        this.handlePersonItemUpdated = this.handlePersonItemUpdated.bind(this)
        }
    
    handlePersonItemUpdated(personItemData){
        this.setState({
            personItem: personItemData
        })
    }

    loadPersonDetail(id){
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
        this.loadPersonDetail(id)
    }
    }
    render(){
        const {doneLoading, personItem} = this.state
        return (
            <div>
                <Descriptions title="User Info" bordered={true}>
                    <Descriptions.Item label="名前" className="d-block">
                                {personItem.lastName} {personItem.firstName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Eメール"className="d-block" >
                        {personItem.email}
                    </Descriptions.Item>
                    <Descriptions.Item label="電話番号" className="d-block" >
                        {personItem.phone_number}
                    </Descriptions.Item>
                    <Descriptions.Item label="Remark" className="d-block">
                        empty
                    </Descriptions.Item>
                </Descriptions>
                { personItem.owner === true ? <PersonForm person={personItem} personItemUpdated={this.handlePersonItemUpdated} /> : ""}
            </div>
            
        )
    }
}

export default PersonDetail