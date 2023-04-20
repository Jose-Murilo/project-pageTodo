// import { useQuery } from "@tanstack/react-query"

import { useEffect, useContext } from 'react'
import Empty from '../../assets/Empty.svg'
import { Container, ContainerTask, EmptyText } from "./style";
import { API } from "../../services/api";
import { useState } from "react";
import { TaskContext } from '../../context';
import { Modal } from '../../components/Modal';
import { CardTask } from '../../components/CardTask';
export interface DataProps {
    id: number;
    titleTask: string
    descriptionTask: string;
}[]

export function Tasks() {
    // const [data, setData] = useState<DataProps[]>([])
    const { setTaskData, setShowModal, showModal, fetchTasks, task } = useContext(TaskContext)
    const [searchTask, setSearchTask] = useState('')

    const filterTask = task.filter(task => {
        return (
            task.titleTask.toLowerCase().includes(searchTask.toLowerCase())
        )
    })
    console.log(filterTask);

    // async function fetchTasks() {
    //     const response = await API.get('')
    //     const data = response.data
    //     setData(data)
    // }

    useEffect(() => {
        fetchTasks()
    }, [])

    async function deleteTasks(id: number) {
        const confirm = window.confirm('Tem certeza que deseja apagar essa tarefa?')
        if (confirm) {
            const response = await API.delete(`/${id}`)
            fetchTasks()
            return response
        }
    }

    const modalOpen = (TaskID: number) => {
        setShowModal(true)
        const taskIndex = task?.findIndex(task => task.id == TaskID);
        return setTaskData(task[taskIndex]);
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
                            {task.map(task => {
                                return (
                                    <>
                                        <CardTask 
                                            key={task.id}
                                            task={task} 
                                            modalOpen={modalOpen} 
                                            deleteTasks={deleteTasks}
                                        />
                                    </>
                                )
                            })}
                        </ContainerTask>

                        <Modal deleteTasks={deleteTasks}/>
                    </>
                }

                {
                    task?.length == 0 && (
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