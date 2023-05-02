import { useState, useContext, useEffect } from "react"
import { TaskContext } from "../../context"

export function useTask() {
    const [searchTask, setSearchTask] = useState<string>('')
    const { showModal, fetchTasks, tasks, modalOpen } = useContext(TaskContext)
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