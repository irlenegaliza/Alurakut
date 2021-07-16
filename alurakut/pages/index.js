
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
` */

// Inicial maiúscula porque se trata de um componente e não de uma <tag>
// A "div" se trata da tag usada para criar o quadrado 
// Tudo o que está entre crases será o CSS 


export default function Home() {
  // Tudo o que é escrito no return será renderizado
  // Usa-se o "()" dentro do return  para obter a quebra de linha
  return (
    <MainGrid>
      {/* Chave: valor */}
      <div>
      <Box className="profileArea" style = {{ gridArea: 'profileArea'}}>
        <img src="https://github.com/irlenegaliza.png" />
      </Box>
      </div>
      <div>
      <Box className="welcomeArea" style= {{gridArea: 'welcomeArea'}}>
        Bem-vindo
      </Box>
      </div>
      <div>
      <Box className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea'}}> 
        Comunidades
        </Box>
        </div>
    </MainGrid>
  )
}
