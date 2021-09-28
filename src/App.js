import './App.css';
import Home from './components/Home';
import Login from './components/Login'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import PatientSearch from './components/PatientSearch';

function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={PatientSearch} />
        <Route exact path="/login" component={Login} />
      </Router>

    </div>
  );
}

export default App;
