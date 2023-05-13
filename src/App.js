import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import HomeComponent from './Components/home/HomeComponent';
import CalculatorComponent from './Components/Calculator/CalculatorComponent';
import CartoonComponent from './Components/Cartoon/CartoonComponent';
import Service from './Components/Service';
import ServiceList from './Components/ServiceList';
import { useState,useEffect } from 'react';
import Axios from 'axios'



function App() {

  const [value,SetValue]=useState([])
  useEffect(() => {
    Axios.get('http://localhost:4500/service')
    .then((res)=>{
      console.log(res.data);
    SetValue(res.data)
    })
  
  }, [])
  return (
    <Router>
      <div className='App'>
       
        <ul>
          <li>
          < Link to='/Calculator' className='link'>Calculator</Link>
          </li>
          <li>
            <Link to='/Cartoon' className='link'>Cartoon</Link>
          </li>
          <li>
            <Link to='/Home' className='link'>Home</Link>
          </li>
          <li>
            <Link to='/service' className='link'>Service</Link>
          </li>
         
          
        </ul>
        
        <Routes>
          <Route exact path='/Calculator' element={<CalculatorComponent/>}></Route>
          <Route exact path='/Cartoon' element={<CartoonComponent/>}></Route>
          <Route exact path='/Home' element={<HomeComponent/>}></Route>

          <Route exact path='/service' element={<Service/>}></Route>
          <Route exact path={`/service/${value.length}`} element={<ServiceList Length={value.length-1}/>}></Route>
        

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
