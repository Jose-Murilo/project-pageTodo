import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <form>
        <h1>Lista De Tarefas</h1>
        <section>
          <label htmlFor="task">Digite sua Tarefa</label>
          <input
            className="titleTasks"
            type="text"
            name=""
            id="task"
          />
        </section>

        <section>
          <label htmlFor="">Digite a descrição da Tarefa</label>
          <textarea className="taskDescription" maxLength={350} name="" id="" cols={30} rows={10}></textarea>
        </section>

        <button className="buttonTasks">Adicionar</button>
      </form>
    </Container>
  )
}


