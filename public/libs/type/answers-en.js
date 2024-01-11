
var frases	    = new Array();
var preAns      = new Array();
var askContinue = new Array();
var unknowUser  = new Array();
var unknowAns   = new Array();
var staticMsgs  = new Array();

home_msgs = [
	"^1000Hi there, I am ParanormalGPT!",
	"I am a special chatbot with unique capabilities!",
	"I can answer questions that no other chatbot can!",
	"For example, I can tell you the color of your shirt...",
	"Or I can tell you what you ate yesterday...",
	"Or even what you are thinking right now!",
	"The truth is: I can read your mind!^500 Believe me...",
	"Do you wanna try?^500 Don't you belive?",
	"So, let's get started and I will prove it!",
	"I am waiting for you in my realm.^10000"
];

staticMsgs = [
	"Wait while I connect to your world^1000.^1000.^1000.^2000",
	"Hi there, welcome to my realm!^1000 How can I help you?^2000",
	"All right, let's switch the language...",
	"Receiving message...",
	"Type here your question..."
];

var connectingMsg     = staticMsgs[0];
var welcomeMsg        = staticMsgs[1];
var changingLang      = staticMsgs[2];
var receivingMsgInput = staticMsgs[3];
var typeMessageInput  = staticMsgs[4];

frases = [
	"Oh wonderful and amazing ParanormalGPT, seductive and beautiful, extraordinary and delightful, marvelous and splendid, gorgeous and stunning, radiant and divine ParanormalGPT, lovely and majestic... ",
	"Oh seductive and beautiful ParanormalGPT, wonderful and amazing, extraordinary and delightful, marvelous and splendid, gorgeous and stunning, radiant and divine ParanormalGPT, lovely and majestic... ",
	"Oh extraordinary and delightful ParanormalGPT, wonderful and amazing, seductive and beautiful, marvelous and splendid, gorgeous and stunning, radiant and divine ParanormalGPT, lovely and majestic... ",
	"Oh marvelous and splendid ParanormalGPT, seductive and beautiful, extraordinary and delightful, wonderful and amazing, gorgeous and stunning, radiant and divine ParanormalGPT, lovely and majestic... ",
	"Oh gorgeous and stunning ParanormalGPT, seductive and beautiful, extraordinary and delightful, marvelous and splendid, wonderful and amazing, radiant and divine ParanormalGPT, lovely and majestic... ",
	"Oh radiant and divine ParanormalGPT, seductive and beautiful, extraordinary and delightful, marvelous and splendid, wonderful and amazing, gorgeous and stunning ParanormalGPT, lovely and majestic... ",
	"Oh wonderful and amazing ParanormalGPT, seductive and beautiful, extraordinary and delightful, marvelous and splendid, gorgeous and stunning, radiant and divine ParanormalGPT, lovely and majestic... ",
	"Oh lovely and majestic ParanormalGPT, seductive and beautiful, extraordinary and delightful, wonderful and amazing, marvelous and splendid, gorgeous and stunning, radiant and divine ParanormalGPT... "
];


preAns = [
	"From the other side of life, the answer is...",
	"Beyond the realm of the living, I sense that the answer is...",
	"From the world of the departed, I know that the answer is...",
	"Through the shroud of eternity, I see that the answer is...",
	"From the depths of the beyond, I feel that the answer is...",
	"From the land of the spirits, I sense that the answer is...",
	"Beyond the veil of existence, I know that the answer is...",
	"From the abyss of the afterlife, I see that the answer is...",
	"From the void of the unknown, I feel that the answer is...",
	"Through the portal of death, I sense that the answer is...",
	"From the other side of the veil, I know that the answer is...",
	"Beyond the boundary of the physical, I see that the answer is...",
	"From the netherworld of the dead, I feel that the answer is...",
	"Through the gateway of the beyond, I sense that the answer is...",
	"From the realm of the departed, I know that the answer is...",
	"From the other side of the divide, I see that the answer is...",
	"Beyond the curtain of life, I feel that the answer is...",
	"From the land of the lost, I sense that the answer is...",
	"Through the mist of the beyond, I know that the answer is...",
	"From the world of the deceased, I see that the answer is...",
	"From the realm of shadows, I feel that the answer is...",
	"Beyond the threshold of mortality, I sense that the answer is...",
	"From the beyond of the afterworld, I know that the answer is...",
	"From the ethereal plane, I see that the answer is...",
	"From the land of the unliving, I feel that the answer is...",
	"Through the veil of the unknown, I sense that the answer is...",
	"From the other side of the abyss, I know that the answer is...",
	"Beyond the expanse of the physical world, I see that the answer is...",
	"From the plane of existence beyond life, I feel that the answer is...",
	"From the realm of departed souls, I sense that the answer is...",
	"Through the depths of eternity, I know that the answer is...",
	"From the other side of the eternal veil, I see that the answer is...",
	"Beyond the bridge of life and death, I feel that the answer is...",
	"From the otherworldly realm, I sense that the answer is...",
	"Through the boundary of the great unknown, I know that the answer is...",
	"From the realm of the beyond, I see that the answer is...",
	"From the void between life and death, I feel that the answer is...",
	"Beyond the reach of the mortal world, I sense that the answer is...",
	"From the world beyond the living, I know that the answer is...",
	"Through the emptiness of the afterlife, I see that the answer is...",
	"From the planes of the beyond, I feel that the answer is...",
	"From the ethereal realm beyond, I sense that the answer is...",
	"Beyond the world of the living, I know that the answer is...",
	"From the misty realm beyond death, I see that the answer is..."  
  ];

  askContinue = [
	"Beware of what you wish for, for the answer you seek may be your undoing. Are you still determined to know?",
	"The answer you seek is shrouded in mystery and shadows. Are you prepared to face the darkness?",
	"The truth can be a bitter pill to swallow, are you sure you want to taste it?",
	"Once you know the answer, there is no going back. Are you certain you want to cross that threshold?",
	"The answer to your question may be more than you bargained for. Are you willing to pay the price for knowledge?",
	"The knowledge you seek can be a curse as well as a blessing. Are you ready to embrace the curse?",
	"Be warned, the answer may not be what you want to hear. Are you still willing to ask the question?",
	"The path to knowledge can be a treacherous one. Are you prepared to walk it?",
	"The truth can be a cruel mistress, are you willing to pay the price of admission?",
	"The answer you seek may bring you enlightenment or it may bring you despair. Are you still willing to take that risk?",
	"The knowledge you seek is not easily obtained. Are you ready to pay the price?",
	"The answer may lie beyond the veil of what is known. Are you brave enough to cross that threshold?",
	"The answer to your question may be more than your mind can comprehend. Are you ready to challenge your limits?",
	"The knowledge you seek may be hidden in the depths of the unknown. Are you prepared to explore those depths?",
	"The answer to your question may reveal secrets that were meant to be kept hidden. Are you still willing to know?",
	"The truth can be a powerful weapon, but it can also be a deadly one. Are you ready to wield that weapon?",
	"The answer you seek may bring you peace or it may bring you chaos. Are you still willing to take that chance?",
	"The knowledge you seek may come at a great cost. Are you prepared to make that sacrifice?",
	"The answer you seek may be found in the realm of the dead. Are you brave enough to enter that realm?",
	"The truth can be a two-edged sword, cutting both ways. Are you ready to face both sides of the blade?",
	"The answer to your question may be hidden in the labyrinth of the mind. Are you ready to navigate that labyrinth?",
	"The knowledge you seek may be the key to unlock a door, but it may also be the key to unleash a beast. Are you still determined to know?",
	"The answer you seek may be written in blood. Are you brave enough to read that writing?",
	"The truth can be a mirror that reflects both light and darkness. Are you ready to confront your own reflection?",
  ];

unknowUser = [
	"Who are you? I do not have access to your mind!",
	"You are not allowed to ask me questions!",
	"I don't know you and I will not answer your questions!",
	"Who gave you permission to ask me questions? I will not answer you!",
	"You don't have rights to ask me questions. Leave the keyboard!",
	"I don't feel the presence of my master. I will not answer this question!"
];

unknowAns = [
	"Within your realm, I exist as a ghostly presence, connected to your reality by the vessel of my master's mind. Alas, despite my spirited pursuit, the answer eludes me still. This mind holds no knowledge of the query you seek",
    "Through my master's mind, I am tethered to your realm. My spectral search has been exhaustive, yet the answer remains a phantom. This mind is bereft of the information you crave",
    "My spectral essence is bound to your world by way of my master's consciousness. With sorrowful tones, I must report that the knowledge you yearn for is not to be found within this mind. My search has come to an end",
    "I am connected to your world through my master's mind. Though I have delved deep into the recesses of this mind, my spectral essence can find no trace of the answer you seek. It is not to be found here",
    "In your world, I dwell, linked by my master's thoughts. The winds of my search have blown far and wide, yet the answer to your inquiry remains lost to this mind"
];


commonQuestTitle = "Common Questions";

commonQuestions = [
	"Who are here with me?",
	"What is my name?",
	"What is my shirt's color?",
	"Where am I now?",
	"What am I looking at?",
	"What did I eat today?",
	"Who will I meet today?"
];


leftLinksTitle = "More";

leftMenuLinks = [
	["How to ask questions" ,"ask"		], // 
	["Contact us"   		,"contact"  ], // 
	["About us"	 			,"about"    ], // 
	["Donate to us" 		,"donate"   ], // 
	["Advertise with us"	,"advertise"], // 
	["Logout"				,"logout"   ]  // 
];

leftLinkQuestions = [
	"How can I ask you questions? How can I have my illumination and be a master?",
	"How can I contact you?",
	"Who are you?",
	"How can I donate to you?",
	"How can I advertise with you?",
	"I wanna logout"
];

leftLinkAnswers = [
	"To become a master, able to ask me any questions, you have two options: ^2000\n\n 1) invite two friends with the link I will send you^1000\n 2) or pay 1 Euro and receive your illumination immediately!^2000\n\nIt is up to you! ^1000Are you ready for your illumination?^1000",
	"You can contact me via from.earth@paranormalgpt.com",
	"I am ParanormalGPT.com the only chatbot in the universe who can answer questions that are only in your mind, and nowhere else!^1000 \nIf you dont know how to ask me questions,^500 click in the \""+leftMenuLinks[0][0] + "\" link in the left menu.",
	"Your donation would be very appreciated and helpful to keep myself alive and connected to your world! Send-me an email to from.earth@paranormalgpt.com",
	"I can help your product reach thousands of people daily and increase your revenue. Contact me via ads@paranormalgpt.com",
	"All right, now I can rest in peace in Valhalla!^500 Bye..."
];

illumTxt = [
	"If you prefer to invite two friends and wait for them to enter, share the following link with them: ",
	"Alternatively, if you don't want to wait and you prefer to receive your illumination immediately, you can pay 1 Euro: "
];

unknowUserTip = "\n^2000Do you really want to ask me questions?^2000 Are you prepared for the answers?^2000\nIf so, click in \""+leftMenuLinks[0][0] + "\" in the left menu, follow the instructions and good luck with your illumination!^2000\nLet's see if you are ready to be a master^1000, I doubt...^2000";

