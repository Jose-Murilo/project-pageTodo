import { useContext } from 'react'
import { TaskContext } from '../../context'
import { InputTask } from '../InputTask'
import { Container } from './style'

type ModalProps = {
    deleteTasks: (taskID: number) => void
}

export function Modal({deleteTasks}: ModalProps) {

    const { setShowModal, showModal, task } = useContext(TaskContext)

    return (
        <Container modal={showModal}>
            <div onClick={() => setShowModal(false)} className="backdrop"></div>
            <div className="modal-content">
                <div onClick={() => setShowModal(false)} className='closeModal'>X</div>
                <h1>Alterar Tarefas</h1>

                <InputTask deleteTasks={deleteTasks} titleTask="Alterar titulo da tarefa" descriptionTask="Alterar descrição da tarefa" />
            </div>
        </Container>
    )
}