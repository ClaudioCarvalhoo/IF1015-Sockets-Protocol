# Atividade Sockets e Protocolos

## Quais as principais dificuldades de implementação?
Na minha visão a maior dificuldade aqui é delimitar quando começa uma mensagem e termina outra, tendo que guardar o "histórico" do que foi recebido no buffer. Também pensei bastante em como definir a maneira com a qual identificar os dois números da operação e o operador, mas acabei encontrando uma solução simples apenas os separando por um carácter simples e confiando que o outro lado do protocolo vai mandar da maneira correta.

## Como poderia ser feito o tratamento de erros?
Para o caso do meu protocolo, uma maneira eficiente seria utilizar uma regex para checar se a mensagem está no formato desejado e pode ser lida utilizando o protocolo do lado do receptor.

## Haveria alguma razão para se implementar um mecanismo de numeração/identificação de mensagens neste protocolo?
Acho que poderia ser uma boa ideia no caso da implementação do UDP, pois se as mensagens chegarem desordenadas corre o risco de quebrar o protocolo. No caso do TCP, não vejo muitos motivos para implementar essas funcionalidades nessa aplicação simples. A única razão que penso para implementar esses mecanismos no TCP seria se o exercício tivesse pedido.