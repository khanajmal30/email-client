import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, setCurrentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
      <span>Page {currentPage}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
