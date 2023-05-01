import { ChangeEvent, useCallback, useContext, useEffect, useState } from "react";
import { API } from "../../services/api";
import { TaskContext } from "../../context";
import { DataProps } from "../../@types/TypeApi";

interface TaskDataForm extends DataProps { }

export function useFormModalTask() {
    const { taskData, closeModal, fetchTasks, deleteTasks, setTasks } = useContext(TaskContext)
    const [isCompletedLocal, setIsCompletedLocal] = useState(false);
    const [taskDataForm, setTaskDataForm] = useState<TaskDataForm>({
        created_at: '',
        id: 0,
        titleTask: '',
        descriptionTask: '',
        isCompleted: false,
        updated_at: ''
    });

    const taskCreatedDate = new Date(taskDataForm.created_at).toLocaleString()

    // Esse useEffect ele vai setar os dados dentro de setTaskDataForm assim que tiver taskData, pois os valores dentro de TaskDataForm iniciam vazios.
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
        }
    }, [taskData]);

    function onSubmit() {
        updateTasks();
    }

    // para que o não precise clicar duas vezes no botão para ele inverter o valor dentro de isCompletedLocal, ou seja no primeiro click ele já irá inveter.
    useEffect(() => {
        setIsCompletedLocal(taskDataForm.isCompleted);
    }, [taskDataForm.isCompleted]);

    // A função handleCompleted ela vai inverter o valor que já está na api e vai setar o valor dentro do estado, assim fazendo com que a tarefa fique concluído ou não.
    const handleCompleted = useCallback(() => {
        const newValue = !taskDataForm.isCompleted;
        taskDataForm.isCompleted = newValue;
        setIsCompletedLocal(newValue);
    }, [taskDataForm.isCompleted]);

    async function updateTasks() {
        try {
            const response = await API.put(`/${taskData.id}`, { ...taskDataForm, isCompleted: isCompletedLocal });
            const data = await response.data;
            if (data) {
                setTasks((prevTasks) => prevTasks.map((task) =>
                    task.id === taskData.id ? { ...task, isCompleted: isCompletedLocal } : task
                ));
                if (
                    taskDataForm.titleTask === taskData.titleTask &&
                    taskDataForm.descriptionTask === taskData.descriptionTask
                ) {
                    alert("Você não modificou nada!");
                    const confirm = window.confirm("Deseja modificar alguma coisa?");

                    if (!confirm) {
                        setIsCompletedLocal(taskData.isCompleted);
                        return closeModal();
                    }
                } else {
                    closeModal();
                    alert("Task updated successfully");
                }
            }

            return fetchTasks();
        } catch (error: any) {
            alert(error.response.error);
        }
    }

    function handleInputsChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setTaskDataForm({
            ...taskDataForm,
            [name]: value
        })
    }

    return {
        taskData,
        taskCreatedDate,
        taskDataForm,
        onSubmit,
        handleInputsChange,
        closeModal,
        deleteTasks,
        isCompletedLocal,
        handleCompleted
    }
}