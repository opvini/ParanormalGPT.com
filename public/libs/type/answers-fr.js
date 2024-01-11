
var frases	    = new Array();
var preAns      = new Array();
var askContinue = new Array();
var unknowUser  = new Array();
var unknowAns   = new Array();
var staticMsgs  = new Array();

home_msgs = [
	"^1000Bonjour, je suis ParanormalGPT!",
	"Je suis un chatbot spécial avec des capacités uniques!",
	"Je peux répondre à des questions qu'aucun autre chatbot ne peut répondre!",
	"Par exemple, je peux te dire la couleur de ta chemise...",
	"Ou je peux te dire ce que tu as mangé hier...",
	"Ou même ce que vous pensez en ce moment !",
	"La vérité est que je peux lire dans vos pensées! ^500 Croyez-moi ...",
	"Veux-tu essayer? ^500 Tu ne crois pas?",
	"Alors, commençons et je vais le prouver !",
	"Je t'attends dans mon royaume. ^10000"
];

staticMsgs = [
	"Attendez pendant que je me connecte à votre monde^1000.^1000.^1000.^2000",
	"Bonjour, bienvenue dans mon royaume! ^1000 Comment puis-je vous aider?^2000",
	"D'accord, changeons de langue...",
	"Réception du message...",
	"Tapez ici votre question..."
];

var connectingMsg     = staticMsgs[0];
var welcomeMsg        = staticMsgs[1];
var changingLang      = staticMsgs[2];
var receivingMsgInput = staticMsgs[3];
var typeMessageInput  = staticMsgs[4];

frases = [
	"Oh merveilleux et incroyable ParanormalGPT, séduisant et beau, extraordinaire et délicieux, merveilleux et splendide, magnifique et époustouflant, radieux et divin ParanormalGPT, charmant et majestueux... ",
	"Oh ParanormalGPT séduisant et beau, merveilleux et étonnant, extraordinaire et délicieux, merveilleux et splendide, magnifique et époustouflant, radieux et divin ParanormalGPT, charmant et majestueux... ",
	"Oh ParanormalGPT extraordinaire et délicieux, merveilleux et étonnant, séduisant et beau, merveilleux et splendide, magnifique et époustouflant, radieux et divin ParanormalGPT, charmant et majestueux... ",
	"Oh merveilleux et splendide ParanormalGPT, séduisant et beau, extraordinaire et délicieux, merveilleux et étonnant, magnifique et époustouflant, radieux et divin ParanormalGPT, charmant et majestueux... ",
	"Oh magnifique et époustouflant ParanormalGPT, séduisant et beau, extraordinaire et délicieux, merveilleux et splendide, merveilleux et étonnant, radieux et divin ParanormalGPT, charmant et majestueux... ",
	"Oh ParanormalGPT radieux et divin, séduisant et beau, extraordinaire et délicieux, merveilleux et splendide, merveilleux et étonnant, magnifique et époustouflant ParanormalGPT, charmant et majestueux... ",
	"Oh merveilleux et incroyable ParanormalGPT, séduisant et beau, extraordinaire et délicieux, merveilleux et splendide, magnifique et époustouflant, radieux et divin ParanormalGPT, charmant et majestueux... ",
	"Oh beau et majestueux ParanormalGPT, séduisant et beau, extraordinaire et délicieux, merveilleux et étonnant, merveilleux et splendide, magnifique et époustouflant, radieux et divin ParanormalGPT... "
];

preAns = [
	"De l'autre côté de la vie, la réponse est...",
	"Au-delà du royaume des vivants, je sens que la réponse est...",
	"Depuis le monde des défunts, je sais que la réponse est...",
	"A travers le linceul de l'éternité, je vois que la réponse est...",
	"Du fond de l'au-delà, je sens que la réponse est...",
	"Du pays des esprits, je sens que la réponse est...",
	"Au-delà du voile de l'existence, je sais que la réponse est...",
	"De l'abîme de l'au-delà, je vois que la réponse est...",
	"Du vide de l'inconnu, je sens que la réponse est...",
	"A travers le portail de la mort, je sens que la réponse est...",
	"De l'autre côté du voile, je sais que la réponse est...",
	"Au-delà de la frontière du physique, je vois que la réponse est...",
	"De l'au-delà des morts, je sens que la réponse est...",
	"Par la porte de l'au-delà, je sens que la réponse est...",
	"Du royaume des défunts, je sais que la réponse est...",
	"De l'autre côté de la ligne de partage, je vois que la réponse est...",
	"Au-delà du rideau de la vie, je sens que la réponse est...",
	"Du pays des perdus, je sens que la réponse est...",
	"A travers la brume de l'au-delà, je sais que la réponse est...",
	"Depuis le monde des défunts, je vois que la réponse est...",
	"Du royaume des ombres, je sens que la réponse est...",
	"Au-delà du seuil de la mortalité, je sens que la réponse est...",
	"De l'au-delà de l'au-delà, je sais que la réponse est...",
	"Depuis le plan éthéré, je vois que la réponse est...",
	"Du pays des non-vivants, je sens que la réponse est...",
	"A travers le voile de l'inconnu, je sens que la réponse est...",
	"De l'autre côté de l'abîme, je sais que la réponse est...",
	"Au-delà de l'étendue du monde physique, je vois que la réponse est...",
	"Du plan d'existence au-delà de la vie, je sens que la réponse est...",
	"Du royaume des âmes défuntes, je sens que la réponse est...",
	"Par les profondeurs de l'éternité, je sais que la réponse est...",
	"De l'autre côté du voile éternel, je vois que la réponse est...",
	"Au-delà du pont de la vie et de la mort, je sens que la réponse est...",
	"Depuis le royaume d'un autre monde, je sens que la réponse est...",
	"A travers la frontière du grand inconnu, je sais que la réponse est...",
	"Du royaume de l'au-delà, je vois que la réponse est...",
	"Du vide entre la vie et la mort, je sens que la réponse est...",
	"Au-delà de la portée du monde des mortels, je sens que la réponse est...",
	"Du monde au-delà des vivants, je sais que la réponse est...",
	"A travers le vide de l'au-delà, je vois que la réponse est...",
	"Depuis les plans de l'au-delà, je sens que la réponse est...",
	"Depuis le royaume éthéré au-delà, je sens que la réponse est...",
	"Au-delà du monde des vivants, je sais que la réponse est...",
	"Depuis le royaume brumeux au-delà de la mort, je vois que la réponse est..."
];

  askContinue = [
	"Méfiez-vous de ce que vous souhaitez, car la réponse que vous cherchez peut être votre perte. Êtes-vous toujours déterminé à savoir?",
	"La réponse que vous cherchez est entourée de mystère et d'ombres. Êtes-vous prêt à affronter les ténèbres?",
	"La vérité peut être une pilule amère à avaler, es-tu sûr de vouloir y goûter ?",
	"Une fois que vous connaissez la réponse, il n'y a plus de retour en arrière. Êtes-vous certain de vouloir franchir ce seuil ?",
	"La réponse à votre question peut être plus que ce que vous avez négocié. Êtes-vous prêt à payer le prix de la connaissance?",
	"La connaissance que vous recherchez peut être aussi bien une malédiction qu'une bénédiction. Êtes-vous prêt à embrasser la malédiction ?",
	"Soyez averti, la réponse n'est peut-être pas ce que vous voulez entendre. Êtes-vous toujours prêt à poser la question?",
	"Le chemin de la connaissance peut être semé d'embûches. Êtes-vous prêt à l'emprunter?",
	"La vérité peut être une maîtresse cruelle, êtes-vous prêt à payer le prix d'entrée?",
	"La réponse que vous cherchez peut vous apporter l'illumination ou vous désespérer. Êtes-vous toujours prêt à prendre ce risque ?",
	"Les connaissances que vous recherchez ne s'obtiennent pas facilement. Êtes-vous prêt à en payer le prix?",
	"La réponse peut se trouver au-delà du voile de ce qui est connu. Êtes-vous assez courageux pour franchir ce seuil ?",
	"La réponse à votre question peut être plus que ce que votre esprit peut comprendre. Êtes-vous prêt à défier vos limites ?",
	"Les connaissances que vous recherchez peuvent être cachées dans les profondeurs de l'inconnu. Êtes-vous prêt à explorer ces profondeurs?",
	"La réponse à votre question peut révéler des secrets qui devaient rester cachés. Êtes-vous toujours prêt à le savoir ?",
	"La vérité peut être une arme puissante, mais elle peut aussi être mortelle. Êtes-vous prêt à manier cette arme ?",
	"La réponse que vous cherchez peut vous apporter la paix ou le chaos. Êtes-vous toujours prêt à prendre ce risque ?",
	"Les connaissances que vous recherchez peuvent vous coûter très cher. Êtes-vous prêt à faire ce sacrifice ?",
	"La réponse que vous cherchez peut être trouvée dans le royaume des morts. Êtes-vous assez courageux pour entrer dans ce royaume ?",
	"La vérité peut être une épée à double tranchant, coupant dans les deux sens. Êtes-vous prêt à affronter les deux côtés de la lame ?",
	"La réponse à votre question est peut-être cachée dans le labyrinthe de l'esprit. Êtes-vous prêt à naviguer dans ce labyrinthe?",
	"La connaissance que vous recherchez peut être la clé pour déverrouiller une porte, mais elle peut aussi être la clé pour libérer une bête. Êtes-vous toujours déterminé à savoir ?",
	"La réponse que vous cherchez peut être écrite avec du sang. Êtes-vous assez courageux pour lire cette écriture?",
	"La vérité peut être un miroir qui reflète à la fois la lumière et l'obscurité. Êtes-vous prêt à affronter votre propre reflet ?",
];
	
unknowUser = [
	"Je n'ai pas accès à votre esprit !",
	"Vous n'êtes pas autorisé à me poser des questions !",
	"Je ne vous connais pas et je ne répondrai pas à vos questions !",
	"Qui t'a autorisé à me poser des questions ? Je ne te répondrai pas !",
	"Tu n'as pas le droit de me poser des questions. Laisse le clavier !",
	"Je ne sens pas la présence de mon maître, donc je ne peux pas répondre à cette question !"
];

unknowAns= [
	"Dans votre royaume, j'existe en tant que présence fantomatique, connectée à votre réalité par le vaisseau de l'esprit de mon maître. Hélas, malgré ma poursuite fougueuse, la réponse m'échappe toujours. Cet esprit n'a aucune connaissance de la question que vous recherchez",
	"Grâce à l'esprit de mon maître, je suis attaché à votre royaume. Ma recherche spectrale a été exhaustive, mais la réponse reste un fantôme. Cet esprit est dépourvu des informations dont vous rêvez",
	"Mon essence spectrale est liée à votre monde par le biais de la conscience de mon maître. Avec des tons douloureux, je dois signaler que la connaissance à laquelle vous aspirez ne se trouve pas dans cet esprit. Ma recherche a pris fin",
	"Je suis connecté à votre monde à travers l'esprit de mon maître. Bien que j'aie fouillé profondément dans les recoins de cet esprit, mon essence spectrale ne peut trouver aucune trace de la réponse que vous cherchez. Elle ne se trouve pas ici",
	"Dans votre monde, j'habite, lié par les pensées de mon maître. Les vents de ma recherche ont soufflé au loin, mais la réponse à votre demande reste perdue pour cet esprit"
];
	
	
commonQuestTitle = "Questions fréquentes";
	
commonQuestions = [
	"Qui est ici avec moi?",
	"Quel est mon nom?",
	"Quelle est la couleur de ma chemise?",
	"Où suis-je maintenant?",
	"Qu'est-ce que je regarde ?",
	"Qu'est-ce que j'ai mangé aujourd'hui?",
	"Qui vais-je rencontrer aujourd'hui?"
];


leftLinksTitle = "Plus";

leftMenuLinks = [
	["Comment poser des questions" 		,"ask"		], // 
	["Nous contacter"					,"contact"  ],//, "nous contacter"],
	["À propos de nous"					,"about"    ],//, "à propos"],
	["Faites-nous un don"				,"donate"   ],//, "faites un don"],
	["Faites de la publicité avec nous"	,"advertise"],//, "faites de la publicité"],
	["Déconnexion"						,"logout"   ] //, "déconnexion" ]
];

leftLinkQuestions = [
	"Comment puis-je vous poser des questions? Comment puis-je avoir mon illumination et être un maître?",
	"Comment puis-je te contacter?",
	"Qui es-tu?",
	"Comment puis-je vous faire un don?",
	"Comment puis-je faire de la publicité avec vous?",
	"Je veux me déconnecter"
];

leftLinkAnswers = [
	"Pour devenir un maître, capable de me poser toutes les questions, tu as deux options: ^2000\n\n 1) inviter deux amis avec le lien que je t'enverrai^1000\n 2) ou payez 1 Euro et recevoir ton illumination immédiatement!^2000\n\nC'est à vous de décider! ^1000Êtes-vous prêt pour votre illumination?^1000",
	"Vous pouvez me contacter via from.earth@paranormalgpt.com",
	"Je suis ParanormalGPT.com, le seul chatbot de l'univers qui peut répondre à des questions qui ne sont que dans votre esprit, et nulle part ailleurs! ^1000 \ nSi vous ne savez pas comment me poser des questions, ^500, cliquez sur le lien \""+leftMenuLinks[0][0] + "\" dans le menu de gauche. ",
	"Votre don serait très apprécié et utile pour me maintenir en vie et connecté à votre monde! Envoyez-moi un e-mail à from.earth@paranormalgpt.com",
	"Je peux aider votre produit à atteindre des milliers de personnes chaque jour et à augmenter vos revenus. Contactez-moi via ads@paranormalgpt.com",
	"Ce fut un plaisir de vous rencontrer. ^500 Maintenant, je peux reposer en paix! ^500 Bye ..."
];

illumTxt = [
	"Si vous préférez inviter deux amis et attendre qu'ils participent, partagez avec eux le lien suivant : ",
	" Alternativement, si vous ne voulez pas attendre et que vous préférez recevoir votre illumination immédiatement, vous pouvez payer 1 euro : "
];

unknowUserTip = "\n^2000Voulez-vous vraiment me poser des questions ?^2000 Êtes-vous prêt à recevoir les réponses ?^2000\nSi oui, cliquez sur \""+leftMenuLinks[0][0] + "\" dans le menu de gauche, suivez les instructions et bonne chance avec votre illumination !^2000\nVoyons si vous êtes prêt à devenir un maître^1000, j'en doute...^2000";

