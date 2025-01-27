Feature: Buscar endereço por CEP

  Cenário: Buscar endereço válido
    Dado que é informado o CEP "01001-000"
    Quando se é clicado em buscar
    Então o endereço "Praça da Sé" deve ser exibido

  Cenário: Buscar endereço inválido
    Dado que é informado o CEP diferente de '01001-000'
    Quando se é clicado em buscar
    Então a mensagem "Nada encontrado" deve ser exibida
