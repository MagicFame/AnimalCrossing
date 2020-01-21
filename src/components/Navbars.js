import React from 'react'
import './Navbar.css'

const Navbars = ({ changeContent, pseudo, connected, logout }) => {
  return (
    <div>
      {
        connected
          ? <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
            Bonjour {pseudo}
          </div>
          : <div style={{ position: 'absolute', top: '15px', right: '15px' }}><button className='btn btn-dark' onClick={() => changeContent(3)}>Login</button></div>
      }
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
            {
              connected
                ? <li>
              <button className='btn btn-dark' id='button' onClick={logout}>Se déconnecter</button>
              </li>
                : null
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbars
