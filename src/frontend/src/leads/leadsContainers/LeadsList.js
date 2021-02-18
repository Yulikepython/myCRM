import React, {Component } from "react"
import cookie from "react-cookies"
import "whatwg-fetch"


//function
import loadAPIs from "../../functions/loadAPIs"

//other components
import LeadInline from "./LeadInline"
import LeadCreate from "./LeadCreate"

class LeadsList extends Component {
    constructor(props){
        super(props)
        this.toggleLeadListClass = this.toggleLeadListClass.bind(this)
        this.changeCreateFormClass = this.changeCreateFormClass.bind(this)
        this.handleNewApi = this.handleNewApi.bind(this)
    }
    state = {
        view:"Lead List View", 
        apiList: [],
        leadListClass: "card my-2 p-3",
        createFormClass: "d-none",
    }

    handleNewApi(newApiList){
        const currentApiList = this.state.apiList
        currentApiList.push(newApiList)
        this.setState({
            apiList: currentApiList
        })
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
        loadAPIs(this, "/api/leads/create/")
    }

    render(){
        const {apiList, leadListClass} = this.state
        const csrfToken = cookie.load('csrftoken')
        return(
            <div>
                <p>{this.state.view}</p>
                <button onClick={this.toggleLeadListClass}>Toggle Class</button>
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
                                    id={index}
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
                </tbody>
                </table>
                { (csrfToken !== undefined && csrfToken !== null) ?
                <div>
                    <button 
                        className="btn btn-primary btn-sm"
                        onClick={this.changeCreateFormClass}
                    >Create New</button>
                    <div className={this.state.createFormClass}>
                        <div className="my-2">
                            <LeadCreate newApiCreated={this.handleNewApi} />   
                        </div>
                    </div>
                </div>
                : ""}
                
                
            </div>
        )
    }
}

export default LeadsList