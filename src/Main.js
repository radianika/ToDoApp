import React from 'react'

class Main extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <input  className="new-todo" type="text" placeholder="What needs to be done?" autoFocus />
        )   
    }
}

export default Main