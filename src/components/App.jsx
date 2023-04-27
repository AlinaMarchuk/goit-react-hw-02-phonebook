import React from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import styles from './App.module.css';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const newContact = { name: name, id: nanoid(), number: number };
    this.state.contacts.some(contact => name === contact.name)
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
    event.currentTarget.elements.name.value = '';
    event.currentTarget.elements.number.value = '';
  };

  handleSearch = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  handleFilter = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form formSubmit={this.handleSubmit} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter inputSearch={this.handleSearch} />
        <ContactsList
          filteredArr={this.handleFilter()}
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
