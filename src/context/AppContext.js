import { createContext, useState } from "react";
import { useRouter } from 'next/router'

import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const [errorSignIn, setErrorSignIn] = useState()
    const [errorSignUp, setErrorSignUp] = useState()
    const [data, setData] = useState([])
    const router = useRouter();

    const signin = async (values) => {
        try {
            const res = await api.get('/login', {
                auth: {
                    username: values.email,
                    password: values.password,
                }
            })
            setUser(res.data)
            setErrorSignIn()
            router.push('/home')
        } catch (error) {
            setErrorSignIn(error.response.data)
        }
    };

    const signup = async (values) => {
        try {
            const res = await api.post('/signup', {
                name: values.name,
                email: values.email,
                username: values.username,
                password: values.password,

            })
            setUser(res.data)
            setErrorSignUp()
            router.push('/home')
        } catch (error) {
            setErrorSignUp(error.response.data)
        }
    };


    const getData = async () => {
        const res = await api.get('/tweets', {
            headers: {
                'authorization': `Bearer ${user.accessToken}`
            }
        })
        setData(res.data)
    }




    async function submitTweet(values) {  // Resolver problema de nao realizar o post - Resolvido passar o hearder atraves de uma variavel separada da funcao e do data
        try {
            const headers = {
                'content-Type': 'application/json',
                'authorization': `Bearer ${user.accessToken}`
            }
            let data = {
                text: values.text
            }
            await api.post('/tweets', data, {
                headers: headers
            })
        } catch (error) {
            console.log(error)
        }
    }



    return <AuthContext.Provider value={{ user, signin, signup, errorSignUp, errorSignIn, getData, data, submitTweet }}>{children}</AuthContext.Provider>
}

export default AuthContext;