import { useState, useContext, ChangeEvent, useEffect } from 'react';
import { Container } from "./style";
import { useForm } from 'react-hook-form';
import { TaskContext } from '../../context';
import { API } from '../../services/api';

type InputTaskProps = {
    titleTask: string;
    descriptionTask: string;
    taskData?: {
        descriptionTask: string;
        id: number;
        titleTask: string;
    }
}
interface TaskDataForm {
    id: number;
    title: string;
    description: string;
}

export function InputTask({ titleTask, descriptionTask }: InputTaskProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { taskData, closeModal } = useContext(TaskContext)

    const [taskDataForm, setTaskDataForm] = useState<TaskDataForm>({
        id: 0,
        title: '',
        description: ''
    });

    useEffect(() => {
        if (taskData) {
            setTaskDataForm({
                id: taskData.id,
                title: taskData.titleTask,
                description: taskData.descriptionTask
            });
        }
    }, [taskData]);

    function onSubmit() {
        updateTasks();
    }

    async function updateTasks() {
        API.put(`/${taskData.id}`, taskDataForm)
            .then(res => console.log(res.data))
            .catch(error => alert(error.response.data))
            closeModal()
        console.log(taskDataForm);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <label htmlFor="task">{titleTask}</label>
                    <input
                        className="titleTasks"
                        type="text"
                        {...register('title', { required: true })}
                        value={taskDataForm.title}
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
                        {...register('description', { required: true })}
                        id=""
                        cols={30}
                        rows={10}
                        value={taskDataForm.description}
                        onChange={handleInputsChange}
                        placeholder="Digite a descrição da Tarefa"
                    >
                    </textarea>
                </section>
                <button>Alterar</button>
            </form>
        </Container>
    )
}