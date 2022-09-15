import React from 'react';
import Book from './Book';
import Bookform from './Bookform';

const Books = () => {
  const allbooks =
    {
      id:"0",
      title: "The hunger game",
      author: 'Suzanna Collins',
    };
  return(
    <div className="">
     <Book {...allbooks} />
     <Bookform />
    </div>
  )

};
export default Books;
