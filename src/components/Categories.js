import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { checkStatus } from '../redux/categories/categories';

const CategoriesReducer = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const clickHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" onClick={clickHandler}>
        Check Status
      </button>
      {categories.map((el) => (
        <p key={uuidv4()}>{el}</p>
      ))}
    </>
  );
};

export default CategoriesReducer;
