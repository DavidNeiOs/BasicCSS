import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import HeaderComponent from './components/header/headerComponent';
import SideBar from './components/sideBar/sideBar';
import MainComponent from './components/main/mainComponent'
import FooterComponent from './components/footer/footerComponent'
import PackagesComponent from './components/packages/packagesComponent';
import CustomersComponent from './components/customers/customersComponent';
import StartHosting from './components/startHosting/startHosting';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      sideBarShown: false
    }
  }

  showSideBar = () => {
    this.setState({ sideBarShown: !this.state.sideBarShown })
  }
  
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="grid-container">
            <HeaderComponent showSideBar={() => this.showSideBar()}></HeaderComponent>
            {this.state.sideBarShown ?
              <SideBar showSideBar={() => this.showSideBar()}></SideBar>
              :
              null
            }
            <Route path="/" component={MainComponent} exact></Route>
            <Route path="/packages" component={PackagesComponent}></Route>
            <Route path="/customers" component={CustomersComponent}></Route>
            <Route path="/startHosting" component={StartHosting}></Route>
            <FooterComponent></FooterComponent>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
