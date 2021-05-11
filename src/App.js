import React from 'react';
import './App.css';
import Technologies from './Technologies.js';
import Header from './Header.js';

const App = () => {
  return (
    <section>
      <Header />
      <div>first div</div>
      <div className="App">
        <p>My first Change</p>
        <Technologies />
      </div>
    </section>
  );
}



export default App;
