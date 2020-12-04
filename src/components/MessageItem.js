import React from 'react';
import Moment from 'react-moment';

const MessageItem = ({
    messageData: { name, mobile, time, message },
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
       <h4>To {name } : {mobile}</h4>
    </div>
    <div>
      <p className='my-1'>Message : {message}</p>
      <p className='post-date'>
        Messaged on <Moment format='YYYY/MM/DD hh:mm a'>{time}</Moment>
      </p>
    </div>
  </div>
);

export default MessageItem;
