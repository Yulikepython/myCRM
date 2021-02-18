import React, {Component} from "react"

class LeadCreate extends Component {
    state = {
        name: "",
        category:"",
        description: "",
        stage: "",
        person: "",
    }
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }
    render(){
        return (
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="name" 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="category" 
                        className="form-control" 
                        placeholder="category" 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="description" 
                        className="form-control" 
                        placeholder="description" 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="stage" 
                        className="form-control" 
                        placeholder="stage" 
                        onChange={this.handleChange}
                    />
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