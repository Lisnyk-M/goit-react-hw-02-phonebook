import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({contactsArr, onRemoveContact}) => {
    return (
        <>
            <h2>Contacts</h2>
            <ul>
                {contactsArr.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.number}
                        <button className={styles.buttonDelete} id={item.id} onClick={() => onRemoveContact(item.id)}>Delete</button>
                    </li>)
                )}
            </ul>
        </>
    )
}

Contacts.propTypes = {
    onRemoveContact: PropTypes.func.isRequired,
    contactsArr: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string
    }))
}

export default Contacts;