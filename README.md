# Delliv Fullstack Pleno Coding Challenge

## Sobre o Projeto
Este projeto, o Delliv Fullstack Pleno Coding Challenge, é uma aplicação de rastreamento de entregas que permite aos usuários autenticados visualizar e atualizar o status de pedidos. Este repositório contém tanto o frontend, desenvolvido com React e Redux, quanto o backend, implementado com NestJS e Prisma, juntamente com um banco de dados PostgreSQL.

### Principais Funcionalidades:
- Autenticação e autorização de usuários.
- Visualização e atualização do status de pedidos.

## Como Rodar o Projeto

### Pré-Requisitos:
- Docker e Docker Compose.
- Node.js e npm/yarn (para desenvolvimento local sem Docker).

### Instruções de Execução:

1. **Clone o Repositório:**
   

```bash
   git clone https://github.com/melissafalcao/delliv-app.git
```

2. **Configuração com Docker:**

Certifique-se de que o Docker está instalado e em execução.
Execute o seguinte comando para iniciar todos os serviços:

```bash
   docker-compose up
```
3. **Execução Local (Sem Docker):**

Navegue até o diretório do frontend e instale as dependências:
```bash
cd frontend
npm install # ou yarn
```
Inicie o servidor de desenvolvimento do frontend:
```bash
npm start # ou yarn start
```

Em um novo terminal, navegue até o diretório do backend e instale as dependências:
```bash
cd backend
npm install # ou yarn
```
Inicie o servidor de desenvolvimento do backend:

```bash
npm run start:dev # ou yarn start:dev
```
Acessar a Aplicação:

A interface do usuário estará disponível em http://localhost:3000.
O servidor backend estará acessível em http://localhost:3000.
