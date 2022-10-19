import React from 'react'

interface TitleProps {
	title: string
}

function Title(props: TitleProps) {
	return (
		<h1 className='text-4xl font-semibold mb-5 text-purple-700'>
			{props.title}
		</h1>
	)
}

export default Title
