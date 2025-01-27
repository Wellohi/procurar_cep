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
          <p>Logradouro: {endereco.logradouro || 'Nada consta'}</p>
          <p>Complemento: {endereco.complemento || 'Nada consta'}</p>
          <p>Unidade:  {endereco.unidade || 'Nada consta'}</p>
          <p>Localidade:  {endereco.localidade || 'Nada consta'}</p>
          <p>UF:  {endereco.uf || 'Nada consta'}</p>
          <p>Estado:  {endereco.estado || 'Nada consta'}</p>
          <p>Região:  {endereco.regiao || 'Nada consta'}</p>
          <p>IBGE:  {endereco.ibge || 'Nada consta'}</p>
          <p>GIA:  {endereco.gia || 'Nada consta'}</p>
          <p>DDD:  {endereco.ddd || 'Nada consta'}</p>
          <p>SIAFI:  {endereco.siafi || 'Nada consta'}</p>
        </div>
      ) : (
        <p>Nada encontrado.</p>
      )
    }
    </div>
    )

}

export default Home;