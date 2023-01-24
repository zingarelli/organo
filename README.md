# Organo

[Ver esta página em português](#detalhes-do-projeto)

Set up an organizational chart of your company. Create teams and add team members. Pick a color for each team and favorite/unfavorite members.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Organograma de empresa de tecnologia**
| :label: Tecnologias | React
| :rocket: URL         | https://organo-ruddy-nine.vercel.app
| :fire: Curso     | https://www.alura.com.br/curso-online-react-desenvolvendo-javascript

![](https://user-images.githubusercontent.com/19349339/212753062-f3894d49-cc1f-412e-95d6-1ea9115b1b69.png#vitrinedev)

## Credits

This project was developed in React courses from [Alura](https://www.alura.com.br) (in Portuguese):

- ["React: desenvolvendo com JavaScript"](https://www.alura.com.br/curso-online-react-desenvolvendo-javascript) (React: coding with JavaScript).

- ["React: como os componentes funcionam"](https://cursos.alura.com.br/course/react-componentes-funcionam) (React: how components work).

Instructors: 

- **[Paulo Silveira](https://www.linkedin.com/in/paulosilveira/)**

- **[Vinicios Neves](https://www.linkedin.com/in/vinny-neves/)**

- **[Luiz Fernando Ribeiro](https://www.linkedin.com/in/lfrprazeres/)**

## Project Details

You can [view this application online here](https://organo-ruddy-nine.vercel.app).

This a project developed using React, in which is possible to register employees and organize them as members of a team. There are some technology teams by default, but it's also possible to create new ones. The result is an organization chart (hence the name Organo). 

Organo has two main parts. The first one is composed of two forms: one to create a new team (with a name and color) and the other to create a new team member (with name, role, URL for an image and a dropdown box to select his/her team). The second part is a view of the company as an organizational chart: a series of sections, each with the name of a team and its members. Each team has its own background color (which you can change dynamically) and its members are shown as cards, with their picture, name and role. It's possible to remove a team member and also favorite/unfavorite him/her.

When you click in the button "Criar card" (create card), the newly created member is show automatically in the appropriate team gallery. Teams with zero members are not visible - when the first person is added, the corresponding section is then shown. When you click in the button "Criar um novo time" (create a new team), the new team is added to the dropdown box in the other form.

**Forms (fields and text are in Portuguese)**

![two forms, one to register a person (name, role, image and a dropdown to select a team) and other to register a team (name and color)](https://user-images.githubusercontent.com/19349339/214319452-52d30f97-008e-4332-a3b9-e35d6ce8a029.png)

**Gallery of teams and its members (in Portuguese)**

![gif show a list of teams and its members](https://user-images.githubusercontent.com/19349339/214321691-c0ff70ce-054f-4322-8718-d5e97f0a8e3c.gif)

**User interactions (change the color of a team, remove and favorite/unfavorite a member)**

![gif changing the color of a team, removing a team member and favoriting/unfavoriting a team member](https://user-images.githubusercontent.com/19349339/214323754-077dadbc-6fb3-4081-a9bf-3a856739503b.gif)

# Development

The project was developed step by step throughout the courses. Alura's Design Team provided a [Figma file](https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?node-id=134%3A128) with layouts and a style guide. From this Figma, we've developed the components to create the app using React.

Components were grouped in a folder in `/src/components`, each component having its own folder containing a JS and a CSS file. 

Images for this project are in the `/public/images` folder.

The app also uses the following packages:

- [React Icons](https://react-icons.github.io/react-icons), to use some icons (close and hearts) in the `Member` component;

- [hex-to-rgba](https://www.npmjs.com/package/hex-to-rgba), to convert a hexadecimal color value to its corresponding RGBA value (with an alpha channel to change opacity). This color is used as a secondary color in each team section;

- [UUID](https://www.npmjs.com/package/uuid), to generate an unique ID to every team and team member created.

## Components

The following function components were created.

### Banner

It consists only of an image, placed in the top of the application. Image source is hard-coded.

### InputField

This component shows a label and a text field by default. It's possible to pass via `props` the name of the label, the type of the input, a boolean indicating if this input is required, a text for the placeholder, an initial value and a function to handle the `onChange` event.

### Dropdown

A select component, used in the project to select a team. A list with the available teams is received via `props`, as well as other options similar to `InputField`.

### Button

Returns a button with some styles. Button's text is received via `props.children`.

### Form

This component returns two forms: one to create a team member and other to create a team. It uses the `InputField`, `Dropdown` and `Button` components. Each field is controlled using the `useState` hook. A list with the teams is received via `props` (and forwarded to  `DropDown` component). It also receives functions to handle `onSubmit` events of each form.

### Member

This is the card to show a registered member. Member's data, a background color for the card, and delete and favorite functions are received via `props`.

### Team

This component has a header and a div listing members of a team (a list of `Member` components). It also has a color input to change the color of the team. Team's data, a list of members and delete, color change and favorite functions are received via `props`. We iterate the list of members and pass its data to each `Member` component.

### Footer

Footer shows links for social media, Organo's logo and a text. Path to logo's image and URL for the link, as well as the text, are all hard-coded.

### App

The main component for this application. It shows the `Banner`, the `Form`, a list of `Team` and the `Footer` components. This component has initial data to start the app with some teams and team members. State variables control the list of teams and team members in order to rerender the necessary sections. It also has functions to handle most of the user's interaction (add/delete and favorite/unfavorite a member, add a team and change its color). These state variables and functions are passed to the other components as needed.

# Installation

This project was bootstrapped with Create React App, using Node.js (version v16.15.1) and npm (version 8.11.0). You need Node.js and npm installed in order to run this project.

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

    npm install

After that, you can run the app in the development mode with the following command:

    npm start

The app will run at http://localhost:3000.

---

# Detalhes do projeto

Você pode [ver o projeto online aqui](https://organo-ruddy-nine.vercel.app).

Este é um projeto desenvolvido em React, em que é possível cadastrar as pessoas colaboradoras de uma empresa e organizá-las como membros de um time. Por padrão, já estão cadastrados alguns times de tecnologia, mas é possível criar novos. O resultado é um organograma da empresa, o Organo.

O projeto consiste de duas partes. A primeira é composta de dois formulários: um para criar um novo time (com um nome e uma cor) e outro para criar um novo membro (com nome, cargo, URL para uma imagem e um menu para selecionar seu time). A segunda parte é uma visão da empresa como um mapa organizacional: uma série de seções, cada uma com o nome de um time e seus membros. Cada time possui uma cor de fundo própria (que pode ser alterada dinamicamente) e as pessoas são exibidas em formato de card, contendo sua imagem, nome e cargo. É possível remover uma pessoa e também favoritá-la ou desfavoritá-la.

Ao clicar no botão "Criar card" do formulário, a pessoa cadastrada  é exibida automaticamente no time que pertence. Não são exibidos os times que não possuem nenhum membro - ao cadastrar a primeira pessoa, a seção é exibida. Ao clicar no botão "Criar um novo time", este time é adicionado ao menu de seleção do outro formulário.

**Formulários de cadastro**

![dois formulários: um para cadastrar uma pessoa (nome, cargo, imagem e menu de seleção de time) e outro para cadastrar um time (nome e cor)](https://user-images.githubusercontent.com/19349339/214319452-52d30f97-008e-4332-a3b9-e35d6ce8a029.png)

**Galeria de times e membros**

![gif mostrando os times e respectivos membros](https://user-images.githubusercontent.com/19349339/214321691-c0ff70ce-054f-4322-8718-d5e97f0a8e3c.gif)

**Interações do usuário (alterar a cor de um time, remover e favoritar/desfavoritar um membro)**

![gif alterando a cor de um time, removendo um membro e favoritando/desfavoritando um membro](https://user-images.githubusercontent.com/19349339/214323754-077dadbc-6fb3-4081-a9bf-3a856739503b.gif)

## Créditos

Este projeto foi desenvolvido nos cursos de React oferecidos pela [Alura](https://www.alura.com.br): 

- ["React: desenvolvendo com JavaScript"](https://www.alura.com.br/curso-online-react-desenvolvendo-javascript);

- ["React: como os componentes funcionam"](https://cursos.alura.com.br/course/react-componentes-funcionam).

Instrutores: 

- **[Paulo Silveira](https://www.linkedin.com/in/paulosilveira/)**

- **[Vinicios Neves](https://www.linkedin.com/in/vinny-neves/)**

- **[Luiz Fernando Ribeiro](https://www.linkedin.com/in/lfrprazeres/)**

# Desenvolvimento

O projeto foi desenvolvido passo a passo durante os cursos. O time de Design da Alura disponibilizou [um arquivo Figma](https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?node-id=134%3A128) com os layouts e guias de estilo. A partir deste Figma, desenvolvemos os componentes para construir a aplicação em React.

Os componentes foram agrupados em uma pasta em `/src/components`, cada um com sua própria pasta contendo um arquivo JS e um CSS. 

As imagens do projeto estão armazenadas na pasta `/public/images`.

A aplicação também utiliza os seguintes pacotes:

- [React Icons](https://react-icons.github.io/react-icons), para usar alguns ícones (fechar e coração) no componente `Member`;

- [hex-to-rgba](https://www.npmjs.com/package/hex-to-rgba), para converter um valor de cor em hexadecimal para seu correspondente em RGBA (com um canal alpha para mudar a opacidade). Essa cor é usada como cor de fundo secundária da seção de cada time;

- [UUID](https://www.npmjs.com/package/uuid), para gerar ids únicas para cada time e pessoa criada.


## Componentes

Os seguintes "function components" foram criados.

### Banner

Consiste apenas de uma imagem que fica no topo da aplicação. O caminho da imagem se encontra hard-coded no componente.

### InputField

Componente que mostra uma label e um campo de texto por padrão. É possível passar via `props` o nome da label, o tipo do input, indicação se é um campo obrigatório, o placeholder para o campo de texto, um valor inicial para o campo e uma função para tratar o evento de `onChange`.

### Dropdown

Componente de select, utilizado no projeto para selecionar o time. A lista de times é passada via `props`, bem como outras opções semelhantes a `InputField`.

### Button

Retorna um botão estilizado. O texto do botão é recebido via `props.children`.

### Form

Este componente retorna dois formulários: um para criar um membro de um time e outro para criar um novo time. Ele utiliza os componentes `InputField`, `Dropdown` e `Button`. Cada um destes campos é controlado utilizando o `useState()`. São recebidos via `props` a lista com os times (repassada para  o componente `DropDown`) e funções para tratar o evento de `onSubmit` de cada formulário.

### Member

Card para exibir uma pessoa cadastrada. Os dados da pessoa, uma cor de background para o card, e funções para remover e favoritar são recebidos via `props`.

### Team

Possui um cabeçalho e uma div listando os membros de um time (componentes `Member`). Ele também possui um input de cor para que se possa mudar a cor de fundo do time. Dados do time, a lista de membros, e funções para alterar a cor e favoritar membros são recebidos via `props`. A lista de membros é percorrida e suas informações são passadas para o componente `Member`.

### Footer

Rodapé da página, exibindo links para redes sociais, o logo da Organo e um texto. O caminho para o logo e URL dos links, bem como o texto, estão hard-coded.

### App

Componente principal da aplicação que irá exibir o `Banner`, o `Form`, uma lista de `Team` e o `Footer`. Este componente possui dados iniciais para que a aplicação seja carregada com alguns times e membros. Variáveis de estado controlam a lista de times e de membros para renderizar as seções necessárias. Ele também possui funções para lidar com a maior parte das interações do usuário (adicionar/remover e favoritar/desfavoritar uma pessoa, adicionar um time e mudar sua cor). Por meio dessas variáveis de estado e funções, `App` repassa as props necessárias aos outros componentes.

# Instalação

O projeto foi criado com o Create React App, utilizando Node.js (versão v16.15.1) e npm (versão 8.11.0). É necessário possuir ambos instalados em sua máquina para rodar a aplicação.

Após clonar/baixar o projeto, abra um terminal, navegue até a pasta do projeto e rode o seguinte comando para instalar todas as dependências necessárias

    npm install

Após isso, você pode rodar a aplicação em modo de desenvolvimento com o seguinte comando: 

    npm start

A aplicação irá rodar no endereço http://localhost:3000.
