import React, { Component } from "react";
import Main from "./Componentes/Main.js"
import Header from "./Componentes/Header.js"
import styled, {CreateGlobalStyle} from "styled-components";

export default class desToDo extends Component{
  render(){
    return(
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
