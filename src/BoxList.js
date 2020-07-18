import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
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
  removeColorBox(id) {
    console.log(id)
    console.log(`Id to remove ${id}`)
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
      <Box key={b.id} width={b.width} height={b.height} bgc={b.bgc} removeColorBox={this.removeColorBox} />
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
