## Sobre o Projeto

Este projeto consiste em uma API backend desenvolvida para suportar um aplicativo mobile de estatísticas de jogadores de futebol. A API fornece dados atualizados sobre jogadores, incluindo estatísticas de desempenho, informações pessoais e histórico de jogos. O backend foi construído usando Node.js com o framework Express e uma série de bibliotecas auxiliares para funcionalidades específicas, como autenticação, comunicação com banco de dados e envio de e-mails.

## Tecnologias Utilizadas

- **Express**: Framework para aplicativos web Node.js, utilizado para criar a API.
- **Mongoose**: Biblioteca para modelagem de objetos MongoDB, utilizada para interagir com o banco de dados.
- **Sequelize**: ORM para Node.js, suporta bancos de dados SQL e é utilizado para interagir com tais bancos.
- **Axios**: Usado para realizar requisições HTTP a outras APIs, se necessário.
- **Bcrypt**: Biblioteca para ajudar na hash de senhas.
- **Body-Parser**: Middleware do Express para análise de corpos de requisição entrantes.
- **Cors**: Middleware que pode ser usado para habilitar CORS (Compartilhamento de Recursos de Origem Cruzada) com várias opções.
- **Dotenv**: Módulo que carrega variáveis de ambiente de um `.env` arquivo para `process.env`.
- **Nodemailer**: Módulo para envio de e-mails de dentro de aplicações Node.js.
- **Nodemon**: Ferramenta de desenvolvimento que reinicia automaticamente o servidor Node.js quando mudanças nos arquivos são detectadas.
- **Supertest**: Biblioteca para testar APIs HTTP Node.js.

## Pré-requisitos

Para executar este projeto, você precisará ter instalado:

- Node.js
- npm (Node Package Manager)
- MongoDB ou acesso a um banco de dados MongoDB, se estiver usando Mongoose.
- Acesso a um banco de dados SQL, se estiver usando Sequelize.

## Configuração do Ambiente de Desenvolvimento

1. **Clone o Repositório**:
   ```
   git clone <url-do-repositorio-backend>
   ```
2. **Instalação das Dependências**:
   - No diretório do projeto, execute o seguinte comando para instalar as dependências necessárias:
     ```
     npm install
     ```
3. **Configuração das Variáveis de Ambiente**:
   - Copie o arquivo `.env.example` para um novo arquivo chamado `.env` e atualize as variáveis de ambiente conforme necessário para sua configuração de desenvolvimento.

## Executando a API

Para iniciar a API no modo de desenvolvimento, execute:

 1. Instale as dependências:
 ```
  npm i
 ```
2. Inicie o servidor:
 ```
  npm start
 ```

Para iniciar a API utilizando o docker
 1. Certifique-se que tenha o docker instalado

 2. Utilize o comando:
      ```
      docker compose -f docker-compose.yml up -d
      ```




Este comando utiliza o Nodemon para iniciar o servidor, facilitando o desenvolvimento ao reiniciar o servidor automaticamente a cada alteração de arquivo detectada.

