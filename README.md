# Para executar a aplicação localmente:

# Abra uma aba no terminal e digite o seguinte comando:
"npm run dev"

# Para configurar e executar o ambiente docker utilize as seguintes instruções

# Crie a build docker com o seguinte comando:
docker build -t projetodockerfile .

# Após finalizar a build, execute o docker file com o seguinte comando:
docker run -p 80:80 projetodockerfile

# Com o ambiente docker pronto abra o aplicativo colocando no navegador o endereço
localhost:80

-------------------------------------------------------------------------------------

# Para testar a aplicação: 

 # Cenário: Buscar endereço válido
    Dado que é informado o CEP "01001-000"
    Quando se é clicado em buscar
    Então o endereço "Praça da Sé" deve ser exibido

 # Cenário: Buscar endereço inválido
    Dado que é informado o CEP diferente de '01001-000'
    Quando se é clicado em buscar
    Então a mensagem "Nada encontrado" deve ser exibida

-------------------------------------------------------------------------------------


# Sobre a estrutura de pastas e arquivos

A estrutuda do projeto foi feita de modo que melhorasse a legibilidade, procurando facilitar no entendimento e procura de pastas e arquivos. Além de ser destinada, também, ser amigavel para que, se necessário, sejam feitas alterações e/ou adições de novas funcionalidades.