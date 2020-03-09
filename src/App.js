import React from 'react';
import './App.css';


import RegistrationForm from './components/Registration';
import FillForm from './components/Completed';


function App() {

  const formInfo = info => {
    console.log("inside of app", info);
  }

  return (
    <div className="App">
      <RegistrationForm
      />

    </div>
  );
}

export default App;
