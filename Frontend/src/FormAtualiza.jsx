import React, { useState } from 'react';

function FormAtualiza() {


    const [formValores, setFormValores] = useState({
        id:'',
        nome: '',
        idade: '',
        cpf: '',
        numero: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Dados a serem enviados:", formValores.id);
            const response = await fetch(`http://localhost:3000/pessoas/{formValores.id}`, {
                method: 'UPDATE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });

            const json = await response.json();
            console.log(response)
            console.log(json);

        } catch (err) {
            console.error("Erro ao enviar", err)
        }
    };

    return (

        <form onSubmit={handleSubmit}>

                ID a ser Atualizado:
                <input type="text" name="id" value={formValores.id} onChange={handleChange} />
                Nome:
                <input type="text" name="nome" value={formValores.nome} onChange={handleChange} />
                <br />
                Idade:
                <input type="number" name="idade" value={formValores.idade} onChange={handleChange} />
                <br />
                CPF:
                <input type="text" name="cpf" value={formValores.cpf} onChange={handleChange} />
                <br />
                Numero:
                <input type="text" name="numero" value={formValores.numero} onChange={handleChange} />
                <br />

                <button type="submit"> Atualizar </button>

        </form>
    );
}

export default FormAtualiza;