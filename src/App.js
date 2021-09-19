import './App.css';
import { NameProvider } from './context/NameContext'
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import PatientSearch from './components/PatientSearch';

function App() {
  return (
    <div className="App">
      <NameProvider>
        <Router>
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={PatientSearch} />
        </Router>
      </NameProvider>
    </div>
  );
}

export default App;
