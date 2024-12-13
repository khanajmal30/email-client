import React from 'react';
import './FilterBar.css';

const FilterBar = ({ setFilter }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('unread')}>Unread</button>
      <button onClick={() => setFilter('read')}>Read</button>
      <button onClick={() => setFilter('favorites')}>Favorites</button>
    </div>
  );
};

export default FilterBar;
