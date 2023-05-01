import { Container, ContainerCompleted } from "./style";
import { useForm } from 'react-hook-form';
import { useFormModalTask } from '../../hooks/useFormModalTask';

type FormModalProps = {
    titleTask: string;
    descriptionTask: string;
}

export function FormModal({ titleTask, descriptionTask }: FormModalProps) {
    const { register, handleSubmit } = useForm()
    const { 
        closeModal, 
        deleteTasks, 
        handleInputsChange, 
        onSubmit, 
        taskCreatedDate, 
        taskData, 
        taskDataForm, 
        isCompletedLocal, 
        handleCompleted 
    } = useFormModalTask()

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
            
            <ContainerCompleted isCompleted={isCompletedLocal}>
                <p>Está tarefa está: </p>
                <button onClick={handleCompleted}>
                    {isCompletedLocal ? 'Concluído': 'Não concluida'}
                </button>
            </ContainerCompleted>

            <p className="taskCreated">Tarefa Criada: {taskCreatedDate}</p>
        </Container>
    )
}