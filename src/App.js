import './App.css';
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import CoinPage from './Pages/Coin';
import Compare from './Pages/Compare';

function App() {
return(
  <div>
  <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
  </BrowserRouter>
  </div>
)
}

export default App;
