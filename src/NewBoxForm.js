import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '', height: '', bgc: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handlSubmit = this.handlSubmit.bind(this);
  }
  handlSubmit(evt) {
    evt.preventDefault();
    this.props.addColorBox(this.state);
    this.setState({
      width: '',
      height: '',
      bgc: '',
    });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    return (
      <div className="NewBoxForm">
        <h2>Ad New Box Color:</h2>
        <form onSubmit={this.handlSubmit}>
          <label htmlFor="width">
            Width:
            <input
              id="width"
              name="width"
              value={this.state.width}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="height">
            Height:
            <input
              id="height"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="bgc">
            Background Color:
            <input
              id="bgc"
              name="bgc"
              value={this.state.bgc}
              onChange={this.handleChange}
            />
          </label>
          <button>Add Box</button>
        </form>
      </div>
    );
  }
}
export default NewBoxForm;
