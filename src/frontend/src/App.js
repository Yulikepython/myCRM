import React, { Component } from "react"
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom"
import LeadsList from "./leads/leadsContainers/LeadsList"
import LeadDetail from "./leads/leadsContainers/LeadDetail"
import LeadCreate from "./leads/leadsContainers/LeadCreate"

import { Button } from 'antd'

import './App.css'

class App extends Component {
    render(){
        return(
            <div className="container my-2">
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/leads/create" component={LeadCreate} 
                        />
                        <Route exact path="/leads/" component={LeadsList} />
                        <Route exact path="/leads/:id" component={LeadDetail} />
                        <Route component={LeadsList} />
                    </Switch>
                </BrowserRouter>
            </div>

        )
    }
}

export default App