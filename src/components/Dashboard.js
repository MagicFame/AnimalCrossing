import React, { Component } from 'react'
import AffichageAnimal from './AffichageAnimal'
import animaux from '../animaux'
import Footer from './Footer'

export default class Dashboard extends Component {

  state = {
    animaux : {}
  }

  componentDidMount () {
    this.loadData()
  }

  loadData = () => {
    this.setState({ animaux })
  }


  render () {
    const cards = Object.keys(this.state.animaux)
      .map(key => <AffichageAnimal detail={this.state.animaux[key]} />)
    return (
        <>
          <header style={{ width: '90%', marginLeft: '10%' }}><h1 style={{ textAlign: 'center' }}>Bienvenue dans le chenil</h1></header>
          <div style={{ width: '90%', marginLeft: '10%', 	display: 'flex', flexWrap: 'wrap'}}>
            { cards }
            <Footer />
          </div>

        </>
    )
  }
}
