// Action Types
export const STATUS_CHECK = '/books/CHECK_STATUS';

// initial State
const initialState = {
  categories: [],
};

// Reducers
const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STATUS_CHECK:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    default:
      return state;
  }
};

// Actions
export const checkStatus = () => (dispatch) => {
  dispatch({
    type: STATUS_CHECK,
    payload: 'Adding Books',
  });
};

export default categoriesReducer;
