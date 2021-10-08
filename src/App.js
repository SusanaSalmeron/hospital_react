import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import PatientSearch from './components/PatientSearch';
import ClinicalRecord from './components/ClinicalRecord';
import RecordForm from './components/RecordForm';
import Appointment from './components/Appointment'
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
        <Route exact path="/:id/record" component={ClinicalRecord} />
        <Route exact path="/:id/addrecord" component={RecordForm} />
        <Route exact path="/appointment" component={Appointment} />
      </Router>

    </div>
  );
}

export default App;
