import './App.css';
import Profile from './Components/Profile';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/Components/style.css'
import Nav from './pages/Nav';
import { Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Products from './pages/Products';
function App() {
  return (
    <>
     
      <Nav />
      <Routes>
        {/* for the default page */}
        <Route path='' element={<HomePage />} />
        <Route path='Home' element={<HomePage />} />
        <Route path='products' element={<Products/>} />
        <Route path='form' element={<Form />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
