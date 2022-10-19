import Head from 'next/head'
import Formulario from '../components/Form'

function Home() {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<main className='flex items-center justify-center p-2 h-screen w-screen bg-purple-700'>
				<Formulario />
			</main>
		</>
	)
}

export default Home
