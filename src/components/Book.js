import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book-container">
      <h4>{title}</h4>
      <h6>{author}</h6>
      <input type="button" value="Remove" />
    </div>
  );
};
export default Book;
