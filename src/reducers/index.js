import { combineReducers } from 'redux'
import moneyReducer from './moneyReducer'
import clientReducer from './clientReducer'

const rootReducer = combineReducers({
  money: moneyReducer,
  clients: clientReducer
})

export default rootReducer;
