// import { useQuery } from "@tanstack/react-query"

import { useEffect, useContext } from 'react'
import Empty from '../../assets/Empty.svg'
import { Container, ContainerTask, EmptyText } from "./style";
import { API } from "../../services/api";
import { useState } from "react";
import { TaskContext } from '../../context';
import { Modal } from '../../components/Modal';
import { CardTask } from '../../components/CardTask';

export function Tasks() {
    const { setTaskData, setShowModal, showModal, fetchTasks, tasks } = useContext(TaskContext)
    const [searchTask, setSearchTask] = useState('')

    const filterTask = tasks.filter(task => {
        return (
            task.titleTask.toLowerCase().includes(searchTask.toLowerCase())
        )
    })
    console.log(filterTask);

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
                />

                {filterTask &&
                    <>
                        <ContainerTask showModal={showModal}>
                            {tasks.map(task => {
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

                {
                    tasks?.length == 0 && (
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