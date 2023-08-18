import './App.css';
import Favourite from './Components/Pages/Favourite';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Nav from '../src/Components/Nav/Nav';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';

function App() {

  return (
    <>
       <Provider store={Store}>
     <Nav/>
      <Routes>
        <Route index path='' element={<Home />} />
        <Route index path='Home' element={<Home />} />
        <Route path='favourite' element={<Favourite />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      </Provider>
     
      </>
  );
}

export default App;
