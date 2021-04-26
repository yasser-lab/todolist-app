import React , {Component} from 'react' 
import TodoItems from './componant/Todoitems'
import AddItems from './componant/Additems'
class App extends Component{
  state ={
    items:[
      {id:1 , name:"yasser", age:23},
      {id:2 , name:"adel", age:24},
      {id:3 , name:"mahmoud", age:21}
    ]
  }

  deleteItems = (id) =>{
    let items = this.state.items.filter(item =>{
      return item.id !==id
    })
    this.setState({items})
  }

  addItem =(item) =>{
    item.id = Math.random();
    let items =this.state.items;
    items.push(item);
    this.setState({items})
  }

  render(){
    return(
      <div className="App container">
        <h1 className="text-center">Todo LIst</h1>
        <TodoItems items={this.state.items} deleteItems={this.deleteItems} />
        <AddItems addItem={this.addItem} />
      </div>
    )
  }
}

export default App;
