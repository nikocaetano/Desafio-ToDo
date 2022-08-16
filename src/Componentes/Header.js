import React, { Component } from "react";
import { Container, GlobalStyle } from "../Styled/styled.js";

export default class Header extends Component {
    state ={
        title:'Task List'
    }

    componentDidMount(){
        document.title = this.state.title
        document.querySelector('h1').innerText= this.state.title ? this.state.title : this.state.h1
    }

    render() {
        return (
            <Container>
                <h1 >Task List</h1>
            </Container>
        )
    }
}