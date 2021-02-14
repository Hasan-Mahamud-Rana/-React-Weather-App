import React, { useState } from 'react';

const SearchCity = (props) => {

  const [searchTerm, setSearchTerm] = useState('Dhaka')

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.setSearchTerm(searchTerm);
  }

  return (
    <div className='ui segment'>
      <form className='ui fluid form' onSubmit={handleFormSubmit}>
        <div className='field'>
          <div className='ui input focus'>
            <label>Get weather by City</label>
            <input type='text' onChange={handleInputChange} value={searchTerm} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchCity;