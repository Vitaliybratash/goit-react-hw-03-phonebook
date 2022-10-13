import { Component } from 'react';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
export class App extends Component {
  state = {
    contacts: [
    ],
    filter: '',
  };
  deleteContact = id => {
    this.setState({
      contacts: [...this.state.contacts.filter(contact => contact.id !== id)],
    });
  };
  onAddContact = data => {
    const filtered = this.state.contacts.filter((contact)=> {
   return  contact.name === data.name
  })
  filtered.length === 0 ? this.setState({ contacts: [...this.state.contacts, data]}) : alert(`${data.name}`) 
  };
  filterHandler= e => {
    this.setState({
      [e.target.name]: e.target.value,
    });}
    componentDidMount() {
      const contacts = localStorage.getItem('contacts')
      const parsedContacts = JSON.parse(contacts)
      if (parsedContacts) {
        this.setState ({contacts : parsedContacts })
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if (this.state.contacts !== prevState.contacts) {
        console.log('Update')
       localStorage.setItem('contacts' , JSON.stringify(this.state.contacts))
      }
    }
  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.onAddContact}  />

          <h2>Contacts</h2>
          <Filter filter={this.state.filter} onChangeHandler={this.filterHandler}/>
          <ContactList contacts={this.state.contacts} filter={this.state.filter} deleteContact={this.deleteContact} />
        </div>
      </>
    );
  }
}
