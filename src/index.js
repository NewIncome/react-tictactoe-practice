/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Is now a Controlled Component
function Square(props) {
  return (
    // this is func component syntax
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
  );
}
// onClick={() => this.props.onClick() }  is React/Class component syntax

/* The best approach is to store the game’s state in the parent
Board component instead of in each Square. Then the Board component can
tell each Square what to display by passing a prop. */

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); // gets the state and put a copy in a variable. For inmutability
    squares[i] = 'X'; // modifies the new state array
    this.setState({ squares: squares }); // pushes the new state array to (be) the actual state
    // the setState re-renders the component and it's children
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
    // You define the Prop when you call/set it
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
