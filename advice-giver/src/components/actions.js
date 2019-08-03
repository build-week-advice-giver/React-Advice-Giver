import axios from "axios"
export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const FETCH_ASK_START = "FETCH_ASK_START"
export const FETCH_ASK_SUCCESS = "FETCH_ASK_SUCCESS"
export const FETCH_ASK_FAILURE = "FETCH_ASK_FAILURE"
export const NEW_USER = "NEW_USER"

export const login = data => dispatch => {
  dispatch({ 
      type: LOGIN
     })
  return axios
    .post('https://advice-giver.herokuapp.com/auth/login', data)
    .then(res => localStorage.setItem("token", res.data.payload))
}

export const getData = () => dispatch => {
  dispatch({ 
      type: FETCH_ASK_START
     })
  axios
    .get('https://advice-giver.herokuapp.com/messages', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ 
          type: FETCH_ASK_SUCCESS, 
          payload: res.data })
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem('token')
      }
      dispatch({ 
          type: FETCH_ASK_FAILURE, 
          payload: err.response 
        })
    })
}

export const newUser = (data) => dispatch => {
    dispatch({ 
        type: NEW_USER
       })
    axios
      .post('https://advice-giver.herokuapp.com/auth/register', data)
      .then(({data})=> dispatch({ 
            type: NEW_USER, 
            payload: data })
      )

      .catch(err => {
        if (err.response.status === 403) {
          localStorage.removeItem('token')
        }
        dispatch({ 
            type: NEW_USER, 
            payload: err.response 
          })
      })
  }

// export const NEW_FRIEND = 'NEW_FRIEND'
// export const NEW_FRIEND_SUCCESS = 'NEW_FRIEND_SUCCESS'
// export const NEW_FRIEND_FAILURE = 'NEW_FRIEND_FAILURE'

// export const addFriend = friend => dispatch => {

//   dispatch({ type: NEW_FRIEND });
//   axios
//     .post('http://localhost:5000/api/friends', friend, {
//       headers: { Authorization: localStorage.getItem('token') }
//     })

//     .then(({ data }) => dispatch(
//       {
//         type: NEW_FRIEND_SUCCESS,
//         payload: data
//       }
      
//     ))

//     .catch(({ data }) => dispatch(
//       {
//         type: NEW_FRIEND_FAILURE,
//         payload: data
//       }
//     ))
// }

// export const DEL_FRIEND = 'DEL_FRIEND'
// export const DEL_FRIEND_SUCCESS = 'DEL_FRIEND_SUCCESS'
// export const DEL_FRIEND_FAILURE = 'DEL_FRIEND_FAILURE'

// export const delFriend = id => dispatch => {

//   dispatch({ type: DEL_FRIEND });
//   axios
//     .delete('http://localhost:5000/api/friends/${id}', {
//       headers: { Authorization: localStorage.getItem('token') }
//     })

//     .then(({ data }) => dispatch(
//       {
//         type: DEL_FRIEND_SUCCESS,
//         payload: data
//       }
      
//     ))

//     .catch(({ data }) => dispatch(
//       {
//         type: DEL_FRIEND_FAILURE,
//         payload: data
//       }
//     ))
// }