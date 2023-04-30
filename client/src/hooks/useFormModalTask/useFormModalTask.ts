import { ChangeEvent, useContext, useEffect, useState } from "react";
import { API } from "../../services/api";
import { TaskContext } from "../../context";
import { DataProps } from "../../@types/TypeApi";

interface TaskDataForm extends DataProps {}

export function useFormModalTask() {
    const { taskData, closeModal, fetchTasks, deleteTasks } = useContext(TaskContext)
    const [isCompletedForm, setIsCompletedForm] = useState(false);
    const [taskDataForm, setTaskDataForm] = useState<TaskDataForm>({
        created_at: '',
        id: 0,
        titleTask: '',
        descriptionTask: '',
        isCompleted: false,
        updated_at: ''
    });

    const taskCreatedDate = new Date(taskDataForm.created_at).toLocaleString()

    useEffect(() => {
        if (taskData) {
            setTaskDataForm({
                created_at: taskData.created_at,
                id: taskData.id,
                titleTask: taskData.titleTask,
                isCompleted: taskData.isCompleted,
                descriptionTask: taskData.descriptionTask,
                updated_at: taskData.updated_at
            });
            setIsCompletedForm(taskData.isCompleted)
        }
    }, [taskData]);

    function onSubmit() {
        updateTasks();
    }

    async function updateTasks() {
        try {
            // const response = await API.put(`/${taskData.id}`, taskDataForm)
            const response = await API.put(`/${taskData.id}`, {
                ...taskDataForm,
                isCompleted: isCompletedForm,
            });
            const data = await response.data
            if (data) {
                if (taskDataForm.titleTask === taskData.titleTask && taskDataForm.descriptionTask === taskData.descriptionTask) {
                    alert('Você não modificou nada!')
                    const confirm = window.confirm('Deseja modificar alguma coisa?')
                    
                    if (!confirm) return closeModal()
                } else {
                    closeModal()
                    alert('Task updated successfully')
                }

                return fetchTasks()
            } 
            
        } catch (error: any) {
            alert(error.response.data)
        }
    }

    function handleInputsChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setTaskDataForm({
            ...taskDataForm,
            [name]: value
        })
    }

    function toggleIsCompleted() {
        setIsCompletedForm(!isCompletedForm)
    }

    return {
        taskData,
        taskCreatedDate,
        taskDataForm,
        onSubmit, 
        handleInputsChange,
        closeModal,
        deleteTasks,
        toggleIsCompleted,
        isCompletedForm
    }
}