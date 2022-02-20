import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


import Home from './components/Home/Index'
import ListRecipes from './components/ListRecipes/ListRecipes';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">

      
      <Home></Home>
      {/* <Landing></Landing> */}
      <ListRecipes></ListRecipes>

    </div>
  );
}

export default App;
