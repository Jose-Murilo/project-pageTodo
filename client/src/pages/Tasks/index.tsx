// import { useQuery } from "@tanstack/react-query"

import { useEffect } from 'react'
import Empty from '../../assets/Empty.svg'
import { Container, EmptyText, Modal } from "./style";
import { BsTrash3Fill } from 'react-icons/bs'
import { API } from "../../services/api";
import { useState } from "react";
import { InputTask } from "../../components/InputTask";
export interface DataProps {
    id: number;
    titleTask: string
    descriptionTask: string;
}[]

export function Tasks() {
    const [tasks, setTasks] = useState<number>(0)
    const [showModal, setShowModal] = useState(false)
    const [taskData, setTaskData] = useState({})
    const [data, setData] = useState<DataProps[]>([])
    
    async function getTasks() {
        const response = await API.get('')
        const data = response.data
        setData(data)
    }

    // const { data } = useQuery<DataProps[]>({
    //     queryKey: ["tasks", tasks],
    //     queryFn: getTasks
    // })

    useEffect(() => {
        getTasks()
    }, [])

    async function deleteTasks(id: number) {
        const response = await API.delete(`/${id}`)
        return response
    }

    const modalOpen = (TaskID: number) =>  { 
        setShowModal(true)
        const task = data?.findIndex(task => task.id == TaskID);
        getTasks()
        setTaskData(data[task]);
    };

    // console.log(taskData);
    
    return (
        <Container>
            <div className="containerCard">
                <h1>Suas Tarefas</h1>

                {data &&
                    <>
                        <div className="containerTask">
                            {data.map(task => {
                                return (
                                    <div className="cardTask">
                                        <div className="containerTitle">
                                            <h2 key={task.id}>
                                                {
                                                    task.titleTask.length > 17 ? task.titleTask.substring(0, 17) + '...' : task.titleTask
                                                }
                                            </h2>
                                        </div>
                                        <p className="descriptions">{task.descriptionTask}</p>

                                        <div className="viewMore">
                                            <button onClick={() => {
                                                modalOpen(task.id)
                                            }
                                            } className="buttonViewMore">Ver +</button>
                                        </div>

                                        <BsTrash3Fill className="trashTask" onClick={() => {
                                            deleteTasks(task.id)
                                            setTasks(tasks + 1)
                                        }} />
                                    </div>
                                )
                            })}
                        </div>

                        <Modal modal={showModal}>
                            <div onClick={() => setShowModal(false)} className="backdrop"></div>
                            <div className="modal-content">
                                <h1>Alterar Tarefas</h1>

                                <InputTask taskData={taskData} titleTask="Alterar titulo da tarefa" descriptionTask="Alterar descrição da tarefa" />
                            </div>
                        </Modal>
                    </>
                }

                {data?.length == 0 && (
                    <div className="containerEmpty">
                        <img src={Empty} alt="" />
                        <EmptyText className="emptyTasks">Você ainda não tem tarefas cadastradas</EmptyText>
                        <EmptyText>Crie tarefas e organize seus itens a fazer</EmptyText>
                    </div>
                )}
            </div>
        </Container>
    )
}