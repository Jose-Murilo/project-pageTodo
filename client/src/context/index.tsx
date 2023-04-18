import { createContext, useState } from 'react'
import { API } from '../services/api';

type TaskData = {
    id: number;
    titleTask: string;
    descriptionTask: string;
}

type ContextProps = {
    taskData: TaskData;
    setTaskData: React.Dispatch<React.SetStateAction<TaskData>>;
    data: DataProps[];
    setData: React.Dispatch<React.SetStateAction<DataProps[]>>;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TaskContext = createContext({} as ContextProps)

type ContextProviderProps = {
    children: React.ReactElement
}
export interface DataProps {
    id: number;
    titleTask: string
    descriptionTask: string;
}[]

export function ContextProvider({ children }: ContextProviderProps) {
    const [data, setData] = useState<DataProps[]>([])
    const [taskData, setTaskData] = useState<TaskData>({
        id: 0,
        titleTask: '',
        descriptionTask: ''
    });
    const [showModal, setShowModal] = useState(false)


    async function getTasks() {
        const response = await API.get('')
        const data = response.data
        setData(data)
    }

    return (
        <TaskContext.Provider
            value={{
                data: [],
                setData: () => { },
                taskData,
                setTaskData,
                showModal,
                setShowModal,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}