Feature: Buscar endereço por CEP

  Cenário: Buscar endereço válido
    Dado que eu informo o CEP "01001-000"
    Quando eu clico em buscar
    Então o endereço "Praça da Sé" deve ser exibido

  Cenário: Buscar endereço inválido
    Dado que eu informo o CEP diferente de '01001-000'
    Quando eu clico em buscar
    Então a mensagem "CEP não encontrado" deve ser exibida
