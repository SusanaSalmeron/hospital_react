import { createContext, useState } from 'react';


const UserIdContext = createContext()

export function UserIdProvider({ children }) {
    const [userId, setUserId] = useState("")

    return (
        <UserIdContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserIdContext.Provider>
    )
}

export default UserIdContext