### IMPORTANTE
O projeto foi alterado para privado, CI passou a ser no buildkite e tem um novo deploy no netlify
Motivos: 
1. Foi tudo feito por conta pessoal de algum ex-colaborador.
2. Migração para o Github Packages

O CI foi feito da forma mais simples possivel, quando o projeto tiver uma equipe responsável o mesmo precisará ser refeito. 

<br/><br/>
<p align="center">
  <a href="https://material-ui.com/" rel="noopener" target="_blank">
    <img width="200" src="https://involves.com/wp-content/uploads/2019/09/involves-logo-color.png" alt="Material-UI logo"/>
  </a>
</p>

<h1 align="center">Violin-UI</h1>

<div align="center">

[React](https://reactjs.org/) components for **awesome** web development.

Made with :heart: by [Involves](https://involves.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1306e11a-4dca-46af-ac02-c92b075539d0/deploy-status)](https://app.netlify.com/sites/violin-lib/deploys)


</div>

## Installation

Violin-UI is available as an [npm package](https://www.npmjs.com/package/@involves/violin).

```sh
// with npm
npm install styled-components @involves/violin

// with yarn
yarn add styled-components @involves/violin
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@involves/violin';

function App() {
  return (
    <Button primary>
      Hello World!
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, it's really all you need to get started.

## Documentation

Check out our [documentation website](https://violin-lib.netlify.app/).

## License

This project is licensed under the terms of the
[MIT license](/license).
