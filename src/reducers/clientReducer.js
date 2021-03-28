const initialState = {
  clients: []
}

const GET_CLIENTS = 'GET_CLIENTS'
const REMOVE_CLIENT = 'REMOVE_CLIENT'

const getClients = () => (dispatch) => fetch('http://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then(data => dispatch({ type: GET_CLIENTS, payload: data }))

const removeClient = payload => ({ type: REMOVE_CLIENT, payload })

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clients: [...state.clients, ...action.payload] }
    case REMOVE_CLIENT:
      return { ...state, clients: state.clients.filter(client => client.id !== action.payload) }
    default:
      return state
  }
}

export { getClients, removeClient }
export default reducer
