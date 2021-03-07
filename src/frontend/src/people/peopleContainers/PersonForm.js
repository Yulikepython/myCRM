import React, {Component} from "react"
import { Link } from 'react-router-dom'

import cookie from "react-cookies"
import "whatwg-fetch"

class PersonForm extends Component {
    state = {
        lastName:"",
        firstName:"",
        email:"",
        phone_number:"",
    }

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        if (name === "lastName"){
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

    createPerson(data){
        const endpoint = "/api/people/"
        const csrfToken = cookie.load('csrftoken')
        // let thisComp = this
    
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
                    // if (thisComp.props.newApiCreated){
                    //     thisComp.props.newApiCreated(responseData)
                    // }
                    this.clearForm()
                })
                .catch(function(error){
                    alert("エラー発生：　", error)
                })
        }
    }

    updatePerson(data){
        const {person} = this.props
        const endpoint = `/api/people/${person.id}/`
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
                    if (thisComp.props.personItemUpdated){
                        thisComp.props.personItemUpdated(responseData)
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
        const {person} = this.props
        if (person !== undefined) {
            this.updatePerson(data)
        } else {
            this.createPerson(data)
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
            lastName:"",
            firstName:"",
            email:"",
            phone_number:"",
        })
    }

    componentDidMount(){
        const {person} = this.props
        if (person !== undefined){
            this.setState({
                lastName: person.lastName,
                firstName: person.firstName !== null ? person.firstName: "",
                email: person.email !== null ? person.email: "" ,
                phone_number: person.phone_number !== null ? person.phone_number : "",
            })
        } else {
            this.defaultState()
        }
    }

    render(){
        const {lastName, firstName, email, phone_number} = this.state
        const cancelClass = this.props.person !== undefined ? "d-none" : ""

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="lastName" 
                            value={this.state.lastName}
                            className="form-control" 
                            placeholder="名字" 
                            onChange={this.handleChange}
                            required="required"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="firstName" 
                            value={firstName}
                            className="form-control" 
                            placeholder="名前" 
                            onChange={this.handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email" 
                            name="email" 
                            value={email}
                            className="form-control" 
                            placeholder="Email Address" 
                            onChange={this.handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" 
                            name="phone_number" 
                            value={phone_number}
                            className="form-control" 
                            placeholder="電話番号" 
                            onChange={this.handleChange}

                        />
                    </div>
                    <button className="btn btn-primary">Save</button>
                    <button 
                        className={`btn btn-secondary ${cancelClass}`}  
                        onClick={this.clearForm}
                    >Clear</button>

                </form>
                <Link 
                        to={{
                            pathname: `/people/`,
                            }}
                >
                    Back to people
                </Link>

            </div>
        )
    }
}

export default PersonForm