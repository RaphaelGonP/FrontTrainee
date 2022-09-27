# FrontStockBag-Trainee Test

Este projeto foi gerado pelo Angular (https://github.com/angular/angular-cli) versão 14.2.3.

# API

Foi criada uma API fake utilizando o json-server, que foi utilizada como uma espécie de banco de dados, salvando todos os nomes dos Sites, e Urls, diferenciando cada um por ID. A fake API pode ser vista no diretório `https://github.com/RaphaelGonP/APIFile`.

# Interface

A interface foi criada utilizando a ferramenta Angular CLI, onde foi feito o template utilizando html, scss, e typescript. Nela também foi criado o service para a comunicação com API.
Através da interface é possível adicionar, editar, e excluir as urls.

Os botões, animações e ícones foram importados através de bibliotecas pré-definidas do Angular (mat-icon, mat-spinner, etc).
Foram criadas rotas para navegação do site e transferência de informações.

O ID dos Sites foi usado para editar as urls, quando clicamos no botão de editar ou de adicionar ele vai para uma página onde ela analisa se onde você clicou existe um ID ou se está somando mais um, se existe ele vai puxar os dados dessa url existente pelo ID dela, e você podera editar, caso não exista ela apenas somará +1 e você irá criar um novo site salvo.

# Automatização

Infelizmente não consegui utilizar o webcrowler no meu projeto.

# Hospedagem

A hospedagem foi dividida em duas etapas, e em dois hosts diferentes. 

A primeira parte da programação (Front), foi hospedada utilizando um site que disponibiliza a ferramente de forma gratuita : https://www.netlify.com/. O site fica no ar de forma permanente e todas as alterações que são feitas no github são atualizadas automaticamente.
hospedagem do Site(front-end) : `https://taupe-bombolone-552d0d.netlify.app`.

A segunda etapa foi hospedar o back-end, o API Fake, utilizei outro site, que também disponibilizou a ferramenta de forma gratuita : https://dashboard.heroku.com. O site tambem manter hosteando sempre e igual ao netlify, todas as alterações feitas no github são atualizadas de forma automática para o site. Esse site é apenas para a troca de informação, quando entramos nele podemos ver de forma mais crua as informações das urls presentes no momento, que são ID, Nome, E URL.
hospedagem do API Json : `https://api-traineejson.herokuapp.com/sites`.

# Erro

O único erro que não consegui resolver foi a conexão entre a API e a parte Front do site, onde por algum motivo que acredito ser de segurança, o host onde o API está hospedado não permite que a interface faça leitura (get), e nem que adicione (post) alguma url, porém este foi um erro que apareceu ao hospedar o site, se iniciarmos a API com `npm run start` e trocarmos a rota de acesso do front para `http:localhost:3000`, podemos ver que o site funciona 100%, tanto em adicionar, remover e editar links.

# Rodando o site de forma Local

Caso queira rodar o site e conferir o funcionamento completo dele, basta fazer o download do API que irei disponibilizar no final deste tópico, abrir a pasta do Fake API e digitar no terminal de comandos 'run npm start'. Logo em seguida, faça o download do front-end que também deixarei disponível.

Download API Json:https://github.com/RaphaelGonP/APITest

*Após baixar o API Json, você deve inicializar ele com o seguinte comando no terminal : run backend.
Download front end: https://github.com/RaphaelGonP/FrontTrainee

*Após baixar o front end, entre no diretório `main/src/app/courses/services/courses.service.ts`, vá até a linha 13, e altere a variável API de 'https://api-traineejson.herokuapp.com/sites' para 'localhost:3000'.

*Logo em seguida, com o API Json aberto em outra janela, digite no terminal : npm start

*Entre no site que o terminal vai informar.

# Projeto

O site foi projetado com a intenção de guardar urls, site autoexplicativo com botões que deixam claro sua funcionalidade.

