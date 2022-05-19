# technical-test-arezzo

## 🔥 O desafio

O objetivo desse desafio é criar uma pequena lojinha de [NFTs](https://www.google.com/search?q=O+que+%C3%A9+um+NFT%3F) onde teremos uma listagem dos NFTs disponíveis para compra e a possibilidade de adicioná-los a uma carteira.

### ⚙ Rodando a aplicação:
- Clone o projeto na sua máquina.
- Instale as dependências do projeto (npm install)
- Após instaladas as dependências, rode o frontend com o comando 'npm run dev'
- Rode o JSON Server com o comando 'npm run server'

### ➡️ Requisitos do software:
- Ao acessar a home da aplicação o usuário deve ver uma listagem dos NFTs disponíveis para compra.
- O usuário pode adicionar um ou mais NFTs a sua carteira. 
- Um NFT não pode ser adicionado mais de uma vez a carteira do usuário.
- Na listagem, cada NFT deve apresentar uma imagem, a coleção a qual ele pertence, o seu ID e o seu preço.
- No topo de todas as telas deve ser apresentado um Header. 
- O Header deve apresentar o Logo da loja e um link de acesso a carteira com um contador da quantidade de itens presentes nela.
- Ao clicar no logo da loja o usuário deve ser redirecionado para a Home. 
- Ao clicar na carteira o usuário deve ser redirecionado para a sua carteira.
- Quando a quantidade de itens na carteira do usuário for atualizada o contador no header deve ser atualizado também.
- Ao acessar a sua carteira o usuário deve visualizar os NFTs adicionados a ela.
- Na listagem de NFTs da carteira, cada NFT deve apresentar uma imagem, a coleção a qual ele pertence, seu ID, preço e um botão para removê-lo da carteira. 
- Ao pressionar o botão de remover o NFT da carteira o NFT deve ser removido e a listagem atualizada.
- A carteira deve também apresentar um resumo dos NFTs que estão sendo comprados.
- O resumo deve apresentar ID, preço em Ether e em Reais de cada NFT. Essa conversão pode ser feita levando em conta o [preço de um Ether](https://www.google.com/search?q=Ethereum+to+Real) no momento do desenvolvimento do desafio.
- O resumo deve apresentar o valor total, em Ether e Reais, da soma de todos os NFTs presentes na carteira.
- Ao recarregar qualquer página os itens presentes na carteira do usuário devem ser persistidos.

