# Cadastro de carro

**RF** 
 - Deve ser possível cadastrar um novo carro.

**RN**
 - Não deve ser possível cadastrar um carro com uma placa já existente.
 - O carro deve ser cadastrado com disponibilidade verdadeira, por padrão.
 - O usuário deve estar logado.
 - O usuário responsável pelo cadastro deve ser administrador.

# Listagem de carros

**RF** 
 - Deve ser possível listar todos os carros disponíveis.
 - Deve ser possível listar todos os carros disponíveis, filtrando pelo nome da categoria.
 - Deve ser possível listar todos os carros disponíveis, filtrando pelo nome da marca.
 - Deve ser possível listar todos os carros disponíveis, filtrando pelo nome do carro.

**RN**
 - O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF** 
 - Deve ser possível cadastrar uma especificação para um carro.

**RN**
 - Não deve ser possível cadastrar uma especificação para um carro não existente.
 - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
 - O usuário deve estar logado.
 - O usuário responsável pelo cadastro deve ser administrador.


# Cadastro de imagens do carro

**RF** 
 - Deve ser possível cadastrar a imagem do carro.

**RNF** 
 - Utilizar o multer para upload dos arquivos.

**RN**
 - O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
 - O usuário deve estar logado.
 - O usuário responsável pelo cadastro deve ser administrador.


# Aluguel de carro

**RF** 
 - Deve ser possível cadastrar um aluguel.

**RN**
 - O aluguel deve ter duraçãoi mínima de 24 horas.
 - Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel em aberto para o mesmo usuário.
 - Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel em aberto para o mesmo carro.
 - Ao realizar o aluguel, o status do carro deve ser marcado como indisponível.
 - O usuário deve estar logado na aplicação.


# Devolução do carro

**RF** 
 - Deve ser possível realizar a devolução de um carro.

**RN**
 - Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
 - Ao realizar a devolução, o carr odeverá ser liberado para outro aluguel.
 - Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
 - Ao realizar a devolução, deverá ser calculado o total do aluguél.
 - Caso o horário de devolução seka superior ao horário rpevisto da entrega, deverá ser cobrado multa proporcional ao dias de atraso.
 - Caso haja multa, deverá ser somado ao total do aluguel.


# Listagem de Aligueis para usuário

**RF** 
 - Deve ser possível realizar a busca de todos os alugueis para o usuário.

**RN**
 - O usuário deve estar logado na aplicação.


# Recuperar Senha

**RF** 
 - Deve ser possível o usuário recuperar a senha informado o e-mail.
 - O usuário deve receber um e-maio com o passo a passo para a recuperação da senha.
 - O usuário deve conseguir inserir uma nova senha.

**RN**
 - O usuário precisa informar uma nova senha.
 - O link enviado para a recuperação deve expirar em 3 horas.


