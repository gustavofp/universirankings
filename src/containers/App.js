import React, { Component } from 'react';
import '../assets/css/App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/layout/Content'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Content>
            {this.props.children}
          </Content>  
        <Footer />  
      </div>  
    );
  }
}

export default App;
