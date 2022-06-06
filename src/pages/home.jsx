import Tweet from '../components/Tweets'
import TweetForm from '../components/TweetForm';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Home = () => {
    const { user, getData, data } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/');
            return
        }

        getData()
    }, [])

    return (
        <>
            <TweetForm avatar='/image-default.svg' onSuccess={getData} />
            <div>
                {data.length && data.map((tweet) => (
                    <Tweet key={tweet.id} name={tweet.user.name} username={tweet.user.username} avatar='/image-default.svg'>
                        {tweet.text}
                    </Tweet>
                ))
                }

            </div>
        </>
    )
}

export default Home;