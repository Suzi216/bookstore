import { addBook } from '../redux/books/books';
import useDispatch from 'react-redux';
import { useState } from "react";

const Bookform = () => (
  const disp = useDispatch();

  const [value ,setState]= useState( {
    title:"",
    author:"",
  });

  const inputHandler= (e) ={
    const value = e.target.value;
    if(e.target.name=="title"){
      setState(prev =>{
        prev.title=value,
      })
    }
    else{
      setState(prev =>{
        prev.author=value,
      })
    }

  };
  <>
    <h4> ADD NEW BOOK</h4>
    <form onSubmit={disp(addBook(value))} className="form-container">
      <input onChange={inputHandler} type="text" name="title" placeholder="Book title" />
      <input onChange={inputHandler} type="text" name="author" placeholder="Author" />
      <input type="submit" value="Add Book" />
    </form>
  </>
);

export default Bookform;
