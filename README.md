<h1>Autenticaçãp com Google OAuth e React</h1>

<h2>Google Cloud Platform</h2>
<i>Visto que a plataforma é meio confusa de se utilizar acho interessante criar um mini tutorial dela para obtermos o ID do Google para usarmos a API</i>
<br>
<br>
Criando novo projeto precisamos indicar o nome.
<br>
<div style="display: flex; justify-content: space-around;">
    <img src="./tutorial/1.png" width="45%" height="400"/>
    <img src="./tutorial/2.png" width="45%" height="400"/>
</div>
<br>
<br>
Agora devemos selecionar o nosso projeto criado
<br>
<div style="display: flex; justify-content: space-around;">
    <img src="./tutorial/3.png" width="45%" height="400"/>
    <img src="./tutorial/4.png" width="45%" height="400"/>
</div>
<br>
<br>
Voltamos para o menu esquerdo e clicamos em credenciais. Nessa página temos que clicar na sessão que diz para configurarmos o OAuth. Na próxima página devemos selecionar o tipo de usuario como externo que indica que qualquer usuário possa logar.
<br>
<div style="display: flex; justify-content: space-around;">
    <img src="./tutorial/6.png" width="45%" height="400"/>
    <img src="./tutorial/7.png" width="45%" height="400"/>
</div>
<br>
<br>
Posteriormente temos que adicionar informações a respeito da nossa aplicação como nome, email de suporte e email de contato. Os outros campos não precisam ser alterados. Sendo assim, é só confirmar as outras telas até sermos redirecionados para o dashboard.
<br>
<div style="display: flex; justify-content: space-around;">
    <img src="./tutorial/8.png" width="45%" height="400"/>
</div>
<br>
<br>
Já no dashboard, devemos selecionar no menu esquerdo à sessão de credenciais. Ao entrarmos nela clicamos no botão criar credenciais e selecionamos OAuth client ID.
<br>
<div style="display: flex; justify-content: space-around;">
    <img src="./tutorial/10.png" width="45%" height="400"/>
    <img src="./tutorial/11.png" width="45%" height="400"/>
</div>
<br>
<br>
Após isso, temos criar nosso client id. Para isso, selecionamos o tipo da aplicação, seu nome, e a uri do seu site, no caso se estiver rodando localmente, utilizar a porta em que a aplicação está sendo servida (react normalmente roda na porta 3000)
<br>
<div style="display: flex; justify-content: space-around;">
    <img src="./tutorial/12.png" width="45%" height="400"/>
</div>
<br>
<br>
Voltamos à sessão de credenciais e selecionamos nosso projeto. Ao clicar nele, nos é obtido o ID do cliente.
<br>
<div style="display: flex; justify-content: space-around;">
    <img src="./tutorial/13.png" width="45%" height="400"/>
    <img src="./tutorial/14.png" width="45%" height="400"/>
</div>
<br>
<br>
Agora é só utilizar esse id no componente que a biblioteca nos fornece e ter acesso à API do Google para obter as informações dos usuários.
<br>

<a href="https://github.com/anthonyjgrove/react-google-login">React Google login</a> 

