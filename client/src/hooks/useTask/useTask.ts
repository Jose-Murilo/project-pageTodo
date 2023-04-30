import { useState, useContext, useEffect, useCallback, useMemo } from "react"
import { TaskContext } from "../../context"

export function useTask() {
    const [searchTask, setSearchTask] = useState<string>('')
    const { setTaskData, setShowModal, showModal, fetchTasks, tasks } = useContext(TaskContext)
    const noTask = tasks?.length === 0

    const filterTask = tasks.filter(task => {
        return (
            task.titleTask.toLowerCase().includes(searchTask.toLowerCase()) ||
            task.descriptionTask.toLowerCase().includes(searchTask.toLowerCase())
        )
    })

    const noTaskFound = searchTask && filterTask.length === 0

    useEffect(() => {
        fetchTasks()
    }, [])

    const modalOpen = useCallback((TaskID: number) => {
        setShowModal(true)
        const taskIndex = tasks?.findIndex(task => task.id === TaskID);
        return setTaskData(tasks[taskIndex]);
    }, [tasks, showModal])

    // const modalOpen = (TaskID: number) => {
    //     setShowModal(true)
    //     const taskIndex = tasks?.findIndex(task => task.id === TaskID);
    //     return setTaskData(tasks[taskIndex]);
    // };

    return {
        searchTask,
        setSearchTask,
        showModal,
        tasks,
        noTask,
        filterTask,
        noTaskFound,
        modalOpen
    }
}