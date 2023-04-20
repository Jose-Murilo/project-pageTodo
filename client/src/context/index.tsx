import { createContext, useState } from 'react'
import { API } from '../services/api';
import { DataProps } from '../@types/TypeApi'

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
    closeModal: () => void;
    getTasks: () => Promise<void>;
};

export const TaskContext = createContext({} as ContextProps)

type ContextProviderProps = {
    children: React.ReactElement
}

export function ContextProvider({ children }: ContextProviderProps) {
    const [data, setData] = useState<DataProps[]>([])
    const [taskData, setTaskData] = useState<TaskData>({
        id: 0,
        titleTask: '',
        descriptionTask: ''
    });
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)

    const getTasks = async () => {
        const response = await API.get<DataProps>('');
        const newData = await response.data;
        setData([newData]);
    };

    return (
        <TaskContext.Provider
            value={{
                data: [],
                setData: () => { },
                taskData,
                setTaskData,
                showModal,
                setShowModal,
                closeModal,
                getTasks
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}