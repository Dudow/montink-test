## Como rodar localmente

Todo

## Deploy

Todo

## Funcionalidades

- [x] Visualização de imagem principal com miniaturas clicáveis
- [x] Seleção dinâmica de variantes (cor e tamanho)
- [x] Verificação de CEP com integração à API [ViaCEP](https://viacep.com.br/)
- [x] Interface responsiva e inspirada na Nike
- [ ] Persistência temporária (15 minutos) de seleções e dados buscados

## Explicação das escolhas

- Eu faria a persistência das opções selecionadas por query params, para que assim, quando fosse compartilhada, mantivesse a mesma seleção. Porém, a descrição é clara sobre a persistência temporária.

- Para fins de simplicidade, o projeto foi desenvolvido em uma única branch (`main`). Em um ambiente profissional, utilizaria uma estrutura com `develop` e branches de funcionalidades (`feature/*`) para melhor organização e controle de versão.

## Produto utilizado

O produto é real e pode ser encontrado em: [Tênis Nike Air Max SC Masculino](https://www.nike.com.br/tenis-nike-air-max-sc-masculino-011224.html?cor=16)
