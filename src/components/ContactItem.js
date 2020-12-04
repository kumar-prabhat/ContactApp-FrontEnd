import React from 'react';
import { Link } from 'react-router-dom';

const ContactItem = ({
  contact: {
   name,
   mobile,
   id
  },
}) => {
  return (
    <div className='profile bg-light'>
        <h2>{name}</h2>
        <Link to={`/contacts/${id}`} className='btn btn-primary contact-btn'>
          View contact
        </Link>
    </div>
  );
};


export default ContactItem;
