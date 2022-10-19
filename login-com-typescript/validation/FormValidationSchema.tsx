import * as Yup from 'yup'

const FormValidationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Insira um email válido')
		.required('Email obrigatório'),
	senha: Yup.string()
		.min(6, 'Senha deve ter no minímo 6 caracteres')
		.required('Senha obrigatória')
})

export default FormValidationSchema
