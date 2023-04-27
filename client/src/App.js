import {Routes , Route} from 'react-router-dom'
import About from './pages/About';
import Register from './pages/Auth/Register';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';

import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPasssword from './pages/Auth/ForgotPassword';
function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>} />
        
        <Route path='/dashboard' element={<PrivateRoute/>}>
        <Route path='' element={<Dashboard/>} />
        </Route>
        <Route path='/forgot-password' element={<ForgotPasssword/>} />
     </Routes>
      
    
      
    </>
  );
}

export default App;
