import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

function App() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [avatar, setAvatar] = useState()
  const [isLogged, setIsLogged] = useState(false)

  function responseGoogle(response){

    const { profileObj: {name, email, imageUrl} } = response //desconstrução para pegar uma prop de um objeto dentro de outro objeto

    setName(name)
    setEmail(email)
    setAvatar(imageUrl)
    setIsLogged(true)
    console.log(response)
  }

  return (
    <main>
      <div className="container">
        <h1>Autenticação</h1>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_OAUTH}
            buttonText="Continuar com Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          { isLogged && 
            <div>
              <img src={avatar} alt="Avatar"></img>
              <div>
                <span>{name}</span>
              </div>
              <div>
                <span>{email}</span>
              </div>
            </div>
          }
      </div>
    </main>
  );
}

export default App;
