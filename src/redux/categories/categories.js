// Action Types
const CHECK_STATUS = 'books/CHECK_STATUS';

// checkstatus actions creator
export const checkStatus = () => ({
  type: CHECK_STATUS,
});


// declare the initial state
const initialState = [];

// the reducer function for the books
const categoriesReducer = (state = initialState, type ) => {
  switch (type) {
    case CHECK_STATUS:
      return "Being created";
    default:
      return state;
  }
};

export default categoriesReducer;
