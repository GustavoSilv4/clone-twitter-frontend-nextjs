import { useFormik } from 'formik';
import * as yup from 'yup';
import useAuth from '../hooks/useAuth'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Input = (props) => (
    <input {...props} className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum" />
)

const validationSchema = yup.object({
    email: yup.string().required('Digite seu Email').email('Email Invalido'),
    password: yup.string().required('Digite sua Senha'),
})

const SignIn = () => {

    const { error, signin } = useAuth();

    const router = useRouter();

    const formik = useFormik({
        onSubmit: async values => {
            await signin(values)
        },
        validationSchema,
        validateOnMount: true,
        initialValues: {
            email: '',
            password: ''
        }
    });


    return (
        <div className='h-full flex justify-center'>
            <div className='bg-birdBlue lg:flex-1'></div>
            <div className='flex-1 flex justify-center items-center p-12 space-x-6'>
                <div className="max-w-md flex-1">
                    <h1 className="text-3xl">Acesse sua conta</h1>

                    <form className="space-y-6" onSubmit={formik.handleSubmit}>

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
                            {formik.isSubmitting ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>

                    <span className='text-red-500 text-md text-center'>{error}</span>
                    <span className="text-sm text-silver">Não tem conta? <Link href='/signup'><a className="text-birdBlue">Inscreva-se</a></Link></span>
                </div>
            </div>
        </div>
    )
}

export default SignIn;