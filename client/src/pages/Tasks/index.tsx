import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Container } from "./style";
interface DataProps {
    id: number;
    titleTask: string
    descriptionTask: string;
}

export function Tasks() {
    const api = 'http://localhost:3000/task'

    async function getTasks() {
        const response = await axios.get(api)
        return response.data
    }

    const { data } = useQuery<DataProps[]>({
        queryKey: ["tasks"],
        queryFn: getTasks
    })

    return (
        <Container>
            <div className="ContainerCard">
                <h1>Tasks</h1>

                {data &&
                    <div className="containerTask">
                        {data.map(task => {
                            return (
                                <div className="cardTask">
                                    <div className="containerTitle">
                                        <h2 key={task.id}>{task.titleTask}</h2>
                                    </div>
                                    <p>{task.descriptionTask}</p>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </Container>
    )
}