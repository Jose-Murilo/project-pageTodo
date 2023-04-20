import { useState, useContext, ChangeEvent, useEffect } from 'react';
import { Container } from "./style";
import { useForm } from 'react-hook-form';
import { TaskContext } from '../../context';
import { API } from '../../services/api';

type InputTaskProps = {
    titleTask: string;
    descriptionTask: string;
    deleteTasks: (taskID: number) => void
}
interface TaskDataForm {
    created_at: string;
    id: number;
    titleTask: string
    descriptionTask: string;
    updated_at: string
}

export function InputTask({ titleTask, descriptionTask, deleteTasks }: InputTaskProps) {
    const { register, handleSubmit } = useForm()
    const { taskData, closeModal, fetchTasks } = useContext(TaskContext)

    const [taskDataForm, setTaskDataForm] = useState<TaskDataForm>({
        created_at: '',
        id: 0,
        titleTask: '',
        descriptionTask: '',
        updated_at: ''
    });

    const taskCreatedAt = new Date(taskDataForm.created_at).toLocaleString()
    
    useEffect(() => {
        if (taskData) {
            setTaskDataForm({
                created_at: taskData.created_at,
                id: taskData.id,
                titleTask: taskData.titleTask,
                descriptionTask: taskData.descriptionTask,
                updated_at: taskData.updated_at
            });
        }
    }, [taskData]);

    function onSubmit() {
        updateTasks();
    }

    async function updateTasks() {
        API.put(`/${taskData.id}`, taskDataForm)
            .then(() => {
                fetchTasks()
            })
            .catch(error => alert(error.response.data))
        alert('Task updated successfully')
        closeModal()
    }

    function handleInputsChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setTaskDataForm({
            ...taskDataForm,
            [name]: value
        })
    }

    return (
        <Container>
            <form className='formModal' onSubmit={handleSubmit(onSubmit)}>
                <p>id: {taskDataForm.id}</p>
                <section>
                    <label htmlFor="task">{titleTask}</label>
                    <input
                        className="titleTasks"
                        type="text"
                        {...register('titleTask')}
                        value={taskDataForm.titleTask}
                        onChange={handleInputsChange}
                        placeholder="Digite sua tarefa"
                        id="task"
                    />
                </section>

                <section>
                    <label htmlFor="">{descriptionTask}</label>
                    <textarea
                        className="taskDescription"
                        maxLength={350}
                        {...register('descriptionTask')}
                        id=""
                        cols={30}
                        rows={10}
                        value={taskDataForm.descriptionTask}
                        onChange={handleInputsChange}
                        placeholder="Digite a descrição da Tarefa"
                    >
                    </textarea>
                </section>

                <button className='updateButton'>Alterar</button>
                <button onClick={() => {
                    closeModal();
                    deleteTasks(taskData.id)
                }} className='deleteButton'>Deletar</button>
            </form>

            <div>
                Tarefa Criada: {taskCreatedAt}
            </div>
        </Container>
    )
}