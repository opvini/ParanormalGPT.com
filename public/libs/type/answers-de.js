
var frases	    = new Array();
var preAns      = new Array();
var askContinue = new Array();
var unknowUser  = new Array();
var unknowAns   = new Array();
var staticMsgs  = new Array();

home_msgs = [
    "^1000Hallo, ich bin ParanormalGPT!",
    "Ich bin ein besonderer Chatbot mit einzigartigen Fähigkeiten!",
    "Ich kann Fragen beantworten, die kein anderer Chatbot kann!",
    "Ich kann dir zum Beispiel die Farbe deines Hemdes sagen…",
    "Oder ich kann dir sagen, was du gestern gegessen hast…",
    "Oder auch das, was du gerade denkst!",
    "Die Wahrheit ist: Ich kann deine Gedanken lesen!^500 Glaub mir…",
    "Willst du es versuchen?^500 Glaubst du nicht?",
    "Also, fangen wir an und ich werde es beweisen!",
    "Ich warte in meinem Reich auf dich.^10000"
];

staticMsgs = [
    "Warte, während ich mich mit deiner Welt verbinde^1000.^1000.^1000.^2000",
    "Hallo, willkommen in meinem Reich!^1000 Wie kann ich dir helfen?^2000",
    "In Ordnung, lass uns die Sprache wechseln...",
    "Empfange Nachricht...",
    "Geben Sie hier Ihre Frage ein..."
];

var connectingMsg     = staticMsgs[0];
var welcomeMsg        = staticMsgs[1];
var changingLang      = staticMsgs[2];
var receivingMsgInput = staticMsgs[3];
var typeMessageInput  = staticMsgs[4];

frases = [
    "Oh wunderbar und erstaunlich, ParanormalGPT, verführerisch und schön, außergewöhnlich und entzückend, wunderbar und großartig, wunderschön und atemberaubend, strahlend und göttlich ParanormalGPT, lieblich und majestätisch ... ",
    "Oh verführerisches und wunderschönes ParanormalGPT, wunderbar und erstaunlich, außergewöhnlich und entzückend, wunderbar und großartig, wunderschön und atemberaubend, strahlend und göttlich ParanormalGPT, lieblich und majestätisch... ",
    "Oh außergewöhnlich und entzückend, ParanormalGPT, wunderbar und erstaunlich, verführerisch und schön, wunderbar und großartig, wunderschön und atemberaubend, strahlend und göttlich ParanormalGPT, lieblich und majestätisch... ",
    "Oh wunderbarer und großartiger ParanormalGPT, verführerisch und schön, außergewöhnlich und entzückend, wunderbar und erstaunlich, wunderschön und atemberaubend, strahlend und göttlich ParanormalGPT, lieblich und majestätisch... ",
    "Oh wunderschön und atemberaubend, ParanormalGPT, verführerisch und schön, außergewöhnlich und entzückend, wunderbar und großartig, wunderbar und erstaunlich, strahlend und göttlich. ParanormalGPT, lieblich und majestätisch... ",
    "Oh strahlendes und göttliches ParanormalGPT, verführerisch und schön, außergewöhnlich und entzückend, wunderbar und großartig, wunderbar und erstaunlich, wunderschön und atemberaubend ParanormalGPT, lieblich und majestätisch... ",
    "Oh wunderbar und erstaunlich, ParanormalGPT, verführerisch und schön, außergewöhnlich und entzückend, wunderbar und großartig, wunderschön und atemberaubend, strahlend und göttlich ParanormalGPT, lieblich und majestätisch... ",
    "Oh lieblicher und majestätischer ParanormalGPT, verführerisch und schön, außergewöhnlich und entzückend, wunderbar und erstaunlich, wunderbar und großartig, wunderschön und atemberaubend, strahlend und göttlich ParanormalGPT... "
];


preAns = [
    "Von der anderen Seite des Lebens ist die Antwort...",
    "Jenseits des Reiches der Lebenden spüre ich, dass die Antwort ... ist",
    "Aus der Welt der Verstorbenen weiß ich, dass die Antwort lautet ...",
    "Durch das Leichentuch der Ewigkeit sehe ich, dass die Antwort ist ...",
    "Aus den Tiefen des Jenseits spüre ich, dass die Antwort ... ist",
    "Aus dem Land der Geister, ich spüre, dass die Antwort ist ...",
    "Jenseits des Schleiers der Existenz weiß ich, dass die Antwort ist ...",
    "Aus dem Abgrund des Jenseits sehe ich, dass die Antwort ist ...",
    "Aus der Leere des Unbekannten fühle ich, dass die Antwort ... ist",
    "Durch das Portal des Todes spüre ich, dass die Antwort ... ist",
    "Von der anderen Seite des Schleiers weiß ich, dass die Antwort ist...",
    "Jenseits der Grenze des Physischen sehe ich, dass die Antwort ... ist",
    "Aus der Unterwelt der Toten, ich fühle, dass die Antwort ist ...",
    "Durch das Tor des Jenseits spüre ich, dass die Antwort ... ist",
    "Aus dem Reich der Verstorbenen weiß ich, dass die Antwort lautet ...",
    "Von der anderen Seite der Kluft sehe ich, dass die Antwort ... ist",
    "Jenseits des Lebensvorhangs fühle ich, dass die Antwort ... ist",
    "Aus dem Land der Verlorenen, ich spüre, dass die Antwort ... ist",
    "Durch den Nebel des Jenseits weiß ich, dass die Antwort ist...",
    "Aus der Welt der Verstorbenen sehe ich, dass die Antwort ... ist",
    "Aus dem Reich der Schatten, ich fühle, dass die Antwort ist ...",
    "Jenseits der Schwelle der Sterblichkeit spüre ich, dass die Antwort ... ist",
    "Aus dem Jenseits der Nachwelt weiß ich, dass die Antwort lautet ...",
    "Von der ätherischen Ebene aus sehe ich, dass die Antwort ... ist",
    "Aus dem Land der Unlebenden, ich fühle, dass die Antwort ist ...",
    "Durch den Schleier des Unbekannten spüre ich, dass die Antwort ... ist",
    "Von der anderen Seite des Abgrunds weiß ich, dass die Antwort lautet...",
    "Jenseits der Weite der physischen Welt sehe ich, dass die Antwort ... ist",
    "Von der Ebene der Existenz jenseits des Lebens fühle ich, dass die Antwort ... ist",
    "Aus dem Reich der verstorbenen Seelen spüre ich, dass die Antwort ... ist",
    "Durch die Tiefen der Ewigkeit weiß ich, dass die Antwort ist ...",
    "Von der anderen Seite des ewigen Schleiers sehe ich, dass die Antwort ... ist",
    "Jenseits der Brücke von Leben und Tod fühle ich, dass die Antwort ... ist",
    "Aus dem jenseitigen Reich spüre ich, dass die Antwort ... ist",
    "Durch die Grenze des großen Unbekannten weiß ich, dass die Antwort ist ...",
    "Aus dem Reich des Jenseits sehe ich, dass die Antwort ist ...",
    "Aus der Leere zwischen Leben und Tod fühle ich, dass die Antwort ... ist",
    "Jenseits der Reichweite der Welt der Sterblichen, ich spüre, dass die Antwort ... ist",
    "Von der Welt jenseits der Lebenden weiß ich, dass die Antwort lautet...",
    "Durch die Leere des Jenseits sehe ich, dass die Antwort ist ...",
    "Von den Ebenen des Jenseits fühle ich, dass die Antwort ... ist",
    "Aus dem ätherischen Reich dahinter spüre ich, dass die Antwort ... ist",
    "Jenseits der Welt der Lebenden weiß ich, dass die Antwort lautet...",
    "Aus dem nebligen Reich jenseits des Todes sehe ich, dass die Antwort ..."
];

askContinue = [
    "Hüte dich vor dem, was du dir wünschst, denn die Antwort, die du suchst, kann dein Verderben sein. Bist du immer noch entschlossen, es zu wissen?",
    "Die Antwort, nach der Sie suchen, ist in Geheimnisse und Schatten gehüllt. Sind Sie bereit, sich der Dunkelheit zu stellen?",
    "Die Wahrheit kann eine bittere Pille sein, bist du sicher, dass du sie probieren willst?",
    "Sobald Sie die Antwort kennen, gibt es kein Zurück mehr. Sind Sie sicher, dass Sie diese Schwelle überschreiten wollen?",
    "Die Antwort auf Ihre Frage könnte mehr sein, als Sie erwartet haben. Sind Sie bereit, den Preis für Wissen zu zahlen?",
    "Das Wissen, das Sie suchen, kann sowohl ein Fluch als auch ein Segen sein. Sind Sie bereit, den Fluch anzunehmen?",
    "Seien Sie gewarnt, die Antwort ist möglicherweise nicht das, was Sie hören möchten. Sind Sie immer noch bereit, die Frage zu stellen?",
    "Der Weg zum Wissen kann tückisch sein. Bist du bereit, ihn zu gehen?",
    "Die Wahrheit kann eine grausame Geliebte sein, bist du bereit, den Eintrittspreis zu zahlen?",
    "Die Antwort, die Sie suchen, kann Ihnen Erleuchtung oder Verzweiflung bringen. Sind Sie immer noch bereit, dieses Risiko einzugehen?",
    "Das Wissen, das Sie suchen, ist nicht leicht zu erlangen. Sind Sie bereit, den Preis zu zahlen?",
    "Die Antwort mag hinter dem Schleier des Bekannten liegen. Bist du mutig genug, diese Schwelle zu überschreiten?",
    "Die Antwort auf Ihre Frage könnte mehr sein, als Ihr Verstand begreifen kann. Sind Sie bereit, Ihre Grenzen herauszufordern?",
    "Das Wissen, das Sie suchen, kann in den Tiefen des Unbekannten verborgen sein. Sind Sie bereit, diese Tiefen zu erforschen?",
    "Die Antwort auf Ihre Frage kann Geheimnisse enthüllen, die geheim gehalten werden sollten. Sind Sie immer noch bereit, es zu wissen?",
    "Die Wahrheit kann eine mächtige Waffe sein, aber sie kann auch eine tödliche sein. Bist du bereit, diese Waffe einzusetzen?",
    "Die Antwort, die Sie suchen, kann Ihnen Frieden oder Chaos bringen. Sind Sie immer noch bereit, dieses Risiko einzugehen?",
    "Das Wissen, das Sie suchen, kann einen hohen Preis haben. Sind Sie bereit, dieses Opfer zu bringen?",
    "Die Antwort, die du suchst, könnte im Reich der Toten gefunden werden. Bist du mutig genug, dieses Reich zu betreten?",
    "Die Wahrheit kann ein zweischneidiges Schwert sein, das in beide Richtungen schneidet. Sind Sie bereit, sich beiden Seiten der Klinge zu stellen?",
    "Die Antwort auf Ihre Frage könnte im Labyrinth des Geistes verborgen sein. Sind Sie bereit, durch dieses Labyrinth zu navigieren?",
    " Das Wissen, das du suchst, kann der Schlüssel sein, um eine Tür aufzuschließen, aber es kann auch der Schlüssel sein, um eine Bestie zu entfesseln. Bist du immer noch entschlossen, es zu wissen?",
    "Die Antwort, die Sie suchen, könnte in Blut geschrieben sein. Sind Sie mutig genug, diese Schrift zu lesen?",
    "Die Wahrheit kann ein Spiegel sein, der sowohl Licht als auch Dunkelheit reflektiert. Bist du bereit, dich deinem eigenen Spiegelbild zu stellen?",
];
    
unknowUser = [
    "Ich habe keinen Zugriff auf deine Gedanken!",
    "Du darfst mir keine Fragen stellen!",
    "Ich kenne Sie nicht und ich werde Ihre Fragen nicht beantworten!",
    "Wer hat dir erlaubt, mir Fragen zu stellen? Ich werde dir nicht antworten!",
    "Sie haben keine Rechte, mir Fragen zu stellen. Lassen Sie die Tastatur!",
    "Ich spüre die Anwesenheit meines Meisters nicht, also kann ich diese Frage nicht beantworten!"
];

unknowAns = [
    "In deinem Reich existiere ich als gespenstische Präsenz, verbunden mit deiner Realität durch das Schiff des Verstandes meines Meisters. Leider entzieht sich mir die Antwort trotz meiner beherzten Verfolgung immer noch. Dieser Verstand enthält kein Wissen über die Frage, die du suchst",
    "Durch den Geist meines Meisters bin ich an Ihr Reich gebunden. Meine spektrale Suche war erschöpfend, doch die Antwort bleibt ein Phantom. Dieser Geist ist der Informationen beraubt, nach denen Sie sich sehnen",
    "Meine gespenstische Essenz ist durch das Bewusstsein meines Meisters an deine Welt gebunden. Mit traurigen Tönen muss ich berichten, dass das Wissen, nach dem du dich sehnst, nicht in diesem Geist zu finden ist. Meine Suche hat ein Ende",
    "Ich bin durch den Geist meines Meisters mit deiner Welt verbunden. Obwohl ich tief in die Tiefen dieses Geistes eingetaucht bin, kann meine gespenstische Essenz keine Spur der Antwort finden, die du suchst. Sie ist hier nicht zu finden",
    "In deiner Welt wohne ich, verbunden durch die Gedanken meines Meisters. Die Winde meiner Suche sind weit und breit geweht, doch die Antwort auf deine Frage bleibt diesem Geist verborgen"
];
    
    
commonQuestTitle = "Häufige Fragen";
    
commonQuestions = [
    "Wer ist hier bei mir?",
    "Was ist mein Name?",
    "Welche Farbe hat mein Hemd?",
    "Wo bin Ich jetzt?",
    "Was Schau ich mir da an?",
    "Was habe ich heute gegessen?",
    "Wen werde ich heute treffen?"
];


leftLinksTitle = "Mehr";

leftMenuLinks = [
    ["Wie man Fragen stellt","ask"		], // 
    ["Kontakt"              ,"contact"  ],//, "Kontakt"],
    ["Über uns"             ,"about"    ],//, "über"],
    ["Spende an uns"        ,"donate"   ],//, "spende"],
    ["Werben Sie bei uns"   ,"advertise"],//, "Werben"],
    ["Abmelden"             ,"logout"   ] //, "Abmelden" ]
];

leftLinkQuestions = [
    "Wie kann ich Ihnen Fragen stellen? Wie kann ich meine Erleuchtung haben und ein Meister sein?",
    "Wie kann ich dich erreichen?",
    "Wer bist du?",
    "Wie kann ich für Sie spenden?",
    "Wie kann ich bei Ihnen werben?",
    "Ich möchte mich abmelden"
];

leftLinkAnswers = [
    "Um ein Meister zu werden, der mir alle Fragen stellen kann, haben Sie zwei Möglichkeiten: ^2000\n\n 1) Laden Sie zwei Freunde mit dem Link ein, den ich Ihnen schicken werde^1000\n 2) oder zahlen Sie 1 Euro und erhalten Sie Ihre Beleuchtung sofort!^2000\n\nEs liegt an Ihnen! ^1000Sind Sie bereit für Ihre Beleuchtung?^1000",
    "Sie können mich über from.earth@paranormalgpt.com kontaktieren",
    "Ich bin ParanormalGPT.com, der einzige Chatbot im Universum, der Fragen beantworten kann, die nur in Ihrem Kopf sind, und nirgendwo sonst!^1000\nWenn Sie nicht wissen, wie Sie mir Fragen stellen sollen,^500 Klicken Sie im linken Menü auf den Link "+leftMenuLinks[0][0] + "\". ",
    "Ihre Spende wäre sehr willkommen und hilfreich, um mich am Leben zu erhalten und mit Ihrer Welt verbunden zu bleiben! Senden Sie mir eine E-Mail an from.earth@paranormalgpt.com",
    "Ich kann Ihrem Produkt helfen, täglich Tausende von Menschen zu erreichen und Ihren Umsatz zu steigern. Kontaktieren Sie mich über ads@paranormalgpt.com",
    "Es war mir eine Freude, Sie kennenzulernen.^500 Jetzt kann ich in Frieden ruhen!^500 Tschüss..."
];

illumTxt = [
    "Wenn Sie lieber zwei Freunde einladen und auf deren Eintritt warten möchten, teilen Sie ihnen den folgenden Link mit: ",
    "Alternativ, wenn Sie nicht warten möchten und Ihre Beleuchtung lieber sofort erhalten möchten, können Sie 1 Euro bezahlen: "
];

unknowUserTip = "\n^2000Möchten Sie mir wirklich Fragen stellen?^2000 Sind Sie auf die Antworten vorbereitet?^2000\nWenn ja, klicken Sie im linken Menü auf \""+leftMenuLinks[0][0] + "\" und folgen Sie den Anweisungen Die Anweisungen und viel Glück mit Ihrer Beleuchtung!^2000\nMal sehen, ob Sie bereit sind, ein Meister zu werden^1000, ich bezweifle...^2000";