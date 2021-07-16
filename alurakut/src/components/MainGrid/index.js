import styled from 'styled-components';

const MainGrid = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-gap: 10px;
  padding: 15px;
  max-width: 500px;

  .profileArea{
    display: none;
    @media(min-width: 860px){
      display:block;
    }
  }
  
  // Quando a tela tiver o tamanho mínimo de 860px, mostra 3 colunas.
  // Definição dos nomes das colunas
  @media(min-width: 860px){
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
    display: grid;
    max-width: 1110px;
  } 
`;

export default MainGrid;