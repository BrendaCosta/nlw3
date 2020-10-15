# Projeto HAPPY 
Projeto da semana NLW da Rocketseat
- Com Foco em WEB
- Para iniciantes
- HTML, CSS e JS


## DIA 01 12/10
- Bem tranquilo
- HTML e CSS
- A unica coisa de diferente que ainda não tinha feito foi a parte de animações
- Começamos pelo mobile first
- Aprendi a diferença entre REM e EM
  - REM pega referência do ROOT
  - EM pega referência do elemento pai

### Sobre o uso de display, achei interessante a forma de explicar
- Regras fora da caixa: Display Block e Display Inline
- Regras dentro da caixa: Display Flex e GRID

### Display Flex
~~~
display:flex;
  align-items: center;      // alinha elementos no eixo X
  justify-content: center;  // alinha elementos no eixo Y
  margin: auto;             // alinha laterais dos elementos
~~~  

## DIA 02 13/10
- Bem intenso: foram 3 horas de aula e umas 6 horas codando
- Bastante CSS e algumas funções em JS
- Trabalho com uma biblioteca de mapas: leafletjs.com
- Trabalho com reponsividade 
- Algumas funções do CSS que ainda não tinha usado
- Animação com CSS: de aparição de conteúdo 
- Z-index

### Tags do CSS 
- Clamp (valor minimo, valor ideal, valor maximo)
- Aside -> para lateralidade dos conteúdos
- Box-sizing: content-box ~ é o padrão, ele soma a partir do conteúdo
- Box-sizing: border-box ~ soma da borda para fora

## Para customizar somente o primeiro elemento usa esse >
~~~
.orphanage-details > img {
  width: 100%;
  height: 30rem;
  object-fit: cover; // Ajusta a proporção das imagens
}
~~~

### Uso de Display
- Display: flex -> Os elementos são organizadas ou lado ou abaixo
- Display: grid -> Os elementos são organizados multidirecionais

### Javascript
-Função para voltar. Ela memoriza os passos e guarda o passo anterior

~~~
<button onclick="history.back()">
~~~

## DIA 03 14/10

- Foi uma aula mais leve
- Bastante código Js
- Erros de digitação me fez travar em alguns pontos

## DIA 04 15/10

- Adaptação do projeto para receber o back-end
- Usamos uma template enginer - A HBS 
