import { ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { API } from "../../services/api";
import { TaskContext } from "../../context";
import { DataProps } from "../../@types/TypeApi";

interface TaskDataForm extends DataProps { }

export function useFormModalTask() {
    const { taskData, closeModal, fetchTasks, deleteTasks, setTasks, modalOpen } = useContext(TaskContext);
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
            setIsCompletedLocal(taskData.isCompleted);
        }
    }, [taskData, modalOpen]);

    //A função handleCompleted é uma função usa o useCallback para memorizar a função e evitar renderizações desnecessárias, e ao ser executada, alterna o estado de uma variável booleana isCompletedLocal e atualiza o estado da propriedade isCompleted do objeto taskDataForm.
    const handleCompleted = useCallback(() => {
        setIsCompletedLocal((prev) => !prev);
        setTaskDataForm((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
    }, []);

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
                    if (taskData.isCompleted === isCompletedLocal) {
                        const confirm = window.confirm("Você não modificou nada!\nDeseja modificar alguma coisa?");
                        if (confirm) {
                            return; // retorna sem fechar o modal
                        } else {
                            closeModal()
                        }
                    } else {
                        alert("Task updated successfully");
                    }
                } else {
                    alert("Task updated successfully");
                }
                closeModal();
            }

            return fetchTasks();
        } catch (error: any) {
            console.log(error);
        }
    }

    function handleInputsChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setTaskDataForm(prev => ({ ...prev, [name]: value }));
    }

    function removeTask(event: FormEvent) {
        event.preventDefault();
        closeModal();
        deleteTasks(taskData.id)
    }

    return {
        taskData,
        taskCreatedDate,
        taskDataForm,
        onSubmit: updateTasks,
        handleInputsChange,
        closeModal,
        deleteTasks,
        isCompletedLocal,
        handleCompleted,
        removeTask
    }
}