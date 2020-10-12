## PRENSA-DOCS
É um repositório de componentes para documentação em JSX/MDX.

Para instalação, utilizar o comando `npm install prensa-docs`.

No projeto existem 3 componentes básicos para documentação:
- CodeBlock
- CSSTable
- Space

### CodeBlock
É um componente para a exibição de códigos JSX. Para utiliá-lo basta importar ele no arquivo desejado e utilizar a props children passando uma string com o código desejado.
<pre>
  import CodeBlock from 'prensa-docs';
</pre>
`<CodeBlock children={'código JSX aqui'} />`

### CSSTable
É um componente casca para uma tabela de dados. Sua função é documentar as classes de estilo para reescrita no código, caso necessário. Para utiliálo, basta enviar uma lista de objetos com o seguinte formato:
<pre>
  import {CSSTable} from 'prensa-docs';

  const rows = [
    {
      id: 'id único para cada entrada',
      class: 'nome de classe do css',
      tokens: 'valor de token, se houver'
    }
  ]
</pre>
`<CSSTable rows={rows} />`

### Space
É um componente para espaçamento no MDX. Ele usa o estilo inline com a unidade de espaçamento 8px. Para utilizá-lo, deve-se passar um número para a props size: `size={1}` resulta em 8px de espaçamento.
<pre>
  import {Space} from 'prensa-docs';
</pre>
`<Space size={1} />`
