import React, { Component } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import shortid from 'shortid';

const initialState = { name: '', number: '' };

class AddContactform extends Component {
  state = { name: '', number: '' };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };
    if (this.state.name.trim()) {
      this.props.addContact(newContact);
    }
    this.setState(initialState);
  };

  render() {
    return (
      <form>
        <Input
          value={this.state.name}
          label="Name"
          name="name"
          onChange={this.handleInput}
        />
        <Input
          value={this.state.number}
          label="Number"
          name="number"
          onChange={this.handleInput}
        />
        <Button name="Add contact" type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default AddContactform;
