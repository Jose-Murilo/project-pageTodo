import { useContext } from 'react'
import { TaskContext } from '../../context'
import { InputTask } from '../InputTask'
import { Container } from './style'

export function Modal() {
    const { setShowModal, showModal } = useContext(TaskContext)

    return (
        <Container modal={showModal}>
            <div onClick={() => setShowModal(false)} className="backdrop"></div>
            <div className="modal-content">
                <h1>Alterar Tarefas</h1>
                
                <InputTask titleTask="Alterar titulo da tarefa" descriptionTask="Alterar descrição da tarefa" />
            </div>
        </Container>
    )
}