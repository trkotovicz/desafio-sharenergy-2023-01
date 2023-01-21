# Desafio para o processo seletivo SHARENERGY 2023/01

Aplicação desenvolvida para a vaga BACK-END JR no processo seletivo da SHARENERGY 2023/01.

## Ferramentas utilizadas

A aplicação foi desenvolvida em Typescript, utilizando React.js para o frontend e, Node.Js no Backend. Para isso foi utilizado o banco de dados MongoDB, com Express.js e o ODM Mongoose. Tem autenticação JWT e encriptação de senha com MD5.

## Inicialização via Docker 🐳

1. Clone o repositório `git@github.com:trkotovicz/desafio-sharenergy-2023-01.git`.
2. Na raíz do repositório, abra o terminal e rode o comando `npm run compose:up` e aguarde a alicação subir (esse passo pode demorar um pouco).
3. Acesse o navegador no endereço `http://localhost:3000` para utilizar a aplicação.
4. Para encerrar a aplicação, rode o comando `npm run compose:down`.

## Inicialização local 🖥

1. Clone o repositório `git@github.com:trkotovicz/desafio-sharenergy-2023-01.git`.
2. Na raíz do repositório instale as dependências e inicialize o projeto com o comando `npm start`.
3. Acesse o navegador no endereço `http://localhost:3000` ou `http://localhost:3001/docs/#/` para testar a API.
4. Para encerrar a aplicação, rode o comando `npm run kill:all`.

### ⚠️ Dica

Para acessar a aplicação, você pode usar os dados de login abaixo, ou criar um novo.

- Username: `desafiosharenergy`
- Senha: `sh@r3n3rgy`


## API

Com a aplicação rodando acesse a documentação da API em `http://localhost:3001/docs/#/`. </br>

## Vídeo da Aplicação 📹 🚨

Para assistir a apresentação da aplicação [clique aqui.](https://youtu.be/KeHxjZK4mHs) 📹

# O Desafio

- A página inicial da aplicação deve ser uma `Login Page`;
- O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso;
- Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username;
- Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio;
- Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/);
- Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.


---

Projeto desenvolvido por [Thais R Kotovicz](https://www.linkedin.com/in/thaiskotovicz/).
</br>
