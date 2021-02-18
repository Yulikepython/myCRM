import React, {Component} from "react"

import cookie from "react-cookies"
import "whatwg-fetch"

import createData from "../../functions/createData"

class LeadCreate extends Component {
    state = {
        name: "",
        category:"",
        description: "",
        stage: "",
        person: "",
        errors: {},
    }

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
        this.nameRef = React.createRef()
    }

    handleChange(event){
        event.preventDefault()
        const {name, value} = event.target
        if (name === "name"){
            if (value.length > 30){
                alert("the title is too long!")
            }
        }
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const data = this.state
        const thisComp = this
        createData(data, "/api/leads/create/", thisComp.props.newApiCreated)
        this.clearForm()
    }

    clearForm(event){
        if (event){
            event.preventDefault()
        }
        this.createForm.reset()
    }

    componentDidMount(){
        this.setState({
            name: "",
            category:"",
            description: "",
            stage: "",
            person: "",
        })
        this.nameRef.current.focus()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} ref={(el) => this.createForm = el}>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="リード名" 
                        ref={this.nameRef}
                        onChange={this.handleChange}
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <label>
                    カテゴリー:
                    <select name="category" value={this.state.category} onChange={this.handleChange} required="required">
                        <option value="住居（賃貸）">住居（賃貸）</option>
                        <option value="住居（テナント）">住居（テナント）</option>
                        <option value="売買">売買</option>
                        <option value="修繕">修繕</option>
                        <option value="保険">保険</option>
                    </select>
                    </label>
                </div>
                <div className="form-group">
                    <textarea
                        type="text" 
                        name="description" 
                        className="form-control" 
                        placeholder="メモ" 
                        onChange={this.handleChange}
                        required="required"
                    />
                </div>
                <div className="form-group">
                <label>
                    ステージ:
                    <select name="stage" value={this.state.stage} onChange={this.handleChange} required="required">
                        <option value="サスペクト">サスペクト</option>
                        <option value="面談済">面談済</option>
                        <option value="追客">追客</option>
                    </select>
                    </label>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="person" 
                        className="form-control" 
                        placeholder="person" 
                        onChange={this.handleChange}
                    />
                </div>
                <button className="btn btn-primary">Save</button>
                <button className="btn btn-secondary" onClick={this.clearForm}>Clear</button>

                <p>{this.state.name}</p>
                <p>{this.state.category}</p>
                <p>{this.state.description}</p>
                <p>{this.state.stage}</p>
                <p>{this.state.person}</p>
            </form>
        )
    }
}

export default LeadCreate