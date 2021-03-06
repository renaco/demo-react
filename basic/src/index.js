import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {
  func01() {
    console.log("Hello from func01");
    return "function for webpack";
  }
  test(e) {
    let my = e ? true : false;
    console.log(my);
  }
  render() {
    const func02 = function() {
      console.log("Hello from fun02");
      return "function in render()"
    }
    return (
      <div>
        <div style={{color:"red"}}>Simple Reacts</div>
        <div>{1+1}</div>
        <div>{this.func01()}</div>
        <div>{func02()}</div>
        <button onClick={this.test(false)}>Make click</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples />,
  document.getElementById('root')
)
