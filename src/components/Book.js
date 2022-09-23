import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const ids = e.target.id;
    console.log(ids);
    dispatch(removeBook(ids));
  };

  const {
    id, remove, title, author,
  } = props;

  return (
    <div className="book-container">
      <h4>{title}</h4>
      <h6>{author}</h6>
      <input onClick={clickHandler} id={id} type="button" value={remove} />
    </div>
  );
};
export default Book;
