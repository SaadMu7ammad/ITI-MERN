import './App.css';
import Profile from './Components/Profile';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Components/style.css';
import Nav from './pages/Nav';
import { Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { useState } from 'react';
import Counter from './pages/Counter';
import { counterContext } from './config/CounterContext';
import { Store } from './Redux/Store';
import { Provider } from 'react-redux';

function App() {
  // var[c,setCounter]=useState(0)
  var [C, setC] = useState(0);
  return (
    <>
      <Provider store={Store}>
        <counterContext.Provider value={{ C, setC }}>
          <Nav />
          <Routes>
            {/* for the default page */}
            <Route path="" element={<HomePage />} />
            <Route path="Home" element={<HomePage />} />
            <Route path="products" element={<Products />} />
            <Route path="form" element={<Form />} />
            <Route path="profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />
            <Route path="counter" element={<Counter />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </counterContext.Provider>
      </Provider>
    </>
  );
}

export default App;
