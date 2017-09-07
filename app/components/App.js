import React from 'react'
import ReactDOM from 'react-dom'
import FaIconPack from 'react-icons/lib/fa/angle-double-left'

import Header from './header/Header'
import Footer from './footer/Footer'
import Hero from './hero/Hero'
import Nav from './nav/Nav'

require('../styles/app.scss');

class App extends React.Component {
 

  render() {
    return (
      
      <div className="animated fadeIn">
        <div>
          <Header></Header>
          <Hero></Hero>
          <Nav>

          </Nav>

          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default App
