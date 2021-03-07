import React, {Component } from "react"
import cookie from "react-cookies"
import { Link } from "react-router-dom"
import "whatwg-fetch"


//function
import loadAPIs from "../../functions/loadAPIs"

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
                                    state: {
                                        fromDashboard: false,
                                        handleNewApi: this.handleNewApi

                                    }
                                }}>+
                </Link>
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
                                const shortenDescription = leadItem.description.length > 30 ? leadItem.description.slice(0,30) + "...（続き）"
                                    :leadItem.description
                                return (
                                    <tr key={leadItem.id}>
                                        <th>
                                            <Link to={{
                                                pathname: `/leads/${leadItem.id}`,
                                                state: {fromDashboard: false}
                                            }}>{ index + 1 }
                                            </Link>
                                        </th>
                                        <td>{leadItem.name}</td>
                                        <td>{leadItem.stage}</td>
                                        <td>{shortenDescription}</td>
                                    </tr>
                                )
                            }) 
                            : <tr><td>No Leads Found</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LeadsList