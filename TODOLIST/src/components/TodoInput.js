import React, { Component } from "react";

class TodoInput extends Component {
    render(){
        const {item, handleChange, handleSubmit} = this.props
        return(
            <div className="card card-body mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"/>
                        </div>
                        <input type="text" 
                                className="form-control text-capitalize" 
                                placeholder="enter todo items"
                                value={item}
                                onChange={handleChange}
                        />
                    </div>
                    <div className="list-group">
                    <button type="submit" className="btn btn-sm btn-primary mt-3">
                        Add Item
                    </button>
                    </div>
                </form>
            </div>
        )
    };
};
export default TodoInput;