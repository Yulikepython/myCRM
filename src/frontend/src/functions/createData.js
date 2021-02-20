import React from "react"
import cookie from "react-cookies"
import "whatwg-fetch"

export default function createData(data, endpoint, newApiCreated){
    const csrfToken = cookie.load('csrftoken')

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
                if (newApiCreated){
                    newApiCreated(responseData)
                }
            })
            .catch(function(error){
                alert("エラー発生：　", error)
            }
            )
    }

}

// createLead(data){
//     const endpoint = "/api/leads/create/"
//     const csrfToken = cookie.load('csrftoken')

//     if (csrfToken !== undefined) {
//         const lookupOptions = {
//             method: "POST", 
//             headers: {
//                 "Content-Type": "application/json",
//                 "X-CSRFToken": csrfToken
//             },
//             body: JSON.stringify(data),
//             credentials: "include"
//         }
//         fetch(endpoint, lookupOptions)
//             .then(response => response.json())
//             .then(responseData => {
//                 console.log(responseData)
//             })
//             .catch(error=> console.log("error: ", error))
//     }

// }