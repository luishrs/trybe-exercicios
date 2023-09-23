import React from 'react';

class Image extends React.Component {
   
  render() {
    const { endereco, alternativo } = this.props;
    return <img src={ endereco } alt={ alternativo } />;
  }
}

export default Image;