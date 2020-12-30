import React from 'react';
import './App.css';

import Header from './Header'
import Todo from './Todo'
import StarWarsCharacterDetail from './StarWarsCharacterDetail';
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StarWarsCharacterDetail id="1" />
        <Footer />
      </div>
    );
  }
}

export default App;
