<template>
    <div class="texto-azul">
        <h1>História de Maragogi</h1>
    </div>
    <section class="historia"><!--História-->
        <div class="container align-self-center"><!--Container-->
            <div class="row"> <!--Row-->
                <div class="col-md-6">
                    <p><span style="font-weight: bold;">Inicialmente Maragogi</span> era um povoado chamado Gamela, 
                    em 1887 foi elevado à categoria de Vila e passou a chamar-se Isabel, 
                    em homenagem à princesa que libertou os negros da escravidão. 
                    Mais tarde, em 1892, recebeu o nome de Maragogi por causa do 
                    rio que banha o local. O nome, segundo historiadores, provém 
                    de Marahub-gy, ou rio das Maraubas. Outras interpretações traduzem 
                    Mair-aqui-gy-po como rio livre, amplo. Maragogi tomou parte 
                    ativamente nas lutas contra os holandeses.</p>
                    <p>No local registraram-se intensos combates em Barra Grande e São Bento, 
                    quando as tropas vinham do Recife com destino a Porto Calvo, que era o local 
                    de escoamento da produção agrícola da região, principalmente a cana-de-açúcar. 
                    Coube aos moradores da antiga vila desarticular, por duas vezes, tentativas 
                    de desembarque holandês no local. Como resquício da História, a tradição 
                    familiar no município é muito forte. Aconteceram muitos casamentos entre primos 
                    e vários nomes foram guardados, como Lins, Vasconcelos, Buarque, Holanda, 
                    Cavalcante e Acioly, entre outros, mantendo vivas suas raízes.</p>
                </div>
                <div class="col-md-6">
                    <img src="img/historia1.jpg" class="img-fluid">
                </div>
                <div class="col-md-12">
                    <h2>Guerra dos Cabanos</h2>
                    <p>Maragogi também foi palco da Guerra dos Cabanos, que começou 
                    como um movimento restaurador armado, que tinha por objetivo trazer 
                    de volta ao trono do Brasil o Imperador D. Pedro I, que renunciara e 
                    voltara para Portugal.</p>
                    <p>A guerra inicia-se entre maio e junho de 1832, com os levantes de Antônio 
                    Timóteo de Andrade, em Panelas de Miranda, no agreste pernambucano, 
                    e João Batista de Araújo, na praia de Barra Grande, hoje povoado do município de Maragogi.</p>
                </div>
                <div class="col-md-6">
                    <img src="img/historia2.jpg" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <p>Em 26 de outubro de 1832, tropas provinciais matam em combate, 
                    no reduto do Feijão, o líder Antônio Timóteo de Andrade e o Almirante 
                    Tamandaré prende o líder João Batista de Araújo em sua casa, na praia 
                    de Barra Grande. Entre novembro de 1832 e janeiro de 1834, a chefia 
                    da guerra passa para as forças populares, sendo o comandante geral 
                    da insurreição Vicente de Paula. São erguidos os primeiros arraiais
                    guerrilheiros nas matas de Imbiras, Barras de Piabas e Piabas.</p>
                    <p>Os Cabanos, numa manobra guerrilheira tentam tomar o povoado de Barra Grande, 
                    mas são postos em fuga pelas tropas provinciais acantonadas ali. Recuam sob forte 
                    tiroteio até o povoado de Gamela (hoje cidade de Maragogi), e de lá chegam à praia 
                    de São Bento, onde os Cabanos feridos à bala se curavam e pescavam. 
                    Ocorre então a matança de São Bento, tendo as tropas provinciais morto à bala e 
                    à faca todos os Cabanos encontrados.</p>
                </div>
                <div class="col-md-12">
                    <p>Os negros papa-méis (assim chamados os negros que fugiam da escravidão 
                    dos engenhos e se escondiam nas matas) aderem à insurreição e mudam os rumos 
                    da guerra: lutam os Cabanos agora pela libertação dos escravos, atacando 
                    inclusive os engenhos de açúcar e ocupam terras onde constróem 
                    seus arraiais guerrilheiros. A guerra termina com a prisão de Vicente de Paula,
                    em 1850, que foi levado para a ilha-presídio de Fernando de Noronha.</p>
                </div>
            </div> <!--Fim Row-->
        </div> <!--Fim Container-->
    </section><!--/História-->
    <Footer></Footer>
</template>

<script>

    import Footer from '@/components/Footer/Footer.vue'
    export default {
        name: 'Historia',

        components: {
            Footer
        }
    }
</script>


<style lang="scss">
    @import 'Historia';
</style>