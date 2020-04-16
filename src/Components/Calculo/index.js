import React, {useState} from 'react';

import api from '../../Components/services/api';

import './styles.css';

export default () => {

    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [idade, setIdade] = useState('')
    const [salarioBruto, setSalarioBruto] = useState('')
    const [quantidadeDependentes, setQauntidadeDependentes] = useState('')
    const [empregado, setEmpregado] = useState('')
    const [tempoAtualEmprego, setTempoAtualEmprego] = useState('')
    const [restricaoSerasa, setRestricaoSerasa] = useState('')
    const [creditoTotal, setCreditoTotal] = useState('')
    
    async function handleCalcula(event) {
        event.preventDefault();

         const data = {
             nome,
             cpf,
             idade,
             salarioBruto,
             quantidadeDependentes,
             empregado,
             tempoAtualEmprego,
             restricaoSerasa,    
        }

        try {

        const response = await api.post('/credito', data);


        setCreditoTotal(response.data)
        console.log(creditoTotal)


        } catch (err) {
            alert('Vish deu biziu!!!')
        }
    }

    return (
        <div className="calcula-container">
            <div className="content">

                <form onSubmit={(event) => handleCalcula(event)}>
                    <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required /> <br
                    />

                    <input
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCPF(e.target.value)}
                    required /> <br 
                    />

                    <input
                    type="text"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required /> <br
                    />

                    <input
                    type="text"
                    placeholder="Salario Bruto"
                    value={salarioBruto}
                    onChange={(e) => setSalarioBruto(e.target.value)}
                    required /> <br
                    />

                    
                    <input
                    type="text"
                    placeholder="Quantidade de Dependentes"
                    value={quantidadeDependentes}
                    onChange={(e) => setQauntidadeDependentes(e.target.value)}
                    required /> <br
                    />

                    
                    <input
                    type="text"
                    placeholder="Empregado"
                    value={empregado}
                    onChange={(e) => setEmpregado(e.target.value)}
                    required /> <br
                    />

                    <input
                    type="text"
                    placeholder="tempoatual Emprego"
                    value={tempoAtualEmprego}
                    onChange={(e) => setTempoAtualEmprego(e.target.value)}
                    required /> <br
                    />

                    
                    <input
                    type="text"
                    placeholder="Restrição Serasa"
                    value={restricaoSerasa}
                    onChange={(e) => setRestricaoSerasa(e.target.value)}
                    required /> <br
                    />

                    <button className="button" type="submit">Calcular</button>

                </form>

                <span>
                    {creditoTotal}
                </span>

                
               

            </div>

        </div>



    )


}