# FrontStockBag-Trainee Test

Este projeto foi gerado pelo Angular (https://github.com/angular/angular-cli) versão 14.2.3.

# API

Foi criada uma API fake, que foi utilizada como uma espécie de banco de dados, salvando todos os nomes dos Sites, e Urls, diferenciando cada um por ID.

# Interface

O ID dos Sites foi usado para editar as urls, quando clicamos no botão de editar ou de adicionar ele vai para uma página onde ela analisa se onde você clicou existe um ID ou se está somando mais um, se existe ele vai puxar os dados dessa url existente pelo ID dela, e você podera editar, caso não exista ela apenas somará +1 e você irá criar um novo site salvo.

# Automatização

Infelizmente não consegui utilizar o webcrowler no meu projeto.

# Hospedagem

Digite no terminal 'run ng serve' para iniciar o programa, Ele por padrão será iniciado no `http:localhost:4200`. A aplicação será atualizada de forma automática quando você altera os arquivos.

Essa parte da programação (Front), está hospedada no site `https://taupe-bombolone-552d0d.netlify.app`.

Para o funcionamento completo do site, foi necessário criar uma API Fake, utilizando Json, ela está hospedada na seguinte url `https://api-traineejson.herokuapp.com/sites`.


# Erro

O único erro que não consegui resolver foi a conexão entre a API e a parte Front do site, onde por algum motivo que acredito ser de segurança, o host onde o API está hospedado não permite que a interface faça leitura (get), e nem que adicione (post) alguma url, porém este foi um erro que apareceu ao hospedar o site, se iniciarmos a API com `npm run start` e trocarmos a rota de acesso do front para `http:localhost:3000`, podemos ver que o site funciona 100%, tanto em adicionar, remover e editar links.

# Projeto

O site foi projetado com a intenção de guardar urls, site autoexplicativo com botões que deixam claro sua funcionalidade.

