import React , {Component} from 'react'
import '../componant/Additems.css'
class AddItems extends Component{

    handleChange =(e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.addItem(this.state)
       
    }

    render (){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Name ..." id="name" onChange={this.handleChange} />
                    <input type="number" placeholder="Enter  Age ..." id="age" onChange={this.handleChange} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}
export default AddItems
