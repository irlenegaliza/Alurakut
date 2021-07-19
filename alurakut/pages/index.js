
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
// Importando componentes individualmente
import { AlurakutMenu } from '../src/lib/aluraComm';

// Usa-se a inicial maiúscula para nomear componente
// A "div" está sendo usada para as Boxes  
// O CSS é usado entre crases

function ProfileSidebar(propriedades){
  console.log(propriedades)
  return (
    <Box>
      {/* {} passar valor de variavel em JavaScript. O {} externo é do React para conseguir usar o JS dentro do HTML*/}
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '5px'}} />
    </Box>
  )
}

export default function Home() {
  // Varivel de usuario
  const userAny = 'irlenegaliza';
  
  return (
    // Usa-se o "()" dentro do return  para obter a quebra de linha
    // Tudo o que é escrito no return será renderizado
    <>
    <AlurakutMenu/>
    <MainGrid>
      { /* Chave: valor */ }
      <div className="profileArea" style = {{ gridArea: 'profileArea'}} >
        <ProfileSidebar githubUser={userAny}/>
      </div>
      <div className="welcomeArea" style= {{gridArea: 'welcomeArea'}}>
      <Box>
        Bem-vindo
      </Box>
      </div>
      <div className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea'}}> 
      <Box>
        Pessoas da Comunidade
      </Box>
      <Box> 
        Comunidades
      </Box>
      </div>
    </MainGrid>
    </>
  )
}
