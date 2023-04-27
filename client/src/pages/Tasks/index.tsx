// import { useQuery } from "@tanstack/react-query"

import { useState, useEffect, useContext } from 'react'
import { Container, ContainerTask, EmptyText } from "./style";

import { TaskContext } from '../../context';
import { Modal } from '../../components/Modal';
import { CardTask } from '../../components/CardTask';
import Empty from '../../assets/Empty.svg'

export function Tasks() {
    const [searchTask, setSearchTask] = useState('')
    const { setTaskData, setShowModal, showModal, fetchTasks, tasks } = useContext(TaskContext)
    const noTask = tasks?.length === 0
    
    const filterTask = tasks.filter(task => {
        return (
            task.titleTask.toLowerCase().includes(searchTask.toLowerCase()) ||
            task.descriptionTask.toLowerCase().includes(searchTask.toLowerCase()) 
            )
        })

    const noTaskFound = searchTask && filterTask.length === 0

    useEffect(() => {
        fetchTasks()
    }, [])

    const modalOpen = (TaskID: number) => {
        setShowModal(true)
        const taskIndex = tasks?.findIndex(task => task.id == TaskID);
        return setTaskData(tasks[taskIndex]);
    };

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

                {tasks &&filterTask &&
                    <>
                        <ContainerTask showModal={showModal}>
                            {filterTask.map(task => {
                                return (
                                    <>
                                        <CardTask
                                            key={task.id}
                                            task={task}
                                            modalOpen={modalOpen}
                                        />
                                    </>
                                )
                            })}
                        </ContainerTask>

                        <Modal />
                    </>
                }

                {noTaskFound ? 'Tarefa não encontrada!' : null}
                
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