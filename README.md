## Iniciando o Projeto

Projeto simples simulando o Checkout Pro do mercado pago.

## Objetivo

Efetuar o Code Review da Feature Checkout e indicar possiveis melhorias no código.

### Pré requisitos

- NodeJs LTS
- NPM@7 ou Yarn@1
- Typescript/Javascript
- NextJs
- ReactJs
- styled-components
- storybook

### Padrão de Arquitetura

- Functional Component
- CSS in JS com styled-components
- Storybook com exemplo básico do componente
- Test Unitário e Cobertura minima de 80%

#### Significado dos sufixos nos nomes de arquivo

- *.stories - Indica que faz parte do storybook, documentação do componente
- *.test - Indica que é um arquivo de teste unitário
- *.styles - Indica que é um arquivo de estilo do componente
- *.d.ts - Indica que é um arquivo declarativo de tipos (Typescript)
- *.ts - Indica que é um arquivo typescript que pode ser funções utilitarias e genéricas.
- *.tsx - Indica que é um arquivo typescript necessáriamente que no seu padrão retorna um elemento JSX.

### Rodando o projeto

- Use o seguinte comando para instalar as dependencias:
```sh
yarn
# ou
npm install
```

- Use o seguinte comando para rodar o ambiente de desenvolvimento:
```sh
yarn dev
# ou
npm run dev
```

- Use o seguinte comando para transpilar e construir o projeto:
```sh
yarn build
# ou
npm run build
```

### Teste Regressivo

Dados para testes regressivos e integrados.

#### Cartões de teste

| Cartão           | Número              | Código de segurança | Data de vencimento |
| ---------------- | ------------------- | ------------------- | ------------------ |
| Mastercard       | 5031 4332 1540 6351 | 123                 | 11/25              |
| Visa             | 4235 6477 2802 5682 | 123                 | 11/25              |
| American Express | 3753 651535 56885   | 1234                | 11/25              |

Para testar diferentes resultados de pagamento, preencha o dado que quiser no nome do titular do cartão:

* APRO: Pagamento aprovado.
* CONT: Pagamento pendente.
* OTHE: Recusado por erro geral.
* CALL: Recusado com validação para autorizar.
* FUND: Recusado por quantia insuficiente.
* SECU: Recusado por código de segurança inválido.
* EXPI: Recusado por problema com a data de vencimento.
* FORM: Recusado por erro no formulário.
