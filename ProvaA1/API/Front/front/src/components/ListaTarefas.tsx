import React, { useEffect, useState } from 'react';
import { Tarefa } from '../interfaces/Tarefa';

const ListaTarefas: React.FC = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/tarefas/listar') // Substitua pela URL da sua API
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setTarefas(data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>TarefaId</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Criado Em</th>
                        <th>Categoria</th>
                        <th>CategoriaId</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map(tarefa => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.id}</td>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{new Date(tarefa.criadoEm).toLocaleDateString()}</td>
                            <td>{tarefa.categoria}</td>
                            <td>{tarefa.categoriaId}</td>
                            <td>{tarefa.status}</td>

                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaTarefas;