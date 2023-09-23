
import './App.css';
import Image from './Image';
import React from 'react';
import catImag from './staringCat.jpg';

class App extends React.Component {
  render() {
    return (
      <>
        <Image endereco={catImag} alternativo="gato pensativo" />
      </>
    );
  }
}

export default App;
