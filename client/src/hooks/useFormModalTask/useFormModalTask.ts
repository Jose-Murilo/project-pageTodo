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

    useEffect(() => {
        setIsCompletedLocal(taskDataForm.isCompleted);
    }, [taskDataForm.isCompleted]);

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
                closeModal();
                if (
                    taskDataForm.titleTask === taskData.titleTask &&
                    taskDataForm.descriptionTask === taskData.descriptionTask
                ) {
                    alert("Você não modificou nada!");
                    const confirm = window.confirm("Deseja modificar alguma coisa?");

                    if (!confirm) {
                        setIsCompletedLocal(taskData.isCompleted);
                        return closeModal();
                    } else {

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


    // useEffect(() => {
    //     setIsCompletedLocal(taskDataForm.isCompleted);
    // }, [taskDataForm.isCompleted]);

    // const handleCompleted = useCallback(() => {
    //     taskDataForm.isCompleted = !taskDataForm.isCompleted
    //     setIsCompletedLocal(!taskDataForm.isCompleted)
    // }, []);

    // async function updateTasks() {
    //     try {
    //         // const response = await API.put(`/${taskData.id}`, taskDataForm)
    //         const response = await API.put(`/${taskData.id}`,
    //             { ...taskDataForm, isCompleted: isCompletedLocal }
    //         );
    //         const data = await response.data
    //         if (data) {
    //             setTasks((prevTasks) =>
    //                 prevTasks.map((task) =>
    //                     task.id === taskData.id ? { ...task, isCompleted: !isCompletedLocal } : task
    //                 )
    //             );

    //             if (
    //                 taskDataForm.titleTask === taskData.titleTask &&
    //                 taskDataForm.descriptionTask === taskData.descriptionTask
    //             ) {
    //                 alert("Você não modificou nada!");
    //                 const confirm = window.confirm("Deseja modificar alguma coisa?");

    //                 if (!confirm) {
    //                     setIsCompletedLocal(taskData.isCompleted);
    //                     return closeModal();
    //                 }
    //             } else {
    //                 closeModal();
    //                 alert("Task updated successfully");
    //             }

    //             return fetchTasks();
    //         }

    //     } catch (error: any) {
    //         alert(error.response.error)
    //     }
    // }

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