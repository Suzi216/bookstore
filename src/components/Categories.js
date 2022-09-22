import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CHECK_STATUS = 'books/CHECK_STATUS';

const Categories = () => {
  const dispatch = useDispatch();
  const eventHandler = () => {
    dispatch({
      type: CHECK_STATUS,
    });
  };
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  return (
    <div className="status-button">
      <button onClick={eventHandler} type="button">Status Check</button>
      <p>
        {' '}
        {categories}
        {' '}
      </p>
    </div>
  );
};

export default Categories;
