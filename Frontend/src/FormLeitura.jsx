import React, { useState, useEffect } from 'react'

function FormLeitura() {

    const [consultaDados, setconsultaDados] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/pessoas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            setconsultaDados(data);
        } catch (err) {

            console.error("Erro ao buscar dados do banco", err);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit"> Ler dados ao banco </button>
            </form>

            <ol>
                {consultaDados.map((linha, index) => (
                    <li key={index}>
                        <span>Nome: {linha.nome} </span>
                        <span>Idade: {linha.idade} </span>
                        <span>CPF: {linha.cpf} </span>
                        <span>Numero: {linha.numero} </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default FormLeitura;