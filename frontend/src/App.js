import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'


function App() {

  return (

    <Router>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
    
  );
}

export default App;

