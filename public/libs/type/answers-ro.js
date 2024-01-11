
var frases	    = new Array();
var preAns      = new Array();
var askContinue = new Array();
var unknowUser  = new Array();
var unknowAns   = new Array();
var staticMsgs  = new Array();

home_msgs = [
	"^1000Bună ziua, sunt ParanormalGPT!",
	"Sunt un chatbot special, cu capacități unice!",
	"Pot să răspund la întrebări la care niciun alt chatbot nu le poate!",
	"De exemplu, pot să-ți spun culoarea cămășii tale...",
	"Sau pot să-ți spun ce ai mâncat ieri...",
	"Sau chiar la ce te gândești acum!",
	"Adevărul este: pot să-ți citesc gândurile!^500 Crede-mă...",
	"Vrei să încerci?^500 Nu crezi?",
	"Deci, hai să începem și o voi dovedi!",
	"Te aștept pe tărâmul meu.^10000"
];

staticMsgs = [
	"Așteaptă până mă conectez la lumea ta^1000.^1000.^1000.^2000",
	"Bună, bine ai venit pe tărâmul meu!^1000 Cum te pot ajuta?^2000",
	"Bine, să schimbăm limba...",
	"Se primește mesaj...",
	"Tastați aici întrebarea dvs...."
];

var connectingMsg     = staticMsgs[0];
var welcomeMsg        = staticMsgs[1];
var changingLang      = staticMsgs[2];
var receivingMsgInput = staticMsgs[3];
var typeMessageInput  = staticMsgs[4];

frases = [
	"Oh ParanormalGPT minunat și uimitor, seducător și frumos, extraordinar și încântător, minunat și splendid, superb și uluitor, ParanormalGPT radiant și divin, drăguț și maiestuos... ",
	"Oh ParanormalGPT seducător și frumos, minunat și uimitor, extraordinar și încântător, minunat și splendid, superb și uluitor, ParanormalGPT radiant și divin, minunat și maiestuos... ",
	"Oh ParanormalGPT extraordinar și încântător, minunat și uimitor, seducător și frumos, minunat și splendid, superb și uluitor, ParanormalGPT radiant și divin, minunat și maiestuos... ",
	"Oh ParanormalGPT minunat și splendid, seducător și frumos, extraordinar și încântător, minunat și uimitor, superb și uluitor, ParanormalGPT radiant și divin, minunat și maiestuos... ",
	"Oh ParanormalGPT superb și uluitor, seducător și frumos, extraordinar și încântător, minunat și splendid, minunat și uimitor, ParanormalGPT radiant și divin, drăguț și maiestuos... ",
	"Oh ParanormalGPT radiant și divin, seducător și frumos, extraordinar și încântător, minunat și splendid, minunat și uimitor, superb și uimitor ParanormalGPT, minunat și maiestuos... ",
	"Oh ParanormalGPT minunat și uimitor, seducător și frumos, extraordinar și încântător, minunat și splendid, superb și uluitor, ParanormalGPT radiant și divin, drăguț și maiestuos... ",
	"Oh minunat și maiestuos ParanormalGPT, seducător și frumos, extraordinar și încântător, minunat și uimitor, minunat și splendid, superb și uluitor, radiant și divin ParanormalGPT... "
];

preAns = [
	"Din cealaltă parte a vieții, răspunsul este...",
	"Dincolo de tărâmul celor vii, simt că răspunsul este...",
	"Din lumea celor plecați, știu că răspunsul este...",
	"Prin giulgiul eternității, văd că răspunsul este...",
	"Din adâncurile dincolo, simt că răspunsul este...",
	"Din țara spiritelor, simt că răspunsul este...",
	"Dincolo de vălul existenței, știu că răspunsul este...",
	"Din abisul vieții de apoi văd că răspunsul este...",
	"Din vidul necunoscutului, simt că răspunsul este...",
	"Prin portalul morții, simt că răspunsul este...",
	"De cealaltă parte a vălului, știu că răspunsul este...",
	"Dincolo de granița fizicului, văd că răspunsul este...",
	"Din lumea de jos a morților, simt că răspunsul este...",
	"Prin poarta de dincolo, simt că răspunsul este...",
	"Din tărâmul celor plecați, știu că răspunsul este...",
	"De cealaltă parte a diviziunii, văd că răspunsul este...",
	"Dincolo de cortina vieții, simt că răspunsul este...",
	"Din țara celor pierduți, simt că răspunsul este...",
	"Prin ceața de dincolo, știu că răspunsul este...",
	"Din lumea decedaților, văd că răspunsul este...",
	"Din tărâmul umbrelor, simt că răspunsul este...",
	"Dincolo de pragul mortalității, simt că răspunsul este...",
	"De dincolo de lumea de apoi, știu că răspunsul este...",
	"Din planul eteric, văd că răspunsul este...",
	"Din țara celor nevii, simt că răspunsul este...",
	"Prin vălul necunoscutului, simt că răspunsul este...",
	"De cealaltă parte a prăpastiei, știu că răspunsul este...",
	"Dincolo de întinderea lumii fizice, văd că răspunsul este...",
	"Din planul existenței dincolo de viață, simt că răspunsul este...",
	"Din tărâmul sufletelor plecate, simt că răspunsul este...",
	"Prin adâncurile eternității, știu că răspunsul este...",
	"De cealaltă parte a vălului etern, văd că răspunsul este...",
	"Dincolo de puntea vieții și a morții, simt că răspunsul este...",
	"De pe tărâmul de altă lume, simt că răspunsul este...",
	"Prin granița marelui necunoscut, știu că răspunsul este...",
	"Din tărâmul de dincolo, văd că răspunsul este...",
	"Din vidul dintre viață și moarte, simt că răspunsul este...",
	"Dincolo de îndemâna lumii muritorilor, simt că răspunsul este...",
	"Din lumea de dincolo de cei vii, știu că răspunsul este...",
	"Prin golul vieții de apoi văd că răspunsul este...",
	"Din avioanele de dincolo, simt că răspunsul este...",
	"Din tărâmul eteric de dincolo, simt că răspunsul este...",
	"Dincolo de lumea celor vii, știu că răspunsul este...",
	"Din tărâmul cețos dincolo de moarte, văd că răspunsul este..."  
];

askContinue = [
	"Ai grijă la ceea ce îți dorești, pentru că răspunsul pe care îl cauți poate fi distrugerea ta. Încă ești hotărât să știi?",
	"Răspunsul pe care îl cauți este învăluit în mister și umbre. Ești pregătit să înfrunți întunericul?",
	"Adevărul poate fi o pastilă amară de înghițit, ești sigur că vrei să o gusti?",
	"Odată ce știi răspunsul, nu mai există întoarcere. Ești sigur că vrei să treci acel prag?",
	"Răspunsul la întrebarea ta poate fi mai mult decât te-ai chinuit. Ești dispus să plătești prețul pentru cunoaștere?",
	"Cunoașterea pe care o cauți poate fi atât un blestem, cât și o binecuvântare. Ești gata să îmbrățișezi blestemul?",
	"Fii avertizat, răspunsul poate să nu fie ceea ce vrei să auzi. Mai ești dispus să pui întrebarea?",
	"Calea către cunoaștere poate fi una perfidă. Ești pregătit să o mergi?",
	"Adevărul poate fi o amantă crudă, ești dispus să plătești prețul admiterii?",
	"Răspunsul pe care îl cauți îți poate aduce iluminare sau îți poate aduce disperare. Mai ești dispus să-ți asumi acest risc?",
	"Cunoștințele pe care le cauți nu sunt ușor de obținut. Ești gata să plătești prețul?",
	"Răspunsul s-ar putea să se afle dincolo de vălul a ceea ce se știe. Ești suficient de curajos să treci acel prag?",
	"Răspunsul la întrebarea ta poate fi mai mult decât poate înțelege mintea ta. Ești gata să-ți provoci limitele?",
	"Cunoașterea pe care o cauți poate fi ascunsă în adâncurile necunoscutului. Ești pregătit să explorezi acele adâncimi?",
	"Răspunsul la întrebarea ta poate dezvălui secrete care au fost menite să fie ținute ascunse. Mai ești dispus să știi?",
	"Adevărul poate fi o armă puternică, dar poate fi și una mortală. Ești gata să mânuiești acea armă?",
	"Răspunsul pe care îl cauți îți poate aduce pacea sau îți poate aduce haos. Încă ești dispus să afli această șansă?",
	"Cunoștințele pe care le cauți pot avea un preț mare. Ești pregătit să faci acel sacrificiu?",
	"Răspunsul pe care îl cauți poate fi găsit în tărâmul morților. Ești suficient de curajos să intri în acel tărâm?",
	"Adevărul poate fi o sabie cu două tăișuri, tăind în ambele părți. Ești gata să înfrunți ambele părți ale lamei?",
	"Răspunsul la întrebarea ta poate fi ascuns în labirintul minții. Ești gata să navighezi în acel labirint?",
	"Cunoștințele pe care le cauți pot fi cheia pentru a descuia o ușă, dar poate fi și cheia pentru a dezlănțui o fiară. Încă ești hotărât să știi?",
	"Răspunsul pe care îl cauți poate fi scris cu sânge. Ești suficient de curajos să citești acea scriere?",
	"Adevărul poate fi o oglindă care reflectă atât lumina, cât și întunericul. Ești gata să-ți confrunți propria reflecție?"
];

unknowUser = [
	"Cine esti tu? Nu am acces la mintea ta!",
	"Nu ai voie să-mi pui întrebări!",
	"Nu te cunosc și nu îți voi răspunde la întrebări!",
	"Cine ți-a dat voie să-mi pui întrebări? Nu-ți voi răspunde!",
	"Nu ai drepturi să-mi pui întrebări. Lasă tastatura!",
	"Nu simt prezența stăpânului meu. Nu voi răspunde la această întrebare!"
];
	
unknowAns = [
	"În tărâmul tău, exist ca o prezență fantomatică, conectată la realitatea ta prin vasul minții stăpânului meu. Din păcate, în ciuda urmăririi mele pline de spirit, răspunsul încă mă scapă. Această minte nu știe despre întrebarea pe care o cauți",
	"Prin mintea stăpânului meu, sunt legat de tărâmul tău. Căutarea mea spectrală a fost exhaustivă, dar răspunsul rămâne o fantomă. Această minte este lipsită de informațiile pe care le dorești",
	"Esența mea spectrală este legată de lumea ta prin intermediul conștiinței maestrului meu. Cu tonuri dureroase, trebuie să raportez că cunoștințele după care tânjiți nu se găsesc în această minte. Căutarea mea a luat sfârșit",
	"Sunt conectat la lumea ta prin mintea stăpânului meu. Deși am pătruns adânc în adâncurile acestei minți, esența mea spectrală nu poate găsi nicio urmă a răspunsului pe care îl cauți. Nu se găsește aici",
	"În lumea ta, locuiesc, legat de gândurile stăpânului meu. Vânturile căutării mele au suflat departe și larg, dar răspunsul la întrebarea ta rămâne pierdut pentru această minte"
];
	
	
commonQuestTitle = "Întrebări comune";
	
commonQuestions = [
	"Cine sunt aici cu mine?",
	"Care este numele meu?",
	"Care este culoarea cămășii mele?",
	"Unde sunt acum?",
	"La ce mă uit?",
	"Ce am mâncat azi?",
	"Cu cine mă voi întâlni astăzi?"
];


leftLinksTitle = "Mai mult";

leftMenuLinks = [
	["Cum să pui întrebări" 	,"ask"		], // 
	["Contactați-ne"			,"contact"  ],//, "contact"],
	["Despre noi"				,"about"    ],//, "despre"],
	["Donează-ne"				,"donate"   ],//, "donează"],
	["Fă publicitate cu noi"	,"advertise"],//, "reclamă"],
	["Deconectare"				,"logout"   ] //, "deconectare"]
];

leftLinkQuestions = [
	"Cum pot să vă pun întrebări? Cum pot să am iluminarea mea și să fiu maestru?",
	"Cum te pot contacta?",
	"Cine eşti tu?",
	"Cum pot să-ți donez?",
	"Cum pot face publicitate cu tine?",
	"Vreau să mă deconectez"
];

leftLinkAnswers = [
	"Pentru a deveni un maestru, capabil să-mi pună orice întrebări, ai două opțiuni: ^2000\n\n 1) invită doi prieteni cu link-ul pe care ți-l voi trimite^1000\n 2) sau plătiți 1 euro și primești iluminarea ta imediat!^2000\n\nDepinde de tine! ^1000Ești gata pentru iluminare?^1000",
	"Ma puteți contacta prin from.earth@paranormalgpt.com",
	"Sunt ParanormalGPT.com singurul chatbot din univers care poate răspunde la întrebări care sunt doar în mintea ta și nicăieri altundeva!^1000\nDacă nu știi cum să-mi pui întrebări,^500 faceți clic pe linkul \""+leftMenuLinks[0][0] + "\" din meniul din stânga. ",
	"Donația ta ar fi foarte apreciată și utilă pentru a mă menține în viață și conectat la lumea ta! Trimite-mi un e-mail la from.earth@paranormalgpt.com",
	"Pot să vă ajut produsul să ajungă la mii de oameni zilnic și să vă sporesc veniturile. Contactați-mă prin ads@paranormalgpt.com",
	"A fost o plăcere să te cunosc.^500 Acum mă pot odihni în pace!^500 Pa..."
];

illumTxt = [
	"Dacă preferi să inviți doi prieteni și să aștepți să intre, distribuie următorul link cu ei: ",
	"Alternativ, dacă nu vrei să aștepți și preferi să-ți primești iluminarea imediat, poți plăti 1 euro: "
];

unknowUserTip = "\n^2000Chiar vrei să-mi pui întrebări?^2000 Sunteți pregătit pentru răspunsuri?^2000\nDacă da, faceți clic în \""+leftMenuLinks[0][0] + "\" în meniul din stânga, urmați instrucțiunile și succes cu iluminarea ta!^2000\nSă vedem dacă ești gata să fii maestru^1000, mă îndoiesc...^2000";

