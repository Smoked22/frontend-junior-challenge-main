import axios from 'axios';
import {useDispatch} from "react-redux";

export const GET_ALL_DATA_REQUEST = 'GET_ALL_DATA_REQUEST';
export const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS';
export const GET_ALL_DATA_FAILURE = 'GET_ALL_DATA_FAILURE';

export const getAllData = () => async dispatch => {
  dispatch({ type: GET_ALL_DATA_REQUEST });
  try {
    const response = await axios.get('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos');
    dispatch({ type: GET_ALL_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ALL_DATA_FAILURE, payload: error.message });
  }
};