import React, { Component } from "react";
import TodoItem from "./TodoItem"

class TodoList extends Component {
    render(){
        const {items, clearList} = this.props
        return(
            <ul className="list-group mt-5">
                <h3 className="text-capitalize text-center">
                    todo List
                </h3>

                {items.map(item=>{
                    return <TodoItem key={items.id} title={item.item}/>
                })}
                
                <button className="btn btn-danger btn-block btn-sm mt-5"
                        onClick={clearList}
                >
                    Clear List
                </button>
            </ul>
        )
    };
};
export default TodoList;