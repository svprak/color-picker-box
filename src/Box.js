import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveColorBox = this.handleRemoveColorBox.bind(this)
  }
  handleRemoveColorBox(evt) {
    this.props.removeColorBox(evt.target)
  }
  render() {
    const style = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.bgc,
    };
    return (
      <div>
        <div style={style}></div>
        <button onClick={this.handleRemoveColorBox}>X</button>
      </div>
    );
  }
}

export default Box;
