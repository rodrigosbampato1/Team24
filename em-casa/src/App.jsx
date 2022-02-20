import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Calendar } from 'primereact/calendar';

function App() {
  return (
    <div className="App">
      <Calendar></Calendar>
    </div>
  );
}

export default App;
