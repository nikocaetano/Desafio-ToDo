import React, { Component } from "react";

export default class Main extends Component {
    state = {
        task: '',
        taskList: []
    }

    handleChange = (event) => {
        this.setState({
            task: event.target.value
        });
    };

    Send = (event) => {
        event.preventDefault();
        if (this.state.task !== "") {
            this.setState({
                taskList: this.state.taskList.concat({
                    task: this.state.task,
                    id: Date.now
                }),
                task: '',
            });
        }
    };

    Remove = (id) => {
        this.setState({
            taskList: this.state.taskList.filter((ident) => ident.id !== id),
            task: ''
        });
    };

    RemoveAll = (id) => {
        this.setState({
            taskList: this.state.taskList.filter((ident) => ident.id)
        });
    };

    render() {
        return (
            <form>
                <h1>Task List</h1>
                <input onChange={this.handleChange} value={this.state.task} />
                <button onClick={this.Send}>Send</button>
                <button onClick={() => { this.RemoveAll() }}>Clear</button>
                {this.state.taskList.map((item) =>
                    <div>
                        <ol>
                            <li>{item.task}</li>
                        </ol>
                        <button onClick={() => { this.Remove(item.id) }}>X</button>
                    </div>
                )}
            </form>
        )
    }
}