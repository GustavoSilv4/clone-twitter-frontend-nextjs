import { useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import useAuth from '../../hooks/useAuth';
const TweetForm = ({ avatar, onSuccess }) => {
    const { submitTweet } = useAuth();

    const MAX_TWEET_CHAR = 250;

    const formik = useFormik({
        onSubmit: async (values, form) => {
            await submitTweet(values)
            form.setFieldValue('text', '')
            onSuccess()
        },
        initialValues: {
            text: ''
        }
    });



    return (
        <div className="border-b border-silver p-4 space-y-6">
            <div className="flex space-x-8">
                <img src={avatar} className='w-7' />
                <h1 className="font-bold text-lg">Página inicial</h1>
            </div>

            <form onSubmit={formik.handleSubmit} className="pl-14 text-lg flex flex-col" >
                <textarea type="text"
                    name="text"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    className='bg-transparent outline-none'
                    placeholder="O que está acontecendo?"
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                />
                <div className="flex justify-end items-center space-x-5">
                    <span className="text-sm">{formik.values.text.length} / <span className="text-birdBlue">{MAX_TWEET_CHAR}</span></span>
                    <button type='submit' className="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50"
                        disabled={formik.values.text.length > MAX_TWEET_CHAR || formik.isSubmitting}>
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TweetForm;