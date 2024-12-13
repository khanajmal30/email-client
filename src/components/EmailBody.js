import React from 'react';
import './EmailBody.css';

const EmailBody = ({ email, onFavorite }) => {
  return (
    <div className="email-body">
      <h2>{email.subject}</h2>
      <div dangerouslySetInnerHTML={{ __html: email.body }} />
      <p>{new Date(email.date).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</p>
      <button onClick={() => onFavorite(email.id)}>
        {email.favorite ? 'Unmark Favorite' : 'Mark as Favorite'}
      </button>
    </div>
  );
};

export default EmailBody;
