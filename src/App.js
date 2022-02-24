import style from './App.module.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import PatientSearch from './components/PatientSearch';
import ClinicalRecord from './components/ClinicalRecord';
import RecordForm from './components/RecordForm';
import MyAppointment from './components/MyAppointment';
import Register from './components/Register';
import ModificationData from './components/ModificationData';
import AppointListForDoctors from './components/AppointListForDoctors';
import Error403 from './components/Error403';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'



function App() {
  return (
    <div className={style.App}>
      <ScrollToTop>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:id/search" element={<PatientSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:id/record" element={<ClinicalRecord />} />
          <Route path="/:id/addrecord" element={<RecordForm />} />
          <Route path="/:id/appointment" element={<MyAppointment />} />
          <Route path="/:id/modifyData" element={<ModificationData />} />
          <Route path="/:id/appointListForDoctors" element={<AppointListForDoctors />} />
          <Route path="/error403" element={<Error403 />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/legalNotice" element={<LegalNotice />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <div className={style.footer}>
          <Footer />
        </div>
      </ScrollToTop>
    </div>
  );
}

export default App;
