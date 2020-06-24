import React, { Component } from 'react';
import Section from './components/section/Section';
import AddContactform from './components/addContactform/AddContactform';
import Filter from './components/filter/Filter';
import Contacts from './components/contacts/Contacts';
import { storageApi } from './services/storageService';
import { filterContacts } from './services/helpers';
import { filterArrayDelete } from './services/helpers';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: null,
  };

  componentDidMount() {
    const contacts = storageApi.getAllContacts('contacts');
    console.log(contacts);
    contacts !== null && contacts.length > 0 && this.setState({ contacts });
  }

  addContact = (newContact) =>
    this.setState((prevState) => {
      if (
        prevState.contacts.find((item) => item.name === newContact.name) ===
        undefined
      ) {
        const newContacts = [...prevState.contacts, newContact];
        storageApi.updateContacts('contacts', newContacts);
        return { contacts: newContacts };
      } else {
        alert(`${newContact.name} already exists in contacts`);
      }
    });

  handleFilter = (e) => this.setState({ filter: e.target.value });

  handleDelete = (id) => {
    this.setState((state) => {
      const contacts = filterArrayDelete(state.contacts, id);
      storageApi.updateContacts('contacts', contacts);
      return {
        contacts,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Section>
          <AddContactform addContact={this.addContact} />
        </Section>
        <Section name="Contacts">
          {this.state.contacts.length > 1 && (
            <Filter onChange={this.handleFilter} />
          )}
          <Contacts
            contacts={
              this.state.filter !== null
                ? filterContacts(this.state.contacts, this.state.filter)
                : this.state.contacts
            }
            handleClick={this.handleDelete}
          />
        </Section>
      </div>
    );
  }
}

export default App;
