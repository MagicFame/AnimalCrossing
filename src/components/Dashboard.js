import React, { Component } from 'react'
import AffichageAnimal from './AffichageAnimal'

import Footer from './Footer'

export default class Dashboard extends Component {
  render () {
    const cards = Object.keys(this.props.animaux)
      .map(key => <AffichageAnimal key={key} detail={this.props.animaux[key]} />)
    return (
      <>
        <header style={{ width: '90%', marginLeft: '10%' }}><h1 style={{ textAlign: 'center' }}>Bienvenue dans le chenil</h1></header>
        <div style={{ width: '90%', marginLeft: '10%', display: 'flex', flexWrap: 'wrap' }}>
          {cards}
          <Footer />
        </div>
      </>
    )
  }
}
