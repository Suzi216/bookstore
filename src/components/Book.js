import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

const Book = (props) => {
  const {
    id, remove, title, author,
  } = props;
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const ids = e.target.id;
    dispatch(removeBook(ids));
  };

  const action = 'Action';
  return (
    <div className="book-container">
      <div className="fist-container">
        <span className="category">{action}</span>
        <h2 className="titles">{title}</h2>
        <h6 className="author">{author}</h6>
        <input onClick={clickHandler} id={id} className="remov" type="button" value={remove} />
        <input className="remov" type="button" value="Comments" />
        <input className="remov" type="button" value="Edit" />
      </div>
      <div className="middle">
        <div className="fill">
          <div className="progress-bar" />
        </div>
        <div>
          <h2 className="percent">55%</h2>
          <span className="complete-text">completed</span>
        </div>
      </div>
      <div className="end-container">
        <p className="chapter">CURRENT CHAPTER</p>
        <p className="current-chapter">Chapter 17</p>
        <button className="update-button" type="button">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};
export default Book;
