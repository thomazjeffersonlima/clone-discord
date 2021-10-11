import React from 'react';
import Header from './components/Header'
import Logo from './img/logo.svg'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header logo={Logo} />
      </div>
    );
  }
}

export default App;
