import { createContext, useCallback, useState } from 'react'
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
    modalOpen: (taskID: number) => void;
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
    const [showModal, setShowModal] = useState<boolean>(false)

    // functions
    const fetchTasks = async () => {
        const response = await API.get<DataProps[]>('');
        const newData = await response.data;
        setTasks(newData);
    };

    // A função closeModal quando chamada ela irá fechar o modal.
    const closeModal = () => setShowModal(false);

    // Além de abrir o modal, a função modalOpen, visando otimizar a performance do componente que a utiliza. A dependência tasks é utilizada para garantir que a função seja recriada apenas quando essa dependência mudar. A dependência showModal é utilizada para evitar que a função seja recriada desnecessariamente a cada renderização
    const modalOpen = useCallback((TaskID: number) => {
        setShowModal(true)
        const taskIndex = tasks?.findIndex(task => task.id === TaskID);
        return setTaskData(tasks[taskIndex]);
    }, [tasks, showModal])

    async function deleteTasks(id: number) {
        const confirm = window.confirm('Tem certeza que deseja apagar essa tarefa?')
        if (confirm) {
            const response = await API.delete(`/${id}`)
            fetchTasks()
            return response
        } else {
            closeModal()
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
                deleteTasks,
                modalOpen
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}