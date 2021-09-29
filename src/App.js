import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import PatientSearch from './components/PatientSearch';
import ClinicalRecord from './components/ClinicalRecord';
import RecordForm from './components/RecordForm';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={PatientSearch} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/record" component={ClinicalRecord} />
        <Route exact path="/addrecord" component={RecordForm} />
      </Router>

    </div>
  );
}

export default App;
