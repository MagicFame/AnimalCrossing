import React, { Component } from 'react'
import Navbars from './components/Navbars'
import Dashboard from './components/Dashboard'
import AddAnnonce from './components/AddAnnonce'
import animaux from './animaux'
import Login from './components/Login'
import Register from './components/Register'

export default class App extends Component {
  state = {
    printedContent : 1,
    animaux : {},
    connected: false,
    nomCompte : ''
  }

  componentDidMount () {
    this.loadData()
  }

  loadData = () => {
    this.setState({ animaux })
  }

  contentDisplayed = () => {
    switch (this.state.printedContent) {
      case 1: return <Dashboard animaux={this.state.animaux} />
      case 2: return <AddAnnonce ajouterAnnonce={(annonce) => this.ajouterAnnonce(annonce)} />
      case 3: return <Login login={(name) => this.login(name)} />
      case 4: return <Register login={(name) => this.login(name)} />
      default: break
    }
  }

  changeContent = id => {
    const printedContent = id
    this.setState({ printedContent })
  }

  ajouterAnnonce = annonce => {
    let animaux = { ...this.state.animaux }
    animaux[`animal${Date.now()}`] = annonce
    this.setState({ animaux })
    console.log(animaux)
    this.changeContent(1)
  }
  logout = () => {
    this.setState({
      connected: false,
      nomCompte: ''
    })
  }

  login = loginReturn => {
    if(loginReturn.name) {
      this.setState({ 
        nomCompte : loginReturn.name,
        connected: true 
      })
      this.changeContent(1)
    }
    else this.changeContent(loginReturn.aim)
  }

  render () {
    return (
      <div className='wrapper'>
        <Navbars
          logout={this.logout}
          changeContent={this.changeContent}
          pseudo={this.state.nomCompte}
          connected={this.state.connected}
        />
        {this.contentDisplayed()}
      </div>
    )
  }
}
