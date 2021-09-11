import React from 'react';
import './App.css';
import textos from './components/data.json';
import Texto from './components/Texto';
import OpcionesBotones from './components/OpcionesBotones';

class App extends React.Component{
  render(){
    return (
      <div className="layout">
          <Texto />
      </div>
    );
    }
}
export default App;
