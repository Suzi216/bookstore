import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

// const BOOK_ADDED = 'books/BOOK_ADDED';

const Bookform = () => {
  const [value, setState] = useState({
    id: uuidv4(),
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setState((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(value));
  };
  return (
    <>
      <h4> ADD NEW BOOK</h4>
      <form onSubmit={clickHandler} className="form-container">
        <input onChange={inputHandler} type="text" name="title" placeholder="Book title" />
        <input onChange={inputHandler} type="text" name="author" placeholder="Author" />
        <input type="submit" value="Add Book" />
      </form>
    </>
  );
};

export default Bookform;
