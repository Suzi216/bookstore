// Action Types
const CHECK_STATUS = 'books/CHECK_STATUS';

// checkstatus actions creator
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// declare the initial state
const initialState = 'No books';

// the reducer function for the books
const categoriesReducer = (state = initialState, type) => {
  switch (type) {
    case CHECK_STATUS:
      return 'Many books added';
    default:
      return state;
  }
};

export default categoriesReducer;
