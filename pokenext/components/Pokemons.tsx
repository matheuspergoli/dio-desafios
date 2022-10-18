import React from 'react'
import { useQuery } from 'react-query'
import CardPokemon from './CardPokemon'
import { Data } from '../interface'

function Pokemons() {
	const { data } = useQuery(['pokemons-data'], fetchPokemons)

	async function fetchPokemons() {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon')
		const json = await response.json()
		return json as Data
	}

	return (
		<div className='flex items-center justify-center gap-5 flex-wrap mx-auto max-w-5xl'>
			{data &&
				data.results.map((result, index) => (
					<CardPokemon
						key={index}
						index={index}
						url={result.url}
					/>
				))}
		</div>
	)
}

export default Pokemons
