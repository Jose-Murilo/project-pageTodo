import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Container } from "./style";
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