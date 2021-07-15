import styled from 'styled-components'

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
` */

// Inicial maiúscula porque se trata de um componente e não de uma <tag>
// A "div" se trata da tag usada para criar o quadrado 
// Tudo o que está entre crases será o CSS 
const Box = styled.div `
  background: #ffffff;
  border-radius: 8px;
`;
 
export default function Home() {
  // Tudo o que é escrito no return será renderizado
  // Usa-se o "()" dentro do return  para obter a quebra de linha
  return (
    <main>
      O que teremos nas boxes:

      Imagem
      Bem-vindo
      Comunidades

    </main>
  )
}
