import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{ width: '100px', height: '100px', bgc: 'red', id: 1 }],
    };
    this.addColorBox = this.addColorBox.bind(this);
    this.removeColorBox = this.removeColorBox.bind(this);
  }
  removeColorBox(id) {
    this.setState((prevState) => {
      return {
        boxes: prevState.boxes.filter(box => box.id !== id)
      }
    })
  }
  addColorBox(box) {
    // let id = uuidv4()
    const newBox = { ...box, id: uuidv4() };
    this.setState((prevState) => {
      return {
        boxes: [...prevState.boxes, newBox],
      };
    });
  }
  render() {
    let boxes = this.state.boxes.map((b) => (
      <Box key={b.id} id={b.id} idth={b.width} height={b.height} bgc={b.bgc} removeColorBox={this.removeColorBox} />
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
