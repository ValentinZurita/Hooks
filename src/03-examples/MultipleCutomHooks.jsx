import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { PokemonCard } from './PokemonCard'
import { LoadingMessage } from './LoadingMessage'

export const MultipleCutomHooks = () => {
  const { counter, decrement, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  )

  return (
    <>
      {/*Título */}
      <h1 className='text-center'>Información Pokémon:</h1>
      <hr />

      {/*Mostrar Pokemon */}
      {console.log(isLoading)}
      <div className="d-flex justify-content-center">
        {isLoading ? (
          <LoadingMessage />
        ) : (
          <PokemonCard
            sprites={[
              data?.sprites?.front_default,
              data?.sprites?.back_default,
            ]}
            id={counter}
            name={data?.name}
          />
        )}
      </div>

      {/*Botones para cambiar pokemones */}
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mt-2"
          onClick={() => (counter > 1 ? decrement(1) : null)}
        >
          Anterior
        </button>
        <button
          className="btn btn-primary mt-2"
          onClick={() => (counter < 898 ? increment(1) : null)}
        >
          Siguiente
        </button>
      </div>
    </>
  )
}
