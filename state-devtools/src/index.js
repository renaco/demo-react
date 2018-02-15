import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0, sum: 3, a: 1, b: 2}
  }
  render() {
    return (
      <div>
        <h1>React</h1>
        Clicked: <span>{this.state.count}</span> times 
        <button>Decrease</button>
        <p/>
        <input value={this.state.a}/> + <input value={this.state.b}/>
        = <span>{this.state.sum}</span>
        <p/>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples />,
  document.getElementById('root')
)
