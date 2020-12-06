import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import contactsContext from './context/contactsContext';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    deleteContact: contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      }));
    },
  };

  addNewContact = ({ name, number }, { setSubmitting, resetForm }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
      resetForm({ name, number });
      setSubmitting(false);
      return;
    }

    this.setState(prevState => {
      const contacts = [...prevState.contacts, { id: uuidv4(), name, number }];

      return { ...prevState, contacts };
    });

    resetForm({ name, number });
    setSubmitting(false);
  };

  handleFindInputChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    return (
      <contactsContext.Provider value={this.state}>
        <div className="App">
          <h1>Phonebook</h1>
          <ContactForm handleFormSubmit={this.addNewContact} />
          <h2>Contacts</h2>
          <Filter
            value={this.filter}
            handleInputChange={this.handleFindInputChange}
          />
          <ContactList contacts={this.getVisibleContacts()} />
        </div>
      </contactsContext.Provider>
    );
  }
}

export default App;
