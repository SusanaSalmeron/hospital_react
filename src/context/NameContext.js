import { createContext, useState } from 'react'

const NameContext = createContext(null)

export function NameProvider({ children }) {
    const [name, setName] = useState("")

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    )
}

NameProvider.displayName = 'NameProvider'

export default NameContext