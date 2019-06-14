import React from 'react'


import ToDoItem from './ToDoItem'
class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            toDoItems: ['sleep', 'drink'],
            placeholder: "What needs to be done?",
        }
        
    }
    addNewItem = (event) => {
        if (event.keyCode === 13){
            let newItem = event.target.value;
            this.setState(prevstate => {
                const newArray = [...prevstate.toDoItems];
                newArray.push(newItem);
                return(
                    {
                    toDoItems: newArray
                    }
                )
            })
        }
    }
    render(){
        return(
            <div>
            <input  className="new-todo" 
                    type="text" 
                    placeholder={this.state.placeholder} 
                    autoFocus 
                    onKeyDown={this.addNewItem} />
            <ul>
                {this.state.toDoItems.map((item, index) => <ToDoItem key={index} value={item}/>)}

            </ul>
            </div>
        )   
    }
}

export default Main