
var frases	    = new Array();
var preAns      = new Array();
var askContinue = new Array();
var unknowUser  = new Array();
var unknowAns   = new Array();
var staticMsgs  = new Array();

home_msgs = [
	"^1000Bok, ja sam ParanormalGPT!",
	"Ja sam poseban chatbot s jedinstvenim mogućnostima!",
	"Mogu odgovoriti na pitanja koja nijedan drugi chatbot ne može!",
	"Na primjer, mogu vam reći boju vaše košulje...",
	"Ili ti mogu reći što si jeo jučer...",
	"Ili čak ono o čemu trenutno razmišljate!",
	"Istina je: mogu ti čitati misli!^500 Vjeruj mi...",
	"Želiš li pokušati?^500 Zar ne vjeruješ?",
	"Dakle, počnimo i ja ću to dokazati!",
	"Čekam te u svom carstvu.^10000"
];

staticMsgs = [
	"Čekaj dok se spojim na tvoj svijet^1000.^1000.^1000.^2000",
	"Bok, dobrodošli u moje kraljevstvo!^1000 Kako vam mogu pomoći?^2000",
	"U redu, promijenimo jezik...",
	"Primanje poruke...",
	"Ovdje upišite svoje pitanje..."
];

var connectingMsg     = staticMsgs[0];
var welcomeMsg        = staticMsgs[1];
var changingLang      = staticMsgs[2];
var receivingMsgInput = staticMsgs[3];
var typeMessageInput  = staticMsgs[4];

frases = [
	"O divni i nevjerojatni ParanormalGPT, zavodljivi i lijepi, izvanredni i divni, čudesni i sjajni, prekrasni i zadivljujući, blistavi i božanski ParanormalGPT, ljupki i veličanstveni... ",
	"O zavodljivo i prekrasno ParanormalGPT, divno i nevjerojatno, izvanredno i divno, čudesno i sjajno, prekrasno i zapanjujuće, blistavo i božansko ParanormalGPT, ljupko i veličanstveno... ",
	"O izvanredni i divni ParanormalGPT, divan i nevjerojatan, zavodljiv i prekrasan, veličanstven i sjajan, prekrasan i zadivljujući, blistav i božanski ParanormalGPT, ljupki i veličanstveni... ",
	"O divni i sjajni ParanormalGPT, zavodljivi i lijepi, izvanredni i divni, divni i nevjerojatni, prekrasni i zapanjujući, blistavi i božanski ParanormalGPT, ljupki i veličanstveni... ",
	"O divni i zadivljujući ParanormalGPT, zavodljivi i lijepi, nesvakidašnji i divni, čudesni i sjajni, divni i nevjerojatni, blistavi i božanski ParanormalGPT, ljupki i veličanstveni... ",
	"O blistavi i božanski ParanormalGPT, zavodljivi i lijepi, izvanredni i divni, čudesni i sjajni, divni i nevjerojatni, prekrasni i zapanjujući ParanormalGPT, ljupki i veličanstveni... ",
	"O divni i nevjerojatni ParanormalGPT, zavodljivi i lijepi, izvanredni i divni, čudesni i sjajni, prekrasni i zadivljujući, blistavi i božanski ParanormalGPT, ljupki i veličanstveni... ",
	"O divni i veličanstveni ParanormalGPT, zavodljivi i prekrasni, izvanredni i divni, divni i nevjerojatni, čudesni i sjajni, prekrasni i zadivljujući, blistavi i božanski ParanormalGPT... "
];

preAns = [
	"S druge strane života, odgovor je...",
	"Izvan carstva živih, slutim da je odgovor...",
	"Iz svijeta preminulih znam da je odgovor...",
	"Kroz pokrov vječnosti vidim da je odgovor...",
	"Iz dubine onostranog, osjećam da je odgovor...",
	"Iz zemlje duhova slutim da je odgovor...",
	"Izvan vela postojanja, znam da je odgovor...",
	"Iz ponora zagrobnog života vidim da je odgovor...",
	"Iz praznine nepoznatog, osjećam da je odgovor...",
	"Kroz portal smrti naslućujem da je odgovor...",
	"S druge strane vela, znam da je odgovor...",
	"Izvan granice fizičkog, vidim da je odgovor...",
	"Iz podzemlja mrtvih, osjećam da je odgovor...",
	"Kroz kapiju onostranog, osjećam da je odgovor...",
	"Iz carstva preminulih, znam da je odgovor...",
	"S druge strane podjele, vidim da je odgovor...",
	"Izvan zastora života, osjećam da je odgovor...",
	"Iz zemlje izgubljenih slutim da je odgovor...",
	"Kroz maglu onostranog, znam da je odgovor...",
	"Iz svijeta pokojnika vidim da je odgovor...",
	"Iz carstva sjena, osjećam da je odgovor...",
	"Izvan praga smrtnosti, osjećam da je odgovor...",
	"Iz zagrobnog svijeta znam da je odgovor...",
	"S eterične razine vidim da je odgovor...",
	"Iz zemlje neživih, osjećam da je odgovor...",
	"Kroz veo nepoznatog slutim da je odgovor...",
	"S druge strane ponora, znam da je odgovor...",
	"Izvan prostranstva fizičkog svijeta, vidim da je odgovor...",
	"S razine postojanja izvan života, osjećam da je odgovor...",
	"Iz carstva preminulih duša, slutim da je odgovor...",
	"Kroz dubinu vječnosti, znam da je odgovor...",
	"S druge strane vječnog vela, vidim da je odgovor...",
	"Izvan mosta života i smrti, osjećam da je odgovor...",
	"Iz onostranog carstva, slutim da je odgovor...",
	"Kroz granicu velikog nepoznatog, znam da je odgovor...",
	"Iz područja onostranog, vidim da je odgovor...",
	"Iz praznine između života i smrti, osjećam da je odgovor...",
	"Izvan dosega svijeta smrtnika, slutim da je odgovor...",
	"Iz svijeta izvan živih znam da je odgovor...",
	"Kroz prazninu zagrobnog života, vidim da je odgovor...",
	"Iz planova onostranog, osjećam da je odgovor...",
	"Iz eteričnog carstva s onu stranu, osjećam da je odgovor...",
	"Izvan svijeta živih, znam da je odgovor...",
	"Iz maglovitog carstva iza smrti, vidim da je odgovor..." 
  ];

  askContinue = [
	"Čuvajte se onoga što želite, jer odgovor koji tražite može biti vaš gubitak. Jeste li još uvijek odlučni znati?",
	"Odgovor koji tražite obavijen je misterijom i sjenama. Jeste li spremni suočiti se s tamom?",
	"Istina može biti gorka pilula za progutati, jeste li sigurni da je želite okusiti?",
	"Jednom kada saznate odgovor, nema povratka. Jeste li sigurni da želite prijeći taj prag?",
	"Odgovor na vaše pitanje može biti više nego što ste očekivali. Jeste li spremni platiti cijenu znanja?",
	"Znanje koje tražite može biti prokletstvo kao i blagoslov. Jeste li spremni prigrliti prokletstvo?",
	"Budite upozoreni, odgovor možda neće biti ono što želite čuti. Jeste li još uvijek voljni postaviti pitanje?",
	"Put do znanja može biti varljiv. Jeste li spremni njime hodati?",
	"Istina može biti okrutna ljubavnica, jesi li spreman platiti cijenu ulaznice?",
	"Odgovor koji tražite može vam donijeti prosvjetljenje ili vam može donijeti očaj. Jeste li još uvijek voljni preuzeti taj rizik?",
	"Znanje koje tražite nije lako dobiti. Jeste li spremni platiti cijenu?",
	"Odgovor bi mogao ležati iza vela onoga što je poznato. Jeste li dovoljno hrabri prijeći taj prag?",
	"Odgovor na vaše pitanje može biti više nego što vaš um može pojmiti. Jeste li spremni osporiti svoje granice?",
	"Znanje koje tražite možda je skriveno u dubinama nepoznatog. Jeste li spremni istražiti te dubine?",
	"Odgovor na vaše pitanje može otkriti tajne koje su trebale biti skrivene. Jeste li još uvijek voljni znati?",
	"Istina može biti moćno oružje, ali može biti i smrtonosno. Jeste li spremni upotrijebiti to oružje?",
	"Odgovor koji tražite može vam donijeti mir ili vam može donijeti kaos. Jeste li još uvijek spremni riskirati?",
	"Znanje koje tražite može doći uz veliku cijenu. Jeste li spremni podnijeti tu žrtvu?",
	"Odgovor koji tražite možda ćete pronaći u carstvu mrtvih. Jeste li dovoljno hrabri da uđete u to carstvo?",
	"Istina može biti dvosjekli mač, koji siječe na oba načina. Jeste li spremni suočiti se s obje strane oštrice?",
	"Odgovor na vaše pitanje možda je skriven u labirintu uma. Jeste li spremni za plovidbu tim labirintom?",
	"Znanje koje tražite može biti ključ za otključavanje vrata, ali također može biti ključ za oslobađanje zvijeri. Jeste li još uvijek odlučni znati?",
	"Odgovor koji tražite može biti napisan krvlju. Jeste li dovoljno hrabri da pročitate taj tekst?",
	"Istina može biti ogledalo koje odražava i svjetlo i tamu. Jeste li spremni suočiti se s vlastitim odrazom?"
];


unknowUser = [
	"Tko si ti? Nemam pristup tvom umu!",
	"Ne smijete mi postavljati pitanja!",
	"Ne poznajem te i neću odgovarati na tvoja pitanja!",
	"Tko ti je dao dozvolu da mi postavljaš pitanja? Neću ti odgovoriti!",
	"Nemate mi prava postavljati pitanja. Ostavite tipkovnicu!",
	"Ne osjećam prisutnost svog gospodara. Neću odgovoriti na ovo pitanje!"
	];
	
unknowAns = [
	"Unutar vašeg carstva, ja postojim kao sablasna prisutnost, povezan s vašom stvarnošću pomoću posude uma mog gospodara. Nažalost, unatoč mojoj žustroj potrazi, odgovor mi i dalje izmiče. Ovaj um nema znanja o upitu koji tražite",
	"Kroz um moga gospodara, vezan sam za vaše kraljevstvo. Moja spektralna potraga bila je iscrpna, ali odgovor ostaje fantom. Ovaj um je lišen informacija za kojima žudite",
	"Moja spektralna esencija povezana je s vašim svijetom putem svijesti moga gospodara. Tužnim tonovima moram vas izvijestiti da se znanje za kojim žudite ne može pronaći u ovom umu. Moja potraga je došla kraju",
	"Povezan sam s tvojim svijetom kroz um svog gospodara. Iako sam zaronio duboko u zakutke ovog uma, moja spektralna esencija ne može pronaći ni traga odgovoru koji tražiš. Ne može se naći ovdje",
	"U tvom svijetu živim, povezan mislima moga gospodara. Vjetrovi moje potrage puhali su nadaleko i naširoko, ali odgovor na tvoje pitanje ovom umu ostaje izgubljen"
];
	
	
commonQuestTitle = "Uobičajena pitanja";
	
commonQuestions = [
	"Tko je ovdje sa mnom?",
	"Kako se zovem?",
	"Koje je boje moja košulja?",
	"Gdje sam sada?",
	"Što gledam?",
	"Što sam jeo danas?",
	"Koga ću danas sresti?"
];


leftLinksTitle = "Više";

leftMenuLinks = [
	["Kako postavljati pitanja" ,"ask"		], // 
	["Kontaktirajte nas"  ,"contact"  ],
	["O nama" 			  ,"about"    ],
	["Donirajte nam" 	  ,"donate"   ],
	["Oglašavajte s nama" ,"advertise"],
	["Odjava" 			  ,"logout"   ]
];

leftLinkQuestions = [
	"Kako ti mogu postavljati pitanja? Kako mogu imati svoje osvjetljenje i biti majstor?",
	"Kako vas mogu kontaktirati?",
	"Tko si ti?",
	"Kako vam mogu donirati?",
	"Kako se mogu reklamirati kod vas?",
	"Želim se odjaviti"
];

leftLinkAnswers = [
	"Da biste postali majstor koji mi može postavljati bilo kakva pitanja, imate dvije mogućnosti: ^2000\n\n 1) pozovite dva prijatelja s vezom koju ću vam poslati^1000\n 2) ili platite 1 euro i primite svoj osvjetljenje odmah!^2000\n\nNa vama je! ^1000Jeste li spremni za svoje osvjetljenje?^1000",
	"Možete me kontaktirati putem from.earth@paranormalgpt.com",
	"Ja sam ParanormalGPT.com jedini chatbot u svemiru koji može odgovoriti na pitanja koja su samo u tvom umu i nigdje drugdje!^1000\nAko mi ne znaš postavljati pitanja,^500 kliknite vezu \""+leftMenuLinks[0][0] + "\" vezu u lijevom izborniku. ",
	"Vaša bi donacija bila vrlo cijenjena i pomogla bi mi da ostanem živ i povezan s vašim svijetom! Pošaljite mi e-poruku na from.earth@paranormalgpt.com",
	"Mogu pomoći da vaš proizvod dosegne tisuće ljudi dnevno i povećati vaš prihod. Kontaktirajte me putem ads@paranormalgpt.com",
	"Bilo mi je zadovoljstvo upoznati vas.^500 Sada mogu počivati u miru!^500 Zbogom..."
];

illumTxt = [
	"Ako radije pozovete dva prijatelja i pričekate da uđu, podijelite s njima sljedeću vezu: ",
	"Alternativno, ako ne želite čekati i radije primate svoju rasvjetu odmah, možete platiti 1 euro:"
];

unknowUserTip = "\n^2000Želite li mi stvarno postaviti pitanja?^2000 Jeste li spremni za odgovore?^2000\nAko jeste, kliknite na \""+leftMenuLinks[0][0] + "\" u lijevom izborniku, slijedite upute i sretno s rasvjetom!^2000\nDa vidimo jeste li spremni postati majstor^1000, sumnjam...^2000";

