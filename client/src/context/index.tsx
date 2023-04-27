import { createContext, useState } from 'react'
import { API } from '../services/api';
import { DataProps } from '../@types/TypeApi'

type TaskData = DataProps

type TaskContextProps = {
    taskData: TaskData;
    setTaskData: React.Dispatch<React.SetStateAction<TaskData>>;
    tasks: DataProps[];
    setTasks: React.Dispatch<React.SetStateAction<DataProps[]>>;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: () => void;
    fetchTasks: () => Promise<void>;
    deleteTasks: (taskID: number) => void;
};

export const TaskContext = createContext({} as TaskContextProps)

type ContextProviderProps = {
    children: React.ReactElement
}

export function TaskProvider({ children }: ContextProviderProps) {
    // States
    const [tasks, setTasks] = useState<DataProps[]>([])
    const [taskData, setTaskData] = useState<TaskData>({
        created_at: '',
        id: 0,
        titleTask: '',
        isCompleted: false,
        descriptionTask: '',
        updated_at: ''
    });
    const [showModal, setShowModal] = useState(false)

    // functions
    const fetchTasks = async () => {
        const response = await API.get<DataProps[]>('');
        const newData = await response.data;
        setTasks(newData);
    };

    const closeModal = () => setShowModal(false)

    async function deleteTasks(id: number) {
        const confirm = window.confirm('Tem certeza que deseja apagar essa tarefa?')
        if (confirm) {
            const response = await API.delete(`/${id}`)
            fetchTasks()
            return response
        }
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                taskData,
                setTaskData,
                showModal,
                setShowModal,
                closeModal,
                fetchTasks,
                deleteTasks
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}