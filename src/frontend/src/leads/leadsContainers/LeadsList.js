import React, {Component } from "react"
import cookie from "react-cookies"
import { Link } from "react-router-dom"
import "whatwg-fetch"


//function
import loadAPIs from "../../functions/loadAPIs"

//other components
import LeadInline from "./LeadInline"
import LeadForm from "../leadsContainers/LeadForm"

class LeadsList extends Component {
    constructor(props){
        super(props)
        this.changeCreateFormClass = this.changeCreateFormClass.bind(this)
        this.handleNewApi = this.handleNewApi.bind(this)
    }
    state = {
        view:"Lead List View", 
        apiList: [],
        createFormClass: "d-none",
    }

    handleNewApi(newApiList){
        const currentApiList = this.state.apiList
        currentApiList.push(newApiList)
        this.setState({
            apiList: currentApiList
        })
    }

    changeCreateFormClass(event){
        event.preventDefault()
        this.setState(prevState => {
            if (prevState.createFormClass === "d-none"){
                return {createFormClass: "d-block"}
            } else {
                return {createFormClass: "d-none"}
            }
        })
    }

    componentDidMount(){
        this.setState({
            apiList: [],
        })
        loadAPIs(this, "/api/leads/")
    }

    render(){
        const {apiList} = this.state
        const csrfToken = cookie.load('csrftoken')
        return(
            <div>
                <h1>{this.state.view}</h1>
                <Link to={{
                                    pathname: "/leads/create",
                                    state: {fromDashboard: false}
                                }}>+
                </Link>
                {/* togglerthing */}
                {/* { (csrfToken !== undefined && csrfToken !== null) ?
                <div>
                    <button 
                        className="btn btn-primary btn-sm"
                        onClick={this.changeCreateFormClass}
                    >+</button>
                    <div className={this.state.createFormClass}>
                        <div className="my-2">
                            <LeadForm newApiCreated={this.handleNewApi} />   
                        </div>
                    </div>
                </div>
                : ""} */}
                <table className="table">
                    <thead className="thead-success">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Stage</th>
                        <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiList.length > 0 ? 
                            apiList.map((leadItem, index)=>{
                                return (
                                    <LeadInline 
                                        key={index}
                                        num={index}
                                        id={leadItem.id}
                                        name = {leadItem.name}
                                        category={leadItem.category}
                                        description={leadItem.description}
                                        step={leadItem.step}//this would be a model id
                                        person={leadItem.person}
                                    />
                                )
                            }) : 
                            '<p>No Leads Found</p>'
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LeadsList