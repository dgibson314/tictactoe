import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
    return (
        <button className="square">
            {props.value}
        </button>
        );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
}

class App extends React.Component {
    render() {
        return <h1>Hello!</h1>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
