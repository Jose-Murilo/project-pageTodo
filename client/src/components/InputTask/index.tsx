import { useState, useContext } from 'react'
import { Container } from "./style";
import { Context } from '../../context';

type InputTaskProps = {
    titleTask: string;
    descriptionTask: string;
    taskData: {
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

export function InputTask({ titleTask, descriptionTask, taskData }: InputTaskProps) {
    // console.log(taskData);

    const teste = {
        title: taskData.titleTask
    }

    console.log(teste);
    
    const [taskDataForm, setTaskDataForm] = useState<TaskDataForm>({
        id: taskData.id,
        title: teste.title,
        description: taskData.descriptionTask
    });

    console.log(taskDataForm);

    function handleInputsChange(event) {
        const { name, value } = event.target;
        setTaskDataForm({
            ...taskDataForm,
            [name]: value
        })
    }
    
    return (
        <Container>
            <section>
                <label htmlFor="task">{titleTask}</label>
                <input
                    className="titleTasks"
                    type="text"
                    name="title"
                    value={taskDataForm.title}
                    onChange={handleInputsChange}
                    // {...register('titleTask', { required: true })}
                    placeholder="Digite sua tarefa"
                    id="task"
                />
                {/* {errors.titleTask && <span className="error">Este campo é obrigatório!</span>} */}
            </section>

            <section>
                <label htmlFor="">{descriptionTask}</label>
                <textarea
                    className="taskDescription"
                    maxLength={350}
                    // {...register('descriptionTask', { required: true })}
                    id=""
                    cols={30}
                    rows={10}
                    name="description"
                    value={taskDataForm.description}
                    onChange={handleInputsChange}
                    placeholder="Digite a descrição da Tarefa"
                >
                </textarea>
                {/* {errors.descriptionTask && <span className="error">Este campo é obrigatório!</span>} */}
            </section>

        </Container>
    )
}