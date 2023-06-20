import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header/Header';
import RightSide from './Components/Main/Main';
import ThemaContext from './Components/Contexts/ThemaContext';
import Sidebar from './Components/Sidebar/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : [],
      menuBtn : true
    }
  }

  toggleMode = () => {
     this.setState(state => {
      return {
        theme: state.theme === "light" ? "dark" : "light",
      }
     })
  }
  toggleMenu = (v) => this.setState({menuBtn: v});
  
  render() {
    localStorage.setItem('theme', JSON.stringify(this.state.theme));
    return (
      <ThemaContext.Provider value={{theme: this.state.theme, toggleMode: this.toggleMode,
       menuBtn: this.state.menuBtn, toggleMenu: this.toggleMenu}}>
      <div>
        <Sidebar></Sidebar>
        <Header></Header>       
        <RightSide></RightSide>      
      </div>
      </ThemaContext.Provider>
    );
  }
}

export default App
