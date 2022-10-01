import './App.css';
// import Footer from './Components/Footer/Footer';
import Home from './Components/Homepage/Home';
import Navbar from "./Components/Navbar/Navbar"
import NavbarUpper from "./Components/Navbar/NavbarUpper"
function App() {
  return (
    <div className="App">
      <NavbarUpper />
      <Navbar />
    
      {/* <Footer/> */}
      <Home/>
    </div>
  );
}

export default App;
