import React from 'react'
import { useQuery } from 'react-query'
import { DataPokemon } from '../interface'

function CardPokemon(props: { url: string; index: number }) {
	const { data } = useQuery(['pokemon', props.index], fetchPokemons)

	async function fetchPokemons() {
		const response = await fetch(props.url)
		const json = await response.json()
		return json as DataPokemon
	}

	return (
		<>
			{data && (
				<section className='flex flex-col items-center justify-center border w-60 h-60'>
					<figure>
						<img
							src={data.sprites.front_default}
							alt={data.name}
						/>
					</figure>
					<h1>
						#{data.id} <span className='capitalize'>{data.name}</span>
					</h1>
					<ul>
						{data.types.map((type) => (
							<li
								className='capitalize text-center'
								key={type.slot}>
								{type.type.name}
							</li>
						))}
					</ul>
				</section>
			)}
		</>
	)
}

export default CardPokemon
