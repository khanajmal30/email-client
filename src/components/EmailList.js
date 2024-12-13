import React from 'react';
import EmailItem from './EmailItem';
import './EmailList.css';

const EmailList = ({ emails, onEmailClick }) => {
  return (
    <div className="email-list">
      {emails.map(email => (
        <EmailItem key={email.id} email={email} onClick={() => onEmailClick(email.id)} />
      ))}
    </div>
  );
};

export default EmailList;
