import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";



class App extends Component {
    state = {
        items : [],
        id : 0,
        item : "",
        editItem : false
    }

    handleChange = e =>{
        this.setState({
            item : e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();

        const newItem = {
            id : this.state.id,
            item : this.state.item
        }

        const updatedItems =[...this.state.items, newItem];

        this.setState({
            items : updatedItems,
            id : this.state.id +1,
            item : "",
            editItem : false
        })
    }

   clearList = () =>{
    this.setState({
        items : []
    })
   } 

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <div className="text-capitalize text-center mt-3">
                        <h3>todo item</h3>
                        </div>
                        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

                        <TodoList items={this.state.items} clearList={this.clearList}/>
                    </div>
                </div>
            </div>
        );
    }
};
export default App;