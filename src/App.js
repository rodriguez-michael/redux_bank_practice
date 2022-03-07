import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from './state/index'

function App() {

  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => deposit(100)}>Deposit</button>
      <button onClick={() => withdraw(50)}>Withdraw</button>
    </div>
  );
}

export default App;