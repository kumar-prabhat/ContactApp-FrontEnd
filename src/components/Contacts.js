import React, { Fragment } from 'react';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactList = JSON.parse(localStorage.getItem('contactList'))
    return (
        <>
            <div className='container'>
                <h1 className='large text-primary'>Contacts List</h1>
                <div className='profiles'>
                    {contactList && contactList.length > 0 ? (
                    contactList.map((contact) => (
                        <ContactItem key={contact.id} contact={contact} />
                    ))
                    ) : (
                    <h4>No contacts found...</h4>
                    )}
                </div>
            </div>
        </>
    );
};


export default Contacts;
