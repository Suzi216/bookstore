import { createAsyncThunk } from '@reduxjs/toolkit';

const BOOK_ADDED = 'books/BOOK_ADDED';
const BOOK_REMOVED = 'books/REMOVE_BOOK';
const DISPLAY_BOOK = 'books/DISPLAY_BOOKS';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/O3So5kDZkObZ1qi8d5xN/books';

// display Books
export const displayBooks = createAsyncThunk(DISPLAY_BOOK, async () => {
  const response = await fetch(
    url,
  );
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  return books;
});

// addBook creator
export const addBook = createAsyncThunk(BOOK_ADDED, async (book, { dispatch }) => {
  await fetch(
    url,
    {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  dispatch(displayBooks());
});

// removeBook creator
export const removeBook = createAsyncThunk(BOOK_REMOVED, async (id, { dispatch }) => {
  await fetch(
    `${url}/${id}`,
    {
      method: 'DELETE',
    },
  );
  dispatch(displayBooks());
});

const initialState = [];

// the reducer function for the books
const BooksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOK_ADDED:
      return [...state, payload];
    case 'books/REMOVE_BOOK/fulfilled':
      return (state.filter((item) => item !== payload.id));
    case 'books/DISPLAY_BOOKS/fulfilled':
      return payload;
    default:
      return state;
  }
};

export default BooksReducer;
