import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMoney, removeMoney } from '../reducers/moneyReducer'
import { getClients, removeClient } from '../reducers/clientReducer'

const App = () => {
  const dispatch = useDispatch()
  const money = useSelector(state => state.money.money)
  const clients = useSelector(state => state.clients.clients)

  return (
    <>
      <h1>Bank</h1>
      <h2>Your money: {money}</h2>
      <button
        type="button"
        onClick={() => dispatch(addMoney(5))}
      >Add money</button>
      <button
        type="button"
        onClick={() => dispatch(removeMoney(5))}
      >Remove money</button>
      <button
        type="button"
        onClick={() => dispatch(getClients())}
      >Get clients from server</button>
      <ul>
        {
          clients.length ? clients.map(client => (
            <li key={client.id}>
              <h3
                onClick={() => dispatch(removeClient(client.id))}>
                {client.name}
              </h3>
            </li>
          )) : null
        }
      </ul>
    </>
  )
}

export default App;
