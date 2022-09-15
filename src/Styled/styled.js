import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
margin:0;
padding:0;
box-sizing:border-box;
`

document.body.style.backgroundColor = '#47126b'

export const Container = styled.div`
border:none;
display:flex;
justify-content:center;
color:white;
h1{
    font-size: 5vw;
    font-family:'Rubik Iso', sans-serif;
}
h1:hover{
    font-size: 5.5vw;
    cursor:pointer;
}
`
export const Section = styled.form`

justify-content:space-evenly;
display:flex;
flex-wrap:wrap;
width: 30vw;
position: relative;
left:35vw;
height:40vw;



button{
    border: none;
    background-color: white;
    height: 2vw;
    border-radius: 10px;   
}

.buttonGreen{
    background-color:#80ed99;
    color:white;
    height:3vw;
}

.buttonRed{
    background-color:#f25c54;
    color:white;
    height:3vw;
}

button:hover{
    cursor:pointer;
}

.tarefas{
    padding-top:20p;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 29vw;
    background-color: #f1faee;
    border-radius:20px;
    padding-right: 10px;
}

.taskArea{
    height: 30vw;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
}

ul{
    list-style:none;
}

img{
    width:2vw;
    background-color:#d90429;
    border-radius:50%;
}

img:hover{
    cursor:pointer;
    width: 3vw;
}

.tarefas button{
    border-radius:50%;
    background-color: #d90429;
    height: 2vw;
    width:2vw;
}

input{
    width: 22vw;
    height: 3vw;
    border-radius: 20px;
    border:none;
    text-indent: 10%
}
`
