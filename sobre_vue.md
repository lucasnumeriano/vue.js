# Vue.js

Nota: Este documento está sendo utilizado apenas para estudo pessoal e não substitui a documentação oficial do [Vue.js](https://vuejsbr-docs-next.netlify.app/guide/introduction.html).

Vue (pronuncia-se, view) é um framework JavaScript para criação de componentes de interfaces de usúario e single-page aplication (aplicações de página única). Está entre os frameworks front-end mais utilizados e tem baixa curva de aprendizado.

## Instalação

Vue pode ser integrada em um projeto de várias formas dependendo de suas necessidades, pois foi projetado para ser incrementalmente adotável.

Se for iniciante e não ter grandes conhecimentos com ferramentas de build baseadas em Node.js instale atráves do CDN: <code><script src="https://cdn.jsdelivr.net/npm/vue@3.0.11"></script></code>

A quatro formas principais de instalar o Vue:

<ol>
    <li>Importar por <strong>CDN</strong> na página desejada.</li>
    <li>Baixando os arquivos JS. Conferir documentação [oficial](https://vuejsbr-docs-next.netlify.app/guide/installation.html#npm).</li>
    <li>Usando o <strong>npm</strong>.</li>
    <li>Com a ferramenta <strong>CLI</strong> oficial para criar o projeto. Desta forma se usa configurações previamente ajustadas para o desenvolvimento front-end.</li>
</ol>

#### Vue Devtools

A extensão Vue Devtools vai ajudar a inspecionar e depurar suas aplicações através de uma interface mais amigável.

### NPM

A instalação através do npm é recomendada para construir aplicações em larga escala. Combina de forma perfeita com bundlers como webpack ou Rollup.

<code># última versão estável <br> $ npm i vue@next</code>

Para utilizar os Sigle-File Components (separação de cada componente dentro de um arquivo com extensão<code>.vue</code>) é necessário instalar <code>@vue/compiler-sfc</code>:

<code>$ npm i -D @vue/compiler-sfc</code>

OBS.: Está extensão de arquivos não é lida pelos navegadores, então para utilizá-las é necessário um bundler para transformar todo o código em JS.

### CLI

Hot-reload, lint-on-save e builds prontas para produção com apenas alguns minutos. Isso é o que oferece a CLI oficial do Vue, que permite projetar rapidamente ambiciosas Single Page Applicattions. Ele está disponivel para instalação através do <code>npm i -g @vue/cli</code>, para garantir que está com a ultima versão instalada execute: <code>vue upgrade --next</code>.
