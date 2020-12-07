import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Components/Header.js'
import { Button } from 'react-bootstrap';
import logo from './logo.svg'
import React from 'react'
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <Header></Header>
        
        <p></p>
        <button color="white">Button</button>
        </div>
      </div>
    )
  }

}

export default App;
