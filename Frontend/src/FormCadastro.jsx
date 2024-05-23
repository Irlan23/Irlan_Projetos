import React, { useState } from 'react';
import './FormCadastro.css';

function FormCadastro() {


    const [formValores, setFormValores] = useState({
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
            console.log("Dados a serem enviados:", formValores);
            const response = await fetch('http://localhost:3000/pessoas', {
                method: 'POST',
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

        <><div className='borda'>

            <h1> CADASTRAR </h1>

        </div><form onSubmit={handleSubmit}>

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

                <div className='botao'>

                    <button type="submit"> CADASTRAR </button> </div>

            </form></>
    
    );
}

export default FormCadastro;