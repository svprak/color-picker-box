import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{ width: '100px', height: '100px', bgc: 'red' }],
    };
    this.addColorBox = this.addColorBox.bind(this);
  }
  addColorBox(newBox) {
    // this.setState((prevState) => console.log(prevState));
    console.log('run from form');
    console.log(newBox);
    this.setState((prevState) => {
      return {
        boxes: [...prevState, newBox],
      };
    });
  }
  render() {
    let boxes = this.state.boxes.map((b) => (
      <Box width={b.width} height={b.height} bgc={b.bgc} />
    ));
    return (
      <div>
        <NewBoxForm addColorBox={this.addColorBox} />
        <div className="BoxList">{boxes}</div>
      </div>
    );
  }
}
export default BoxList;
