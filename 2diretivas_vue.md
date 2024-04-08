# Diretivas

<p>Diretivas são pre fixadas com <code>-v</code> para indicar que são atributos especiais providos pelo Vue, eles aplicam comportamento especial de reatividade ao DOM renderizado, o Vue.js reconhece e manipula durante a compilação do template.
<br>
Por exemplo, a diretiva v-bind é usada para vincular dinamicamente valores de propriedades HTML a expressões Vue, enquanto v-if e v-for são usadas para controlar a renderização condicional e repetida de elementos, respectivamente.
<br>
O uso de diretivas é uma das características fundamentais do Vue.js que permite a criação de interfaces de usuário dinâmicas e reativas. Elas fornecem uma maneira concisa e poderosa de adicionar interatividade ao HTML renderizado, permitindo que os desenvolvedores criem aplicativos web complexos e altamente responsivos.
</p>
<br>
<ul>
    <li>v-bind: Imagine que você está criando um site e deseja tornar alguns dos links dinâmicos. Por exemplo, você pode querer que o destino de um link mude com base em alguma variável, como a página atual do usuário. v-bind permite isso, permitindo que você "amarre" dinamicamente valores a atributos HTML.</li>
    <li>v-if: Você já viu páginas da web que mostram ou escondem partes diferentes dependendo de certas condições? Por exemplo, um botão de login só deve aparecer se o usuário não estiver conectado. Com v-if, você pode fazer isso, mostrando ou escondendo elementos com base em condições.</li>
    <li>v-for: Quando você tem uma lista de coisas que deseja mostrar em uma página, como uma lista de produtos em uma loja online, você pode usar v-for. Ele cria repetições de elementos HTML com base em uma lista de itens que você tem em seu código Vue.</li>
    <li>v-on: Às vezes, você quer que algo aconteça quando um usuário interage com seu site, como clicar em um botão ou passar o mouse sobre uma imagem. v-on permite que você adicione ouvintes de eventos a elementos HTML, para que você possa executar funções do Vue quando esses eventos ocorrerem.</li>  
    <li>v-model: Quando você tem um formulário em seu site e deseja que o que o usuário digita seja diretamente ligado a uma variável Vue, v-model faz isso para você. Por exemplo, se você tiver um campo de entrada para um nome de usuário, v-model garantirá que qualquer coisa que o usuário digite seja automaticamente refletido na variável Vue associada.</li>   
    <li>v-show: Similar ao v-if, mas ao invés de adicionar ou remover elementos do DOM, ele apenas alterna a visibilidade de um elemento usando CSS. Então, se você quiser ocultar algo sem realmente tirá-lo da página, o v-show é o que você precisa.</li>
</ul>
<br>
<p>Essas são algumas das diretivas mais comumente usadas no Vue.js, mas existem outras diretivas úteis, como v-cloak, v-pre, v-once, entre outras, que oferecem funcionalidades específicas para diferentes casos de uso.</p>

<p>Neste pequeno formulário podemos ver as diretivas <code>v-model</code> e <code>v-on</code> na prática, para vê-las em ação confira o exercício "hello vue".</p>

<code>

    <form id="app-form">
        <input type="text" v-model="input_name" placeholder="Dígite seu nome">
        <input type="date" v-model="input_birthday">
        <input type="submit" value="Enviar" v-on:click="submitForm">
    </form>

</code>