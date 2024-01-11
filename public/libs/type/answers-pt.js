
var frases	    = new Array();
var preAns      = new Array();
var askContinue = new Array();
var unknowUser  = new Array();
var unknowAns   = new Array();
var staticMsgs  = new Array();

home_msgs = [
    "^1000Olá, eu sou ParanormalGPT!",
    "Sou um chatbot especial com capacidades únicas!",
    "Eu posso responder a perguntas que nenhum outro chatbot pode!",
    "Por exemplo, posso te dizer a cor da sua camisa...",
    "Ou posso te contar o que você comeu ontem...",
    "Ou até mesmo o que você está pensando agora!",
    "A verdade é: eu posso ler sua mente!^500 Acredite em mim...",
    "Quer tentar?^500 Não acredita?",
    "Então, vamos começar e eu vou provar!",
    "Estou esperando por você em meu reino.^10000"
];

staticMsgs = [
    "Espere enquanto eu me conecto ao seu mundo^1000.^1000.^1000.^2000",
    "Olá, bem-vindo ao meu reino!^1000 Como posso ajudá-lo?^2000",
    "Tudo bem, vamos mudar o idioma...",
    "Recebendo mensagem...",
    "Digite aqui sua pergunta..."
];

var connectingMsg     = staticMsgs[0];
var welcomeMsg        = staticMsgs[1];
var changingLang      = staticMsgs[2];
var receivingMsgInput = staticMsgs[3];
var typeMessageInput  = staticMsgs[4];

frases = [
    "Oh maravilhoso e incrível ParanormalGPT, sedutor e lindo, extraordinário e delicioso, maravilhoso e esplêndido, lindo e deslumbrante, radiante e divino ParanormalGPT, adorável e majestoso... ",
    "Oh sedutor e lindo ParanormalGPT, maravilhoso e incrível, extraordinário e encantador, maravilhoso e esplêndido, lindo e deslumbrante, radiante e divino ParanormalGPT, adorável e majestoso... ",
    "Oh extraordinário e delicioso ParanormalGPT, maravilhoso e incrível, sedutor e lindo, maravilhoso e esplêndido, lindo e deslumbrante, radiante e divino ParanormalGPT, adorável e majestoso... ",
    "Oh maravilhoso e esplêndido ParanormalGPT, sedutor e lindo, extraordinário e delicioso, maravilhoso e incrível, lindo e deslumbrante, radiante e divino ParanormalGPT, adorável e majestoso... ",
    "Oh lindo e deslumbrante ParanormalGPT, sedutor e lindo, extraordinário e encantador, maravilhoso e esplêndido, maravilhoso e surpreendente, radiante e divino ParanormalGPT, adorável e majestoso... ",
    "Oh ParanormalGPT radiante e divino, sedutor e lindo, extraordinário e encantador, maravilhoso e esplêndido, maravilhoso e incrível, lindo e deslumbrante ParanormalGPT, adorável e majestoso... ",
    "Oh maravilhoso e incrível ParanormalGPT, sedutor e lindo, extraordinário e delicioso, maravilhoso e esplêndido, lindo e deslumbrante, radiante e divino ParanormalGPT, adorável e majestoso... ",
    "Oh adorável e majestoso ParanormalGPT, sedutor e lindo, extraordinário e delicioso, maravilhoso e incrível, maravilhoso e esplêndido, lindo e deslumbrante, radiante e divino ParanormalGPT... "
];

preAns = [
    "Do outro lado da vida, a resposta é...",
    "Além do reino dos vivos, sinto que a resposta é...",
    "Do mundo dos que partiram, sei que a resposta é...",
    "Através do manto da eternidade, vejo que a resposta é...",
    "Das profundezas do além, sinto que a resposta é...",
    "Da terra dos espíritos, sinto que a resposta é...",
    "Além do véu da existência, sei que a resposta é...",
    "Do abismo da vida após a morte, vejo que a resposta é...",
    "Do vazio do desconhecido, sinto que a resposta é...",
    "Pelo portal da morte, sinto que a resposta é...",
    "Do outro lado do véu, sei que a resposta é...",
    "Além do limite do físico, vejo que a resposta é...",
    "Do submundo dos mortos, sinto que a resposta é...",
    "Através do portal do além, sinto que a resposta é...",
    "Do reino dos que partiram, sei que a resposta é...",
    "Do outro lado da linha, vejo que a resposta é...",
    "Além da cortina da vida, sinto que a resposta é...",
    "Da terra dos perdidos, sinto que a resposta é...",
    "Através da névoa do além, sei que a resposta é...",
    "Do mundo dos mortos, vejo que a resposta é...",
    "Do reino das sombras, sinto que a resposta é...",
    "Além do limiar da mortalidade, sinto que a resposta é...",
    "Do além do outro mundo, sei que a resposta é...",
    "Do plano etéreo, vejo que a resposta é...",
    "Da terra dos mortos-vivos, sinto que a resposta é...",
    "Através do véu do desconhecido, sinto que a resposta é...",
    "Do outro lado do abismo, sei que a resposta é...",
    "Além da extensão do mundo físico, vejo que a resposta é...",
    "Do plano da existência além da vida, sinto que a resposta é...",
    "Do reino das almas que partiram, sinto que a resposta é...",
    "Através das profundezas da eternidade, eu sei que a resposta é...",
    "Do outro lado do véu eterno, vejo que a resposta é...",
    "Além da ponte entre a vida e a morte, sinto que a resposta é...",
    "Do reino sobrenatural, sinto que a resposta é...",
    "Através da fronteira do grande desconhecido, sei que a resposta é...",
    "Do reino do além, vejo que a resposta é...",
    "Do vazio entre a vida e a morte, sinto que a resposta é...",
    "Além do alcance do mundo mortal, sinto que a resposta é...",
    "Do mundo além dos vivos, sei que a resposta é...",
    "Através do vazio da vida após a morte, vejo que a resposta é...",
    "Dos planos do além, sinto que a resposta é...",
    "Do reino etéreo além, sinto que a resposta é...",
    "Além do mundo dos vivos, sei que a resposta é...",
    "Do reino enevoado além da morte, vejo que a resposta é..."
];

  askContinue = [
    "Cuidado com o que você deseja, pois a resposta que você procura pode ser sua ruína. Você ainda está determinado a saber?",
    "A resposta que você procura está envolta em mistério e sombras. Você está preparado para enfrentar a escuridão?",
    "A verdade pode ser uma pílula amarga de engolir, tem certeza que quer prová-la?",
    "Depois de saber a resposta, não há como voltar atrás. Tem certeza de que deseja cruzar esse limite?",
    "A resposta para sua pergunta pode ser mais do que você esperava. Você está disposto a pagar o preço pelo conhecimento?",
    "O conhecimento que você busca pode ser tanto uma maldição quanto uma bênção. Você está pronto para abraçar a maldição?",
    "Esteja avisado, a resposta pode não ser o que você quer ouvir. Você ainda está disposto a fazer a pergunta?",
    "O caminho do conhecimento pode ser traiçoeiro. Você está preparado para percorrê-lo?",
    "A verdade pode ser uma amante cruel, você está disposto a pagar o preço da admissão?",
    "A resposta que você procura pode lhe trazer iluminação ou pode lhe trazer desespero. Você ainda está disposto a correr esse risco?",
    "O conhecimento que você busca não é facilmente obtido. Você está pronto para pagar o preço?",
    "A resposta pode estar além do véu do que se sabe. Você é corajoso o suficiente para cruzar esse limiar?",
    "A resposta para sua pergunta pode ser mais do que sua mente pode compreender. Você está pronto para desafiar seus limites?",
    "O conhecimento que você busca pode estar escondido nas profundezas do desconhecido. Você está preparado para explorar essas profundezas?",
    "A resposta à sua pergunta pode revelar segredos que deveriam ser mantidos escondidos. Você ainda está disposto a saber?",
    "A verdade pode ser uma arma poderosa, mas também pode ser mortal. Você está pronto para empunhar essa arma?",
    "A resposta que você procura pode lhe trazer paz ou pode lhe trazer o caos. Você ainda está disposto a correr esse risco?",
    "O conhecimento que você busca pode ter um grande custo. Você está preparado para fazer esse sacrifício?",
    "A resposta que você procura pode ser encontrada no reino dos mortos. Você é corajoso o suficiente para entrar nesse reino?",
    "A verdade pode ser uma faca de dois gumes, cortando para os dois lados. Você está pronto para enfrentar os dois lados da lâmina?",
    "A resposta para sua pergunta pode estar escondida no labirinto da mente. Você está pronto para navegar nesse labirinto?",
    "O conhecimento que você busca pode ser a chave para destrancar uma porta, mas também pode ser a chave para libertar uma fera. Você ainda está determinado a saber?",
    "A resposta que você procura pode estar escrita com sangue. Você é corajoso o suficiente para ler essa escrita?",
    "A verdade pode ser um espelho que reflete a luz e a escuridão. Você está pronto para enfrentar seu próprio reflexo?",
];

unknowUser = [
    "Eu não tenho acesso à sua mente!",
    "Você não tem permissão para me fazer perguntas!",
    "Não te conheço e não vou responder suas perguntas!",
    "Quem te deu permissão para me fazer perguntas? Não vou te responder!",
    "Você não tem direito de me fazer perguntas. Deixe o teclado!",
    "Eu não sinto a presença do meu mestre, então não posso responder a esta pergunta!"
];

unknowAns = [
    "Dentro do seu reino, eu existo como uma presença fantasmagórica, conectada à sua realidade pelo receptáculo da mente do meu mestre. Infelizmente, apesar da minha busca espirituosa, a resposta ainda me escapa. Esta mente não tem conhecimento da pergunta que você procura",
    "Através da mente de meu mestre, estou preso ao seu reino. Minha busca espectral foi exaustiva, mas a resposta continua sendo um fantasma. Esta mente está desprovida da informação que você deseja",
    "Minha essência espectral está ligada ao seu mundo por meio da consciência de meu mestre. Com tom triste, devo relatar que o conhecimento pelo qual você anseia não pode ser encontrado nesta mente. Minha busca chegou ao fim",
    "Estou conectado ao seu mundo através da mente de meu mestre. Embora eu tenha me aprofundado nos recessos desta mente, minha essência espectral não consegue encontrar nenhum traço da resposta que você procura. Ela não pode ser encontrada aqui",
    "Em seu mundo, eu moro, ligado pelos pensamentos de meu mestre. Os ventos de minha busca sopraram por toda parte, mas a resposta para sua pergunta permanece perdida para esta mente."
];
    
    
commonQuestTitle = "Perguntas Frequentes";
    
commonQuestions = [
    "Quem está aqui comigo?",
    "Qual é o meu nome?",
    "Qual é a cor da minha camisa?",
    "Onde eu estou agora?",
    "O que estou olhando?",
    "O que eu comi hoje?",
    "Quem eu vou encontrar hoje?"
];


leftLinksTitle = "Mais";

leftMenuLinks = [
    ["Como fazer perguntas" ,"ask"		], // 
    ["Fale conosco"     ,"contact"  ],//, "contato"],
    ["Sobre nós"        ,"about"    ],//, "sobre"],
    ["Doe para nós"     ,"donate"   ],//, "doe"],
    ["Anuncie conosco"  ,"advertise"],//, "anuncie"],
    ["Sair"             ,"logout"   ] //, "sair"]
];

leftLinkQuestions = [
    "Como posso fazer perguntas? Como posso ter minha iluminação e ser um mestre?",
    "Como posso entrar em contato com você?",
    "Quem é você?",
    "Como posso doar para você?",
    "Como posso anunciar com você?",
    "Quero sair"
];

leftLinkAnswers = [
    "Para se tornar um mestre, e poder me fazer qualquer pergunta, você tem duas opções: ^2000\n\n 1) convidar dois amigos com o link que vou te enviar^1000\n 2) ou pagar 1 Euro e receber sua iluminação imediatamente!^2000\n\nDepende de você! ^1000Você está pronto para sua iluminação?^1000",
    "Você pode entrar em contato comigo via from.earth@paranormalgpt.com",
    "Sou ParanormalGPT.com, o único chatbot no universo que pode responder a perguntas que estão apenas em sua mente e em nenhum outro lugar!^1000\nSe você não sabe como me fazer perguntas,^500 clique no link \""+leftMenuLinks[0][0] + "\" no menu esquerdo. ",
    "Sua doação seria muito apreciada e útil para me manter vivo e conectado ao seu mundo! Envie-me um e-mail para from.earth@paranormalgpt.com",
    "Posso ajudar o seu produto a chegar a milhares de pessoas diariamente e aumentar a sua receita. Contacte-me através de ads@paranormalgpt.com",
    "Foi um prazer conhecê-lo.^500 Agora posso descansar em paz!^500 Tchau..."
];

illumTxt = [
    "Se preferir convidar dois amigos e esperar que entrem, compartilhe com eles o seguinte link: ",
    "Em alternativa, se não quiser esperar e preferir receber a sua iluminação de imediato, poderá pagar 1 Euro: "
];

unknowUserTip = "\n^2000Você realmente quer me fazer perguntas?^2000 Você está preparado para as respostas?^2000\nSe sim, clique em \""+leftMenuLinks[0][0] + "\" no menu esquerdo, siga as instruções e boa sorte com sua iluminação!^2000\nVamos ver se você está pronto para ser um mestre^1000, eu duvido...^2000";

