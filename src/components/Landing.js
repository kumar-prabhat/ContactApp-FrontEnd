import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Contact App for Kisan Network</h1>
          <p className='lead'>
            Want to send sms to your friend?
          </p>
          <div className='buttons'>
            <Link to='/contacts' className='btn btn-primary'>
              Show contacts
            </Link>
            <Link to='/history' className='btn btn-light'>
              Show message history
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Landing;
