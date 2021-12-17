import './App.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import PatientSearch from './components/PatientSearch';
import ClinicalRecord from './components/ClinicalRecord';
import RecordForm from './components/RecordForm';
import MyAppointment from './components/MyAppointment';
import Register from './components/Register'
import Account from './components/Account'
import ModificationData from './components/ModificationData'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AppointListForDoctors from './components/AppointListForDoctors';



function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/home" component={Home} />
        <Route exact path="/:id/search" component={PatientSearch} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/:id/record" component={ClinicalRecord} />
        <Route exact path="/:id/addrecord" component={RecordForm} />
        <Route exact path="/:id/appointment" component={MyAppointment} />
        <Route exact path="/:id/account" component={Account} />
        <Route exact path="/:id/modifyData" component={ModificationData} />
        <Route exact path="/:id/appointListForDoctors" component={AppointListForDoctors} />
      </Router>

    </div>
  );
}

export default App;
