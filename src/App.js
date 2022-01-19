import './App.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import PatientSearch from './components/PatientSearch';
import ClinicalRecord from './components/ClinicalRecord';
import RecordForm from './components/RecordForm';
import MyAppointment from './components/MyAppointment';
import Register from './components/Register';
import Account from './components/Account';
import ModificationData from './components/ModificationData';
import AppointListForDoctors from './components/AppointListForDoctors';
import Error403 from './components/Error403';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/:id/search" element={<PatientSearch />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/:id/record" element={<ClinicalRecord />} />
          <Route exact path="/:id/addrecord" element={<RecordForm />} />
          <Route exact path="/:id/appointment" element={<MyAppointment />} />
          <Route exact path="/:id/account" element={<Account />} />
          <Route exact path="/:id/modifyData" element={<ModificationData />} />
          <Route exact path="/:id/appointListForDoctors" element={<AppointListForDoctors />} />
          <Route exact path="/error403" element={<Error403 />} />
          <Route exact path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
