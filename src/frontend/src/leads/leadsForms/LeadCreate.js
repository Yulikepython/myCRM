// left for reference
// import React, {Component} from "react"

// import cookie from "react-cookies"
// import "whatwg-fetch"


// class LeadCreate extends Component {
//     state = {
//         name: "",
//         category:"",
//         description: "",
//         stage: "",
//         person: "",
//         checking:false,
//         errors: {},
//     }

//     constructor(props){
//         super(props)
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.clearForm = this.clearForm.bind(this)
//     }

//     handleChange(event){
        
//         const {name, value, type, checked} = event.target
//         if (name === "name"){
//             if (value.length > 30){
//                 alert("the title is too long!")
//             }
//         }
//         if (type === "checkbox"){
//             this.setState({
//                 [name]: checked
//             })
//         } else {
//             event.preventDefault()
//             this.setState({
//                 [name]:value
//             })
//         }
//     }

//     createLead(data){
//         const endpoint = "/api/leads/"
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
//                 })
//                 .catch(function(error){
//                     alert("エラー発生：　", error)
//                 }
//                 )
//         }
    
//     }

//     handleSubmit(event){
//         event.preventDefault()
//         const data = this.state
//         const thisComp = this
//         this.createLead(data, thisComp.props.newApiCreated)
//         this.clearForm()
//     }

//     clearForm(event){
//         if (event){
//             event.preventDefault()
//         }
//         document.createForm.reset()
//         this.setState({
//             name: "",
//             category:"",
//             description: "",
//             stage: "",
//             person: "",
//         })
//     }

//     componentDidMount(){
//         this.setState({
//             name: "",
//             category:"",
//             description: "",
//             stage: "",
//             person: "",
//         })
//     }

//     render(){
//         return (
//             <form onSubmit={this.handleSubmit} name="createForm">
//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         name="name" 
//                         className="form-control" 
//                         placeholder="リード名" 
//                         onChange={this.handleChange}
//                         required="required"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>
//                     カテゴリー:
//                     <select name="category" value={this.state.category} onChange={this.handleChange} required="required">
//                         <option value="住居（賃貸）">住居（賃貸）</option>
//                         <option value="住居（テナント）">住居（テナント）</option>
//                         <option value="売買">売買</option>
//                         <option value="修繕">修繕</option>
//                         <option value="保険">保険</option>
//                     </select>
//                     </label>
//                 </div>
//                 <div className="form-group">
//                     <textarea
//                         type="text" 
//                         name="description" 
//                         className="form-control" 
//                         placeholder="メモ" 
//                         onChange={this.handleChange}
//                         required="required"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         name="person" 
//                         className="form-control" 
//                         placeholder="person" 
//                         onChange={this.handleChange}
//                     />
//                 </div>

//                 <button className="btn btn-primary">Save</button>
//                 <button className="btn btn-secondary" onClick={this.clearForm}>Clear</button>

//                 <p>{this.state.name}</p>
//                 <p>{this.state.category}</p>
//                 <p>{this.state.description}</p>
//                 <p>{this.state.stage}</p>
//                 <p>{this.state.person}</p>
//             </form>
//         )
//     }
// }

// export default LeadCreate