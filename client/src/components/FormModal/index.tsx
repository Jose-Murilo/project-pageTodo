import { Container } from "./style";
import { useForm } from 'react-hook-form';
import { useFormModalTask } from '../../hooks/useFormModalTask';

type InputTaskProps = {
    titleTask: string;
    descriptionTask: string;
}

export function FormModal({ titleTask, descriptionTask }: InputTaskProps) {
    const { register, handleSubmit } = useForm()
    const { closeModal, deleteTasks, handleInputsChange, onSubmit, taskCreatedDate, taskData, taskDataForm, toggleIsCompleted,isCompletedForm } = useFormModalTask()

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

            <button onClick={toggleIsCompleted}>{isCompletedForm ? 'Não concluida': 'concluida'}</button>

            <div>
                Tarefa Criada: {taskCreatedDate}
            </div>
        </Container>
    )
}