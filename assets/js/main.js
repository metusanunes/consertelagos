//  alert (1);
// const inicial = function rederizacao() {if (screen.width < 640 || screen.height < 480) {
//     // sirva a versão pra celular
// } else if (screen.width < 1024 || screen.height < 768) {
//     // talvez seja uma boa usar versão pra tablet
// } else {
//     // sirva a versão normal
// }};





const to = window.scrollTo(0, 0);
to;

const head = document.querySelector('.refre');
const home = document.querySelector('.home');
const banerPromocao = document.querySelector('.banerPromocao');
const imagemServicos = document.querySelector('.imagemservicos');
const imagens = document.querySelector('.imagens');
const logro = document.querySelector('.logo');
const imagemServicos2 = document.querySelector('.imagemservicos2');
const p1 = document.querySelector('.p1');
const imagensP3 = document.querySelector('.imagensP3');
const imagensP6 = document.querySelector('.imagensP6');
const imagensP7 = document.querySelector('.imagensP7');
const imagensP8 = document.querySelector('.imagensP8');
const textoServicos2 = document.querySelector('.textoservicos2');
const texto = document.querySelector('.texto');
let apresentacao = document.querySelector('.textoservicos');
const textoservicosP2 = document.querySelector('.textoservicosP2')
const textoservicosP3 = document.querySelector('.textoservicosP3')
const interfone = document.querySelector('.interfone');
const cameraDeSeguranca = '<img id= "cms" src="assets/img/camerasDeSeguranca.png" alt="images" width="980" height= "110" >  </img>';
const image = '<img src="assets/img/images.jpeg" alt="images" width="177"></img>';
const limpeza = '<img id="limpeza" src="assets/img/limpeza.jpeg" alt="limpeza" width="420" height = "320px" align="left"> </img>';
const imagenP3 = '<img id = "imagenP3"src="assets/img/cont-manut.png" alt="imagenP3" width="380" </img>';
// const imagenP5 = '<img class= "cftv" src="assets/img/cftv.png" alt="imagenP5" width="476"></img>' ;
const imagenP6 = '<img src="assets/img/contrato.jpg" alt="imagemP6" width=auto></img>';
const imagenP7 = '<img src="assets/img/contrato.jpg" alt="imagenP7" width=auto></img>';
const imagenP8 = '<img src="assets/img/contrato.jpg" alt="imagemP8" width=auto></img>';
const baner1 = '<img class = "baner1"src="assets/img/banerPromoçao.gif" alt="baner1" width="476" ></img>';
const interfon = '<img src="assets/img/interfone.jpg" alt="interfon" width=auto></img>';
const servicc = '<img src="assets/img/servicos.jpeg" alt="servicc" width=auto></img>';
const servicos = `Oferecemos suporte corporativo em informática para pequenas, médias e grandes empresas. 
A nossa abordagem aumenta a sua produtividade, evitando perdas de tempo dos seus funcionários com problemas de informática. 
Proporcionamos um total gerenciamento em TI com um ambiente de serviço mais estável. E o nosso suporte técnico previne problemas comuns antes que eles ocorram, poupando tempo e dinheiro. 
Administramos todas as tarefas de informática da sua empresa, desde o monitoramento da sua rede, prevenindo invasões ao suporte de usuários.
Entendemos que cada empresa é única. Por isso, visamos entender o negócio de cada cliente, a fim de desenvolver uma solução específica para permitir um excelente gerenciamento de cada negócio.
Nosso diferencial consiste na credibilidade com excelência em atendimento e tecnologia.
Para sua empresa propomos soluções de suporte em informática que têm por objetivo reduzir custos, aumentar sua produtividade e proporcionar segurança para as informações de seu negócio.`;
const p2 = `Evitamos ou resolvemos problemas de computadores inoperantes ou lentos que reduzem a capacidade de seu pessoal de fazer o que precisa ser feito.
Você pode ter um suporte técnico que seja seu parceiro e entenda isso com clareza, oferecendo níveis de serviço de acordo com a sua urgência de atendimento.
Suporte: Através do suporte remoto ou uma visita no local, vamos chegar rapidamente e resolver seu problema.
Help Desk: Nosso sistema permite um contato direto com os nossos técnicos e gerentes. Basta enviar uma mensagem ou fazer uma ligação. O nosso sistema mantém todos informados e preparados.
Acesso remoto: Para cada usuário final é criado um acesso remoto para que possamos acessar seu computador pela internet. Esta resposta rápida resolve cerca de 80% das questões do usuário.
Visitas no local do chamado: Uma visita de um dos nossos técnicos qualificados irá resolver seu problema rapidamente.
Monitoramento de Rede: Nós sabemos o que está acontecendo com o seu sistema e ficamos atentos a possíveis problemas, e somos capazes de resolvê-los antes ou o mais rápido possível.`
const p3 = `Alguns de nossos serviços:
Contratos de Suporte e Manutenção em Informática.
Manutenção de Computadores.
Manutenção de Servidores - Windows ou Linux.
Terceirização em Informática - Técnicos, Analistas e Suporte.
Manutenção Preventiva e Corretiva.
Segurança da Informação.
Soluções em Tecnologia.
Consultoria em Informática - TI.
Monitoramento de Servidores e Computadores.
Monitoramento, Segurança e Gestão de Trafego de Redes.
Instalação de Redes.
Definição e Verificação de Política de Backups.
Detecção de Vírus, Remoção e Proteção.
Gestão, Verificação e Auditorias de Segurança.
Recuperação de Dados.
Hospedagem de Sites (Somente para clientes com contratos de suporte e manutenção).
Visitas periódicas para manutenção preventiva.
Visitas eventuais para resolução de problemas ou suporte.
Suporte remoto ou telefônico para usuários.`;
const refr = '<meta http-equiv="refresh" content="0" >';
const txtP5 = `Consultoria, fornecimento, instalação e manutenção de CFTV (Circuito Fechado de Televisão), Controle de Acesso, Detecção de Incêndios e muito mais click para conferir.`;

const txtTop = "A melhor solução para seu negócio";
const txtTop1 = " Sua casa, sua familha!           ";
const vidd = '<iframe width="480" height="251" src="https://www.youtube.com/embed/FV4Fzj8Ra_M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
const mtcPrev = `Segundo a norma NBR-5462, Manutenção Preventiva é a manutenção efetuada em intervalos predeterminados, ou de acordo com critérios prescritos, destinada a reduzir a probabilidade de falha ou a degradação do funcionamento de um item. A NBR-5462 elenca três tipos de manutenção: Manutenção Corretiva, Manutenção Preventiva e Manutenção Preditiva. O que irá definir qual tipo usar e quando usar é a estratégia de manutenção adotada para manter a disponibilidade e confiabilidade dos equipamentos. Ao contrário do que muitos profissionais imaginam, a manutenção preventiva ainda não é a manutenção que tem o melhor custo/benefício dentre as três. A manutenção preventiva custa, em média, 3 vezes mais que a manutenção preditiva e é aplicável em apenas 11% dos equipamentos. Você deve estar se perguntando: “Como assim?! Apenas 11%??!” Isso mesmo. A manutenção preventiva traz resultado apenas nos equipamentos onde as falhas que estão relacionadas diretamente com a idade do equipamento. Ou seja, ela é ineficiente em 89% dos equipamentos, onde as taxas de falhas não estão relacionadas a idade do equipamento, mas sim, com as condições de operação.`;
const mtcprev2 = `${imagenP3}  Os computadores em seu escritório rugem como leões ou queimam como brasas debaixo da mesa? Assim como qualquer outro dispositivo eletrônico (de um carro a uma lava-louças), para funcionar corretamente, os computadores precisam passar por um processo de manutenção corretiva e preventiva de equipamentos de informática.

De fato, devido à sua importância e complexidade, a gestão da manutenção de equipamentos de informática requer atenção especial.

Ao abordar os diferentes tipos de manutenção preventiva e corretiva em computadores, dois aspectos devem ser considerados:

A manutenção inclui hardware e software do computador. Ambos são muito importantes e influenciarão decisivamente o funcionamento do sistema.
Os vários tipos de manutenção podem funcionar simultaneamente. No caso de manutenção corretiva, ela atuará se a manutenção preditiva ou a manutenção preventiva não puderem antecipar o problema.
A manutenção de sistema é um termo geral que engloba várias formas de manutenção do computador necessárias para manter um sistema em funcionamento.

Os dois principais componentes da manutenção de sistema são a manutenção preventiva e corretiva de computadores.

A manutenção preventiva envolve a tomada de medidas para ajudar a manter o funcionamento do sistema, enquanto a manutenção corretiva envolve a substituição ou reparo de um sistema ou de seus componentes depois que eles já falharam.

Continue lendo e entenda em detalhes como funciona a manutenção corretiva e preventiva de equipamentos de informática.

Manutenção corretiva e preventiva de equipamentos de informática
Manutenção preventiva
A manutenção preventiva é definida como a manutenção proativa do equipamento antes que um defeito ou falha ocorra. Ela envolve tarefas rotineiras para garantir que o sistema esteja funcionando da maneira ideal e evitar problemas antes que eles surjam.

Isso é semelhante à manutenção de rotina realizada em um carro. Da mesma forma que você precisa verificar periodicamente o óleo, as luzes, o motor e outras partes do carro para que ele funcione sem problemas; o mesmo princípio se aplica à manutenção preventiva de um computador.

Há várias medidas preventivas que você pode tomar, incluindo a instalação de atualizações do Windows, a verificação de vírus e malware e a execução de programas de limpeza.

As verificações antivírus e anti-malware devem ser executados pelo menos uma vez por semana.

Certifique-se de executar atualizações para esses programas sempre que forem lançados, já que novos vírus e malwares surgirem constantemente.

Manter sua rede segura, instalar um firewall e usar práticas de download seguras também contribui para proteger seu computador e quaisquer informações dele de serem comprometidas.

Picos de energia e superaquecimento podem destruir equipamentos eletrônicos, portanto, proteja seu hardware investindo em um estabilizador e limpando seu equipamento periodicamente para remover a poeira.${limpeza}

Se qualquer medida preventiva falhar, é sempre uma boa idéia ter um backup de arquivos importantes: um disco rígido externo para salvar arquivos importantes, caso o computador precise ser substituído.

Leia também o nosso artigo sobre as 5 tendências digitais de tecnologia e inovação nas empresas.

Manutenção corretiva
A manutenção corretiva, comumente chamada de “reparo”, é a correção de um problema depois que o computador já quebrou ou parou de funcionar.

O objetivo dessa forma de manutenção é restaurar a operacionalidade do sistema, corrigindo o problema ou substituindo os componentes danificados.

Medidas corretivas comuns envolvem a remoção de vírus e malwares, a desinstalação de programas prejudiciais, a formatação e a execução de uma restauração do sistema, entre outros.

Muitos problemas comuns no computador são facilmente corrigidos e não exigem um profissional de TI.

Para executar a manutenção corretiva, é importante primeiro diagnosticar o problema e descobrir a causa raiz.

Se você não tiver certeza da causa ou como resolver o problema, consultar um profissional de TI seria o melhor curso de ação.

Sua empresa precisa diminuir despesas? Aprenda no artigo ‘4 dicas práticas de como diminuir custos de uma empresa’ como conseguir.

Vantagens da manutenção preventiva em computadores
Agora que sabemos o que é a manutenção preventiva e corretiva de computadores, vamos ver as principais ações e suas vantagens:

Atualizações de software antivírus, verificações de vírus regulares — tenha sempre a última versão instalada.
Vantagem: Minimiza os riscos associados ao recebimento de arquivos infectados.

Arquivos valiosos não são comprometidos/destruídos por infecções de vírus.

Backups de dados, proteção de backup externo e planejamento de recuperação de desastres. Avaliar regularmente a estratégia de backup, monitoramento e verificação da funcionalidade de backups e restaurações de dados.
Vantagem: Aumenta a disponibilidade do sistema e a disponibilidade de dados críticos em caso de perdas. Os backups são uma parte essencial da proteção de dados contra ameaças, como o ransomware.

Spyware regular, varredura de malware, varreduras de sistema e remoção de software malicioso.
Vantagem: Impede que intrusos acessem/manipulem dados não autorizados, roubo de identidade, sequestro e controle do seu sistema. Especialmente, compras e/ou serviços bancários online que envolvem transferências de informações confidenciais e pessoais.

Atualizações de segurança do sistema operacional e instalação de patches. Automatizar atividades de manutenção preventiva relacionadas a software sempre que possível.
Vantagem: Manter o sistema operacional atualizado fornece correções para falhas e vulnerabilidades de segurança, bem como resoluções para bugs conhecidos.

Arquivos temporários e limpeza de arquivos desordenados. Remoção de programas não utilizados e supérfluos. O registro verifica e limpa o ambiente de inicialização.
Vantagem: Liberar espaço em disco. Melhoria geral do desempenho do sistema. Otimizar os tempos de inicialização da máquina

Sistema de refrigeração regular. Inspeções e limpeza. Verifique a funcionalidade dos ventiladores de resfriamento, aberturas do chassi e dissipadores de calor
Vantagem: Aumentar a longevidade geral de CPUs de computadores/servidores e outros componentes de hardware, evitando o superaquecimento.

Mantenha o firmware de componentes críticos atualizados. Realize verificações regulares de firmware com fornecedores de hardware individuais, especialmente controladores RAID.
Vantagem: Aproveitar os aprimoramentos de segurança e usabilidade. Aumentar a estabilidade de seus componentes de hardware e minimizar a corrupção de dados dos controladores de disco RAID

Mantenha o inventário de hardware atualizado por meio de revisões e recomendações periódicas para as atualizações necessárias do sistema.
Vantagem: Planejar proativamente atualizações e substituições de hardware para evitar compras de última hora caras e manter a funcionalidade ininterrupta do sistema.`


const menu = function () {
    let menu = document.querySelector('.menu');
    const me = ['inicio', 'servico', 'seguranca', 'manutPrev', 'atendimento'];
    for (let menur of me) {
        const button = document.createElement("button");
        menu.appendChild(button);
        button.className = 'btt';
        button.id = menur
        // bt1.innerHTML="ininn"
    }
    inicio.innerHTML = 'inicio';
    servico.innerHTML = 'serviço';
    seguranca.innerHTML = 'segurança';
    manutPrev.innerHTML = 'Manuteção preventiva';
    atendimento.innerHTML = 'Atendimento';


};
menu();

const log0 = function () {
    const logus = document.querySelector('.logus')
    const lgs = ['logo1', 'logo2', 'logo3', 'logo4'];
    for (let lg of lgs) {
        const logos = document.createElement('div');
        logos.id = lg;
        logos.className = "lo"



        logus.appendChild(logos)
        logo1.styleTrasform = 'rotateY(180deg)';
    };
    logo1.innerHTML = '<img src="assets/img/logo consertelagos1.png" alt="images" width="380"></img>';
    logo2.innerHTML = '<img src="assets/img/logo consertelagos1.png" alt="images" width="380"></img>';
    logo3.innerHTML = '';
    logo4.innerHTML = '';


}
log0();

// logro.innerHTML =titulo();

function titulo() {

    function cotTxt() {
        // texto.innerHTML = baner1;
        texto.style.color = "aqua";
        texto.innerHTML = txtTop;

    }
    function corTexo() {
        texto.style.color = " hsla(138, 100%, 13%, 0.412)";

        texto.innerHTML = "A melhor   opção para seu negócio";
    }
    setInterval(cotTxt, 1000)
    setInterval(corTexo, 900);
}
titulo()

textoServicos2.innerHTML = '';
imagemServicos2.innerHTML = '';
imagemServicos.innerHTML = '';

const servicus = function () {

    servico.addEventListener('click', function (e) {
        const el = e.target;
        if ('click') {
            // banerPromocao.innerHTML = '';
            limpaTela();

            const servicu = ['help', 'impressoras','rede', 'sitesEAplicativos', 'celular', 'telefonia', 'alarmes', 'porteiroEletronico', 'fechaduraEletronica',];
            for (let s of servicu) {
                const ss = document.createElement('div');
                apresentacao.appendChild(ss);
                ss.id = s;
                console.log(ss);
                help.querySelector('#help')
            }
            help.innerHTML = 'Suporte de informatica';
            impressoras.innerHTML = 'Manutençao de impressoras';
            rede.innerHTML = 'Manutenção e ampliação de rede';
            sitesEAplicativos.innerHTML = 'Sites e aplicativos';
            celular.innerHTML = 'Suporte a Smartphones';
            telefonia.innerHTML = 'Rede de telefonia';
            alarmes.innerHTML = 'Alarmes';
            porteiroEletronico.innerHTML = 'Porteiro eletronico'
            fechaduraEletronica.innerHTML = 'Fechadura eletronica'



            window.scrollTo(0, 0);


        }
    });



};
servicus()

const atendiments = function () {

    atendimento.addEventListener('click',function(e){
        const el = e.target;
        if('click') {
            limpaTela();
           const atendi=['aa','bb','cc'];
           for (let atten of atendi) {
            const atends = document.createElement('div')
            apresentacao.appendChild(atends);
            atends.id = atten;
            // console.log(atends);
           }
           aa.innerHTML = 'Segunda à Sexta das 08h às 18h';
           

        }
    });


}
atendiments()

const imgp5 = function () {
    const imagensP5 = document.querySelector('.imagensP5');

    const imP5 = ['txtImagensP5', 'txtImagensP6']
    for (let i5 of imP5) {
        const txt5 = " Consultoria, fornecimento, instalação e manutenção de CFTV (Circuito Fechado de Televisão), Controle de Acesso, Detecção de Incêndios e muito  <a id='clk'> click</a> para conferir.";
        const ip5 = document.createElement('h1');
        imagensP5.appendChild(ip5);
        // ip5.className = i5;
        ip5.id = i5;




        const txtImagenP5 = document.querySelector('.txtImagensP5');
        // txtImagenP5.onmouseout = function () { this.style.color = ""; }
        // txtImagenP5.onmouseover = function () { this.style.color = "black"; }
        txtImagensP5.innerHTML = txt5;
    }
    txtImagensP5.addEventListener('click', function (e,) {
        const el = e.target;
        if ('click') {
            limpaTela();
            apresentacao.innerHTML = cameraDeSeguranca + ' O Sistema de Circuito Fechado de TV (CFTV) é integrado por câmeras de segurança posicionadas estrategicamente para se ter visão dos pontos desejáveis de seu local. Após uma avaliação do local, são indicados os tipos de câmeras de segurança de acordo com o ambiente ou objetivo do sistema.<br></br>';
            const seguran = ['t1','t2','t3'];
            for (let sega of seguran){
                const segur = document.createElement('div');
                apresentacao.appendChild(segur);
                segur.id = sega;
            }
            t1.innerHTML= '<img id ="t1" src= "assets/img/Integra-alarmes-e-CFTV.gif" ></img>'
            t2.innerHTML= '<img id ="t1" src= "assets/img/fechadura eletronica.png" width ="468" ></img>'
            t3.innerHTML= '<img id ="t1" src= "assets/img/antivirus.gif" width="468"></img>'

            window.scrollTo(0, 0);
        }
    });
    txtImagensP6.innerHTML = baner1;



};
imgp5();

const txtImagenP5s = document.querySelector('.txtImagenP5s');
txtImagenP5s.innerHTML = "";





const criaNoHome = function () {
    const bingner0 = "<img id= 'bner00' src='assets/img/slide-manutencao.png'  width='476'></img> "
    const homeP = ['bner0', 'bner1', 'bner2'];
    for (let homeP0 of homeP) {
        const baner0 = document.createElement('div');
        home.appendChild(baner0)
        baner0.id = homeP0
        bner0.innerHTML = bingner0;
        // bner1.innerHTML = 'bingner0';
    }

    const txtsImagenP4 = () => {

        const txtP4 = ` <h2 class='tp42' >O que é Manutenção Preventiva?</h2><h3 class='tp4'>Clique aqui e saiba mais!</h3>`;
        const txtImagenP4 = document.createElement('h1');
        home.appendChild(txtImagenP4)
        txtImagenP4.style.color = "#ffffff"


        txtImagenP4.innerHTML = txtP4;
        const imagensP4 = document.createElement('div');
        const imagenP4 = '<img id = "imageP4"src="assets/img/contrato.jpg" alt="imagenP4" width="380"></img>';
        imagensP4.innerHTML = imagenP4;
        home.appendChild(imagensP4)
        const tp4 = document.querySelector('.tp4');
        txtImagenP4.appendChild(tp4);
        tp4.onmouseout = function () { this.style.color = ""; }
        tp4.onmouseover = function () { this.style.color = "yellow"; }
        tp4.addEventListener('click', function (e,) {
            const el = e.target;
            if ('click') {
                limpaTela();
                const manuPrev2 = document.createElement('div')
                home.appendChild(manuPrev2)
                manuPrev2.className = 'manuPrev2'

                manuPrev2.innerHTML = mtcprev2;
                window.scrollTo(0, 0);
            }
        });

        imagensP4.addEventListener('click', function (e,) {
            const el = e.target;
            if ('click') {
                limpaTela();
                const manuPrev = document.createElement('div')
                home.appendChild(manuPrev)
                manuPrev.className = 'manuPrev'

                manuPrev.innerHTML = mtcprev2;

                window.scrollTo(0, 0);

            }
        });

    }
    txtsImagenP4();




}
criaNoHome()


const ManutPrev = function () {

    manutPrev.addEventListener('click', function (e) {
        const el = e.target;
        if ('click') {
            limpaTela();
            const manuPrev = document.createElement('div')
            home.appendChild(manuPrev)
            manuPrev.className = 'manuPrev'

            manuPrev.innerHTML = mtcprev2;
            manutPrev.addEventListener("click", function () {
                window.scrollTo(0, 0);
            });
            // banerPromocao.innerHTML = baner1;
        }
    });

}
ManutPrev()

// const promocao = document.querySelector('.promocao');
// const promo1 ='';
// promocao.innerHTML = promo1 + 'oi';
// p1.innerHTML = vidd;

inicio.addEventListener('click', function (e) {
    const el = e.target;
    if ('click') {
        limpaTela();
        head.innerHTML = refr;
        inicio.addEventListener("click", function () {
            window.scrollTo(0, 0);
        });
        // banerPromocao.innerHTML = baner1;
    }
});
// servico.addEventListener('click', function (e) {
//     const el = e.target;
//     if ('click') {
//         // banerPromocao.innerHTML = '';
//         limpaTela();
//         textoservicosP2.innerHTML = '';
//         textoservicosP3.innerHTML = '';
//         apresentacao.innerHTML = '';
//         interfone.innerHTML = '';
//         imagens.innerHTML = '';
//         imagensP3.innerHTML = '';
//         window.scrollTo(0, 0);


//     }
// });
function portifolioCFTV() {
    const cftv = document.querySelector('.cftv');
    var fator_lupa = 0.99;
    var fator_lupaH = 1.1;
    // cftv.onmouseout = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; this.style.overflow = "hidden"; txtImagenP5.style.color = ""; }
    // cftv.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; this.style.overflow = "hidden"; txtImagenP5.style.color = "yellow"; }

    //     imagensP5.onmouseover = function () { this.style.height = (this.clientHeight * fator_lupaH) + "px";this.style.overflow="hidden"; };
    // imagensP5.onmouseout = function () { this.style.height = (this.clientHeight / fator_lupaH) + "px";this.style.overflow="hidden";  };

    // cftv.addEventListener('click', function (e,) {
    //     const el = e.target;
    //     if ('click') {
    //         limpaTela();
    //         // const e0P = document.querySelector(".e0P");
    //         apresentacao.innerHTML = cameraDeSeguranca + ' O Sistema de Circuito Fechado de TV (CFTV) é integrado por câmeras de segurança posicionadas estrategicamente para se ter visão dos pontos desejáveis de seu local. Após uma avaliação do local, são indicados os tipos de câmeras de segurança de acordo com o ambiente ou objetivo do sistema.<br></br><br></br>';
    //         textoservicosP2.innerHTML = dome + ' As Câmeras de Segurança Dome são ideais para ambientes internos, por serem discretas deixando o ambiente mais limpo. Oferecem imagens em resolução HD (720p) e FullHD (1080p), podendo também operar em modo analógico (900 TVL). Possuem iluminador de infravermelho que emite uma luz não visível ao olho humano, podendo alcançar uma distância de até 20 metros. Pode ser utilizada em ambientes com baixa ou nenhuma luminosidade. Utilizam lente 2,6mm ideal para ambientes amplos, garantindo maior abertura de imagem podendo chegar até 110º de cobertura.';
    //         window.scrollTo(0, 0);
    //     }
    // });



}
portifolioCFTV();
const segurancA = function () {


    seguranca.addEventListener('click', function (e) {
        const el = e.target;
        if ('click') {
            limpaTela();
            apresentacao.innerHTML = cameraDeSeguranca + ' O Sistema de Circuito Fechado de TV (CFTV) é integrado por câmeras de segurança posicionadas estrategicamente para se ter visão dos pontos desejáveis de seu local. Após uma avaliação do local, são indicados os tipos de câmeras de segurança de acordo com o ambiente ou objetivo do sistema.<br></br>';
            const seguran = ['t1','t2','t3'];
            for (let sega of seguran){
                const segur = document.createElement('div');
                apresentacao.appendChild(segur);
                segur.id = sega;
            }
            t1.innerHTML= '<img src= "assets/img/Integra-alarmes-e-CFTV.gif" ></img>'
            t2.innerHTML= '<img   src= "assets/img/fechadura eletronica.png" width ="468" ></img>'
            t3.innerHTML= '<img i src= "assets/img/antivirus.gif" width="468"></img>'

            window.scrollTo(0, 0);
        }
    });
}
segurancA();
function limpaTela() {

    apresentacao.innerHTML = '';
    home.innerHTML = '';
    // imagensP4.innerHTML = '';
    textoServicos2.innerHTML = '';
    imagemServicos2.innerHTML = '';
    imagemServicos.innerHTML = '';
    textoservicosP2.innerHTML = '';
    textoservicosP3.innerHTML = '';
    interfone.innerHTML = '';
    imagens.innerHTML = '';
    imagensP3.innerHTML = '';
    // imagensP5.innerHTML = "";
}

document.addEventListener("click", function (e) {
    console.log(e.target); //mostra objeto clickado da tela.
});

const conttos = function () {
    const conttos1 = document.querySelector('.conttos1');
    const contatos = document.querySelector('.contatos');
    const cnz = document.createElement('button');
    contatos.appendChild(cnz);
    cnz.innerHTML = '<img id="chamaNoZap" src="assets/img/chame-no-zap.png" alt="chamanozap" width="377" height= "110" ></img><br>';
    cnz.className = 'cnz'

    cnz.addEventListener('click', function (e) {
        const el = e.target;
        if ('click') {
            window.open("https://api.whatsapp.com/send?phone=5522997681134 ");
        }
    });

    contato = ['face', 'insta', 'mail'];
    for (let contats of contato) {
        const contatou = document.createElement('button');
        contatos.appendChild(contatou);
        contatou.className = "contats";
        contatou.id = contats;
    }
    // face.style.margin= "0 0 0 0"
    // zap.innerHTML='<img id="chamaNoZap" src="assets/img/chame-no-zap.png" alt="chamanozap" width="377" height= "110" ></img>';
    face.innerHTML = '<img id="faceBook" src="assets/img/face.png" alt="facebook" width="80" height= "80" ></img>';
    insta.innerHTML = '<img id="hinstagram" src="assets/img/insta2.png" alt="hinstagram" width="80" height= "80" ></img>';
    mail.innerHTML = '<img id="email" src="assets/img/mail.png" alt="email" width="80" height= "80" ></img>';
    conttos1.innerHTML = '';
    face.addEventListener('click', function (e) {
        const el = e.target;
        if ('click') {
            window.open("https://www.facebook.com/conserte.lagos");
        }
    });
    insta.addEventListener('click', function (e) {
        const el = e.target;
        if ('click') {
            window.open("https://www.instagram.com/consertelagos/");
        }
    });
    mail.addEventListener('click', function (e) {
        const el = e.target;
        if ('click') {
            window.open("mailto:consertelagos.com.br");
        }
    });




}
conttos();

(() => {
    if (!localStorage.pureJavaScriptCookies) {
        document.querySelector(".box-cookies").classList.remove('hide');
    }

    const acceptCookies = () => {
        document.querySelector(".box-cookies").classList.add('hide');
        localStorage.setItem("pureJavaScriptCookies", "accept");
    };

    const btnCookies = document.querySelector(".btn-cookies");

    btnCookies.addEventListener('click', acceptCookies);
})();

// const ulSquares = document.querySelector("ul.squares");
// for (let i = 0; i < 4; i++) {
//     const li = document.createElement("li");
//     const random = (min, max) => Math.random() * (max - min) + min;
//     const size = Math.floor(random(100, 110));
//     const position = random(1, 100);
//     const delay = random(0, 1);
//     const duration = random(6, 32);
//     li.style.width = `${size}px`;
//     li.style.height = `${size}px`;
//     li.style.bottom = `-${size}px`;
//     li.style.left = `${position}%`;
//     li.style.animationDelay = `${delay}s`;
//     li.style.animationDuration = `${duration}s`;
//     li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
//     li.innerHTML = '<img src="assets/img/logo consertelagos1.png" alt="images" width="170"></img>';
//     ulSquares.appendChild(li);
// }
