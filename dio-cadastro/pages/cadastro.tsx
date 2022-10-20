import React from 'react'
import Formulario from '../components/Formulario'
import Menu from '../components/Menu'

function Cadastro() {
	return (
		<>
			<Menu />
			<div className='flex items-center justify-around mx-auto mt-20 max-w-7xl'>
				<p className='text-5xl max-w-lg hidden md:block text-white'>
					A plataforma para você aprender com experts, dominar as principais
					tecnologias e entrar mais rápido nas empresas mais desejadas.
				</p>
				<Formulario />
			</div>
		</>
	)
}

export default Cadastro
