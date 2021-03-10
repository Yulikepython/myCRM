import React, {Component } from "react"
import cookie from "react-cookies"
import { Link } from "react-router-dom"
import "whatwg-fetch"

//function
import loadAPIs from "../../functions/loadAPIs"

class PeopleList extends Component {
    constructor(props){
        super(props)
        this.changeCreateFormClass = this.changeCreateFormClass.bind(this)
        this.handleNewApi = this.handleNewApi.bind(this)
    }
    state = {
        view:"People List View", 
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
        loadAPIs(this, "/api/people/")
    }

    render(){
        const {apiList} = this.state
        const csrfToken = cookie.load('csrftoken')
        return(
            <div>
                <h1>{this.state.view}</h1>
                <Link to={{
                                    pathname: "/people/create",
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
                            <th scope="col">Last Name</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">PhoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiList.length > 0 ? 
                            apiList.map((peopleItem, index)=>{
                                return (
                                    <tr key={peopleItem.id}> 
                                        <th scope="col">
                                            <Link to={{
                                                    pathname: `/people/${peopleItem.id}`,
                                                    state: {fromDashboard: false}
                                                }}>{ index + 1 }
                                            </Link>
                                        </th>
                                        <td>{ peopleItem.lastName }</td>
                                        <td>{peopleItem.firstName}</td>
                                        <td>
                                            {peopleItem.email}
                                        </td>
                                        <td>{peopleItem.phone_number}</td>
                                    </tr>
                                )
                            }) : 
                            <tr><td>No Person Found</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeopleList