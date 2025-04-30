# 🍕 Sistema de Pedidos de Pizza - Migração PHP para React/NestJS

## Sobre o Projeto
Este projeto consiste na migração de um sistema de pedidos de pizza originalmente desenvolvido em PHP para uma arquitetura moderna utilizando *React* (Frontend) e *NestJS* (Backend).  
A aplicação é containerizada e gerenciada através do *Rancher, com persistência de dados utilizando **Prisma ORM*.

---

## Arquitetura

### Frontend (React)
- Interface moderna e responsiva
- Gerenciamento de estado com *Redux* ou *Context API*
- Componentização para reuso de código
- Utilização de *TypeScript* para maior segurança e manutenibilidade

### Backend (NestJS)
- API RESTful modular
- Integração com *Prisma ORM*
- Autenticação via *JWT*
- Documentação automática com *Swagger*
- Desenvolvido em *TypeScript*

### Banco de Dados
- *PostgreSQL* como banco de dados relacional
- *Prisma ORM* para acesso e gerenciamento de dados
- Migrations automatizadas para versionamento de esquema

### Infraestrutura
- Containerização com *Docker*
- Orquestração com *Rancher* (Kubernetes)
- Pipeline *CI/CD* automatizado
- Escalabilidade horizontal

---

## Funcionalidades Principais
- Cadastro e autenticação de usuários
- Gerenciamento de cardápio de pizzas
- Realização e acompanhamento de pedidos
- Atualização de status dos pedidos (em produção, entregue)
- Gestão de entregas

---

## Requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com/)
- [Rancher Desktop](https://rancherdesktop.io)

## Passo a passo para rodar o projeto

### 1. Clonar o repositório

```bash
git clone <URL-do-repositório>
cd <nome-do-projeto>
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Criar o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydb?schema=public"

POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydb
POSTGRES_PORT=5432
PORT=4000
```

### 4. Subir o container do PostgreSQL

Execute o comando abaixo para iniciar o banco de dados:

```bash
docker compose up -d
# ou
docker-compose up -d
```

### 5. Verificar se o container está rodando

Use o comando:

```bash
docker ps
```

Certifique-se de que o container `hackathon_postgres` está listado.

### 6. Aplicar as migrações com Prisma

Rode:

```bash
npx prisma migrate dev
```

Se tudo estiver correto, você poderá visualizar o banco via navegador com:

```bash
npx prisma studio
```

### 7. Rodar a API

Inicie a API com o comando:

```bash
npm run start
```

---

## 📌 Observações

- A API, por padrão, utiliza o banco de dados local exposto na porta `5432`.
- Certifique-se de que nenhuma outra instância do PostgreSQL esteja ocupando essa porta.

---

## 📄 Licença

Este projeto é de uso interno para fins de desenvolvimento. Consulte a equipe responsável para detalhes de licenciamento e distribuição.

