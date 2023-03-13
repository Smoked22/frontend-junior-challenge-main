import { GET_ALL_DATA_REQUEST, GET_ALL_DATA_SUCCESS, GET_ALL_DATA_FAILURE } from './actions';
import {useDispatch} from "react-redux";

const initialState = {
  loading: false,
  data: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_ALL_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;