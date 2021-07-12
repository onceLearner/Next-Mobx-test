import React, { createContext } from 'react'
import { useContext } from 'react'
import { BriefsStore } from "./briefsStore"


type RootStateContextValue = {
    briefsStore: BriefsStore
}

const RootStateContext = createContext<RootStateContextValue>({} as RootStateContextValue)

const briefsStore = new BriefsStore()

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    return (
        <RootStateContext.Provider value={{ briefsStore }}>
            {children}
        </RootStateContext.Provider>
    )
}

export const useRootStore = () => useContext(RootStateContext)
