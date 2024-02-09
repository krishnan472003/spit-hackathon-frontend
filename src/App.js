import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from "./Screens/Home";
function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/signup' element = {<Signup/>}/>
          <Route exact path='/login' element = {<Login/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
