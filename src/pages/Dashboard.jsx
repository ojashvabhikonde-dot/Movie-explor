import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import HeroSection from './Herosection'
import MovieCard from './Moviecard'

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-10">
        <Home />
      </div>
    </div>
  );
};

export default Dashboard;