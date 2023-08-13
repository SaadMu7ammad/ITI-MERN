import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Image from './Components/Image/Image';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <>
      <Header />
      <div className="flex-container">
        <div className="LeftCol">
          <>
            <AboutMe />
            <Education />
            <Experience />
          </>
        </div>
        <div className="RightCol">
          <Image />
          <Contact />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
