import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Home from "./component/home";

function App() {
  const [state,setState] = useState({isLoggedIn: false})
  const handleLogIn = () =>{
    setState({isLoggedIn: true})
  }
  const handleLogOut = () =>{
    setState({isLoggedIn: false})
  }
  const {isLoggedIn} = state
  if (isLoggedIn) return (<Home onLogOut={handleLogIn}/>)
  return (
      <div style={{textAlign: 'center'}}>
        <div>
          <h1>Please Log in</h1>
          <button onClick={handleLogIn}>Log in</button>
        </div>
      </div>
  );
}

export default App;
