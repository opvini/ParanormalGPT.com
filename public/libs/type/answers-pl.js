
var frases	    = new Array();
var preAns      = new Array();
var askContinue = new Array();
var unknowUser  = new Array();
var unknowAns   = new Array();
var staticMsgs  = new Array();

home_msgs = [
	"^1000Cześć, jestem ParanormalGPT!",
	"Jestem wyjątkowym chatbotem o unikalnych możliwościach!",
	"Potrafię odpowiedzieć na pytania, których nie potrafi żaden inny chatbot!",
	"Na przykład, mogę ci powiedzieć kolor twojej koszuli...",
	"Albo mogę ci powiedzieć, co jadłeś wczoraj…",
	"Albo nawet to, o czym teraz myślisz!",
	"Prawda jest taka: potrafię czytać w twoich myślach!^500 Uwierz mi...",
	"Chcesz spróbować?^500 Nie wierzysz?",
	"Więc zaczynajmy, a ja to udowodnię!",
	"Czekam na ciebie w moim królestwie.^10000"
];

staticMsgs = [
	"Poczekaj, aż połączę się z twoim światem^1000.^1000.^1000.^2000",
	"Cześć, witaj w moim królestwie!^1000 Jak mogę Ci pomóc?^2000",
	"Dobra, zmieńmy język...",
	"Odbieranie wiadomości...",
	"Wpisz tutaj swoje pytanie..."
];

var connectingMsg     = staticMsgs[0];
var welcomeMsg        = staticMsgs[1];
var changingLang      = staticMsgs[2];
var receivingMsgInput = staticMsgs[3];
var typeMessageInput  = staticMsgs[4];

frases = [
	"Och cudowne i niesamowite ParanormalGPT, uwodzicielskie i piękne, niezwykłe i zachwycające, cudowne i wspaniałe, wspaniałe i oszałamiające, promienne i boskie ParanormalGPT, cudowne i majestatyczne... ",
	"Och uwodzicielski i piękny ParanormalGPT, cudowny i niesamowity, niezwykły i zachwycający, cudowny i wspaniały, wspaniały i oszałamiający, promienny i boski ParanormalGPT, piękny i majestatyczny... ",
	"Och niezwykłe i zachwycające ParanormalGPT, cudowne i niesamowite, uwodzicielskie i piękne, cudowne i wspaniałe, wspaniałe i oszałamiające, promienne i boskie ParanormalGPT, cudowne i majestatyczne... ",
	"Och cudowne i wspaniałe ParanormalGPT, uwodzicielskie i piękne, niezwykłe i zachwycające, cudowne i niesamowite, wspaniałe i oszałamiające, promienne i boskie ParanormalGPT, cudowne i majestatyczne... ",
	"Och cudowna i oszałamiająca ParanormalGPT, uwodzicielska i piękna, niezwykła i zachwycająca, cudowna i wspaniała, cudowna i niesamowita, promienna i boska ParanormalGPT, piękna i majestatyczna... ",
	"Och promienny i boski ParanormalGPT, uwodzicielski i piękny, niezwykły i zachwycający, cudowny i wspaniały, cudowny i niesamowity, wspaniały i oszałamiający ParanormalGPT, piękny i majestatyczny... ",
	"Och cudowne i niesamowite ParanormalGPT, uwodzicielskie i piękne, niezwykłe i zachwycające, cudowne i wspaniałe, wspaniałe i oszałamiające, promienne i boskie ParanormalGPT, cudowne i majestatyczne... ",
	"Och cudowny i majestatyczny ParanormalGPT, uwodzicielski i piękny, niezwykły i zachwycający, cudowny i niesamowity, cudowny i wspaniały, wspaniały i oszałamiający, promienny i boski ParanormalGPT... "
];

preAns = [
	"Z drugiej strony życia, odpowiedź brzmi...",
	"Poza sferą żywych wyczuwam, że odpowiedź brzmi...",
	"Ze świata zmarłych wiem, że odpowiedź brzmi...",
	"Przez całun wieczności widzę, że odpowiedź brzmi…",
	"Z głębi zaświatów czuję, że odpowiedź brzmi…",
	"Z krainy duchów wyczuwam, że odpowiedź brzmi...",
	"Poza zasłoną istnienia wiem, że odpowiedź brzmi...",
	"Z otchłani zaświatów widzę, że odpowiedź brzmi...",
	"Z pustki nieznanego czuję, że odpowiedź brzmi...",
	"Przez portal śmierci wyczuwam, że odpowiedź brzmi...",
	"Po drugiej stronie zasłony wiem, że odpowiedź brzmi...",
	"Poza granicami fizyczności widzę, że odpowiedź brzmi...",
	"Z zaświatów umarłych czuję, że odpowiedź brzmi…",
	"Przez bramę zaświatów wyczuwam, że odpowiedź brzmi...",
	"Z królestwa zmarłych wiem, że odpowiedź brzmi...",
	"Po drugiej stronie przepaści widzę, że odpowiedź brzmi...",
	"Za kurtyną życia czuję, że odpowiedź brzmi...",
	"Z krainy zagubionych wyczuwam, że odpowiedź brzmi...",
	"Przez mgłę zaświatów wiem, że odpowiedź brzmi...",
	"Ze świata zmarłych widzę, że odpowiedź brzmi...",
	"Z królestwa cieni czuję, że odpowiedź brzmi...",
	"Poza progiem śmiertelności czuję, że odpowiedź brzmi...",
	"Z zaświatów wiem, że odpowiedź brzmi...",
	"Z eterycznej płaszczyzny widzę, że odpowiedź brzmi...",
	"Z krainy nieożywionych czuję, że odpowiedź brzmi...",
	"Przez zasłonę nieznanego wyczuwam, że odpowiedź brzmi...",
	"Z drugiej strony przepaści wiem, że odpowiedź brzmi...",
	"Poza przestrzenią świata fizycznego widzę, że odpowiedź brzmi...",
	"Z poziomu egzystencji poza życiem czuję, że odpowiedź brzmi…",
	"Z królestwa dusz, które odeszły, wyczuwam, że odpowiedź brzmi...",
	"Przez głębię wieczności wiem, że odpowiedź brzmi…",
	"Po drugiej stronie wiecznej zasłony widzę, że odpowiedź brzmi...",
	"Za mostem życia i śmierci czuję, że odpowiedź brzmi...",
	"Z nieziemskiego królestwa wyczuwam, że odpowiedź brzmi…",
	"Przez granicę wielkiej niewiadomej wiem, że odpowiedź brzmi...",
	"Z zaświatów widzę, że odpowiedź brzmi...",
	"Z pustki między życiem a śmiercią czuję, że odpowiedź brzmi...",
	"Poza zasięgiem świata śmiertelników, wyczuwam, że odpowiedź brzmi...",
	"Ze świata poza żywymi wiem, że odpowiedź brzmi...",
	"Dzięki pustce życia pozagrobowego widzę, że odpowiedź brzmi...",
	"Z zaświatów czuję, że odpowiedź brzmi...",
	"Z eterycznej krainy poza nią wyczuwam, że odpowiedź brzmi...",
	"Poza światem żywych wiem, że odpowiedź brzmi...",
	"Z mglistego królestwa poza śmiercią widzę, że odpowiedź brzmi…"
];

askContinue = [
	"Strzeż się tego, czego sobie życzysz, bo odpowiedź, której szukasz, może być twoją zgubą. Czy nadal jesteś zdeterminowany, by wiedzieć?",
	"Odpowiedź, której szukasz, jest owiana tajemnicą i cieniem. Czy jesteś gotowy stawić czoła ciemności?",
	"Prawda może być gorzką pigułką do przełknięcia, czy na pewno chcesz jej spróbować?",
	"Kiedy już znasz odpowiedź, nie ma odwrotu. Czy na pewno chcesz przekroczyć ten próg?",
	"Odpowiedź na twoje pytanie może być czymś więcej, niż się spodziewałeś. Czy jesteś gotów zapłacić cenę za wiedzę?",
	"Wiedza, której szukasz, może być zarówno przekleństwem, jak i błogosławieństwem. Czy jesteś gotowy przyjąć klątwę?",
	"Ostrzegam, odpowiedź może nie być taka, jaką chcesz usłyszeć. Czy nadal chcesz zadać pytanie?",
	"Droga do wiedzy może być zdradziecka. Czy jesteś gotów nią kroczyć?",
	"Prawda potrafi być okrutną kochanką, czy jesteś gotów zapłacić cenę wstępu?",
	"Odpowiedź, której szukasz, może przynieść ci oświecenie lub rozpacz. Czy nadal chcesz podjąć to ryzyko?",
	"Wiedza, której szukasz, nie jest łatwa do zdobycia. Czy jesteś gotów zapłacić cenę?",
	"Odpowiedź może leżeć za zasłoną tego, co znane. Czy jesteś na tyle odważny, aby przekroczyć ten próg?",
	"Odpowiedź na twoje pytanie może być czymś więcej, niż twój umysł jest w stanie pojąć. Czy jesteś gotowy rzucić wyzwanie swoim ograniczeniom?",
	"Wiedza, której szukasz, może być ukryta w głębinach nieznanego. Czy jesteś gotowy, aby zbadać te głębiny?",
	"Odpowiedź na twoje pytanie może ujawnić tajemnice, które miały być trzymane w ukryciu. Czy nadal chcesz wiedzieć?",
	"Prawda może być potężną bronią, ale może też być zabójcza. Czy jesteś gotowy, aby dzierżyć tę broń?",
	"Odpowiedź, której szukasz, może przynieść ci spokój lub chaos. Czy nadal chcesz skorzystać z tej szansy?",
	"Wiedza, której szukasz, może Cię drogo kosztować. Czy jesteś gotów na takie poświęcenie?",
	"Odpowiedź, której szukasz, może zostać znaleziona w królestwie umarłych. Czy jesteś wystarczająco odważny, aby wejść do tego królestwa?",
	"Prawda może być mieczem obosiecznym, tnącym w obie strony. Czy jesteś gotowy zmierzyć się z obiema stronami ostrza?",
	"Odpowiedź na twoje pytanie może być ukryta w labiryncie umysłu. Czy jesteś gotowy, aby poruszać się po tym labiryncie?",
	"Wiedza, której szukasz, może być kluczem do otwarcia drzwi, ale może też być kluczem do uwolnienia bestii. Czy nadal jesteś zdeterminowany, aby wiedzieć?",
	"Odpowiedź, której szukasz, może być zapisana krwią. Czy masz dość odwagi, by przeczytać to pismo?",
	"Prawda może być lustrem, które odbija zarówno światło, jak i ciemność. Czy jesteś gotowy na konfrontację z własnym odbiciem?",
];
	
unknowUser = [
	"Nie mam dostępu do twojego umysłu!",
	"Nie wolno ci zadawać mi pytań!",
	"Nie znam cię i nie odpowiem na twoje pytania!",
	"Kto pozwolił ci zadawać mi pytania? Nie odpowiem!",
	"Nie masz prawa zadawać mi pytań. Zostaw klawiaturę!",
	"Nie czuję obecności mojego pana, więc nie mogę odpowiedzieć na to pytanie!"
];

unknowAns = [
	"W twoim królestwie istnieję jako upiorna obecność, połączona z twoją rzeczywistością przez naczynie umysłu mojego pana. Niestety, pomimo moich pełnych werwy poszukiwań, odpowiedź wciąż mi się wymyka. Ten umysł nie posiada wiedzy na temat pytania, którego szukasz",
	"Poprzez umysł mojego pana jestem przywiązany do twojego królestwa. Moje widmowe poszukiwania były wyczerpujące, jednak odpowiedź pozostaje widmem. Ten umysł jest pozbawiony informacji, których pragniesz",
	"Moja widmowa esencja jest związana z twoim światem poprzez świadomość mojego mistrza. Ze smutkiem muszę oznajmić, że wiedzy, której pragniesz, nie można znaleźć w tym umyśle. Moje poszukiwania dobiegły końca",
	"Jestem połączony z twoim światem przez umysł mojego pana. Chociaż zagłębiłem się w zakamarki tego umysłu, moja widmowa esencja nie może znaleźć śladu odpowiedzi, której szukasz. Nie ma jej tutaj",
	 "W twoim świecie mieszkam, połączony myślami mojego pana. Wiatr moich poszukiwań wiał daleko i szeroko, jednak odpowiedź na twoje pytanie pozostaje zagubiona dla tego umysłu"
];
	
	
commonQuestTitle = "Często zadawane pytania";
	
commonQuestions = [
	"Kto jest tutaj ze mną?",
	"Jak mam na imię?",
	"Jaki jest kolor mojej koszuli?",
	"Gdzie teraz jestem?",
	"Na co patrzę?",
	"Co dzisiaj jadłem?",
	"Z kim się dzisiaj spotkam?"
];


leftLinksTitle = "Więcej";

leftMenuLinks = [
	["Jak zadawać pytania" 	,"ask"		], // 
	["Kontakt"				,"contact"  ],//, "kontakt"],
	["O nas"				,"about"    ],//, "o"],
	["Przekaż nam darowiznę","donate"   ],//, "przekaż darowiznę"],
	["Zareklamuj się u nas" ,"advertise"],//, "Zareklamuj się"],
	["Wyloguj"				,"logout"   ] //, "wyloguj"]
];

leftLinkQuestions = [
	"Jak mogę zadać Ci pytania? Jak mogę osiągnąć swoje oświecenie i zostać mistrzem?",
	"Jak mogę się z tobą skontaktować?",
	"Kim jesteś?",
	"Jak mogę ci przekazać darowiznę?",
	"Jak mogę się u Ciebie reklamować?",
	"Chcę się wylogować"
];

leftLinkAnswers = [
	"Aby zostać mistrzem i móc zadawać mi dowolne pytania, masz dwie możliwości: ^2000\n\n 1) zaproś dwóch znajomych z linkiem, który ci wyślę^1000\n 2) lub zapłać mi 1 Euro i otrzymaj swój oświetlenie natychmiast!^2000\n\nTo zależy od Ciebie! ^1000Czy jesteś gotowy na oświetlenie?^1000",
	"Możesz się ze mną skontaktować przez from.earth@paranormalgpt.com",
	"Jestem ParanormalGPT.com, jedynym chatbotem we wszechświecie, który może odpowiadać na pytania, które są tylko w Twojej głowie i nigdzie indziej!^1000\nJeśli nie wiesz, jak zadawać mi pytania,^500 kliknij link \""+leftMenuLinks[0][0] + "\" w lewym menu. ",
	"Twoja darowizna byłaby bardzo mile widziana i pomocna, aby utrzymać mnie przy życiu i połączyć się z waszym światem! Wyślij mi e-mail na adres from.earth@paranormalgpt.com",
	"Mogę pomóc Twojemu produktowi dotrzeć do tysięcy ludzi dziennie i zwiększyć Twoje przychody. Skontaktuj się ze mną przez ads@paranormalgpt.com",
	"Miło było cię poznać.^500 Teraz mogę spoczywać w pokoju!^500 Do widzenia…"
];

ilumTxt = [
	"Jeśli wolisz zaprosić dwóch znajomych i poczekać, aż wejdą, udostępnij im poniższy link: ",
	"Alternatywnie, jeśli nie chcesz czekać i wolisz otrzymać oświetlenie od razu, możesz zapłacić 1 Euro: "
];

unknowUserTip = "\n^2000Czy naprawdę chcesz mi zadawać pytania?^2000 Czy jesteś przygotowany na odpowiedzi?^2000\nJeśli tak, kliknij \""+leftMenuLinks[0][0] + "\" w lewym menu, kliknij instrukcje i powodzenia w oświetleniu!^2000\nZobaczmy, czy jesteś gotowy, aby zostać mistrzem^1000, wątpię...^2000";

