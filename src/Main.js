import React from 'react'


import ToDoItem from './ToDoItem'
class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            toDoItems: ['sleep', 'drink']
        }
    }
    render(){
        return(
            <div>
            <input  className="new-todo" type="text" placeholder="What needs to be done?" autoFocus />
            <ul>
                {this.state.toDoItems.map((item, index) => <ToDoItem key={index} value={item}/>)}

            </ul>
            </div>
        )   
    }
}

export default Main