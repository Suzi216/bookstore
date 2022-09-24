import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Bookform = () => {
  const [value, setState] = useState({
    item_id: uuidv4(),
    title: '',
    author: '',
    category: 'Action',
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
    const newBook = {
      item_id: uuidv4(),
      ...value,
    };
    dispatch(addBook(newBook));
    setState({ title: '', author: '',category:'action' });
  };
  const myFunction = () => {
    document.getElementById('myForm').reset();
  };
  return (
    <>
      <h4> ADD NEW BOOK</h4>
      <form onSubmit={clickHandler} id="myForm" className="form-container">
        <input onChange={inputHandler} type="text" name="title" className="input1" placeholder="Book title" />
        <input onChange={inputHandler} type="text" name="author" className="input2" placeholder="Author" />
        <input type="submit" onClick={myFunction} className="addbook" value="Add Book" />
      </form>
    </>
  );
};

export default Bookform;
