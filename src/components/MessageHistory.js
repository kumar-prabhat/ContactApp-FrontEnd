import React from 'react';
import MessageItem from './MessageItem'

const MessageHistory = () => {

    const messageData = localStorage.getItem('messageHistory');
    const messageHistory = JSON.parse(messageData)

  return (
    <div className='container'>
      <h1 className='text-primary large'>Message History</h1>
     
      <div className='posts'>
        {messageHistory && messageHistory.length > 0 ? messageHistory.map((message) => (
          <MessageItem key={message.id} messageData={message} />
        )) : <h2>No message history</h2>}
      </div>
    </div>
  );
};

export default MessageHistory;
