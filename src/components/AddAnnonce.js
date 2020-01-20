import React, { Component } from 'react'

export default class AddAnnonce extends Component {

  state = {
    nom: '',
    type: '',
    race: '',
    image: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleClick = event => {
    event.preventDefault()
    const animal = {...this.state}
    this.props.ajouterAnnonce(animal)
  }

  render () {
    return (
      <div style={{ width: '90%', marginLeft: '10%' }}>
        <div style={{ width: '85%', marginTop: '5%' }} className='card bg-dark text-white mx-auto'>
          <div className='card-header'><h2 className='text-center'>Ajouter une annonce</h2></div>
          <div className='card-body' style={{ display: 'flex' }}>
            <div className='col-md-8'>
              <span style={{ display: 'inline-block', height: '100%', verticalAlign: 'middle' }} />
              <img src={require('../images/default.jpg')} className='img-fluid' alt='fond' />
            </div>
            <div className='col-md-4 justify-content-center' style={{ margin: 'auto' }}>
              <form>
                <div className='form-group'>
                  <label htmlFor='nom'>Nom</label>
                  <input type='text' className='form-control' name='nom' id='nom' placeholder="Nom de l'animal" onChange={this.handleChange} required />
                </div>
                <div className='form-group'>
                  <label htmlFor='type'>Type</label>
                  <textarea id='type' className='form-control' name='type' placeholder="Type" onChange={this.handleChange} required />
                </div>
                <div className='form-group'>
                  <label htmlFor='race'>Race</label>
                  <textarea id='race' className='form-control' name='race' placeholder="Race" onChange={this.handleChange} required />
                </div>
                <div className='form-group'>
                  <label htmlFor='image'>Image</label>
                  <input type='text' id='image' className='form-control' name='image' placeholder='Image' onChange={this.handleChange}  required />
                </div>
                <div className='text-center'>
                  <button type='button' className='btn btn-outline-secondary' onClick={this.handleClick}>Ajouter</button>
                  <p>Tous les champs sont requis</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
