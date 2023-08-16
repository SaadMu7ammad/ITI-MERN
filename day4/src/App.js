import './App.css';
import Home from './Components/Home.js';
import Profile from './Components/Profile';
import Card from './Components/Card';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/Components/style.css'
import Nav from './pages/Nav';
import { Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Products from './pages/Products';
// component function return ui || html ;
function App() {

  // var div = <h1>iti aswan</h1>;
  return (
    <>
     
      <Nav />
      <Routes>
        <Route index path='Home' element={<HomePage />} />
        <Route path='products' element={<Products/>} />
        {/* <Route path='login' element={<Login />} /> */}
        <Route path='form' element={<Form />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
