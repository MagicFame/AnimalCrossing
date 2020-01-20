import React, { Component } from 'react'
import Navbars from './components/Navbars'
import Dashboard from './components/Dashboard'
import AddAnnonce from './components/AddAnnonce'
import animaux from './animaux'
import Login from './components/Login'

export default class App extends Component {
  state = {
    printedContent : 1,
    animaux : {},
    nomCompte : ''
  }

  componentDidMount () {
    this.loadData()
  }

  loadData = () => {
    this.setState({ animaux })
  }

  contentDisplayed = () => {
    if (this.state.printedContent === 1) {
      return <Dashboard animaux={this.state.animaux} />
    } else if (this.state.printedContent === 2) return <AddAnnonce ajouterAnnonce={(annonce) => this.ajouterAnnonce(annonce)} />
    else return <Login login={(name) => this.login(name)} />
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

  login = name => {
    console.log(name)
    this.changeContent(1)
  }

  render () {
    return (
      <div className='wrapper'>
        <Navbars
          changeContent={this.changeContent}
          signOut={this.signOut}
        />
        {this.contentDisplayed()}
      </div>
    )
  }
}
