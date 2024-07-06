import React, { useState } from 'react';
import { Tarefa } from '../interfaces/Tarefa';

function CadastroTarefa() {
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [categoriaId, setCategoriaId] = useState<string>('');


    function handleSubmit (e: any) {
        e.preventDefault();

        const novaTarefa = {
            nome,
            descricao,
        };

        fetch('http://localhost:5000/tarefas/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaTarefa)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            setNome('');
            setDescricao('');
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    };

    return (
        <div>
            <h2>Cadastrar Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                </label>
                <label>
                    Descrição:
                    <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required />
                </label>
                <label>
                    CategoriaId:
                    <input type="text" value={categoriaId} onChange={e => setCategoriaId(e.target.value)} required />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroTarefa;