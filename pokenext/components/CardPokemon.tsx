import React from 'react'
import { DataPokemon, TypePokemon } from '../interface'

function CardPokemon(props: { url: string; index: number }) {
	const [data, setData] = React.useState(null)

	React.useEffect(() => {
		async function fetchPokemon() {
			const response = await fetch(props.url)
			const json = await response.json()
			setData(json as DataPokemon)
		}
		fetchPokemon()
	})

	return (
		<>
			{data && (
				<section className='flex flex-col items-center justify-center rounded-md border-2 border-green-500 w-60 h-60'>
					<span></span>
					<figure>
						<img
							src={data.sprites.front_default}
							alt={data.name}
						/>
					</figure>
					<h1 className='mb-5'>
						<span className='capitalize'>{data.name}</span>
					</h1>
					<ul className='flex gap-2'>
						{data.types.map((type: TypePokemon) => (
							<li
								className='capitalize text-center rounded-lg border py-1 px-5'
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
