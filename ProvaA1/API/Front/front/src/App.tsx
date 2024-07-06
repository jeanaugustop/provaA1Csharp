import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ListaProdutos from './components/ListaTarefas';
import CadastroProduto from './components/CadastroTarefa';
import ListaTarefas from './components/ListaTarefas';
import CadastroTarefa from './components/CadastroTarefa';
import ListaConcluidas from './components/ListaConcluidas'
import ListaNaoConcluidas from './components/ListaNaoConcluidas'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Lista de Tarefas</Link>
                        </li>
                        <li>
                            <Link to="/concluida">Lista Tarefas Concluidas</Link>
                        </li>
                        <li>
                            <Link to="/naoconcluida">Lista Tarefas Nao Concluidas</Link>
                        </li>
                        <li>
                            <Link to="/cadastro">Cadastro de Tarefas</Link>
                        </li>
                        
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<ListaTarefas />} />
                    <Route path="/cadastro" element={<CadastroTarefa />} />
                    <Route path="/concluida" element={<ListaConcluidas />} />
                    <Route path="/naoconcluida" element={<ListaNaoConcluidas />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;