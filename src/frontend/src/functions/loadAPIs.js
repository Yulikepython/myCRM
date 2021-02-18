import React from "react"


export default function loadAPIs(self, endpoint){
        let thisComp = self
        const lookupOptions = {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(endpoint, lookupOptions)
            .then(response => response.json())
            .then(responseData => {
                thisComp.setState({
                    apiList: responseData
                })
            })
            .catch(error=> console.log("error: ", error))
}

//Reference
// loadLeads(){
//     const endpoint = "/api/leads/create/"
//     let thisComp = this
//     const lookupOptions = {
//         method: "GET", 
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }
//     fetch(endpoint, lookupOptions)
//         .then(response => response.json())
//         .then(responseData => {
//             thisComp.setState({
//                 leads: responseData
//             })
//         })
//         .catch(error=> console.log("error: ", error))
// }
