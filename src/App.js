import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
// import MainSection from './MainSection.js'
// import Footer from './Footer.js'
// import Citations from './Citations.js'


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <MainSection />
        <Footer />
        <Citations /> */}
      </div>
    )
  }
}

