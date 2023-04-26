import { useContext } from 'react'
import { TaskContext } from '../../context'
import { FormModal } from '../FormModal'
import { Container } from './style'

export function Modal() {

    const { setShowModal, showModal } = useContext(TaskContext)

    return (
        <Container modal={showModal}>
            <div onClick={() => setShowModal(false)} className="backdrop"></div>
            <div className="modal-content">
                <div onClick={() => setShowModal(false)} className='closeModal'>X</div>
                <h1>Alterar Tarefas</h1>

                <FormModal 
                    titleTask="Alterar titulo da tarefa" descriptionTask="Alterar descrição da tarefa" 
                />
            </div>
        </Container>
    )
}