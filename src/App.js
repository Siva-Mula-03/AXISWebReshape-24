
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultNavbar} from './comp/Navbar/Navbar';
import Home from './comp/Home/Home';
import Footer from './comp/Footer/Footer';
import Bgvid from './bgvideo1.mp4';
import "./App.css";
import imageb from './image.png'


const App = () => {
  const isSimpleNavbar = window.location.pathname === '/';

  return (
    <div className="app-container">
    

      <Router>
        <div>
          {/* <Navbar /> */}
          {<DefaultNavbar  />}
         
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/leaderboard" element={<Leaderboard />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;