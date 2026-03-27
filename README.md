# PMESP Hub 🚔

> ⚠️ Projeto em desenvolvimento

Plataforma que estou criando para reunir tudo que um candidato precisa para o concurso da Polícia Militar de São Paulo — provas antigas, gabaritos, informações do edital e um guia prático do TAF.

## Por que estou fazendo esse projeto?

Quando comecei a pesquisar sobre o concurso da PMESP, percebi que as informações ficam espalhadas em vários sites diferentes. Decidi criar um lugar só onde qualquer candidato consegue acessar o que precisa de forma rápida e organizada.

Também estou usando esse projeto pra colocar em prática o que venho aprendendo de HTML, CSS e JavaScript. A ideia é ir evoluindo ele conforme avanço nos estudos — o próximo passo é migrar pra React, componentizando as páginas e melhorando a navegação com rotas dinâmicas.

## O que já tem no site

- **Edital** — informações sobre o edital do concurso
- **Materiais** — conteúdos de estudo organizados
- **Provas e Gabaritos** — acervo de provas anteriores pra Soldado e Oficial, com download
- **Guia do TAF** — explicação dos exercícios, como executar corretamente e os critérios que a banca usa pra avaliar (barra fixa, corrida, etc.)

Na parte do TAF, o usuário escolhe sexo e cargo (Soldado ou Oficial) através de popups e é direcionado pro conteúdo certo.

## Tecnologias

- HTML5
- CSS3 (Flexbox, transições, modais)
- JavaScript (manipulação do DOM, Dialog API)
- Google Fonts (Montserrat)

## Próximos passos

- Finalizar as páginas que ainda estão em construção (contato, ajuda, materiais)
- Migrar para **React** com componentes reutilizáveis (navbar, cards, modais)
- Implementar **React Router** pra navegação entre páginas sem recarregar
- Substituir os dialogs nativos por componentes de modal próprios
- Melhorar a responsividade pra mobile

## Estrutura

```
PmespHub/
├── assets/
│   ├── docs/       # provas e gabaritos em PDF
│   └── img/        # imagens e ícones
├── css/
│   ├── style.css   # estilos globais
│   ├── home.css    # estilos das páginas
│   └── components.css
├── js/
│   └── main.js     # lógica dos modais e navegação
└── pages/
    ├── index.html   # home
    ├── provas.html   # provas e gabaritos
    ├── taf.html      # guia do TAF
    ├── barra.html    # exercício: barra fixa
    └── ...           # demais páginas
```

## Como rodar

```bash
git clone https://github.com/gaalvarengadev/PmespHub.git
```

Abre o `pages/index.html` com o Live Server no VS Code e pronto.

## Aviso

O conteúdo desse site é educativo. Não substitui orientação profissional — se for treinar pro TAF, procure acompanhamento médico.

## Autor

Gabriel de Alvarenga — [LinkedIn](https://www.linkedin.com/in/devalvarenga/) · [GitHub](https://github.com/gaalvarengadev)
