
import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
// Importando componentes individualmente
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/aluraComm';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

{ /* =========== ANOTAÇÕES GERAIS ====================*/ }
// Usa-se a inicial maiúscula para nomear componente
// A "div" está sendo usada para as Boxes  
// O CSS é usado entre crases

{ /*  ================== FUNCTION PROFILESIDEBAR ==================*/ }

function ProfileSidebar(propriedades){

  return (
    <Box>
      {/* {} passar valor de variavel em JavaScript. O {} externo é do React para conseguir usar o JS dentro do HTML*/}
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '5px'}} />
    </Box>
  )
}

export default function Home() {
 
  // Variveis
  const userAny = 'irlenegaliza';
  const pessoasFavoritas = [
    'lfdgaliza',  
    'jaquelindacostabotelho', 
    'peas', 
    'omariosouto',
    'juunegreiros',
    'rafaballerini', 
  ] 
  
  return (
    // Usa-se o "()" dentro do return  para obter a quebra de linha
    // Tudo o que é escrito no return será renderizado
    <>
    <AlurakutMenu/>
      <MainGrid>
        { /* ============== FUNCTION PROFILEAREA ===================*/ }
        <div className="profileArea" style = {{ gridArea: 'profileArea'}} >
          <ProfileSidebar githubUser={userAny}/>
        </div>
        <div className="welcomeArea" style= {{gridArea: 'welcomeArea'}}>

        { /*  ============= SESSÃO BEM-VINDO ===================*/ }
      <Box>
          <h1 className="title">
            Bem-vindo(a), {userAny}.
          </h1>
        <OrkutNostalgicIconSet/>
      </Box>

      { /*  =============SESSÃO PESSOAS DA COMUNIDADE ==================*/ }
      </div>
      <div className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea'}}> 
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Meus amigos(as) ({pessoasFavoritas.length})
          </h2>

            {/* O Map devolve algo transformado */}
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
               )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
