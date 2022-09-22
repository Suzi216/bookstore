import React from 'react';
import { useDispatch } from 'react-redux';

const BOOK_REMOVED = 'books/BOOK_REMOVED';

const Book = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const ids = e.target;
    console.log(ids);
    dispatch({
      type: BOOK_REMOVED,
      payload: ids,
    });
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
