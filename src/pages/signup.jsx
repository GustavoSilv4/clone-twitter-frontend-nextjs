import { useFormik } from 'formik';
import * as yup from 'yup';
import useAuth from '../hooks/useAuth'
import Link from 'next/link';

const Input = (props) => (
    <input {...props} className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum" />
)

const validationSchema = yup.object({
    name: yup.string().required('Digite seu nome'),
    username: yup.string().required('Digite seu nome de usuario'),
    email: yup.string().required('Digite seu email').email('Email Invalido'),
    password: yup.string().required('Digite sua senha'),
})

const SignUp = () => {

    const { signup, error } = useAuth();

    const formik = useFormik({
        onSubmit: async values => {
            await signup(values)
        },
        validationSchema,
        validateOnMount: true,
        initialValues: {
            email: '',
            password: ''
        }
    });
    return (
        <div className=" h-full flex flex-col justify-center p-12 space-y-6">
            <h1 className="text-3xl">Crie sua conta</h1>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>


                <div className='space-y-2'>
                    <Input
                        type="text"
                        name='name'
                        placeholder='Nome'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                    />
                    {(formik.touched.name && formik.errors.name) && (
                        <div className='text-red-500 text-sm'>{formik.errors.name}</div>
                    )}
                </div>

                <div className='space-y-2'>
                    <Input
                        type="text"
                        name='username'
                        placeholder='Nome de usuario'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                    />
                    {(formik.touched.username && formik.errors.username) && (
                        <div className='text-red-500 text-sm'>{formik.errors.username}</div>
                    )}
                </div>

                <div className='space-y-2'>
                    <Input
                        type="text"
                        name='email'
                        placeholder='Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                    />
                    {(formik.touched.email && formik.errors.email) && (
                        <div className='text-red-500 text-sm'>{formik.errors.email}</div>
                    )}
                </div>

                <div className='space-y-2'>
                    <Input
                        type="password"
                        name='password'
                        placeholder='Senha'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                    />
                    {(formik.touched.password && formik.errors.password) && (
                        <div className='text-red-500 text-sm'>{formik.errors.password}</div>
                    )}
                </div>





                <button
                    className="w-full bg-birdBlue py-4 rounded-full disabled:opacity-50 text-lg"
                    disabled={formik.isSubmitting || !formik.isValid}
                    type='submit'
                >
                    {formik.isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
                </button>

            </form>

            <span className='text-red-500 text-md text-center'>{error}</span>
            <span className="text-sm text-silver">Tem uma conta? <Link href='/'><a className="text-birdBlue">Acesse</a></Link></span>
        </div>
    )
}

export default SignUp;