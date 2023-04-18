import { createContext, useState } from 'react'
import { API } from '../services/api';

export const Context = createContext({})

export interface DataProps {
    id: number;
    titleTask: string
    descriptionTask: string;
}[]

type ContextProviderProps = {
    children: React.ReactElement
}

export function ContextProvider({ children }: ContextProviderProps) {
    const [data, setData] = useState<DataProps[]>([])
    async function getTasks() {
        const response = await API.get('')
        const data = response.data
        setData(data)
    }

    return (
        <Context.Provider value={{getTasks, data}}>
            {children}
        </Context.Provider>
    )
}