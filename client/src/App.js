import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom" 
import { CreditCard } from './Pages/CreditCard.jsx';
import { About } from './Pages/About.jsx';
import { Home } from './Pages/Home.jsx';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { BPO } from './Pages/BPO.jsx';
import { Payroll } from './Pages/Payroll.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/CreditCrads' element={<CreditCard/>}/>
            <Route path='/BPO-services' element={<BPO/>}/>
            <Route path='/payroll-services' element={<Payroll/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
