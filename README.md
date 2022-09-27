# FrontStockBag-Trainee Test

Este projeto foi gerado pelo Angular (https://github.com/angular/angular-cli) versão 14.2.3.

Você pode acessar e utilizar o site hospedado em: https://taupe-bombolone-552d0d.netlify.app/!

# API

A API (fake) foi criada por meio do json-server, que foi utilizada como uma espécie de banco de dados, salvando todos os nomes dos Sites, e Urls, diferenciando cada um por ID. A fake API pode ser vista no diretório https://github.com/RaphaelGonP/APIFile.

# Interface

A interface foi criada utilizando a ferramenta Angular CLI, onde foi feito o template do forms e da tabela de listagem utilizando html, scss, e typescript. A navegação da tela foi criada por rotas (router), onde também foi enviados dados para edição de Links. A comunicação do Front-End com a API foi feita por service do Angular, onde foram criados métodos principais: GET, POST, PUT e DELETE.

Assim, através da interface é possível adicionar, editar, e excluir as urls. Para essa comunicação ser possível, criei uma interface, onde poderia usa-lá como objeto em qualquer parte do código, tanto no forms para leitura dos dados, como no service para receber as informações no formato correto (id, nome, url).

Os botões, animações e ícones foram importados através de bibliotecas pré-definidas do Angular (mat-icon, mat-spinner, etc).

O ID dos Sites foi usado para editar as urls, quando clicamos no botão de editar ou de adicionar ele vai para o próprio forms de entrada onde ela analisa se existe um ID, se existir, ele vai puxar (get) os dados dessa url existente pelo ID dela, e você poderá editar, caso não exista ela apenas auto-incrementa +1 e você irá criar um novo site salvo.

# Automatização

Infelizmente não consegui utilizar o webcrowler no meu projeto.

# Hospedagem

A hospedagem foi dividida em duas etapas, e em dois hosts diferentes. 

A primeira parte da programação (Front-End), foi hospedada utilizando um site que disponibiliza a ferramenta de forma gratuita : https://www.netlify.com/. O site fica no ar de forma permanente e todas as alterações que são feitas no github são atualizadas automaticamente.
hospedagem do Site(front-end) : https://taupe-bombolone-552d0d.netlify.app.
Para isso, foi preciso executar a Build do Projeto Angular e assim executar o Deploy na plataforma.

A segunda etapa foi hospedar o back-end, o API Fake, utilizei outro site, que também disponibilizou a ferramenta de forma gratuita : https://dashboard.heroku.com. O site tambem manter hosteando sempre e igual ao netlify, todas as alterações feitas no github são atualizadas de forma automática para o site. Esse site é apenas para a troca de informação, quando entramos nele podemos ver de forma mais crua as informações das urls presentes no momento, que são ID, Nome, E URL.
hospedagem do API Json : https://api-traineejson.herokuapp.com/sites.

# Rodando o site de forma Local

Caso queira rodar o site de forma local, basta fazer o download do API que irei disponibilizar no final deste tópico, abrir a pasta do Fake API e digitar no terminal de comandos 'run npm start'. Logo em seguida, faça o download do front-end que também deixarei disponível.

Download API Json:https://github.com/RaphaelGonP/APITest

*Após baixar o API Json, você deve inicializar ele com o seguinte comando no terminal : run backend.
Download front end: https://github.com/RaphaelGonP/FrontTrainee

*Após baixar o front end, entre no diretório `main/src/app/sites/services/sites.service.ts`, vá até a linha 13, e altere a variável API de 'https://api-traineejson.herokuapp.com/sites' para 'localhost:3000'.

*Logo em seguida, com o API Json aberto em outra janela, digite no terminal : npm start

*Entre no site que o terminal vai informar.

# Projeto

O site foi projetado com a intenção de guardar urls, site autoexplicativo com botões que deixam claro sua funcionalidade.

# Processo de Criação e Obstáculos

Apesar de ter sido feito pelo angular majoritariamente, o projeto também precisou da utilização de outras ferramentas, como NODEJS, GIT do github, além das plataformas de hospedagem. Durante todo o processo foi necessário sempre editar e inserir nos arquivos packets para soluções de conflitos e alterações necessárias para por exemplo fazer a build do projeto.
De início não consegui resolver fazer a conexão entre a API e a parte Front do site quando eles estavam hospedados nas plataformas, o host onde o API está hospedado não permitia que a interface fizesse a leitura (get), e nem que adicione (post) alguma url, porém este foi um erro que apareceu ao hospedar o site.

