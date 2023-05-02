import { Container, ContainerTask, EmptyText } from "./style";
import { useTask } from '../../hooks/useTask';

import { Modal } from '../../components/Modal';
import CardTask from '../../components/CardTask';
import Empty from '../../assets/Empty.svg'

export function Tasks() {
    const {
        searchTask,
        setSearchTask,
        showModal,
        tasks,
        noTask,
        filterTask,
        noTaskFound,
        modalOpen
    } = useTask()

    return (
        <Container>
            <div className="containerCard">
                <h1>Suas Tarefas</h1>

                <input
                    className='searchTask'
                    type="text"
                    placeholder='Pesquise sua tarefa'
                    name=""
                    value={searchTask}
                    onChange={(event) => setSearchTask(event.target.value)}
                    disabled={noTask}
                />

                {tasks && filterTask &&
                    <>
                        <ContainerTask showModal={showModal}>
                            {filterTask.map(task => (
                                <CardTask
                                    key={task.id}
                                    task={task}
                                    modalOpen={modalOpen}
                                />
                            ))}
                        </ContainerTask>

                        <Modal />
                    </>
                }

                {
                    noTaskFound ? 
                        <div className="noTaskFound">
                            <img src={Empty} alt="" />
                            Tarefa não encontrada
                        </div> 
                    : null
                }

                {
                    noTask && (
                        <div className="containerEmpty">
                            <img src={Empty} alt="" />
                            <EmptyText className="emptyTasks">Você ainda não tem tarefas cadastradas</EmptyText>
                            <EmptyText>Crie tarefas e organize seus itens a fazer</EmptyText>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}