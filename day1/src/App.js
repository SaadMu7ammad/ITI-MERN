import './App.css';
import LeftCol from './Components/LeftCol/LeftCol';
import Header from './Components/Header/Header';
import RightCol from './Components/RightCol/RightCol';
function App() {
  return (
    <>
      <Header />
      <div className="flex-container">
        <LeftCol />
        <RightCol />
      </div>
    </>
  );
}

export default App;
