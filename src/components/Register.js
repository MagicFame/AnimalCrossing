import React, { Component } from 'react'

export default class Login extends Component {
  
  state = {
    nom: '',
    mdp: '',
    mdp2: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleClick = event => {
    event.preventDefault()
    this.props.login({aim: 3})
  }

  passwordValidated = () => {
      console.log(this.state.mdp === this.state.mdp2)
      if(this.state.mdp && this.state.mdp === this.state.mdp2) {
        return true
      }
      return false
  }

  register = event => {
    event.preventDefault()
    const name = this.state.nom 
    this.props.login({name: name})
  }
  
  render () {
    return (
      <div style={{ marginTop: '5%' }} className='col-md-6 card bg-dark text-white mx-auto'>
        <div className='card-header'><h2 className='text-center'>Création de compte</h2></div>
        <div className='card-body' style={{ display: 'flex' }}>
          <div className='col-md-3' />
          <div className='col-md-6'>
            <form>
              <div className='form-group'>
                <label htmlFor='nom'>Login</label>
                <input type='text' className='form-control' name='nom' id='nom' onChange={this.handleChange} placeholder='Votre login' required />
              </div>
              <div className='form-group'>
                <label htmlFor='mdp'>Mot de Passe</label>
                <input type='password' className='form-control' name='mdp' id='mdp' onChange={this.handleChange} placeholder='Votre mot de passe' required />
              </div>
              <div className='form-group'>
                <label htmlFor='mdp2'>Confirmation</label>
                <input type='password' className='form-control' name='mdp2' id='mdp2' onChange={this.handleChange} placeholder='Confirmez votre mot de passe' required />
              </div>
              <div className='text-center form-group'>
                <button type='button' className='btn btn-primary' onClick={this.handleClick}>Se connecter</button>
                <button type='button' className='btn btn-primary' onClick={this.register} disabled={!this.state.nom || !this.passwordValidated()}>Créer un compte</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
