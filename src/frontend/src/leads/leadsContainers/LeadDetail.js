import React, { Component } from "react"
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
        this.loadLeadDetail = this.loadLeadDetail.bind(this)
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
                console.log('in the function:', responseData)
                const {name} = responseData
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
        console.log("mount")
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
        console.log('render', this.state)
        return (
            <div>
                <p>{this.leadItem.name}</p>
            </div>
            
        )
    }
}

export default LeadDetail