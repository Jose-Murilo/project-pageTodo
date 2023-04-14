import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Empty from '../../assets/Empty.svg'
import { Container, EmptyText } from "./style";
import { API } from "../../services/api";
interface DataProps {
    id: number;
    titleTask: string
    descriptionTask: string;
}

export function Tasks() {


    async function getTasks() {
        const response = await API.get('')
        return response.data
    }

    const { data } = useQuery<DataProps[]>({
        queryKey: ["tasks"],
        queryFn: getTasks
    })

    return (
        <Container>
            <div className="containerCard">
                <h1>Suas Tarefas</h1>

                {data &&
                    <div className="containerTask">
                        {data.map(task => {
                            return (
                                <div className="cardTask">
                                    <div className="containerTitle">
                                        <h2 key={task.id}>
                                            {
                                                task.titleTask.length > 25 ? task.titleTask.substring(0 , 20) + '...' : task.titleTask
                                            }
                                        </h2>
                                    </div>
                                    <p className="descriptions">{task.descriptionTask}</p>
                                </div>
                            )
                        })}
                    </div>
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