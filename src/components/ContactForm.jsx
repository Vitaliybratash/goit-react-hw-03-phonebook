import { nanoid } from 'nanoid';
import { Component } from 'react';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  INITIAL_DATA = {
    name: '',
    number: '',
  };
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmitHandler = e => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(data);
    this.setState(this.INITIAL_DATA)
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <label>
            <span>Name</span>
            <input
              onChange={this.onChangeHandler}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <span>Number</span>
            <input
              onChange={this.onChangeHandler}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contacts</button>
        </form>
      </>
    );
  }
}
