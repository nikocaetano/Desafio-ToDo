import React, { Component } from "react";
import { Section, GlobalStyle } from "../Styled/styled.js";
import imagem from "../assets/lixo.png"
import Header from "./Header.js";

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


    //

    Send = (event) => {
        if (this.state.task !== "") {
            this.setState({
                taskList: this.state.taskList.concat({
                    task: this.state.task,
                    id: Date.now()
                }),
                task: '',
            });
        }
    };

    Remove = (id) => {
        const { taskList, task } = this.state;
        this.setState({
            taskList: taskList.filter((item) => {
                return item.id !== id
            })
        })
    }

    RemoveAll = (id) => {
        this.setState({
            taskList: this.state.taskList.filter((ident) => ident.taskList)
        });
    };



    render() {
        return (
            <Section onSubmit={(event) => { event.preventDefault() }}>
                <input onChange={this.handleChange} value={this.state.task} />
                <button className="buttonGreen" onClick={this.Send}>Send</button>
                <button className="buttonRed" onClick={() => { this.RemoveAll() }}>Clear</button>
                <div className="taskArea">
                    {this.state.taskList.map((item) =>
                        <div className="tarefas">
                            <ul>
                                <li>{item.task}</li>
                            </ul>
                            <img onClick={() => { this.Remove(item.id) }} src={imagem} />
                        </div>
                    )}
                </div>
            </Section>
        )
    }
}