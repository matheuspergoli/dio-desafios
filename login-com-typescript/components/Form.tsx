import React from 'react'
import FormValidationSchema from '../validation/FormValidationSchema'
import { Formik, Form, Field } from 'formik'
import Title from './Title'
import Button from './Button'

interface ValueForm {
	email: string
	senha: string
}

function Formulario() {
	return (
		<div className='p-5 rounded-md max-w-sm w-full bg-white'>
			<Title title='Login' />
			<Formik
				initialValues={{ senha: '', email: '' }}
				validationSchema={FormValidationSchema}
				onSubmit={(values: ValueForm) => console.log(values)}>
				{({ errors, touched }) => (
					<Form className='flex flex-col gap-4'>
						<div>
							<Field
								id='email'
								name='email'
								type='email'
								placeholder='Digite seu email'
								className='px-3 py-2 w-full border rounded-full outline-none border-purple-700'
							/>
							{errors.email && touched.email && (
								<p className='px-3 text-red-500'>{errors.email}</p>
							)}
						</div>

						<div>
							<Field
								id='senha'
								name='senha'
								type='password'
								placeholder='Digite sua senha'
								className='px-3 py-2 w-full border rounded-full outline-none border-purple-700'
							/>
							{errors.senha && touched.senha && (
								<p className='px-3 text-red-500'>{errors.senha}</p>
							)}
						</div>

						<Button />
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default Formulario
