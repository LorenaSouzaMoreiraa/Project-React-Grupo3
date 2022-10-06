# Grupo 3
*Lorena Souza Moreira & Marco Antônio Dias Cunha*

## Resumo

Gerenciamento de times no qual é necessário criar uma lista de times,
cada um com uma lista de jogadores. 

    1. Crud de Times
        - Nome;
        - Ano de criação;
        - Esporte;
        - Dono;
        - Verba mensal recebida;
        - Cidade de origem;
        - Quantidade de jogadores cadastrados;
        - Total de salários dos jogadores;

    2. Crud de Jogador
        - Nome;
        - Idade;
        - Ano que entrou no time;
        - Número da camisa;
        - Peso;
        - Altura;
        - Salário

    3. Gerenciamento
        - Criar time;
        - Criar/adicionar jogador;
        - Apagar time;
        - Apagar jogador;
        - Alterar dados de um time;
        - Alterar dados de um jogador;
        - Extra: buscar jogador

## Cronograma

Data   | Desenvolvimento
--------- | ------
05/09 | - Reunião geral de apresentação do desafio com a diretoria e o "cliente"
07/09 | - Criação do repósitorio no Github e iniciação do projeto React
09/09 | - Reunião com todos os membros do grupo, dicussão de do projeto e divisão de tarefas.  
12/09 | - Envio de convites para todos os membros do grupo
12 a 19/09 | - Tentativas de contato do cliente e perguntas sobre a identidade visual ao mesmo
20 a 31/09| - Saída dos membros Debóra e Gustavo, gerente de projeto
01 a 05| - Saída do membro Ramon e comunicação ao orientador, André, da situação do grupo.

### Divisão inicial de tarefas
Membro   | Tarefa
--------- | ------
Gustavo | Front-end do time (Criação do formulário e validação dos campos)
Marco | Back-end do time (funções de CRUD)
Débora | Front-end do jogador (Criação do formulário e validação dos campos)
Ramom | Back-end do jogador (funções de CRUD)
Lorena | Criação do arquivo json, tabela de listagem de jogadores e times 

Achavamos que ainda seria necessário criar uma pagina home em html e css com o relatório, por isso está no repositório, mas depois de conversar com o orientador foi excluído a necessidade do mesmo podendo ser realizado no README.md

### Desenvolvimento

Não havia rumores de efetiva saída dos membros até a notificação dos mesmo de forma justificada no grupo, feito com dialógo e aviso aos membros com muito respeito. Contudo, foi uma saída tardia além da saída do próprio gerente. Então até a saída dos mesmo, a parte designada era dos mesmos não tendo menção dos outros membros a tomar esta responsabilidade para si, compreensível. 

## Desenvolvimento


### Protótipos

O prototipo foi feito no Figma compartilhado com os membros. Foi feito pela integrante Lorena devido a saída dos outros. Clique [aqui]() para acessar o protótipo.

- Tela de Login
![Login](./public/assets/Desktop%20-%201.png)

A proposta incial era ter um usuario padrão para barrar acesso aos formulários de cadastro. Sendo assim todos poderiam usar mas apenas usuários autenticados poderiam realizar alterações.
  - Tela de listagem de jogadores e times 

A mudança de conteúdo acontece atraves de tabs. As tabelas são componentes que recebem objetos objetos do tipo time e jogador. Isso ocorre pensando no futuro caso o botão de pesquisar funcione para passagem da filtragem de resultado.
  
![Jogadores](./public/assets/Desktop%20-%202.png)

![Times](./public/assets/Desktop%20-%203.png)

Os botões de adicionar novo vão para o formulário para registro do objeto, jogador e time, para o conteúdo da respectiva tab.
![CRUD de jogador](./public/assets/Frame%201.png)

![CRUD de time](./public/assets/Frame%202.png)

O contrato de um time e jogador com as informações era pra surgir no botão adiconar no forms. O form tambem serviria pra edição já que ele seria povoado com as informações.

- Tela 404
  
Tela para onde iria caso colocasse uma rota errada
![404](./public/assets/Desktop%20-%204.png)

### "Banco de dados"

Foi feito através de um arquivo json escrito a mão(db,json) que era consumido. As entidades são jogador, time, cidade, esportes e time_jogador(o contrato). Todos tem o campo ativo para verificar se o objeto foi deletado ou não. Além disso a linkagem entre as entidades é feito pelo através da id dos objetos.

As funções se encontram dentro da pasta database.

### Conclusão

Por fim, muitas coisas ficaram estáticas (sendo consumidas do db.json), como o usuário que não pode ser autenticado.

*Funções finais*

Membro   | Função
--------- | -----
Lorena | Criação do repositório e arquivo json, desing no figma e criação das telas, Criação da tabelas de listagem e funções da mesma
Marco | Formulário e validação de time e jogador
