export interface Data {
	count: number
	next: string
	previous: null | string
	results: { name: string; url: string }[]
}

export interface DataPokemon {
	id: number
	name: string
	height: number
	weight: number
	types: { type: string }[]
	sprites: {
		front_default: string
		other: {
			'official-artwork': {
				front_default: string
			}
		}
	}
}
