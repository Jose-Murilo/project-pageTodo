import { useContext, memo, useCallback } from 'react'
import { TaskContext } from '../../context'
import { FormModal } from '../FormModal'
import { Container } from './style'

function ModalApp() {
    const { setShowModal, showModal } = useContext(TaskContext)

    const handleCloseModal = useCallback(() => {
        setShowModal(false)
    }, [setShowModal])

    return (
        <Container modal={showModal}>
            <div onClick={handleCloseModal} className="backdrop"></div>
            <div className="modal-content">
                <div onClick={handleCloseModal} className='closeModal'>X</div>
                <h1>Alterar Tarefas</h1>

                {/* <FormModal
                    titleTask="Alterar titulo da tarefa" descriptionTask="Alterar descrição da tarefa"
                /> */}

                <FormModal
                    {...{ titleTask: "Alterar titulo da tarefa", descriptionTask: "Alterar descrição da tarefa" }}
                />
            </div>
        </Container>
    )
}

export const Modal = memo(ModalApp)