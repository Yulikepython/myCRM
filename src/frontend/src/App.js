import React, { Component } from "react"

import LeadsList from "./leadsComponents/LeadsList"

class App extends Component {
    render(){
        return(
            <div>
                Hello World
                <LeadsList />
            </div>
        )
    }
}

export default App