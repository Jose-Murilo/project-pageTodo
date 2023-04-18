// import { useQuery } from "@tanstack/react-query"

import { useEffect, useContext } from 'react'
import Empty from '../../assets/Empty.svg'
import { Container, EmptyText } from "./style";
import { BsTrash3Fill } from 'react-icons/bs'
import { API } from "../../services/api";
import { useState } from "react";
import { InputTask } from "../../components/InputTask";
import { TaskContext } from '../../context';
import { Modal } from '../../components/Modal';
import { CardTask } from '../../components/CardTask';
export interface DataProps {
    id: number;
    titleTask: string
    descriptionTask: string;
}[]

export function Tasks() {
    const [data, setData] = useState<DataProps[]>([])

    const { setTaskData, setShowModal } = useContext(TaskContext)

    async function getTasks() {
        const response = await API.get('')
        const data = response.data
        setData(data)
    }

    useEffect(() => {
        getTasks()
    }, [])

    async function deleteTasks(id: number) {
        const response = await API.delete(`/${id}`)
        return response
    }

    const modalOpen = (TaskID: number) => {
        setShowModal(true)
        const taskIndex = data?.findIndex(task => task.id == TaskID);
        return setTaskData(data[taskIndex]);
    };

    return (
        <Container>
            <div className="containerCard">
                <h1>Suas Tarefas</h1>

                {data &&
                    <>
                        <div className="containerTask">
                            {data.map(task => {
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
                        </div>

                        <Modal />
                    </>
                }

                {
                    data?.length == 0 && (
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