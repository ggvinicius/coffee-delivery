# Coffee Delivery

Este é um projeto de e-commerce de café, onde o usuário pode selecionar diferentes tipos de café, adicionar ao carrinho e preencher os dados para finalização da compra.

## Funcionalidades

- **Adicionar Café ao Carrinho**: O usuário pode adicionar um café específico ao carrinho de compras.
- **Incrementar/Decrementar Quantidade**: Após adicionar um café ao carrinho, é possível incrementar ou decrementar a quantidade.
- **Remover Café**: O usuário pode remover um item específico do carrinho de compras.
- **Carrinho de Compras**: Exibe todos os itens adicionados ao carrinho, com seus respectivos preços e quantidades.
- **Preenchimento de Dados no Formulário**: O formulário de checkout permite que o usuário insira seus dados de entrega para finalizar a compra.

## Tecnologias Usadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router DOM**: Para navegação entre diferentes páginas do projeto.
- **React Hook Form**: Para o gerenciamento de formulários, com validação usando Zod.
- **Zod**: Biblioteca de validação de dados, usada para validar os dados inseridos pelo usuário no formulário.
- **Styled Components**: Para criar componentes estilizados de forma dinâmica.
- **Immer**: Para manipulação imutável do estado do carrinho de forma eficiente.
- **Phosphor Icons**: Para os ícones do aplicativo.
- **Vite**: Ferramenta de build e bundler para otimização e desenvolvimento rápido.

## Como Clonar e Rodar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório do projeto para a sua máquina local. Execute o comando abaixo:

```bash
git clone https://github.com/ggvinicius/coffee-delivery.git
```

### 2. Instalar as Dependências

Após clonar o repositório, navegue até a pasta do projeto e instale as dependências:

```bash
cd coffee-delivery
npm install
```

### 3. Rodar o Servidor de Desenvolvimento

Para rodar o servidor de desenvolvimento, use o comando:

```bash
npm run dev
```
A aplicação estará disponível em http://localhost:3000.

### 4. Rodar o Build

Para criar a versão otimizada do projeto, execute:

```bash
npm run build
```

### 5. Rodar o Preview

Após o build, você pode ver uma prévia da aplicação com:

```bash
npm run preview
```

## Scripts

- **dev**: Inicia o servidor de desenvolvimento com Vite.
- **build**: Compila o código com TypeScript e cria a versão de produção.
- **lint**: Executa o ESLint para análise de código.
- **preview**: Exibe uma prévia do build de produção.
