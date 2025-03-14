import {createContext, FunctionComponent, ReactNode, useState} from 'react'
import User from '../types/user.types'

interface IUserContext {
    currentUser: User | null
    isAuthenticated: Boolean
    loginUser: (user: User) => void
    logoutUser: () => void
}

interface UserContextProviderProps {
    children: ReactNode
}

export const UserContext = createContext<IUserContext>({
    currentUser: null,
    isAuthenticated: false,
    loginUser: () => {},
    logoutUser: () => {}
})

const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [currentUser, setCurrentuser] = useState<User | null>(null)

    const isAuthenticated = currentUser != null

    const loginUser = (user: User) => {
        setCurrentuser(user)
    }

    const logoutUser = () => {
        setCurrentuser(null)
    }
    
    return (
        <UserContext.Provider value={{currentUser, isAuthenticated, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider