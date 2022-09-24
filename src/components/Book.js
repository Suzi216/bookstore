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
      <div>
        <span className="category">Action</span>
        <h2 className="titles">{title}</h2>
        <h6 className="author">{author}</h6>
        <input onClick={clickHandler} id={id} className="remov" type="button" value={remove} />
        <input className="remov" type="button" value="Comments" />
        <input className="remov" type="button" value="Edit" />
        <div className="Rectangle3"> </div>
      </div>

    </div>
  );
};
export default Book;
