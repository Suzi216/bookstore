import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Bookform from './Bookform';
import { displayBooks } from '../redux/books/books';

const Books = () => {
  const allbooks = useSelector((state) => state.book);
  const dispatch = useDispatch();
  // console.log(allbooks);
  useEffect(() => {
    dispatch(displayBooks());
  }, [allbooks, dispatch]);

  return (
    <div className="">
      {allbooks.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          remove="Remove"
          id={book.item_id}
        />
      ))}
      <Book {...allbooks} />
      <Bookform />
    </div>
  );
};
export default Books;
