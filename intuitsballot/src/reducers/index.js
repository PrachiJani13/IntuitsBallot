import { combineReducers } from 'redux';
import {
  REQUEST_VOTERS, RECEIVE_VOTERS,
  API_ERROR
} from '../actions';

const voterReducer = (state = {
    isFetching: false,
    error: '',
    voters: []
  }, action) => {
    switch (action.type) {
      case REQUEST_VOTERS:
        return {
          ...state,
          error: '',
          isFetching: true,
        }
      case RECEIVE_VOTERS:
        return {
          ...state,
          isFetching: false,
          voters: action.posts,
        }
      case API_ERROR:
        return {
          ...state,
          error: action.error,
          voters: []
        }
      default:
        return state
    }
}

const rootReducer = combineReducers({
    voterReducer
})
  
export default rootReducer;