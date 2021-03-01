// import React from "react"
// import { Formik, Form, Field, useField } from "formik"
// import * as Yup from "yup"

// const PersonForm = () => {
//     createPerson(data){
//         const endpoint = "/api/people/"
//         const csrfToken = cookie.load('csrftoken')
//         let thisComp = this
    
//         if (csrfToken !== undefined) {
//             const lookupOptions = {
//                 method: "POST", 
//                 headers: {
//                     "Content-Type": "application/json",
//                     "X-CSRFToken": csrfToken
//                 },
//                 body: JSON.stringify(data),
//                 credentials: "include"
//             }
//             fetch(endpoint, lookupOptions)
//                 .then(response => response.json())
//                 .then(responseData => {
//                     // console.log(responseData)
//                     if (thisComp.props.newApiCreated){
//                         thisComp.props.newApiCreated(responseData)
//                     }
//                     thisComp.clearForm()
//                 })
//                 .catch(function(error){
//                     alert("エラー発生：　", error)
//                 })
//         }
//     }

//     updateLead(data){
//         const {l@person} = this.props
//         const endpoint = `/api/people/${person.id}/`
//         const csrfToken = cookie.load('csrftoken')
//         let thisComp = this

//         if (csrfToken !== undefined) {
//             const lookupOptions = {
//                 method: "PUT", 
//                 headers: {
//                     "Content-Type": "application/json",
//                     "X-CSRFToken": csrfToken
//                 },
//                 body: JSON.stringify(data),
//                 credentials: "include"
//             }
//             fetch(endpoint, lookupOptions)
//                 .then(response => response.json())
//                 .then(responseData => {
//                     // console.log(responseData)
//                     if (thisComp.props.leadItemUpdated){
//                         thisComp.props.leadItemUpdated(responseData)
//                     }
//                 })
//                 .catch(function(error){
//                     alert("エラー発生：　", error)
//                 }
//                 )
//         }
//     }
//     return (
//         <Formik 
//             initialValues={{
//                 lastName:"",
//                 firstName:"",
//                 email:"",
//                 phoneNumber:"",
//             }}
//             validationSchema={Yup.object({

//             })}
//             onSubmit={values => {
//                 alert(JSON.stringify(values, null, 2))
//             }}
//         >
//             <Form>
//                 <label htmlFor="lastName">FirstName</label>
//                     <Field name="lastName" type="text" />
//                 <label htmlFor="firstName">FirstName</label>
//                 <Field name="firstName" type="text" />
//                 <label htmlFor="email">Email Address</label>
//                 <Field name="email" type="email" />
//                 <button type="submit">Submit</button>
//             </Form>
//         </Formik>
//     )
// }

// export default PersonForm