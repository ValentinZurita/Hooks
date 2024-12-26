import React from 'react'
import PropTypes from 'prop-types'

export const PokemonCard = ({ id, name, sprites = [] }) => {
  // Return the pokemon card
  return (
    // Carta del pokemon
    <section className="card m-2 p-2" style={{ width: '500px' }}>
      {/* Sprites del pokemon */}
      <div className="d-flex justify-content-center flex-wrap">
        {sprites.map((sprite) => (
          <img
            key={sprite}
            src={sprite}
            className="card-img-top mx-1"
            alt={name}
            style={{ width: '200px', height: '200px' }}
          />
        ))}
      </div>

      {/* Nombre del pokemon */}
      <div className="card-body">
        <h4 className="text-center text-capitalize">
          #{id} {name}
        </h4>
      </div>
    </section>
  )
}

// Definición de las propiedades del componente
PokemonCard.propTypes = {
  sprites: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
}
