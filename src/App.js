import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Header from './componentes/Header';
import Newtask from './componentes/NewTask';
import Task from './componentes/Task';

function App() {
  return (
    <div className="App container">
     <Header></Header>
     <Newtask></Newtask>
     <Task></Task>
     

    </div>
  );
}

export default App;
