# Funções do Código

O objetivo é receber uma entrada de texto e criptografar e ou descriptografar as vogais presentes.
O código também possui um botão de "copiar" para facilitar a cópia do resultado dos eventos.

## Funcionalidades

### 1. **Codificar Texto**

- **Função:** `encodeH1()`
- **Descrição:** Esta função codifica o texto inserido, substituindo os caracteres pelas referências mapeadas. O mapeamento de caracteres é o seguinte:
  - `"a"` é substituído por `"ai"`
  - `"e"` é substituído por `"enter"`
  - `"i"` é substituído por `"imes"`
  - `"o"` é substituído por `"ober"`
  - `"u"` é substituído por `"ufat"`
- **Comportamento:** O texto codificado é exibido em um elemento `#emtela` e o botão de copiar (`#copiar`) é mostrado se o texto codificado não estiver vazio.

### 2. **Decodificar Texto**

- **Função:** `decodeH1()`
- **Descrição:** Esta função decodifica o texto exibido no elemento `#emtela` revertendo as substituições realizadas pela função de codificação. O mapeamento de codificação para decodificação é o seguinte:
  - `"ai"` é substituído por `"a"`
  - `"enter"` é substituído por `"e"`
  - `"imes"` é substituído por `"i"`
  - `"ober"` é substituído por `"o"`
  - `"ufat"` é substituído por `"u"`
- **Comportamento:** O texto decodificado é exibido no elemento `#emtela` e o botão de copiar (`#copiar`) é mostrado se o texto decodificado não estiver vazio.

### 3. **Copiar Texto**

- **Função:** `copiarTexto()`
- **Descrição:** Esta função copia o texto exibido no elemento `#emtela`.
- **Comportamento:** O botão de copiar realiza sua função se estiver visível.

### 4. **Gerenciar Visibilidade do Botão de Copiar**

- **Função:** `VisibilidadeCopiarButton()`
- **Descrição:** Controla a visibilidade do botão de copiar e do elemento que exibe o texto codificado/decodificado. O botão de copiar e o elemento `#emtela` só são exibidos se houver texto para mostrar.
- **Comportamento:** Se o conteúdo do elemento `#emtela` estiver vazio, o botão de copiar será oculto e o elemento `#emtela` será escondido. Caso contrário, ambos serão exibidos.

## Eventos

- **Botão Codificar (`#codificar`):** Aciona a função `encodeH1()` e atualiza a visibilidade do botão de copiar.
- **Botão Decodificar (`#decodificar`):** Aciona a função `decodeH1()` e atualiza a visibilidade do botão de copiar.
- **Botão Copiar (`#copiar`):** Aciona a função `copiarTexto()` para copiar o texto do elemento `#emtela`.
