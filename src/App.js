import './App.css';
import Singup from './pages/Signup/singup';
import Login from './pages/login/login';
import VerifyEmail from './pages/Signup/verifyEmail';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import ForgotPassword from './pages/login/forgotPassword';
import ResetPasswrod from './pages/login/resetPasswrod';
// import { useFetch } from './Helpers/urls';

function App() {
  // const url = "https://reqres.in/api/users?delay=1";
  // // const getDAta = async() => {
  //   const res = useFetch(url, "get");
  //   console.log(res, "response ")

  // }
  return (
    <div className="App">
      <Routes>
        <Route path='/' index element={<Singup />} />
        <Route path='/verifyemail' element={<VerifyEmail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/api/auth/resetPassword/:id/:token' element={<ResetPasswrod />} />
      </Routes>
    </div>
  );
}

export default App;
