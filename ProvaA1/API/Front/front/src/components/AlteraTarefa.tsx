import { useEffect, useState } from "react";
import { Tarefa } from "../interfaces/Tarefa";
import { useNavigate, useParams } from "react-router-dom";
import { stat } from "fs";

function TarefaAlterar() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");


  useEffect(() => {
    if (status) {
      fetch(`http://localhost:5225/api/produto/alterar/${id}`)
        .then((resposta) => resposta.json())
        .then((tarefa: Tarefa) => {
          setStatus(tarefa.status);

        });
    }
  }, []);

  function alterarTarefa(e: any) {
    const tarefa: Tarefa = {
        
        status: status,
    }
    //FETCH ou AXIOS
    fetch(`http://localhost:5225/api/produto/alterar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => resposta.json())
      .then((tarefa: Tarefa) => {
        navigate("/pages/produto/listar");
      });
    e.preventDefault();
  }
  return (
    <div>
      <h1>Alterar Produto</h1>
      <form onSubmit={alterarTarefa}>
        <label>Nome:</label>
        <input
          type="text"
          value={status}
          placeholder="Digite o nome"
          onChange={(e: any) => setStatus(e.target.value)}
          required
        />

        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default TarefaAlterar;