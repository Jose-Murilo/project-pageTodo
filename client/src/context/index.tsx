import { createContext, useEffect, useState } from 'react'
import { API } from '../services/api';
import { DataProps } from '../@types/TypeApi'

type TaskData = {
    created_at: string;
    id: number;
    titleTask: string
    descriptionTask: string;
    updated_at: string
}

type ContextProps = {
    taskData: TaskData;
    setTaskData: React.Dispatch<React.SetStateAction<TaskData>>;
    task: DataProps[];
    setData: React.Dispatch<React.SetStateAction<DataProps[]>>;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: () => void;
    fetchTasks: () => Promise<void>;
};

export const TaskContext = createContext({} as ContextProps)

type ContextProviderProps = {
    children: React.ReactElement
}

export function ContextProvider({ children }: ContextProviderProps) {
    const [task, setData] = useState<DataProps[]>([])
    const [taskData, setTaskData] = useState<TaskData>({
        created_at: '',
        id: 0,
        titleTask: '',
        descriptionTask: '',
        updated_at: ''
});
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)

    const fetchTasks = async () => {
        const response = await API.get<DataProps[]>('');
        const newData = await response.data;
        setData(newData);
    };

    return (
        <TaskContext.Provider
            value={{
                task,
                setData: () => { },
                taskData,
                setTaskData,
                showModal,
                setShowModal,
                closeModal,
                fetchTasks
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}