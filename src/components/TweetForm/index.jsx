import { useState } from 'react'
const TweetForm = ({ avatar }) => {
    const [input, setInput] = useState('');

    const MAX_TWEET_CHAR = 250

    return (
        <div className="border-b border-silver p-4 space-y-6">
            <div className="flex space-x-8">
                <img src={avatar} className='w-7' />
                <h1 className="font-bold text-lg">Página inicial</h1>
            </div>

            <form className="pl-14 text-lg flex flex-col" >
                <textarea type="text"
                    name="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='bg-transparent outline-none'
                    placeholder="O que está acontecendo?"
                />
                <div className="flex justify-end items-center space-x-5">
                    <span className="text-sm">{input.length} / <span className="text-birdBlue">{MAX_TWEET_CHAR}</span></span>
                    <button className="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50"
                        disabled={input.length > MAX_TWEET_CHAR}>
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TweetForm;