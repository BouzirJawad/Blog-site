import { Route, Routes } from 'react-router-dom';
import Image from './assets/Image.jpeg';
import Login from './pages/Login';

// import Register from './pages/Register';
export default function App() {
  return (
<div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${Image})` }}
    >        {/* <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes> */}
        <Login/>
    </div>
  );
}
