# backend-api-livros
Api de livros utilizando node, express e mongodb. Desenvolvida na formação API com NodeJS da Alura.


## ✏️ Descrição

> Este projeto tem como objetivo demonstrar os conhecimentos adquiridos durante o curso introdutório de criação de APIs com Node e Express.

## 💻 Tecnologias utilizadas

* Node
* Express
* Mongo
* Mongoose
* Nodemon


## 🚀 Instalação

1. Clone o repositório:
```
git clone https://github.com/oqapzin/backend-api-livros
```
2. Navegue até o diretório do projeto:
```
 cd backend-api-livros
```
3. Instale as dependências: 
```
npm install
```
4. Após a conclusão da instalação, inicie o servidor de desenvolvimento:
```
npm run dev
```


# 🔧 Configuração

Antes de executar o projeto, é necessário renomear o arquivo `env copy` para `.env` e configurá-lo com as variáveis de ambiente necessárias. Veja um exemplo de arquivo `.env`:

- MONGO_DB_USER=seu_usuario
- MONGO_DB_PASSWORD=sua_senha
- MONGO_DB_ADDRESS=seu_endereço_do_mongodb
- API_PORT=porta_desejada

## 📃 Rotas/API

### Autores
- `GET /autores`: Retorna uma lista de todos os autores.
- `GET /autores/:id`: Retorna os detalhes de um autor específico.
- `POST /autores`: Cria um novo autor.
- `PUT /autores/:id`: Atualiza as informações de um autor específico.
- `DELETE /autores/:id`: Remove um autor específico.

### Livros
- `GET /livros`: Retorna uma lista de todos os livros.
- `GET /livros/busca`: Retorna uma lista de livros filtrada por editora.
- `GET /livros/:id`: Retorna os detalhes de um livro específico.
- `POST /livros`: Cria um novo livro.
- `PUT /livros/:id`: Atualiza as informações de um livro específico.
- `DELETE /livros/:id`: Remove um livro específico.

