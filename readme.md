# Memória Descritiva

Para começar este trabalho de Código Criativo, a ideia era juntar um sensor (o acelerómetro) a uma expressão visual (no meu caso, umas elipses sobrepostas) em que fiz um Saturno que aumenta e diminui de tamanho conforme o movimento do rato ou a inclinação do telemóvel. No pc o saturno fica pequeno no lado esquerdo e direito, e no telemovel fica pequeno sentido cima baixo. (utilizei o gemini como auxílio no que diz respeito ao código, especialmente em como fazer a inclinação do telémovel ou de outro dispositivo qualquer). 

Na parte da configuração inicial, utilizei a função setup(). Lá dentro, criei o espaço de desenho com createCanvas() para ocupar o ecrã todo e defini angleMode(DEGREES) para os ângulos contarem em graus. Depois, criei a função principal draw() para desenhar tudo em tempo real, usando background() para pintar o fundo de azul-escuro a cada frame e dar suavidade à animação.

Logo a seguir, o código verifica sozinho se estamos no computador ou no telemóvel através de uma variável isMobile. Se for no PC, controlo tudo com o mouseX e mouseY; se for no telemóvel, o script agarra nos dados do acelerómetro através de rotationX e rotationY, usando a função map() para traduzir a inclinação em tamanhos e posições.

Para garantir que o desenho não sai do ecrã se abanarmos o telemóvel, apliquei a função constrain(). O Saturno em si é gerado dentro de um bloco com push() e translate() para o centro, usando um ciclo for para repetir as elipses várias vezes. Nele apliquei stroke() para os contornos em azul, noFill() para o interior ficar vazio, e a função ellipse() para desenhar as formas propriamente ditas.

Por fim, adicionei a função text() para mostrar um pequeno aviso no canto do ecrã para quando estamos no pc aparece (modo rato PC) e no telemovel aparece (modo mobile Acelerómetro), a função mousePressed() (com o pedido de permissão do DeviceOrientationEvent para os iPhones) e a função windowResized() juntamente com resizeCanvas() para o desenho se ajustar sozinho se rodarmos o telemóvel.    

