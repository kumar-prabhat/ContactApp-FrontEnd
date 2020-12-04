import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ContactDetails = () => {

    let { id } = useParams();
    const contactList = JSON.parse(localStorage.getItem('contactList'))

    const details = contactList.find(contact => contact.id === parseInt(id))
    return (
            <div className='container'>
            <Link to='/contacts' className='btn btn-light'>
                Back To Contacts
            </Link>
            <div className='profile-grid my-1'>
                <div className='profile-top bg-primary p-2'>
                    <h1 className='large'>{details.name}</h1>
                    <p className='lead'>
                    Mobile : {details.mobile}
                    </p>
                    <Link to={`/message/${id}`} className='btn contact-btn'>
                        Send Message
                    </Link>
                </div>
            </div>
            </div>
    );
};

export default ContactDetails;
