import {
    LOGIN,
    FETCH_ASK_START,
    FETCH_ASK_SUCCESS,
    FETCH_ASK_FAILURE,
    NEW_USER,
  } from './actions'

const initialState = {
    friends: [],
    error: '',
    errorStatusCode: null,
    fetchingData: false,
    isLoggingIn: false,
    newFriend: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoggingIn: true
            }
        }
        case FETCH_ASK_START: {
            return {
                ...state,
                error: '',
                fetchingData: true
            }
        }
        case FETCH_ASK_SUCCESS: {
            return {
                ...state,
                error: '',
                fetchingData: false,
                friends: action.payload
            }
        }
        case FETCH_ASK_FAILURE: {
            return {
                ...state,
                errorStatusCode: action.payload.status
            }
        }
        // case NEW_USER: {
        //     return {
        //         ...state,
        //         errorStatusCode: action.payload.status
        //     }
        // }
    //     case NEW_FRIEND:
    //     return { ...state, newFriend: true };
    //   case NEW_FRIEND_SUCCESS:
    //     return {
    //       ...state,
    //       newFriend: false,
    //       friends: [...state.friends, ...action.payload]
          
    //     }
    //   case NEW_FRIEND_FAILURE:
    //     return { ...state, newFriend: false, error: action.payload }

    //     case DEL_FRIEND:
    //             return { ...state, newFriend: true };
    //           case DEL_FRIEND_SUCCESS:
    //             return {
    //               ...state,
    //               newFriend: false,
    //               friends: [...state.friends, ...action.payload]
                  
    //             }
    //           case DEL_FRIEND_FAILURE:
    //             return { ...state, newFriend: false, error: action.payload }

        default:
            return state
    }
}

export default reducer