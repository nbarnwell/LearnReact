import React from 'react';
import './App.css';

import Header from './Header'
import Todo from './Todo'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todo />
        <Footer />
      </div>
    );
  }
}

export default App;
