import React from 'react'

const AffichageAnimal = ({ detail }) => {

  const requireImage = chemin => {
    try {
      return require(`../images/${chemin}`)
    } catch (err) {
      return require(`../images/default.jpg`)
    }
  }
  return (
    <div className='card mx-auto' style={{ marginTop: '3%', width: '30%', backgroundColor: '#6B7FA4' }}>

      <img className='card-img-top' src={requireImage(detail.image)} alt={detail.nom} />
      <div className='card-body'>
        <div className='card-title'>
          <h2>{detail.nom}</h2>
        </div>
        <p className='card-text'>Type : {detail.type} <br />Race : {detail.race}</p>
      </div>
    </div>
  )
}

export default AffichageAnimal
