import React from 'react';
import './EmailItem.css';

const EmailItem = ({ email, onClick }) => {
  return (
    <div className={`email-item ${email.read ? 'read' : 'unread'}`} onClick={onClick}>
      <div className="avatar">{email.from.name.charAt(0)}</div>
      <div className="email-details">
        <div className="email-from">{email.from.name}</div>
        <div className="email-subject">{email.subject}</div>
        <div className="email-description">{email.short_description}</div>
        <div className="email-date">{new Date(email.date).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</div>
      </div>
    </div>
  );
};

export default EmailItem;
