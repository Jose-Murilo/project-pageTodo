import { BsTrash3Fill } from "react-icons/bs"
import { DataProps } from "../../context";

type CardTask = {
    task: DataProps;
    modalOpen: (TaskID: number) => void;
    deleteTasks: (id: number) => void;
}

export function CardTask({ task, modalOpen, deleteTasks }: CardTask) {
    return (
        <>
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
                }} />
            </div>
        </>
    )
}