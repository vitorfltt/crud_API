Feature: CRUD API

    # Scenario: Criar um novo usuário com sucesso
    #     Given que eu tenha os dados necessários para criar um novo usuário
    #     When eu faço uma requisição POST para /usuarios com esses dados
    #     Then um novo usuário é criado com sucesso

    Scenario: Tentar criar um novo usuário com um email que já está em uso
        Given que eu tente criar um usuário com o email ja existente
        When eu faço uma requisição POST para /usuarios com esse email entre os dados
        Then a API retorna um status 400 e mensagem de email ja existente

    Scenario: Consultar informações de um usuário existente
        Given que eu tenho o ID de um usuário existente
        When eu faço uma requisição GET para o id do usuário
        Then a API retorna um status 200 e as informações do usuário no corpo da resposta
    
    Scenario: Atualizar um usuário existente com sucesso
        Given que eu tenho o ID e os novos dados de um usuário existente
        When eu faço uma requisição PUT para o id especifico e com os novos dados
        Then o usuário é atualizado com sucesso retornando status 200 e mensagem de sucesso

    Scenario: Deletar um usuário existente com sucesso
        Given que eu tenho o ID de um usuário que ja existe
        When eu faço uma requisição DELETE para o id especifico
        Then o usuário é deletado com sucesso e retorna status 204

    Scenario: Tentar ler um usuário que não existe
        Given que eu tenho um ID que não existe no sistema
        When eu faço uma requisição GET para o id
        Then a API retorna um status 400

    Scenario: Tentar atualizar um usuário que não existe
        Given que eu tenho um ID que não existe
        When eu faço uma requisição PUT para o id
        Then a API retorna um status 201

    Scenario: Tentar deletar um usuário que não existe
        Given que eu tenho um ID de usuário que não existe no sistema
        When eu faço uma requisição DELETE para esse id
        Then a API retorna um status 200
    

    


        