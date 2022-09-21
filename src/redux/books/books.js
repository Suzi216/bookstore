// Action Types
// import { uuid } from 'uuidv4';

const BOOK_ADDED = 'books/BOOK_ADDED';
const BOOK_REMOVED = 'books/BOOK_REMOVED';
// addBook actions creator
export const addBook = (values) => (dispatch) => {
  dispatch({
    type: BOOK_ADDED,
    payload: values,
  });
};

// removeBook action creator
export const removeBook = (payload) => ({
  type: BOOK_REMOVED,
  payload,
});

const initialState = [
  {
    id: '0',
    title: 'The hunger game',
    author: 'Suzanna Collins',
  },
  {
    id: '1',
    title: 'The hunger game',
    author: 'Suzanna Collins',
  },
];

// the reducer function for the books
const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOK_ADDED:
      return [...state, payload];
    case BOOK_REMOVED:
      return (state.filter(({ id }) => id !== payload.id));
    default:
      return state;
  }
};

export default booksReducer;
