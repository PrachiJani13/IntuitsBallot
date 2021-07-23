import { combineReducers } from 'redux';
import {
  REQUEST_VOTERS, RECEIVE_VOTERS,
  API_ERROR,
  DELETED_VOTER,
  DELETE_VOTER,
  ADD_VOTER,
  ADDED_VOTER,
  EDIT_VOTER,
  EDITED_VOTER
} from '../actions';

const voterReducer = (state = {
    isFetching: false,
    error: '',
    voters: []
  }, action) => {
    switch (action.type) {
      // These cases are handled similarly
      // This is just a syntax to combine cases, not a bug
      case REQUEST_VOTERS:
      case DELETE_VOTER:
      case ADD_VOTER:
      case EDIT_VOTER:
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
      case DELETED_VOTER:
        return {
          ...state,
          isFetching: false,
          voters: state.voters.filter(voter => voter.id !== action.voterId)
        }
      case EDITED_VOTER:
        let indexToSave = state.voters.findIndex((voter) => voter.id === action.voter.id);
        let votersCopy = [...state.voters];
        votersCopy[indexToSave] = action.voter;
        return {
          ...state,
          isFetching: false,
          voters: votersCopy
        }
      case ADDED_VOTER:
      return {
        ...state,
        isFetching: false,
        voters: [...state.voters, action.voter]
      }
      default:
        return state
    }
}

const rootReducer = combineReducers({
    voterReducer
})
  
export default rootReducer;