import React, {Component} from "react"
import { Link } from 'react-router-dom'

import cookie from "react-cookies"
import "whatwg-fetch"


class LeadForm extends Component {
    state = {
        name: "",
        category:"",
        description: "",
        stage: "",
        person: "",
        checking:false,
        errors: {},
    }

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }

    handleChange(event){
        
        const {name, value, type, checked} = event.target
        if (name === "name"){
            if (value.length > 30){
                alert("the title is too long!")
            }
        }
        if (type === "checkbox"){
            this.setState({
                [name]: checked
            })
        } else {
            event.preventDefault()
            this.setState({
                [name]:value
            })
        }
    }

    createLead(data){
        const endpoint = "/api/leads/"
        const csrfToken = cookie.load('csrftoken')
        let thisComp = this
    
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
                    // console.log(responseData)
                    if (thisComp.props.newApiCreated){
                        thisComp.props.newApiCreated(responseData)
                    }
                    thisComp.clearForm()
                })
                .catch(function(error){
                    alert("エラー発生：　", error)
                })
        }
    }

    updateLead(data){
        const {lead} = this.props
        const endpoint = `/api/leads/${lead.id}/`
        const csrfToken = cookie.load('csrftoken')
        let thisComp = this

        if (csrfToken !== undefined) {
            const lookupOptions = {
                method: "PUT", 
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
                    // console.log(responseData)
                    if (thisComp.props.leadItemUpdated){
                        thisComp.props.leadItemUpdated(responseData)
                    }
                })
                .catch(function(error){
                    alert("エラー発生：　", error)
                }
                )
        }
    }

    handleSubmit(event){
        event.preventDefault()
        const data = this.state
        const {lead} = this.props
        if (lead !== undefined) {
            this.updateLead(data)
        } else {
            this.createLead(data)
        }
    }

    clearForm(event){
        if (event){
            event.preventDefault()
        }
        document.createForm.reset()
        this.defaultState()
    }

    defaultState(){
        this.setState({
            name: "",
            category:"",
            description: "",
            stage: "",
            person: "",
        })
    }

    componentDidMount(){
        const {lead} = this.props
        if (lead !== undefined){
            this.setState({
                name: lead.name,
                category:lead.category,
                description: lead.description,
                stage: lead.stage,
                person: lead.person,
            })
        } else {
            this.defaultState()
        }
    }

    render(){
        const {name, description, category, stage, person} = this.state
        const cancelClass = this.props.lead !== undefined ? "d-none" : ""
        const createNoneClass = this.props.lead === undefined ? "d-none" : ""
        return (
            <div>
                <form onSubmit={this.handleSubmit} name="createForm">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            value={name}
                            className="form-control" 
                            placeholder="リード名" 
                            onChange={this.handleChange}
                            required="required"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                        カテゴリー:
                        <select name="category" value={category} onChange={this.handleChange} required="required">
                            <option value="住居（賃貸）">住居（賃貸）</option>
                            <option value="住居（テナント）">住居（テナント）</option>
                            <option value="売買">売買</option>
                            <option value="修繕">修繕</option>
                            <option value="保険">保険</option>
                        </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <textarea
                            type="text" 
                            name="description" 
                            value={description}
                            className="form-control" 
                            placeholder="メモ" 
                            onChange={this.handleChange}
                            required="required"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="person" 
                            value={person}
                            className="form-control" 
                            placeholder="person" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className={`form-group ${createNoneClass}`}>
                        <select 
                            name="stage"
                            value={stage}
                            className="form-control"
                            onChange={this.handleChange}
                        >
                            <option value="suspect">
                                見込み
                            </option>
                            <option value="introduction">
                                OI
                            </option>
                            <option value="opportunity">
                                商機
                            </option>
                            <option value="closing">
                                クロージング
                            </option>
                        </select>
                    </div>

                    <button className="btn btn-primary">Save</button>
                    <button 
                        className={`btn btn-secondary ${cancelClass}`}  
                        onClick={this.clearForm}
                    >Clear</button>

                </form>
                <Link 
                        to={{
                            pathname: `/leads/`,
                            }}
                >
                    Back to Leads
                </Link>
            </div>
        )
    }
}

export default LeadForm