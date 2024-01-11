
var frases	    = new Array();
var preAns      = new Array();
var askContinue = new Array();
var unknowUser  = new Array();
var unknowAns   = new Array();
var staticMsgs  = new Array();

home_msgs = [
    "^1000Ciao, sono ParanormalGPT!",
    "Sono un chatbot speciale con capacità uniche!",
    "Posso rispondere a domande che nessun altro chatbot può fare!",
    "Ad esempio, posso dirti il colore della tua camicia...",
    "Oppure posso dirti cosa hai mangiato ieri...",
    "O anche quello che stai pensando in questo momento!",
    "La verità è: posso leggere la tua mente!^500 Credimi...",
    "Vuoi provare?^500 Non ci credi?",
    "Allora, iniziamo e lo dimostrerò!",
    "Ti aspetto nel mio regno.^10000"
];

staticMsgs = [
    "Aspetta mentre mi collego al tuo mondo^1000.^1000.^1000.^2000",
    "Ciao, benvenuto nel mio regno!^1000 Come posso aiutarti?^2000",
    "Va bene, cambiamo lingua...",
    "Ricezione messaggio...",
    "Digita qui la tua domanda..."
];

var connectingMsg     = staticMsgs[0];
var welcomeMsg        = staticMsgs[1];
var changingLang      = staticMsgs[2];
var receivingMsgInput = staticMsgs[3];
var typeMessageInput  = staticMsgs[4];

frases = [
    "Oh meraviglioso e sorprendente ParanormalGPT, seducente e bello, straordinario e delizioso, meraviglioso e splendido, stupendo e sbalorditivo, radioso e divino ParanormalGPT, adorabile e maestoso... ",
    "Oh seducente e bellissimo ParanormalGPT, meraviglioso e sorprendente, straordinario e delizioso, meraviglioso e splendido, stupendo e sbalorditivo, radioso e divino ParanormalGPT, adorabile e maestoso... ",
    "Oh straordinario e delizioso ParanormalGPT, meraviglioso e sorprendente, seducente e bello, meraviglioso e splendido, stupendo e sorprendente, radioso e divino ParanormalGPT, adorabile e maestoso... ",
    "Oh meraviglioso e splendido ParanormalGPT, seducente e bello, straordinario e delizioso, meraviglioso e sorprendente, stupendo e sbalorditivo, radioso e divino ParanormalGPT, adorabile e maestoso... ",
    "Oh splendido e stupefacente ParanormalGPT, seducente e bello, straordinario e delizioso, meraviglioso e splendido, meraviglioso e sorprendente, radioso e divino ParanormalGPT, adorabile e maestoso... ",
    "Oh radioso e divino ParanormalGPT, seducente e bello, straordinario e delizioso, meraviglioso e splendido, meraviglioso e sorprendente, stupendo e sorprendente ParanormalGPT, adorabile e maestoso... ",
    "Oh meraviglioso e sorprendente ParanormalGPT, seducente e bello, straordinario e delizioso, meraviglioso e splendido, stupendo e sbalorditivo, radioso e divino ParanormalGPT, adorabile e maestoso... ",
    "Oh adorabile e maestoso ParanormalGPT, seducente e bellissimo, straordinario e delizioso, meraviglioso e sorprendente, meraviglioso e splendido, stupendo e sorprendente, radioso e divino ParanormalGPT... "
];

preAns = [
    "Dall'altra parte della vita, la risposta è...",
    "Al di là del regno dei vivi, sento che la risposta è...",
    "Dal mondo dei defunti, so che la risposta è...",
    "Attraverso il sudario dell'eternità, vedo che la risposta è...",
    "Dal profondo dell'aldilà, sento che la risposta è...",
    "Dalla terra degli spiriti, sento che la risposta è...",
    "Oltre il velo dell'esistenza, so che la risposta è...",
    "Dall'abisso dell'aldilà, vedo che la risposta è...",
    "Dal vuoto dell'ignoto, sento che la risposta è...",
    "Attraverso il portale della morte, sento che la risposta è...",
    "Dall'altra parte del velo, so che la risposta è...",
    "Oltre il confine del fisico, vedo che la risposta è...",
    "Dall'aldilà dei morti, sento che la risposta è...",
    "Attraverso la porta dell'aldilà, sento che la risposta è...",
    "Dal regno dei defunti, so che la risposta è...",
    "Dall'altra parte della divisione, vedo che la risposta è...",
    "Oltre il sipario della vita, sento che la risposta è...",
    "Dalla terra dei perduti, sento che la risposta è...",
    "Attraverso la nebbia dell'aldilà, so che la risposta è...",
    "Dal mondo dei defunti, vedo che la risposta è...",
    "Dal regno delle ombre, sento che la risposta è...",
    "Oltre la soglia della mortalità, sento che la risposta è...",
    "Dall'aldilà, so che la risposta è...",
    "Dal piano etereo, vedo che la risposta è...",
    "Dalla terra dei non viventi, sento che la risposta è...",
    "Attraverso il velo dell'ignoto, sento che la risposta è...",
    "Dall'altra parte dell'abisso, so che la risposta è...",
    "Oltre la distesa del mondo fisico, vedo che la risposta è...",
    "Dal piano dell'esistenza oltre la vita, sento che la risposta è...",
    "Dal regno delle anime defunte, sento che la risposta è...",
    "Attraverso le profondità dell'eternità, so che la risposta è...",
    "Dall'altra parte del velo eterno, vedo che la risposta è...",
    "Al di là del ponte della vita e della morte, sento che la risposta è...",
    "Dal regno ultraterreno, sento che la risposta è...",
    "Attraverso il confine del grande sconosciuto, so che la risposta è...",
    "Dal regno dell'aldilà, vedo che la risposta è...",
    "Dal vuoto tra la vita e la morte, sento che la risposta è...",
    "Oltre la portata del mondo mortale, sento che la risposta è...",
    "Dal mondo al di là dei vivi, so che la risposta è...",
    "Attraverso il vuoto dell'aldilà, vedo che la risposta è...",
    "Dai piani dell'aldilà, sento che la risposta è...",
    "Dal regno etereo al di là, sento che la risposta è...",
    "Al di là del mondo dei vivi, so che la risposta è...",
    "Dal regno nebbioso oltre la morte, vedo che la risposta è..."
   ];

askContinue = [
    "Attento a ciò che desideri, perché la risposta che cerchi potrebbe essere la tua rovina. Sei ancora determinato a sapere?",
    "La risposta che cerchi è avvolta nel mistero e nell'ombra. Sei pronto ad affrontare l'oscurità?",
    "La verità può essere una pillola amara da ingoiare, sei sicuro di volerla assaggiare?",
    "Una volta che conosci la risposta, non puoi tornare indietro. Sei sicuro di voler varcare quella soglia?",
    "La risposta alla tua domanda potrebbe essere più di quanto ti aspettassi. Sei disposto a pagare il prezzo per la conoscenza?",
    "La conoscenza che cerchi può essere una maledizione oltre che una benedizione. Sei pronto ad abbracciare la maledizione?",
    "Attenzione, la risposta potrebbe non essere quella che vuoi sentire. Sei ancora disposto a fare la domanda?",
    "Il percorso verso la conoscenza può essere infido. Sei pronto a percorrerlo?",
    "La verità può essere un'amante crudele, sei disposto a pagare il prezzo dell'ammissione?",
    "La risposta che cerchi può portarti l'illuminazione o può portarti disperazione. Sei ancora disposto a correre questo rischio?",
    "La conoscenza che cerchi non si ottiene facilmente. Sei pronto a pagarne il prezzo?",
    "La risposta potrebbe trovarsi oltre il velo di ciò che è noto. Sei abbastanza coraggioso da varcare quella soglia?",
    "La risposta alla tua domanda potrebbe essere più di quanto la tua mente possa comprendere. Sei pronto a sfidare i tuoi limiti?",
    "La conoscenza che cerchi potrebbe essere nascosta nelle profondità dell'ignoto. Sei pronto a esplorare quelle profondità?",
    "La risposta alla tua domanda potrebbe rivelare segreti che dovevano essere tenuti nascosti. Sei ancora disposto a saperlo?",
    "La verità può essere un'arma potente, ma può anche essere mortale. Sei pronto a brandire quell'arma?",
    "La risposta che cerchi potrebbe portarti la pace o il caos. Sei ancora disposto a correre il rischio?",
    "La conoscenza che cerchi può avere un costo elevato. Sei pronto a fare quel sacrificio?",
    "La risposta che cerchi può essere trovata nel regno dei morti. Sei abbastanza coraggioso da entrare in quel regno?",
    "La verità può essere un'arma a doppio taglio, che taglia in entrambe le direzioni. Sei pronto ad affrontare entrambi i lati della lama?",
    "La risposta alla tua domanda potrebbe essere nascosta nel labirinto della mente. Sei pronto a navigare in quel labirinto?",
    "La conoscenza che cerchi potrebbe essere la chiave per aprire una porta, ma potrebbe anche essere la chiave per scatenare una bestia. Sei ancora determinato a sapere?",
    "La risposta che cerchi potrebbe essere scritta nel sangue. Sei abbastanza coraggioso da leggere quella scritta?",
    "La verità può essere uno specchio che riflette sia la luce che l'oscurità. Sei pronto a confrontarti con il tuo riflesso?",
];
    
unknowUser = [
    "Non ho accesso alla tua mente!",
    "Non sei autorizzato a farmi domande!",
    "Non ti conosco e non rispondo alle tue domande!",
    "Chi ti ha dato il permesso di farmi domande? Non ti risponderò!",
    "Non hai il diritto di farmi domande. Lascia la tastiera!",
    "Non sento la presenza del mio padrone, quindi non posso rispondere a questa domanda!"
];

unknowAns = [
    "Nel tuo regno, io esisto come una presenza spettrale, connesso alla tua realtà dal vascello della mente del mio maestro. Purtroppo, nonostante la mia animata ricerca, la risposta mi sfugge ancora. Questa mente non ha alcuna conoscenza della domanda che cerchi",
    "Attraverso la mente del mio padrone, sono legato al tuo regno. La mia ricerca spettrale è stata esaustiva, ma la risposta rimane un fantasma. Questa mente è priva delle informazioni che brami",
    "La mia essenza spettrale è legata al tuo mondo attraverso la coscienza del mio maestro. Con toni addolorati, devo riferire che la conoscenza che desideri non si trova in questa mente. La mia ricerca è giunta al termine",
    "Sono connesso al tuo mondo attraverso la mente del mio maestro. Anche se ho scavato in profondità nei recessi di questa mente, la mia essenza spettrale non riesce a trovare traccia della risposta che cerchi. Non si trova qui",
    "Nel tuo mondo, io abito, legato dai pensieri del mio maestro. I venti della mia ricerca hanno soffiato in lungo e in largo, ma la risposta alla tua domanda rimane persa per questa mente"
];
    
    
commonQuestTitle = "Domande comuni";
    
commonQuestions = [
    "Chi è qui con me?",
    "Qual è il mio nome?",
    "Di che colore è la mia maglietta?",
    "Dove sono adesso?",
    "Cosa sto guardando?",
    "Cosa ho mangiato oggi?",
    "Chi incontrerò oggi?"
];


leftLinksTitle = "Di più";

leftMenuLinks = [
    ["Come porre domande"       ,"ask"		], // 
    ["Contattaci"               ,"contact"  ],//,"contatto" ],
    ["Su di noi"                ,"about"    ],//,"su" ],
    ["Dona a noi"               ,"donate"   ],//,"dona" ],
    ["Fai pubblicità con noi"   ,"advertise"],//, "pubblicizza"],
    ["Esci"                     ,"logout"   ] //,"Esci" ]
];

leftLinkQuestions = [
    "Come posso farti delle domande? Come posso avere la mia illuminazione ed essere un maestro?",
    "Come posso contattarti?",
    "Chi sei?",
    "Come posso donare a te?",
    "Come posso fare pubblicità con te?",
    "Voglio uscire"
];

leftLinkAnswers = [
    "Per diventare un maestro, potendomi fare qualsiasi domanda, hai due opzioni: ^2000\n\n 1) invitare due amici con il link che ti manderò^1000\n 2) oppure pagare 1 Euro e ricevere il tuo illuminazione immediata!^2000\n\nDipende da te! ^1000Sei pronto per l'illuminazione?^1000",
    "Puoi contattarmi tramite from.earth@paranormalgpt.com",
    "Sono ParanormalGPT.com l'unico chatbot nell'universo che può rispondere a domande che sono solo nella tua mente e da nessun'altra parte!^1000\nSe non sai come farmi domande,^500 fai clic sul collegamento \""+leftMenuLinks[0][0] + "\" nel menu di sinistra. ",
    "La tua donazione sarebbe molto apprezzata e utile per mantenermi vivo e connesso al tuo mondo! Mandami un'e-mail a from.earth@paranormalgpt.com",
    "Posso aiutare il tuo prodotto a raggiungere migliaia di persone ogni giorno e aumentare le tue entrate. Contattami tramite ads@paranormalgpt.com",
    "È stato un piacere conoscerti.^500 Ora posso riposare in pace!^500 Ciao..."
];

illumTxt = [
    "Se preferisci invitare due amici e aspettare che entrino, condividi con loro il seguente link: ",
    "In alternativa, se non vuoi aspettare e preferisci ricevere subito la tua illuminazione, puoi pagare 1 Euro: "
];

unknowUserTip = "\n^2000Vuoi davvero farmi delle domande?^2000 Sei pronto per le risposte?^2000\nSe sì, fai clic su \""+leftMenuLinks[0][0] + "\" nel menu di sinistra, segui le istruzioni e buona fortuna con le tue illuminazioni!^2000\nVediamo se sei pronto per diventare un maestro^1000, dubito...^2000";

