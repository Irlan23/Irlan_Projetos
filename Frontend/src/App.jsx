import React, { useState} from "react";
import { FaPlus, FaSearch, FaPen, FaTrash } from 'react-icons/fa';
import Cadastro from './FormCadastro';
import Ler from './FormLeitura';
import Atualiza from './FormAtualiza';
import Deleta from './FormDeleta';
import './App.css'

const App = () => {
    const [currentPage, setCurrentPage] = useState(null);

    const renderPage = () => {
        switch (currentPage) {
            case 'create':
                return <Cadastro />;
            case 'read':
                return <Ler />;
            case 'update':
                return <Atualiza />;
            case 'delete':
                return <Deleta />;
                default:
                    return null;
        }
};

return (
    <div className="container">
        <center>
            <button className="button" onClick={() => setCurrentPage('create')}>
                <FaPlus /> Cadastrar (C)
            </button>
            <button className="button" onClick={() => setCurrentPage('read')}>
                <FaSearch /> Ler dados (R)
            </button>
            <button className="button" onClick={() => setCurrentPage('update')}>
                <FaPen /> Atualizar (U)
            </button>
            <button className="button" onClick={() => setCurrentPage('delete')}>
                <FaTrash /> Deletar (D)
            </button>

            {renderPage()}
        </center>
    </div>
  );
};

export default App;