import React, { Component } from 'react';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export default class App extends Component {
    state = {
        filter: '',
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        name: '',
    };

    addContact = contact => {
        const isExistContact = this.state.contacts.find(contactState => {
            return contactState.name.toLowerCase() === contact.name.toLowerCase()
        });

        isExistContact ? alert(contact.name + ' is already in contacts') :

            this.setState(prevState => {
                return {
                    contacts: [...prevState.contacts, contact]
                }
            })
    }

    changeFilter = filter => {
        this.setState({ filter })
    }

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()))
    }

    removeContact = contactId => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(({ id }) => id !== contactId)
            }
        })
    }

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts();

        return (
            <div>
                <PhoneBook onAddContact={this.addContact} contacts={this.state.contacts} />
                {visibleContacts.length > 0 &&
                    <Contacts contactsArr={visibleContacts} onRemoveContact={this.removeContact}></Contacts>
                }
                <Filter value={filter} onChangeFilter={this.changeFilter}></Filter>
            </div>
        )
    }
}