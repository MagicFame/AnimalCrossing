import React from 'react'
import './Navbar.css'

const Navbars = ({ changeContent, signOut }) => {
  return (
    <div>
      <div style={{ position: 'absolute', top: '15px', right: '15px' }}><button className='btn btn-primary' onClick={() => changeContent(3)}>Login</button></div>
      <nav className='navbar navbar-expand-md navbar-dark fixed-left' style={{ backgroundColor: '#6B7FA4' }} id='sidebar'>
        <img src={require('../images/logo.jpg')} className='img-fluid' alt='Resposive logo' />
        <div className='collapse navbar-collapse' id='navbarsExampleDefault' style={{ marginTop: '15%' }}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <button className='btn btn-dark' id='button' onClick={() => changeContent(1)}>Annuaire</button>
            </li>
            <li className='nav-item'>
              <button className='btn btn-dark' id='button' onClick={() => changeContent(2)}>Ajouter une annonce</button>
            </li>
            <li>
              <button className='btn btn-dark' id='button'>Se déconnecter</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbars
