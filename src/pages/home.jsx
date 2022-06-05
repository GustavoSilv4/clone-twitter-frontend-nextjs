import Tweet from '../components/Tweets'
import TweetForm from '../components/TweetForm';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Home = () => {
    const { user } = useAuth();

    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/');
            return
        }
    }, [])

    return (
        <>
            <TweetForm avatar='/image-default.svg' />
            <div>
                <Tweet name='Elon Musk' username='elonmusk' avatar='/image-default.svg'>
                    Let`s make Twitter maximun fun!
                </Tweet>

                <Tweet name='Gustavo Silva' username='gustavosilv4' avatar='/image-default.svg'>
                    Let`s make Twitter maximun awesome!
                </Tweet>
            </div>
        </>
    )
}

export default Home;