import React, { Component } from "react";

export default class Main extends Component {
    state = {
        movies: '',
        listMovies: []
    }

    handleChange = (event) => {
        this.setState({
            movies: event.target.value
        });
    };

    Send = (event) => {
        event.preventDefault();
        if (this.state.movies !== "") {
            this.setState({
                listMovies: this.state.listMovies.concat({
                    movies: this.state.movies,
                    id: Date.now
                }),
                movies: '',
            });
        }
    };

    Remove = (id) => {
        this.setState({
            listMovies: this.state.listMovies.filter((ident) => ident.id !== id)
        });
    };

    RemoveAll = (id) => {
        this.setState({
            listMovies: this.state.listMovies.filter((ident) => ident.id)
        });
    };

    render() {
        return (
            <form>
                <h1>Lista de Filmes</h1>
                <input onChange={this.handleChange} value={this.state.movies} />
                <button onClick={this.Send}>Send</button>
                <button onClick={() => {this.RemoveAll()}}>apagar tudo</button>
                {this.state.listMovies.map((item) =>
                    <div>
                        <ol>
                            <li>{item.movies}</li>
                        </ol>
                        <button onClick={() => { this.Remove(item.id) }}>X</button>
                    </div>
                )}
            </form>
        )
    }
}