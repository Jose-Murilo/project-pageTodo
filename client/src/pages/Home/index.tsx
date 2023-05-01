import { Container } from "./style";
import { useForm } from "react-hook-form";
import { API } from "../../services/api";

type FormDataType = {
  titleTask: string;
  descriptionTask: string;
}

export function Home() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormDataType>()

  function onSubmit(data: FormDataType) {
    async function sendTasks() {
      const response = await API.post('', data)
      return response.data 
    }

    sendTasks();
    alert('Tarefa adicionada com sucesso.')
    reset();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Adicione sua Tarefa</h1>
        <section>
          <label htmlFor="task">Digite o titulo da Tarefa</label>
          <input
            className="titleTasks"
            type="text"
            {...register('titleTask', { required: true })}
            placeholder="Digite sua tarefa"
            id="task"
            />
          {errors.titleTask && <span className="error">Este campo é obrigatório!</span>}
        </section>

        <section>
          <label htmlFor="">Digite a descrição da Tarefa</label>
          <textarea 
            className="taskDescription" 
            maxLength={350} 
            {...register('descriptionTask', { required: true })}
            id="" 
            cols={30} 
            rows={10}
            placeholder="Digite a descrição da Tarefa"
            >
          </textarea>
          {errors.descriptionTask && <span className="error">Este campo é obrigatório!</span>}
        </section>

        <button className="buttonTasks">Adicionar</button>
      </form>
    </Container>
  )
}


