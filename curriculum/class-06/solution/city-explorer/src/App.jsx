import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Explore from './Explore';
import './assets/css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return(
      <>
        <Header />
        <Explore />
        <Footer />
      </>
    );
  }
}

export default App;
