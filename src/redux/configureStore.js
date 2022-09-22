import { combineReducers, configureStore } from '@reduxjs/toolkit';
import BooksReducer from './books/books';
import CategoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  book: BooksReducer,
  categories: CategoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
