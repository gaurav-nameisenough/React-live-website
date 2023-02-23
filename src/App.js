import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import LogIn from './Pages/Login/Login';


import { BrowserRouter as Router, Routes, Route} 
        from "react-router-dom";
import Signup from './Pages/SignUp/Signup';

function App() {

  
  return (
    <div className="App">
    <Router>

      <Routes>

        
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/login" element={<LogIn />} />
      <Route exact path="/signup" element={<Signup/>}  />

     </Routes>

    </Router>
     
     
     
    </div>
  );
}

export default App;
