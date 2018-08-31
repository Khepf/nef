import React, { Component } from 'react';
import Navbar from './Navbar';
import AboutSections from './AboutSections';
import Footer from './Footer';
import '../App.css';

class About extends Component {
  render() {
    return <div className="About">
    <Navbar />
    
    <AboutSections />
    
    <Footer />
    
    </div>;
  }
}

export default About;