import { BsTrash3Fill } from "react-icons/bs"
import { BiEdit } from "react-icons/bi";
import { DataProps } from "../../@types/TypeApi";
import { Container } from "./style";

type CardTask = {
    task: DataProps;
    modalOpen: (TaskID: number) => void;
    deleteTasks: (id: number) => void;
}

export function CardTask({ task, modalOpen, deleteTasks }: CardTask) {
    return (
        <Container>
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
                    <BiEdit onClick={() => {
                        modalOpen(task.id)
                    }
                    } className="buttonViewMore"/>
                <BsTrash3Fill title="Alterar tarefa" className="trashTask" onClick={() => {
                    deleteTasks(task.id)
                }} />
                </div>

            </div>
        </Container>
    )
}