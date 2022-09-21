import logo from './logo.svg';

import './App.css';
import Login from './componets/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Regi from './componets/Regi';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}> </Route>
        <Route path="Reg" element={<Regi />}> </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
