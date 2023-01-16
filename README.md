# Organo

[Ver esta página em português](#detalhes-do-projeto)

Register your employees among the different technology teams of your company.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Organograma de empresa de tecnologia**
| :label: Tecnologias | React
| :rocket: URL         | https://organo-ruddy-nine.vercel.app
| :fire: Curso     | https://www.alura.com.br/curso-online-react-desenvolvendo-javascript

![](https://user-images.githubusercontent.com/19349339/212753062-f3894d49-cc1f-412e-95d6-1ea9115b1b69.png#vitrinedev)

## Credits

This project was developed in a React course from [Alura](https://www.alura.com.br), called ["React: desenvolvendo com JavaScript"](https://www.alura.com.br/curso-online-react-desenvolvendo-javascript) (React: coding with JavaScript).

Instructors: 

- **[Paulo Silveira](https://www.linkedin.com/in/paulosilveira/)**

- **[Vinicios Neves](https://www.linkedin.com/in/vinny-neves/)**

## Project Details

You can [view this application online here](https://organo-ruddy-nine.vercel.app).

This a project developed using React, in which is possible to register employees of a technology company, as well as view an organization chart (hence the name Organo), with employees split by technology teams. 

Organo has two main parts. The first one is a form to register a new member: name, role, URL for an image and a dropdown box to select a technology team (Programming, Front End, Data Science, and so on). The second part consists in a series of sections, showing members already registered, according to each technology team available. Each team has its own background color and its members are shown as cards, with their names and role. 

**Form (fields and text are in Portuguese)**

![form showing fields to fill in name, role, image and select a team](https://user-images.githubusercontent.com/19349339/212756592-1632b88d-5ae0-4d73-bcee-7e94691f993f.png)

**Gallery of teams and its members (in Portuguese)**

![gif mostrando os times e respectivos membros](https://user-images.githubusercontent.com/19349339/212757171-6646b737-653f-48f8-9f7c-c7abb941b62e.gif)

When you click in the button "Criar card" (create card), the newly created member is show automatically in the appropriate team gallery. Teams with zero members are not visible - when the first person is added, the corresponding section is then shown. 

# Development

The project was developed step by step throughout the course. Alura's Design Team provided a [Figma file](https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?node-id=134%3A128) with layouts and a style guide. From this Figma, we've developed the components to create the app using React.

Components were grouped in a folder in `/src/components`, each component having its own folder containing a JS and a CSS file. 

Images for this project are in the `/public/images` folder.

## Components

### Banner

It consists only of an image, placed in the top of the application. Image source is hard-coded.

### TextInput

This component has a label and a text field. It's possible to pass via `props` the name of the label, a boolean indicating if this input is required, a text for the placeholder, an initial value and a function to handle the  `onChange` event.

### Dropdown

A select component, used in the project to select a team. A list with the available teams is received via `props`, as well as other options similar to `TextInput`.

### Button

Returns a button with some styles. Button's text is received via `props.children`.

### Form

This component bundles `TextInput`, `Dropdown` and `Button` components. Each field is controlled using `useState` hook. A list with the teams is received via `props` (and forwarded to  `DropDown` component). It's also received a function to handle `onSubmit` event.

### Member

This is the card to show a registered member. Name, role, image and background color are received via `props`.

### Team

This component has a header and a div listing members of a team (a list of `Member` components). The name for the team, a list of members and color options are received via `props`. We iterate the list of members and pass its data to each `Member` component.

### Footer

Footer shows links for social media, Organo's logo and a text. Path to logo's image and URL for the link, as well as the text, are all hard-coded.

### App

The main component for this application. It shows the `Banner`, the `Form`, a list of `Team` and the `Footer` components. This component has a variable holding the list of teams and a state variable that controls the list of members and rerender the necessary sections. These two variables are used to pass the necessary data to the other components.

# Instalation

This project was bootstrapped with Create React App, using Node.js (version v16.15.1) and npm (version 8.11.0). You need Node.js and npm installed in order to run this project.

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

    npm install

After that, you can run the app in the development mode with the following command:

    npm start

The app will run at http://localhost:3000.

---

# Detalhes do projeto

Você pode [ver o projeto online aqui](https://organo-ruddy-nine.vercel.app).

Este é um projeto desenvolvido em React, em que é possível cadastrar as pessoas colaboradoras de uma empresa de tecnologia, bem como ver as que já estão cadastradas, separadas por setor, criando assim um organograma da empresa, o Organo.

O projeto consiste de duas seções principais. A primeira é formulário para cadastro: nome, cargo, URL para uma imagem e uma caixa para selecionar um time de tecnologia (Programação, Front End, Data Science, etc.). A segunda é uma série de seções que separa as pessoas cadastradas de acordo com o time. Cada time possui uma cor própria para destacá-lo dos demais, e as pessoas são exibidas em formato de card, contendo nome e cargo. 

**Formulário de cadastro**

![formulário de cadastro exibindo os campos de nome, cargo, imagem e time](https://user-images.githubusercontent.com/19349339/212756592-1632b88d-5ae0-4d73-bcee-7e94691f993f.png)

**Galeria de times e membros**

![gif mostrando os times e respectivos membros](https://user-images.githubusercontent.com/19349339/212757171-6646b737-653f-48f8-9f7c-c7abb941b62e.gif)

Ao clicar no botão "Criar card" do formulário, a pessoa cadastrada  é exibida automaticamente no time que pertence. Não são exibidos os times que não possuem nenhum membro - ao cadastrar a primeira pessoa, a seção é exibida. 

## Créditos

Este projeto foi desenvolvido no curso ["React: desenvolvendo com JavaScript"](https://www.alura.com.br/curso-online-react-desenvolvendo-javascript), oferecido pela [Alura](https://www.alura.com.br).

Instrutores: 

- **[Paulo Silveira](https://www.linkedin.com/in/paulosilveira/)**

- **[Vinicios Neves](https://www.linkedin.com/in/vinny-neves/)**

# Desenvolvimento

O projeto foi desenvolvido passo a passo durante o curso. O time de Design da Alura disponibilizou [um arquivo Figma](https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?node-id=134%3A128) com os layouts e guias de estilo. A partir deste Figma, desenvolvemos os componentes para construir a aplicação em React.

Os componentes foram agrupados em uma pasta em `/src/components`, cada um com sua própria pasta contendo um arquivo JS e um CSS. 

As imagens do projeto estão armazenadas na pasta `/public/images`.

## Componentes

### Banner

Consiste apenas de uma imagem que fica no topo da aplicação. O caminho da imagem se encontra hard-coded no componente.

### TextInput

Componente que possui uma label e um campo de texto. É possível passar via `props` o nome da label, indicação se é um campo obrigatório, o placeholder para o campo de texto, um valor inicial para o campo e uma função para tratar o evento de `onChange`.

### Dropdown

Componente de select, utilizado no projeto para selecionar o time. A lista de times é passada via `props`, bem como outras opções semelhantes a `TextInput`.

### Button

Retorna um botão estilizado. O texto do botão é recebido via `props.children`.

### Form

Este componente agrega os componentes `TextInput`, `Dropdown` e `Button`. Cada um destes campos é controlado utilizando o `useState()`. São recebidos via `props` a lista com os times (repassada para  o componente `DropDown`) e uma função para tratar o evento de `onSubmit`.

### Member

Card para exibir uma pessoa cadastrada. Os dados da pessoa (nome, cargo, imagem e cor de background) são recebidos via `props`.

### Team

Possui um cabeçalho e uma div listando os membros de um time (componentes `Member`). O nome do time, a lista de membros e opções para cores primária e secundárias são recebidos via `props`. A lista de membros é percorrida e suas informações são passadas para o componente `Member`.

### Footer

Rodapé da página, exibindo links para redes sociais, o logo da Organo e um texto. O caminho para o logo e URL dos links, bem como o texto, estão hard-coded.

### App

Componente principal da aplicação que irá exibir o `Banner`, o `Form`, uma lista de `Team` e o `Footer`. Este componente possui uma variável com a lista de times e uma variável de estado para controlar a lista de membros e renderizar as seções necessárias. Por meio dessas duas variáveis, `App` repassa os dados necessários aos outros componentes.

# Instalação

O projeto foi criado com o Create React App, utilizando Node.js (versão v16.15.1) e npm (versão 8.11.0). É necessário possuir ambos instalados em sua máquina para rodar a aplicação.

Após clonar/baixar o projeto, abra um terminal, navegue até a pasta do projeto e rode o seguinte comando para instalar todas as dependências necessárias

    npm install

Após isso, você pode rodar a aplicação em modo de desenvolvimento com o seguinte comando: 

    npm start

A aplicação irá rodar no endereço http://localhost:3000.