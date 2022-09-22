import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Bookform from './Bookform';

const Books = () => {
  const allbooks = useSelector((state) => state.book);

  console.log(allbooks);
  return (
    <div className="">
      {allbooks.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          remove="Remove"
          id={book.id}
        />
      ))}
      <Book {...allbooks} />
      <Bookform />
    </div>
  );
};
export default Books;
