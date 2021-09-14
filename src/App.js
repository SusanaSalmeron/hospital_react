import './App.css';
import PatientList from './components/PatientList';
import { KeywordProvider } from './context/KeywordContext'


function App() {
  return (
    <div className="App">
      <KeywordProvider>
        <PatientList />
      </KeywordProvider>

    </div>
  );
}

export default App;
