import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js';
import Profile from './Components/Profile';
import Card from './Components/Card';
import Counter from './Components/Counter';
import List from './Components/List';
import Table from './Components/Table';
import Todo from './Components/ToDo/Todo';
import Login from './Components/Login/Login';
// component function return ui || html ;
function App() {

  // var div = <h1>iti aswan</h1>;
  return (
    <>
      {/* <Home /> */}
      {/* <Card name="negm" age={22} color="red" />
      <Card name="ali" age={30} color="green" />
      <Card name="sayed" age={44} color="blue" /> */}
      {/* <Profile /> */}
      {/* <Counter /> */}
      {/* <Login /> */}
      {/* <List /> */}
      {/* <Table /> */}
      <Todo></Todo>
      <Login />
    </>
  );
}

export default App;






// function sum(x, y) {
//   return x + y;
// }

// sum(10,20);
