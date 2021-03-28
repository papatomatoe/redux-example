const initialState = {
  money: 0
}

const ADD_MONEY = 'ADD_MONEY'
const REMOVE_MONEY = 'REMOVE_MONEY'

const addMoney = payload => ({ type: ADD_MONEY, payload })
const removeMoney = payload => ({ type: REMOVE_MONEY, payload })


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return { ...state, money: state.money + action.payload }
    case REMOVE_MONEY:
      return { ...state, money: state.money - action.payload }
    default:
      return state
  }
}

export { addMoney, removeMoney }
export default reducer;
