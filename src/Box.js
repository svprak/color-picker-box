import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    const style = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.bgc,
    };
    return <div style={style}></div>;
  }
}

export default Box;
