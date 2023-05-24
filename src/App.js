import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  

  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:


  const [squirtle, setSquirtle] = useState({

    name: "Squirtle",
    type: "Water",
    evolved: false,
    weight: 9,
    color: 'blue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/250px-0007Squirtle.png',
    id: 7
    
  })
  
  const evolucaoSquirtle = {
    
    name: "Wartortle",
    type: "Water",
    evolved: true,
    weight: 22.5,
    color: 'blue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/250px-0008Wartortle.png',
    id: 8
  }

  const [pichu, setPichu] = useState({

    name: "Pichu",
    type: "Eletric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/f/f3/0172Pichu.png/250px-0172Pichu.png',
    id: 172
    
  })

  const evolucaoPichu = {
    name: "Picachu",
    type: "Eletric",
    evolved: true,
    weight: 6,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png',
    id: 25
  }


  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon = {squirtle} evolucaoPokemon = {setSquirtle} evolucao = {evolucaoSquirtle}/>
      <PokemonCard pokemon = {pichu} evolucaoPokemon = {setPichu} evolucao = {evolucaoPichu}/>
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
