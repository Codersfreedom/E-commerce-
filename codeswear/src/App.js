import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Allroutes from "./Allroutes";
import HomeMainbar from "./components/HomeMainbar";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Allroutes/>
  
      
  
      </Router>
    </div>
  );
}

export default App;
