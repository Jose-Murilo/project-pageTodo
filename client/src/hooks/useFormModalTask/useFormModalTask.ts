import { ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState } from "react";
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

    // para pegar a data que foi criada a tarefa
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
        setTaskDataForm({
            ...taskDataForm,
            [name]: value
        })
    }

    // função que ira remover a tarefa, ou seja ela vai simplesmente apagar a tarefa.
    function removeTask(event: FormEvent) {
        event.preventDefault();
        closeModal();
        deleteTasks(taskData.id)
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
        handleCompleted,
        removeTask
    }
}