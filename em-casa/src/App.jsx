import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Landing from './components/Landing/Landing';
import ComprarIngredientes from './components/ComprarIngredientes/ComprarIngredientes';

function App() {
  return (
    <div className="App">
      {/* <Landing></Landing> */}
      <ComprarIngredientes></ComprarIngredientes>
    </div>
  );
}

export default App;
