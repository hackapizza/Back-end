# 🍕 Sistema de Pedidos de Pizza - Migração PHP para React/NestJS

## Sobre o Projeto
Este projeto consiste na migração de um sistema de pedidos de pizza originalmente desenvolvido em PHP para uma arquitetura moderna utilizando *React* (Frontend) e *NestJS* (Backend).  
A aplicação é containerizada e gerenciada através do *Rancher, com persistência de dados utilizando **Prisma ORM*.

---

## 🏩 Arquitetura

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

## ✅ Funcionalidades Principais
- Cadastro e autenticação de usuários
- Gerenciamento de cardápio de pizzas
- Realização e acompanhamento de pedidos
- Atualização de status dos pedidos (em produção, entregue)
- Gestão de entregas
- Relatórios e análises

---

## ⚙️ Requisitos do Sistema
- Node.js >= 14.x
- Docker
- Kubernetes
- PostgreSQL
- Rancher Desktop ou Server

---

## 🚀 Configuração do Ambiente

### 1. Instalação das Dependências

bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install


---

### 2. Configuração do Prisma (Backend)

bash
# Instalação do Prisma CLI
npm install @prisma/cli -D

# Inicialização do Prisma
npx prisma init

# Após configurar os modelos Prisma, executar:
npx prisma generate
npx prisma migrate dev


---

### 3. Configuração do Docker

Exemplo de Dockerfile para o *backend*:

Dockerfile
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]


---

### 4. Configuração do Rancher

- Criar cluster Kubernetes
- Configurar namespaces (separação dos ambientes)
- Definir recursos de CPU e Memória
- Configurar Load Balancers para o frontend/backend
- Estabelecer políticas de scaling automático

---

## 📁 Estrutura de Pastas do Projeto

bash
├── frontend/
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas principais
│   │   ├── services/      # Comunicação com API
│   │   └── store/         # Gerenciamento de estado
├── backend/
│   ├── src/
│   │   ├── modules/       # Módulos (Ex: Auth, Pedido, Pizza)
│   │   ├── controllers/   # Controllers das rotas
│   │   ├── services/      # Lógicas de negócio
│   │   └── prisma/        # Configurações Prisma ORM
└── k8s/
    ├── deployments/       # Deployments YAML
    ├── services/          # Services YAML
    └── configmaps/        # ConfigMaps YAML

