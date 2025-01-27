import React, { useState } from 'react';
import axios from 'axios';


import './style.css'

function Home(){

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);
  
    const handleCepChange = (event) => {
      setCep(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setEndereco(response.data);
      } catch (error) {
        console.error(error);
        setEndereco(null);
      }
    };

    return(
        <div className='search_container'>

      <h1 className='titulo'>Buscador de Endereços por CEP</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={handleCepChange}
        />

        <button type="submit">Buscar</button>

      </form>
      {endereco ? (
        <div>

          <p>Logradouro: {endereco.logradouro || 'Nada encontrado'}</p>
          <p>Complemento: {endereco.complemento || 'Nada encontrado'}</p>
          <p>Unidade:  {endereco.unidade || 'Nada encontrado'}</p>
          <p>Localidade:  {endereco.localidade || 'Nada encontrado'}</p>
          <p>UF:  {endereco.uf || 'Nada encontrado'}</p>
          <p>Estado:  {endereco.estado || 'Nada encontrado'}</p>
          <p>Região:  {endereco.regiao || 'Nada encontrado'}</p>
          <p>IBGE:  {endereco.ibge || 'Nada encontrado'}</p>
          <p>GIA:  {endereco.gia || 'Nada encontrado'}</p>
          <p>DDD:  {endereco.ddd || 'Nada encontrado'}</p>
          <p>SIAFI:  {endereco.siafi || 'Nada encontrado'}</p>
          
        </div>

      ) : (

        <p>Nada encontrado.</p>

      )
    }
    </div>
    )

}

export default Home;