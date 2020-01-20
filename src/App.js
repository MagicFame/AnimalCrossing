import React, { Component } from 'react'
import Navbars from './components/Navbars'
import Dashboard from './components/Dashboard'
import AddAnnonce from './components/AddAnnonce'

export default class App extends Component {
  state = {
    printedContent : 1
  }
  
  contentDisplayed = () => {
    if (this.state.printedContent === 1) {
      return <Dashboard token={this.state.token} id={this.state.id} user={this.state.user} />
    } else if (this.state.printedContent === 2) return <AddAnnonce id={this.state.id} changeContent={this.changeContent} />
  }

  changeContent = id => {
    const printedContent = id
    this.setState({ printedContent })
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
