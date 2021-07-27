import React from 'react';
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
    <Box as="aside">
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

 // Irá conter o estágio inicial
  const [comunidades, setComunidades] = React.useState([{
    id: '',
    title: 'Eu Odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  // Variveis
  const userAny = 'irlenegaliza';
  //const comunidades = ['Alurakut'];
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
          // Irá trazer os dados do formulário
          const dadosDoForm = new FormData(e.target); 

          console.log('Campo:', dadosDoForm.get('title'));
          console.log('Imagem:', dadosDoForm.get('image'));

          //Objeto createComunidade
          const createComunidade = {
            id: new Date().toISOString(),
            title: dadosDoForm.get('title'),
            image: dadosDoForm.get('image'),
          }

          // Comunidades.push('Alura Stars');
          const comunidadesAtualizadas = [...comunidades, createComunidade];
          setComunidades(comunidadesAtualizadas);
        
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
          <h2 className="smallTitle">
            Meus Amigos(as): ({pessoasFavoritas.length})
            <hr/>
          </h2>

            {/* O Map devolve algo transformado */}
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li  key={itemAtual}>
                  <a href={`/users/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
               )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
            Minhas Comunidades: ({comunidades.length})
            <hr/>
          </h2>

          <ul>
            {comunidades.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
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
