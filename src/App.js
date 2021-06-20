import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavComponent from './components/Navbar/NavComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Youtube from './components/Youtube/Youtube'
import Certification from './components/Certification/Certification'

function App() {
  const renderWithFooter = component => {
    return (
      <>
        {component}
        <Footer />
      </>
    )
  }
  return (
    <div
      style={{ marginBottom: '30px', marginTop: '0px', paddingBottom: '40px' }}
    >
      <Router>
        <div className="App">
          <NavComponent />
          <Switch>
            <Route path="/about">{renderWithFooter(<About />)}</Route>
            <Route path="/projects">{renderWithFooter(<Projects />)}</Route>
            <Route path="/contact">{renderWithFooter(<Contact />)}</Route>
            <Route path="/youtube">{renderWithFooter(<Youtube />)}</Route>
            <Route path="/certification">
              {renderWithFooter(<Certification />)}
            </Route>
            <Route path="/">{renderWithFooter(<Home />)}</Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
