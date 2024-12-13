// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmailList from './components/EmailList';
import EmailBody from './components/EmailBody';
import FilterBar from './components/FilterBar';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmails(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const savedEmails = JSON.parse(localStorage.getItem('emails'));
    if (savedEmails) {
      setEmails(savedEmails);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('emails', JSON.stringify(emails));
  }, [emails]);

  const fetchEmails = async (page) => {
    try {
      const response = await axios.get(`https://flipkart-email-mock.now.sh/?page=${page}`);
      setEmails(response.data.list);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Failed to fetch emails. Please try again later.');
      console.error('Error fetching emails:', err);
    }
  };

  const handleEmailClick = async (id) => {
    try {
      const response = await axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`);
      setSelectedEmail(response.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Failed to fetch email body. Please try again later.');
      console.error('Error fetching email body:', err);
    }
  };

  const handleFavorite = (id) => {
    const updatedEmails = emails.map(email => {
      if (email.id === id) {
        return { ...email, favorite: !email.favorite };
      }
      return email;
    });
    setEmails(updatedEmails);
  };

  const filteredEmails = emails.filter(email => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !email.read;
    if (filter === 'read') return email.read;
    if (filter === 'favorites') return email.favorite;
    return true;
  });

  return (
    <div className="app">
      <FilterBar setFilter={setFilter} />
      <div className="main-content">
        {error && <div className="error-message">{error}</div>}
        <EmailList emails={filteredEmails} onEmailClick={handleEmailClick} />
        {selectedEmail && <EmailBody email={selectedEmail} onFavorite={handleFavorite} />}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
