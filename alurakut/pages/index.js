
import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
// Importando componentes individualmente
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/aluraComm';
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
        <hr/>

        {/* Preenchimento default no profile */}
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
 
  // Variveis
  const userAny = 'irlenegaliza';
  const comunidades = ['Alurakut'];
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
            <hr/>
          </h1>
        <OrkutNostalgicIconSet/>
      </Box>

      <Box>
        <h3 className="subTitle">O que você deseja fazer?</h3>
        <form onSubmit={function handleCriaComunidade(e){
         e.preventDefault();
          
          comunidades.push('Alura Stars');
        
        }}>
          <div>
            <input style={{marginLeft: '-16px'}}
              placeholder="Informe o nome da comunidade:" 
              name="title"
              aria-label="Informe o nome da comunidade:"
              type="text"
            />
          </div>
          <div>
            <input style={{marginLeft: '-16px'}}
              placeholder="Coloque uma URL para ser usada como capa:" 
              name="title"
              aria-label="Coloque uma URL para ser usada como capa:"
            />
          </div>

          <button>Criar Comunidade</button>
        </form>
      </Box>

      { /*  =============SESSÃO PESSOAS DA COMUNIDADE ==================*/ }
      </div>
      <div className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea'}}> 
        <ProfileRelationsBoxWrapper>
          <ul>
            {comunidades.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`http://placehold.it/300x300`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
               )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
            <hr/>
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
