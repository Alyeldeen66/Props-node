import React from 'react';
import Profile from './profile/Profile';
import './App.css';

function App() {
  
  return (
    <div className="App">
        <Profile fullName="Alyeldeen" bio="Learn to serve" profession='Engineer' handleName={(name) => alert(name)} ><img src="https://via.placeholder.com/150"/></Profile>  
    </div>
  );
}

export default App;
