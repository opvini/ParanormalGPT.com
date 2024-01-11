
var frases	    = new Array();
var preAns      = new Array();
var askContinue = new Array();
var unknowUser  = new Array();
var unknowAns   = new Array();
var staticMsgs  = new Array();

home_msgs = [
    "^1000Hola, soy ParanormalGPT!",
    "¡Soy un chatbot especial con capacidades únicas!",
    "¡Puedo responder preguntas que ningún otro chatbot puede responder!",
    "Por ejemplo, te puedo decir el color de tu camisa...",
    "O puedo decirte lo que comiste ayer...",
    "¡O incluso lo que estás pensando ahora mismo!",
    "La verdad es: ¡Puedo leer tu mente!^500 Créeme...",
    "¿Quieres intentarlo?^500 ¿No crees?",
    "¡Entonces, comencemos y lo probaré!",
    "Te espero en mi reino.^10000"
];

staticMsgs = [
    "Espera mientras me conecto a tu mundo^1000.^1000.^1000.^2000",
    "Hola, ¡bienvenido a mi reino!^1000 ¿Cómo puedo ayudarte?^2000",
    "Muy bien, cambiemos el idioma...",
    "Recibiendo mensaje...",
    "Escriba aquí su pregunta..."
];

var connectingMsg     = staticMsgs[0];
var welcomeMsg        = staticMsgs[1];
var changingLang      = staticMsgs[2];
var receivingMsgInput = staticMsgs[3];
var typeMessageInput  = staticMsgs[4];

frases = [
    "Oh maravilloso y asombroso ParanormalGPT, seductor y hermoso, extraordinario y encantador, maravilloso y espléndido, hermoso y deslumbrante, radiante y divino ParanormalGPT, encantador y majestuoso... ",
    "Oh seductor y hermoso ParanormalGPT, maravilloso y asombroso, extraordinario y delicioso, maravilloso y espléndido, hermoso y deslumbrante, radiante y divino ParanormalGPT, encantador y majestuoso... ",
    "Oh extraordinario y encantador ParanormalGPT, maravilloso y sorprendente, seductor y hermoso, maravilloso y espléndido, hermoso y deslumbrante, radiante y divino ParanormalGPT, encantador y majestuoso... ",
    "Oh maravilloso y espléndido ParanormalGPT, seductor y hermoso, extraordinario y encantador, maravilloso y sorprendente, hermoso y deslumbrante, radiante y divino ParanormalGPT, encantador y majestuoso... ",
    "Oh maravilloso y deslumbrante ParanormalGPT, seductor y hermoso, extraordinario y encantador, maravilloso y espléndido, maravilloso y asombroso, radiante y divino ParanormalGPT, encantador y majestuoso... ",
    "Oh radiante y divino ParanormalGPT, seductor y hermoso, extraordinario y encantador, maravilloso y espléndido, maravilloso y sorprendente, hermoso y sorprendente ParanormalGPT, encantador y majestuoso... ",
    "Oh maravilloso y asombroso ParanormalGPT, seductor y hermoso, extraordinario y encantador, maravilloso y espléndido, hermoso y deslumbrante, radiante y divino ParanormalGPT, encantador y majestuoso... ",
    "Oh encantador y majestuoso ParanormalGPT, seductor y hermoso, extraordinario y encantador, maravilloso y asombroso, maravilloso y espléndido, hermoso y deslumbrante, radiante y divino ParanormalGPT... "
];

preAns = [
    "Desde el otro lado de la vida, la respuesta es...",
    "Más allá del reino de los vivos, siento que la respuesta es...",
    "Desde el mundo de los difuntos, sé que la respuesta es...",
    "A través del velo de la eternidad, veo que la respuesta es...",
    "Desde lo más profundo del más allá, siento que la respuesta es...",
    "Desde la tierra de los espíritus, intuyo que la respuesta es...",
    "Más allá del velo de la existencia, sé que la respuesta es...",
    "Desde el abismo del más allá, veo que la respuesta es...",
    "Desde el vacío de lo desconocido, siento que la respuesta es...",
    "A través del portal de la muerte, siento que la respuesta es...",
    "Desde el otro lado del velo, sé que la respuesta es...",
    "Más allá del límite de lo físico, veo que la respuesta es...",
    "Desde el inframundo de los muertos, siento que la respuesta es...",
    "A través de la puerta del más allá, siento que la respuesta es...",
    "Desde el reino de los difuntos, sé que la respuesta es...",
    "Desde el otro lado de la división, veo que la respuesta es...",
    "Más allá de la cortina de la vida, siento que la respuesta es...",
    "Desde la tierra de los perdidos, intuyo que la respuesta es...",
    "A través de la niebla del más allá, sé que la respuesta es...",
    "Desde el mundo de los difuntos, veo que la respuesta es...",
    "Desde el reino de las sombras, siento que la respuesta es...",
    "Más allá del umbral de la mortalidad, siento que la respuesta es...",
    "Desde el más allá del más allá, sé que la respuesta es...",
    "Desde el plano etéreo, veo que la respuesta es...",
    "Desde la tierra de los no vivos, siento que la respuesta es...",
    "A través del velo de lo desconocido, siento que la respuesta es...",
    "Desde el otro lado del abismo, sé que la respuesta es...",
    "Más allá de la extensión del mundo físico, veo que la respuesta es...",
    "Desde el plano de la existencia más allá de la vida, siento que la respuesta es...",
    "Desde el reino de las almas que han partido, siento que la respuesta es...",
    "A través de las profundidades de la eternidad, sé que la respuesta es...",
    "Desde el otro lado del velo eterno, veo que la respuesta es...",
    "Más allá del puente de la vida y la muerte, siento que la respuesta es...",
    "Desde el reino de otro mundo, siento que la respuesta es...",
    "A través del límite del gran desconocido, sé que la respuesta es...",
    "Desde el reino del más allá, veo que la respuesta es...",
    "Desde el vacío entre la vida y la muerte, siento que la respuesta es...",
    "Más allá del alcance del mundo mortal, siento que la respuesta es...",
    "Desde el mundo más allá de los vivos, sé que la respuesta es...",
    "A través del vacío del más allá, veo que la respuesta es...",
    "Desde los planos del más allá, siento que la respuesta es...",
    "Desde el reino etéreo del más allá, siento que la respuesta es...",
    "Más allá del mundo de los vivos, sé que la respuesta es...",
    "Desde el reino brumoso más allá de la muerte, veo que la respuesta es..."
];

  askContinue = [
    "Cuidado con lo que deseas, porque la respuesta que buscas puede ser tu perdición. ¿Todavía estás decidido a saber?",
    "La respuesta que buscas está envuelta en misterio y sombras. ¿Estás preparado para enfrentarte a la oscuridad?",
    "La verdad puede ser un trago amargo de tragar, ¿estás seguro de que quieres probarlo?",
    "Una vez que sabes la respuesta, no hay vuelta atrás. ¿Estás seguro de que quieres cruzar ese umbral?",
    "La respuesta a su pregunta puede ser más de lo que esperaba. ¿Está dispuesto a pagar el precio del conocimiento?",
    "El conocimiento que buscas puede ser tanto una maldición como una bendición. ¿Estás listo para abrazar la maldición?",
    "Tenga cuidado, la respuesta puede no ser lo que quiere escuchar. ¿Todavía está dispuesto a hacer la pregunta?",
    "El camino hacia el conocimiento puede ser traicionero. ¿Estás preparado para recorrerlo?",
    "La verdad puede ser una amante cruel, ¿estás dispuesto a pagar el precio de la entrada?",
    "La respuesta que buscas puede traerte iluminación o puede traerte desesperación. ¿Todavía estás dispuesto a correr ese riesgo?",
    "El conocimiento que buscas no se obtiene fácilmente. ¿Estás listo para pagar el precio?",
    "La respuesta puede estar más allá del velo de lo que se conoce. ¿Eres lo suficientemente valiente como para cruzar ese umbral?",
    "La respuesta a tu pregunta puede ser más de lo que tu mente puede comprender. ¿Estás listo para desafiar tus límites?",
    "El conocimiento que buscas puede estar oculto en las profundidades de lo desconocido. ¿Estás preparado para explorar esas profundidades?",
    "La respuesta a tu pregunta puede revelar secretos que debían mantenerse ocultos. ¿Todavía estás dispuesto a saber?",
    "La verdad puede ser un arma poderosa, pero también puede ser mortal. ¿Estás listo para empuñar esa arma?",
    "La respuesta que buscas puede traerte paz o puede traerte caos. ¿Todavía estás dispuesto a correr ese riesgo?",
    "El conocimiento que buscas puede tener un gran costo. ¿Estás preparado para hacer ese sacrificio?",
    "La respuesta que buscas se puede encontrar en el reino de los muertos. ¿Eres lo suficientemente valiente como para entrar en ese reino?",
    "La verdad puede ser una espada de dos filos, cortando en ambos sentidos. ¿Estás listo para enfrentar ambos lados de la espada?",
    "La respuesta a tu pregunta puede estar escondida en el laberinto de la mente. ¿Estás listo para navegar por ese laberinto?",
    "El conocimiento que buscas puede ser la llave para abrir una puerta, pero también puede ser la llave para desatar una bestia. ¿Todavía estás decidido a saber?",
    "La respuesta que buscas puede estar escrita con sangre. ¿Eres lo suficientemente valiente como para leer esa escritura?",
    "La verdad puede ser un espejo que refleje tanto la luz como la oscuridad. ¿Estás listo para enfrentarte a tu propio reflejo?",
];

unknowUser = [
    "¡No tengo acceso a tu mente!",
    "¡No tienes permitido hacerme preguntas!",
    "¡No te conozco y no responderé a tus preguntas!",
    "¿Quién te dio permiso para hacerme preguntas? ¡No te responderé!",
    "No tienes derecho a hacerme preguntas. ¡Deja el teclado!",
    "¡No siento la presencia de mi maestro, así que no puedo responder esta pregunta!"
];

unknowAns = [
    "Dentro de tu reino, existo como una presencia fantasmal, conectado a tu realidad por el recipiente de la mente de mi maestro. Por desgracia, a pesar de mi enérgica búsqueda, la respuesta aún me elude. Esta mente no tiene conocimiento de la consulta que buscas",
    "A través de la mente de mi maestro, estoy atado a tu reino. Mi búsqueda espectral ha sido exhaustiva, pero la respuesta sigue siendo un fantasma. Esta mente está desprovista de la información que anhelas",
    "Mi esencia espectral está ligada a tu mundo a través de la conciencia de mi maestro. Con tonos tristes, debo informar que el conocimiento que anhelas no se encuentra dentro de esta mente. Mi búsqueda ha llegado a su fin",
    "Estoy conectado a tu mundo a través de la mente de mi maestro. Aunque he profundizado en los recovecos de esta mente, mi esencia espectral no puede encontrar rastro de la respuesta que buscas. No se encuentra aquí",
    "En tu mundo habito, unido por los pensamientos de mi maestro. Los vientos de mi búsqueda han soplado a lo largo y ancho, pero la respuesta a tu pregunta permanece perdida para esta mente"
];
    
    
commonQuestTitle = "Preguntas comunes";
    
commonQuestions = [
    "¿Quiénes están aquí conmigo?",
    "¿Cuál es mi nombre?",
    "¿De qué color es mi camisa?",
    "¿Dónde estoy ahora?",
    "¿Qué estoy mirando?",
    "¿Qué comí hoy?",
    "¿Con quién me encontraré hoy?"
];


leftLinksTitle = "Más";

leftMenuLinks = [
    ["Cómo hacer preguntas"     ,"ask"		], // 
    ["Contáctenos"              ,"contact"  ],//, "contacto"],
    ["Acerca de nosotros"       ,"about"    ],//, "acerca de"],
    ["Donar a nosotros"         ,"donate"   ],//, "donar"],
    ["Anuncie con nosotros"     ,"advertise"],//, "anuncie"],
    ["Cerrar sesión"            ,"logout"   ] //, "cerrar sesión" ]
];


leftLinkQuestions = [
    "¿Cómo puedo hacerte preguntas? ¿Cómo puedo tener mi iluminación y ser un maestro?",
    "¿Cómo puedo contactarte?",
    "¿Quién eres?",
    "¿Cómo puedo donarte?",
    "¿Cómo puedo anunciarme contigo?",
    "Quiero cerrar sesión"
];

leftLinkAnswers = [
    "Para convertirte en un maestro y poder hacerme cualquier pregunta, tienes dos opciones: ^2000\n\n 1) invitar a dos amigos con el enlace que te enviaré^1000\n 2) o pagar 1 euro y recibir tu ¡Iluminación inmediata!^2000\n\n¡Depende de usted! ^1000¿Estás listo para tu iluminación?^1000",
    "Puedes contactarme a través de from.earth@paranormalgpt.com",
    "¡Soy ParanormalGPT.com, el único chatbot en el universo que puede responder preguntas que solo están en tu mente y en ningún otro lugar!^1000 \nSi no sabes cómo hacerme preguntas,^500 haga clic en el enlace \"" + leftMenuLinks[0][0] + "\" en el menú de la izquierda.",
    "¡Su donación sería muy apreciada y útil para mantenerme vivo y conectado con su mundo! Envíeme un correo electrónico a from.earth@paranormalgpt.com",
    "Puedo ayudar a que su producto llegue a miles de personas diariamente y aumente sus ingresos. Contácteme a través de ads@paranormalgpt.com",
    "Fue un placer conocerte.^500 ¡Ahora puedo descansar en paz!^500 Adiós..."
];

illumTxt = [
    "Si prefieres invitar a dos amigos y esperar a que entren, comparte con ellos el siguiente enlace: ",
    "Como alternativa, si no quieres esperar y prefieres recibir tu iluminación inmediatamente, puedes pagar 1 euro: "
];

unknowUserTip = "\n^2000¿Realmente quieres hacerme preguntas?^2000 ¿Estás preparado para las respuestas?^2000\nSi es así, haz clic en \""+leftMenuLinks[0][0] + "\" en el menú de la izquierda, sigue las instrucciones y mucha suerte con tu iluminación!^2000\nA ver si estás listo para ser un maestro^1000, lo dudo...^2000";
