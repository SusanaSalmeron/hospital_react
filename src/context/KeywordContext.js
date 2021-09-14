import { createContext, useState } from "react";

const KeywordContext = createContext(null)

export function KeywordProvider({ children }) {
    const [keyword, setKeyword] = useState("")

    return (
        <KeywordContext.Provider value={{ keyword, setKeyword }}>
            {children}
        </KeywordContext.Provider>
    )
}

KeywordProvider.displayName = 'KeywordProvider'

export default KeywordContext