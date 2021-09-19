import { createContext, useState } from "react";

const KeywordContext = createContext()

export function KeywordProvider({ children }) {
    const [keyword, setKeyword] = useState("")

    return (
        <KeywordContext.Provider value={{ keyword, setKeyword }}>
            {children}
        </KeywordContext.Provider>
    )
}

export default KeywordContext