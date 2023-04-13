import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

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
        <>
            <h1>Tasks</h1>

            {data&& 
                <div>
                    {data.map(task => <p key={task.id}>{task.titleTask}</p>)}
                </div>
            }
        </>
    )
}