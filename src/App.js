
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import Calculator from './Components/Calculator';

function App() {
  return (
    <Router>
      <div className='App'>
        
        <ul>
          <li>
            <Link to='/Home' className='link'>Home</Link>
          </li>
          <li>
            <Link to='/Calculator' className='link'>Calculator</Link>
          </li>
          <li>
            <Link to='/cartoon' className='link'>cartoon</Link>
          </li>
         
          
        </ul>
        <Routes>
          <Route exact path='/Home' element={<HomeComponent/>}></Route>
          <Route exact path='/Calculator' element={<Calculator/>}></Route>

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
