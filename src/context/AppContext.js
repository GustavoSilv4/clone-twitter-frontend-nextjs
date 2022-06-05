import { createContext, useState } from "react";
import { useRouter } from 'next/router'

import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const [error, setError] = useState()

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
            setError()
            router.push('/home')
        } catch (error) {
            setError(error.response.data)
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
            setError()
            router.push('/home')
        } catch (error) {
            setError(error.response.data)
        }
    };



    return <AuthContext.Provider value={{ user, signin, signup, error }}>{children}</AuthContext.Provider>
}

export default AuthContext;