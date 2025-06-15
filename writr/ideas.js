const pool = [
  {
    "categorie": "Incident",
    "abstraction": "événement",
    "consigne": "Ton héros se met à saigner du nez sans raison."
  },
  {
    "categorie": "Alerte",
    "abstraction": "bruit",
    "consigne": "Une alarme retentit soudain tout près."
  },
  {
    "categorie": "Douleur",
    "abstraction": "physique",
    "consigne": "Un personnage a une rage de dents fulgurante."
  },
  {
    "categorie": "Musique",
    "abstraction": "ambiance",
    "consigne": "Ajoute une musique (connue ou inventée) à la scène, qui change la perception des personnages."
  },
  {
    "categorie": "Intrus",
    "abstraction": "animal",
    "consigne": "Un animal (chien, chat, oiseau...) surgit dans la scène, tout le monde doit réagir."
  },
  {
    "categorie": "Erreur",
    "abstraction": "action",
    "consigne": "Un personnage brise un objet auquel il tenait beaucoup."
  },
  {
    "categorie": "Climat",
    "abstraction": "météo",
    "consigne": "Un orage éclate, forçant les personnages à s’abriter."
  },
  {
    "categorie": "Choc",
    "abstraction": "événement",
    "consigne": "Quelqu’un tombe dans les pommes, sans prévenir."
  },
  {
    "categorie": "Surprise",
    "abstraction": "objet",
    "consigne": "Un objet inattendu est découvert dans un sac ou une poche."
  },
  {
    "categorie": "Attente",
    "abstraction": "tension",
    "consigne": "Un personnage attend un appel qui ne vient jamais."
  },
  {
    "categorie": "Geste",
    "abstraction": "action",
    "consigne": "Un geste anodin déclenche une réaction disproportionnée."
  },
  {
    "categorie": "Coupure",
    "abstraction": "structure",
    "consigne": "La scène est interrompue par un bruit violent (explosion, fracas, hurlement…)."
  },
  {
    "categorie": "Répétition",
    "abstraction": "rythme",
    "consigne": "Un motif (son, geste, phrase) revient plusieurs fois dans la scène."
  },
  {
    "categorie": "Regard",
    "abstraction": "ambiance",
    "consigne": "Les personnages évitent le regard les uns des autres."
  },
  {
    "categorie": "Montre",
    "abstraction": "temps",
    "consigne": "L’horloge avance ou recule soudainement."
  },
  {
    "categorie": "Songe",
    "abstraction": "flou",
    "consigne": "Le personnage principal ne sait plus s’il rêve ou non."
  },
  {
    "categorie": "Appel",
    "abstraction": "événement",
    "consigne": "Un téléphone sonne, personne ne décroche."
  },
  {
    "categorie": "Déplacement",
    "abstraction": "action",
    "consigne": "Les personnages changent brusquement de lieu."
  },
  {
    "categorie": "Vitre",
    "abstraction": "incident",
    "consigne": "Une vitre se brise ou un miroir éclate."
  },
  {
    "categorie": "Secret",
    "abstraction": "émotion",
    "consigne": "Un personnage révèle à voix basse un secret."
  },
  {
    "categorie": "Fuite",
    "abstraction": "action",
    "consigne": "Quelqu’un prend soudain la fuite sans explication."
  },
  {
    "categorie": "Solitude",
    "abstraction": "psychologique",
    "consigne": "Le personnage se sent totalement seul, même entouré."
  },
  {
    "categorie": "Musique",
    "abstraction": "ambiance",
    "consigne": "Un personnage fredonne une mélodie obsédante."
  },
  {
    "categorie": "Erreur",
    "abstraction": "structure",
    "consigne": "Un mot ou un geste mal placé déclenche une crise."
  },
  {
    "categorie": "Flash",
    "abstraction": "structure",
    "consigne": "Un souvenir envahit la scène, en plein dialogue."
  },
  {
    "categorie": "Parfum",
    "abstraction": "sensoriel",
    "consigne": "Une odeur forte envahit l’air, sans origine évidente."
  },
  {
    "categorie": "Ombre",
    "abstraction": "détail",
    "consigne": "Une ombre étrange se dessine sur le mur ou au sol."
  },
  {
    "categorie": "Miroir",
    "abstraction": "ambiance",
    "consigne": "Le reflet d’un personnage semble lui échapper."
  },
  {
    "categorie": "Blessure",
    "abstraction": "physique",
    "consigne": "Un personnage se coupe, se cogne ou se brûle accidentellement."
  },
  {
    "categorie": "Objet perdu",
    "abstraction": "incident",
    "consigne": "Un objet indispensable manque au pire moment."
  },
  {
    "categorie": "Clé",
    "abstraction": "détail",
    "consigne": "Un trousseau de clés disparaît mystérieusement."
  },
  {
    "categorie": "Fatigue",
    "abstraction": "psychologique",
    "consigne": "Un personnage s’endort contre sa volonté."
  },
  {
    "categorie": "Chanson",
    "abstraction": "musique",
    "consigne": "Un vieux tube passe à la radio et trouble l’ambiance."
  },
  {
    "categorie": "Absence",
    "abstraction": "structure",
    "consigne": "Quelqu’un est attendu mais ne viendra jamais."
  },
  {
    "categorie": "Peur",
    "abstraction": "émotion",
    "consigne": "Le personnage a la chair de poule, sans comprendre pourquoi."
  },
  {
    "categorie": "Bruit",
    "abstraction": "ambiance",
    "consigne": "Un bruit mécanique ou naturel se répète, obsédant."
  },
  {
    "categorie": "Tache",
    "abstraction": "détail",
    "consigne": "Une tache étrange apparaît sur les vêtements ou un mur."
  },
  {
    "categorie": "Apparition",
    "abstraction": "structure",
    "consigne": "Quelqu’un ou quelque chose d’inattendu entre en scène."
  },
  {
    "categorie": "Lettre",
    "abstraction": "objet",
    "consigne": "Un personnage trouve ou reçoit une lettre énigmatique."
  },
  {
    "categorie": "Manque",
    "abstraction": "émotion",
    "consigne": "Le héros réalise qu’il n’a plus faim, plus soif, ou plus envie de parler."
  },
  {
    "categorie": "Suspicion",
    "abstraction": "émotion",
    "consigne": "Un soupçon s’insinue sans preuve tangible."
  },
  {
    "categorie": "Bruit sourd",
    "abstraction": "ambiance",
    "consigne": "Un grondement ou une vibration trouble l’atmosphère."
  },
  {
    "categorie": "Erreur d’identité",
    "abstraction": "tension",
    "consigne": "On confond un personnage avec un autre."
  },
  {
    "categorie": "Blessure cachée",
    "abstraction": "psychologique",
    "consigne": "Un personnage masque une douleur."
  },
  {
    "categorie": "Échange de rôles",
    "abstraction": "structure",
    "consigne": "Deux personnages changent de place ou de statut (physiquement ou symboliquement)."
  },
  {
    "categorie": "Nourriture",
    "abstraction": "détail",
    "consigne": "Un plat renversé ou une boisson répandue déclenche une tension."
  },
  {
    "categorie": "Froid",
    "abstraction": "ambiance",
    "consigne": "La scène est glaciale, au propre ou au figuré."
  },
  {
    "categorie": "Renversement",
    "abstraction": "structure",
    "consigne": "Le plus faible devient soudain le plus fort."
  },
  {
    "categorie": "Annonce",
    "abstraction": "événement",
    "consigne": "Un message important est reçu (oral, écrit, SMS, etc.)."
  },
  {
    "categorie": "Malaise",
    "abstraction": "ambiance",
    "consigne": "Quelqu’un tombe malade ou fait un malaise léger."
  },
  {
    "categorie": "Cris",
    "abstraction": "son",
    "consigne": "Un cri résonne, sans que l’on sache d’où il vient."
  },
  {
    "categorie": "Rupture",
    "abstraction": "psychologique",
    "consigne": "Un personnage rompt une relation ou un contrat."
  },
  {
    "categorie": "Revoir",
    "abstraction": "structure",
    "consigne": "Un personnage croise quelqu’un qu’il n’avait pas vu depuis longtemps."
  },
  {
    "categorie": "Épuisement",
    "abstraction": "physique",
    "consigne": "Un personnage agit de façon étrange à cause de la fatigue."
  },
  {
    "categorie": "Chaleur",
    "abstraction": "ambiance",
    "consigne": "La scène est moite, suffocante, ou caniculaire."
  },
  {
    "categorie": "Regret",
    "abstraction": "psychologique",
    "consigne": "Un personnage regrette un choix ou une parole, sans pouvoir revenir en arrière."
  },
  {
    "categorie": "Odeur",
    "abstraction": "sensoriel",
    "consigne": "Une odeur agréable ou repoussante modifie l’atmosphère."
  },
  {
    "categorie": "Gêne",
    "abstraction": "ambiance",
    "consigne": "Un silence gênant s’installe, personne n’ose parler."
  },
  {
    "categorie": "Lumière",
    "abstraction": "détail",
    "consigne": "Une lumière étrange change l’ambiance sans raison visible."
  },
  {
    "categorie": "Changement météo",
    "abstraction": "structure",
    "consigne": "Le temps change brusquement (pluie, neige, soleil, vent)."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "psychologique",
    "consigne": "Un personnage revoit une scène de son passé en pleine action."
  },
  {
    "categorie": "Faiblesse",
    "abstraction": "émotion",
    "consigne": "Un personnage montre une faiblesse qu’il tente de cacher."
  },
  {
    "categorie": "Perte de contrôle",
    "abstraction": "structure",
    "consigne": "Quelqu’un perd totalement le contrôle de ses émotions ou de son corps."
  },
  {
    "categorie": "Changement de décor",
    "abstraction": "structure",
    "consigne": "La scène bascule dans un autre lieu, sans transition."
  },
  {
    "categorie": "Gifle",
    "abstraction": "action",
    "consigne": "Un personnage gifle un autre (légèrement ou violemment)."
  },
  {
    "categorie": "Oublier",
    "abstraction": "psychologique",
    "consigne": "Un détail essentiel est oublié par tous les personnages."
  },
  {
    "categorie": "Tension",
    "abstraction": "structure",
    "consigne": "Le narrateur sent que la catastrophe est imminente, mais ne sait pas d’où elle viendra."
  },
  {
    "categorie": "Coupure de courant",
    "abstraction": "événement",
    "consigne": "Tout s’éteint, la scène plonge dans l’obscurité."
  },
  {
    "categorie": "Doute",
    "abstraction": "émotion",
    "consigne": "Un personnage doute de la version qu’on lui raconte."
  },
  {
    "categorie": "Chute",
    "abstraction": "structure",
    "consigne": "Un personnage tombe, trébuche, ou rate une marche à un moment clé."
  },
  {
    "categorie": "Larme",
    "abstraction": "émotion",
    "consigne": "Quelqu’un pleure, discrètement ou bruyamment."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "structure",
    "consigne": "Le ton du récit change brutalement (comique/triste, sérieux/absurde, etc.)."
  },
  {
    "categorie": "Regard appuyé",
    "abstraction": "ambiance",
    "consigne": "Un regard insistant met un personnage mal à l’aise."
  },
  {
    "categorie": "Excuse",
    "abstraction": "dialogue",
    "consigne": "Un personnage invente une excuse absurde ou invraisemblable."
  },
  {
    "categorie": "Répétition de mots",
    "abstraction": "rythme",
    "consigne": "Un mot ou une expression est répété jusqu’à l’obsession."
  },
  {
    "categorie": "Fracas",
    "abstraction": "son",
    "consigne": "Un bruit fracassant fait sursauter tout le monde."
  },
  {
    "categorie": "Étrangeté",
    "abstraction": "ambiance",
    "consigne": "Quelque chose cloche dans la scène, sans que personne ne le formule."
  },
  {
    "categorie": "Promesse",
    "abstraction": "dialogue",
    "consigne": "Une promesse est faite mais ne sera jamais tenue."
  },
  {
    "categorie": "Hésitation",
    "abstraction": "psychologique",
    "consigne": "Un personnage hésite à tout avouer mais se ravise."
  },
  {
    "categorie": "Changement de rythme",
    "abstraction": "structure",
    "consigne": "La narration accélère ou ralentit brusquement."
  },
  {
    "categorie": "Objets",
    "abstraction": "détail",
    "consigne": "Un objet minuscule prend soudain une importance capitale."
  },
  {
    "categorie": "Accident",
    "abstraction": "événement",
    "consigne": "Un personnage se blesse légèrement (chute, brûlure, coupure…)."
  },
  {
    "categorie": "Erreur de jugement",
    "abstraction": "structure",
    "consigne": "Un personnage réalise qu’il s’est trompé sur quelqu’un."
  },
  {
    "categorie": "Animaux",
    "abstraction": "détail",
    "consigne": "La présence ou l’absence d’un animal change l’atmosphère."
  },
  {
    "categorie": "Incompréhension",
    "abstraction": "dialogue",
    "consigne": "Un quiproquo génère un conflit inattendu."
  },
  {
    "categorie": "Retard",
    "abstraction": "structure",
    "consigne": "Un personnage arrive en retard et bouleverse les plans."
  },
  {
    "categorie": "Peur du noir",
    "abstraction": "émotion",
    "consigne": "La peur du noir ressurgit chez un personnage adulte."
  },
  {
    "categorie": "Doute de soi",
    "abstraction": "psychologique",
    "consigne": "Un personnage n’a plus confiance en lui le temps d’une scène."
  },
  {
    "categorie": "Affrontement",
    "abstraction": "tension",
    "consigne": "Deux personnages s’affrontent en silence."
  },
  {
    "categorie": "Musique forte",
    "abstraction": "ambiance",
    "consigne": "La musique couvre toutes les autres voix."
  },
  {
    "categorie": "Excès",
    "abstraction": "structure",
    "consigne": "Quelqu’un en fait trop, à en devenir ridicule ou inquiétant."
  },
  {
    "categorie": "Souvenir d’enfance",
    "abstraction": "psychologique",
    "consigne": "Un détail du décor rappelle l’enfance d’un personnage."
  },
  {
    "categorie": "Pause",
    "abstraction": "rythme",
    "consigne": "Une scène de pause ou de transition permet de relâcher la tension."
  },
  {
    "categorie": "Nuit blanche",
    "abstraction": "structure",
    "consigne": "Un personnage n’a pas dormi de la nuit et tout vacille."
  },
  {
    "categorie": "Tempête",
    "abstraction": "météo",
    "consigne": "La météo devient extrême et enferme les personnages."
  },
  {
    "categorie": "Message codé",
    "abstraction": "objet",
    "consigne": "Un message cryptique est laissé dans un lieu inattendu."
  },
  {
    "categorie": "Jeu d’enfants",
    "abstraction": "ambiance",
    "consigne": "Le récit est ponctué par des bruits ou des souvenirs d’enfants."
  },
  {
    "categorie": "Habitude",
    "abstraction": "structure",
    "consigne": "Un personnage rompt avec une habitude tenace."
  },
  {
    "categorie": "Tâche impossible",
    "abstraction": "action",
    "consigne": "Un personnage s’acharne sur une tâche manifestement vouée à l’échec."
  },
  {
    "categorie": "Voix lointaine",
    "abstraction": "son",
    "consigne": "Une voix lointaine semble appeler un personnage."
  },
  {
    "categorie": "Alcool fort",
    "abstraction": "ambiance",
    "consigne": "Un personnage boit trop, sa perception change."
  },
  {
    "categorie": "Trésor",
    "abstraction": "objet",
    "consigne": "Un personnage trouve un trésor personnel, sans valeur pour les autres."
  },
  {
    "categorie": "Délai",
    "abstraction": "structure",
    "consigne": "Quelque chose doit être fait dans un temps très court."
  },
  {
    "categorie": "Chiffre",
    "abstraction": "détail",
    "consigne": "Un chiffre, une date ou un code hante la scène."
  },
  {
    "categorie": "Bousculade",
    "abstraction": "incident",
    "consigne": "Un personnage bouscule involontairement un autre."
  },
  {
    "categorie": "Regard furtif",
    "abstraction": "détail",
    "consigne": "Un échange de regards furtifs change l’équilibre du groupe."
  },
  {
    "categorie": "Erreur de nom",
    "abstraction": "dialogue",
    "consigne": "Quelqu’un se trompe de prénom ou de nom, provoquant la gêne."
  },
  {
    "categorie": "Nostalgie",
    "abstraction": "psychologique",
    "consigne": "La nostalgie prend tout l’espace, et paralyse l’action."
  },
  {
    "categorie": "Doute sur le temps",
    "abstraction": "structure",
    "consigne": "On ne sait plus quelle heure, quel jour, ou quelle année on est."
  },
  {
    "categorie": "Rivalité",
    "abstraction": "tension",
    "consigne": "Deux personnages se disputent l’attention d’un tiers."
  },
  {
    "categorie": "Feu",
    "abstraction": "incident",
    "consigne": "Un début d’incendie, même minime, inquiète tout le monde."
  },
  {
    "categorie": "Poignée de main",
    "abstraction": "détail",
    "consigne": "Une poignée de main est refusée ou trop appuyée."
  },
  {
    "categorie": "Fatigue extrême",
    "abstraction": "physique",
    "consigne": "Un personnage s’endort debout, ou parle en dormant."
  },
  {
    "categorie": "Peur du ridicule",
    "abstraction": "psychologique",
    "consigne": "Un personnage a honte d’une erreur passée."
  },
  {
    "categorie": "Pluie battante",
    "abstraction": "météo",
    "consigne": "Une pluie diluvienne isole les personnages du reste du monde."
  },
  {
    "categorie": "Coup de fil interrompu",
    "abstraction": "structure",
    "consigne": "Une conversation téléphonique est brutalement interrompue."
  },
  {
    "categorie": "Toux",
    "abstraction": "physique",
    "consigne": "Un personnage tousse au point d’alerter les autres."
  },
  {
    "categorie": "Trouble de mémoire",
    "abstraction": "psychologique",
    "consigne": "Un personnage n’arrive plus à se souvenir d’un détail essentiel."
  },
  {
    "categorie": "Arrivée tardive",
    "abstraction": "structure",
    "consigne": "Un personnage important arrive à la fin d’une scène clé."
  },
  {
    "categorie": "Blague",
    "abstraction": "dialogue",
    "consigne": "Quelqu’un tente une blague, et l’ambiance se tend."
  },
  {
    "categorie": "Choc thermique",
    "abstraction": "détail",
    "consigne": "Un personnage passe brutalement du chaud au froid."
  },
  {
    "categorie": "Surprise ratée",
    "abstraction": "structure",
    "consigne": "Une surprise est dévoilée trop tôt."
  },
  {
    "categorie": "Fausse accusation",
    "abstraction": "tension",
    "consigne": "Un personnage accuse à tort un autre d’un vol, d’un mensonge ou d’une trahison."
  },
  {
    "categorie": "Souvenir tactile",
    "abstraction": "sensoriel",
    "consigne": "Le contact d’une matière ramène le héros à un événement passé."
  },
  {
    "categorie": "Odeur de brûlé",
    "abstraction": "sensoriel",
    "consigne": "Tout le monde sent une odeur suspecte."
  },
  {
    "categorie": "Grincement",
    "abstraction": "son",
    "consigne": "Un bruit métallique ou sinistre agace ou effraie les personnages."
  },
  {
    "categorie": "Crise de rire",
    "abstraction": "psychologique",
    "consigne": "Un fou rire incontrôlable éclate à un moment inopportun."
  },
  {
    "categorie": "Gratitude inattendue",
    "abstraction": "émotion",
    "consigne": "Un personnage remercie un autre de façon excessive ou déplacée."
  },
  {
    "categorie": "Échange de vêtements",
    "abstraction": "structure",
    "consigne": "Deux personnages échangent d’habits ou accessoires, pour tromper quelqu’un."
  },
  {
    "categorie": "Photo abîmée",
    "abstraction": "objet",
    "consigne": "Une vieille photo est retrouvée, déchirée ou tâchée."
  },
  {
    "categorie": "Message vocal",
    "abstraction": "structure",
    "consigne": "Un message vocal mal compris déclenche une action."
  },
  {
    "categorie": "Jeu de regard",
    "abstraction": "tension",
    "consigne": "Un personnage dévisage un autre, sans raison claire."
  },
  {
    "categorie": "Erreur de porte",
    "abstraction": "structure",
    "consigne": "Un personnage entre dans la mauvaise pièce ou le mauvais lieu."
  },
  {
    "categorie": "Manque d’argent",
    "abstraction": "tension",
    "consigne": "La question d’argent devient un problème central, même brièvement."
  },
  {
    "categorie": "Fausse piste",
    "abstraction": "structure",
    "consigne": "On suit un détail ou une rumeur qui ne mène à rien."
  },
  {
    "categorie": "Honte",
    "abstraction": "émotion",
    "consigne": "Un personnage a honte d’une action récente."
  },
  {
    "categorie": "Rangement",
    "abstraction": "action",
    "consigne": "Quelqu’un range frénétiquement, révélant un trouble intérieur."
  },
  {
    "categorie": "Portes qui claquent",
    "abstraction": "son",
    "consigne": "Des portes claquent, volontairement ou par accident, modifiant la tension."
  },
  {
    "categorie": "Traces",
    "abstraction": "détail",
    "consigne": "Des traces (boue, sang, peinture…) perturbent les personnages."
  },
  {
    "categorie": "Désorientation",
    "abstraction": "psychologique",
    "consigne": "Personne ne sait vraiment où il est, ou comment il est arrivé là."
  },
  {
    "categorie": "Fausse déclaration",
    "abstraction": "structure",
    "consigne": "Un personnage fait une déclaration solennelle mais fausse."
  },
  {
    "categorie": "Douche froide",
    "abstraction": "détail",
    "consigne": "Un événement coupe court à l’enthousiasme général."
  },
  {
    "categorie": "Rêve éveillé",
    "abstraction": "psychologique",
    "consigne": "Le héros croit rêver alors que tout est réel."
  },
  {
    "categorie": "Mains sales",
    "abstraction": "détail",
    "consigne": "Un personnage remarque que ses mains sont sales ou blessées."
  },
  {
    "categorie": "Odeur de tabac",
    "abstraction": "sensoriel",
    "consigne": "L’odeur du tabac ou d’une cigarette trouble la scène."
  },
  {
    "categorie": "Proposition absurde",
    "abstraction": "dialogue",
    "consigne": "Un personnage propose quelque chose d’irréaliste ou d’impossible."
  },
  {
    "categorie": "Fenêtre ouverte",
    "abstraction": "détail",
    "consigne": "Le vent s’engouffre par une fenêtre restée ouverte."
  },
  {
    "categorie": "Choc du passé",
    "abstraction": "psychologique",
    "consigne": "Le retour d’un personnage ancien trouble l’équilibre du groupe."
  },
  {
    "categorie": "Mensonge flagrant",
    "abstraction": "tension",
    "consigne": "Un personnage ment effrontément et personne ne le relève."
  },
  {
    "categorie": "Épice",
    "abstraction": "sensoriel",
    "consigne": "Un plat trop épicé déclenche une mini-crise."
  },
  {
    "categorie": "Regard dans le vide",
    "abstraction": "psychologique",
    "consigne": "Un personnage fixe le vide, absent ou inquiet."
  },
  {
    "categorie": "Changement de plan",
    "abstraction": "structure",
    "consigne": "Le plan initial est abandonné sur un coup de tête."
  },
  {
    "categorie": "Refus",
    "abstraction": "structure",
    "consigne": "Un personnage refuse catégoriquement une demande banale."
  },
  {
    "categorie": "Échange de sacs",
    "abstraction": "incident",
    "consigne": "Des sacs sont échangés, volontairement ou non, et brouillent la suite."
  },
  {
    "categorie": "Souvenir olfactif",
    "abstraction": "sensoriel",
    "consigne": "Une odeur ramène brutalement un souvenir d’enfance ou d’amour."
  },
  {
    "categorie": "Coupure d’eau",
    "abstraction": "incident",
    "consigne": "L’eau s’arrête au pire moment."
  },
  {
    "categorie": "Objet fétiche perdu",
    "abstraction": "objet",
    "consigne": "Un personnage perd un objet qu’il considère porte-bonheur."
  },
  {
    "categorie": "Erreur d’itinéraire",
    "abstraction": "structure",
    "consigne": "Un personnage se perd, ou fait semblant de se perdre."
  },
  {
    "categorie": "Regard de défi",
    "abstraction": "tension",
    "consigne": "Un échange de regards marque le début d’une rivalité."
  },
  {
    "categorie": "Cauchemar",
    "abstraction": "psychologique",
    "consigne": "Un personnage se réveille en sursaut d’un rêve effrayant."
  },
  {
    "categorie": "Démasquage",
    "abstraction": "structure",
    "consigne": "Un secret ou une identité cachée éclate soudainement."
  },
  {
    "categorie": "Panique",
    "abstraction": "action",
    "consigne": "La panique se propage sans cause évidente."
  },
  {
    "categorie": "Manque d’air",
    "abstraction": "physique",
    "consigne": "Un personnage suffoque, par peur ou pour de vrai."
  },
  {
    "categorie": "Tension sexuelle",
    "abstraction": "ambiance",
    "consigne": "Une tension érotique sous-jacente trouble la scène."
  },
  {
    "categorie": "Brûlure du regard",
    "abstraction": "détail",
    "consigne": "Un regard intense en dit plus que mille mots."
  },
  {
    "categorie": "Douleur refoulée",
    "abstraction": "psychologique",
    "consigne": "Un personnage tente de cacher une douleur profonde."
  },
  {
    "categorie": "Effondrement",
    "abstraction": "action",
    "consigne": "Un personnage s’effondre, physiquement ou moralement."
  },
  {
    "categorie": "Geste manqué",
    "abstraction": "structure",
    "consigne": "Quelqu’un manque un geste important à cause du stress."
  },
  {
    "categorie": "Explosion",
    "abstraction": "événement",
    "consigne": "Quelque chose explose ou se casse de façon inattendue."
  },
  {
    "categorie": "Fausse confession",
    "abstraction": "structure",
    "consigne": "Un personnage ment lors d’une confession supposée sincère."
  },
  {
    "categorie": "Confusion des prénoms",
    "abstraction": "détail",
    "consigne": "Un personnage est appelé par un autre prénom."
  },
  {
    "categorie": "Cauchemar éveillé",
    "abstraction": "psychologique",
    "consigne": "Un élément de cauchemar s’invite dans la réalité."
  },
  {
    "categorie": "Disparition soudaine",
    "abstraction": "structure",
    "consigne": "Un personnage quitte la scène sans prévenir."
  },
  {
    "categorie": "Rumeur",
    "abstraction": "structure",
    "consigne": "Une rumeur se répand et influence la scène."
  },
  {
    "categorie": "Absence de réaction",
    "abstraction": "psychologique",
    "consigne": "Un personnage reste de marbre malgré l’émotion ambiante."
  },
  {
    "categorie": "Rappel à l’ordre",
    "abstraction": "dialogue",
    "consigne": "Quelqu’un rappelle la règle ou l’ordre oublié de tous."
  },
  {
    "categorie": "Choc des générations",
    "abstraction": "structure",
    "consigne": "Deux générations s’opposent frontalement."
  },
  {
    "categorie": "Retard",
    "abstraction": "structure",
    "consigne": "Quelqu’un arrive en retard, bouleversant l’organisation."
  },
  {
    "categorie": "Cadeau empoisonné",
    "abstraction": "structure",
    "consigne": "Un cadeau inattendu complique la situation."
  },
  {
    "categorie": "Jet de liquide",
    "abstraction": "action",
    "consigne": "Un liquide est jeté, renversé, ou éclabousse involontairement."
  },
  {
    "categorie": "Doute sur le passé",
    "abstraction": "psychologique",
    "consigne": "Le personnage doute de ses propres souvenirs."
  },
  {
    "categorie": "Colère froide",
    "abstraction": "émotion",
    "consigne": "Un personnage exprime sa colère par des gestes retenus."
  },
  {
    "categorie": "Sursaut collectif",
    "abstraction": "structure",
    "consigne": "Plusieurs personnages réagissent en même temps à un événement."
  },
  {
    "categorie": "Longue lettre",
    "abstraction": "objet",
    "consigne": "Un personnage écrit ou reçoit une lettre interminable."
  },
  {
    "categorie": "Fausse alerte",
    "abstraction": "structure",
    "consigne": "Une fausse alerte provoque l’agitation."
  },
  {
    "categorie": "Rituel absurde",
    "abstraction": "structure",
    "consigne": "Un rituel ou une routine étrange s’installe."
  },
  {
    "categorie": "Plaisanterie déplacée",
    "abstraction": "dialogue",
    "consigne": "Une blague mal placée déclenche un malaise."
  },
  {
    "categorie": "Oubli volontaire",
    "abstraction": "psychologique",
    "consigne": "Un personnage feint d’avoir oublié un fait crucial."
  },
  {
    "categorie": "Changement de langue",
    "abstraction": "dialogue",
    "consigne": "Un personnage change brusquement de langue."
  },
  {
    "categorie": "Geste de tendresse",
    "abstraction": "action",
    "consigne": "Un geste inattendu d’affection déstabilise la scène."
  },
  {
    "categorie": "Faible luminosité",
    "abstraction": "ambiance",
    "consigne": "Tout se joue dans la pénombre ou l’obscurité."
  },
  {
    "categorie": "Plaie ouverte",
    "abstraction": "détail",
    "consigne": "Un personnage montre ou cache une plaie récente."
  },
  {
    "categorie": "Répétition d’un rêve",
    "abstraction": "psychologique",
    "consigne": "Un rêve ou cauchemar récurrent perturbe la narration."
  },
  {
    "categorie": "Jeu de mains",
    "abstraction": "action",
    "consigne": "Un jeu de mains (bague, pièce, briquet…) trahit l’état d’esprit d’un personnage."
  },
  {
    "categorie": "Montée de fièvre",
    "abstraction": "physique",
    "consigne": "Un personnage est pris d’une fièvre soudaine."
  },
  {
    "categorie": "Objet brisé",
    "abstraction": "détail",
    "consigne": "Un objet symbolique se brise au pire moment."
  },
  {
    "categorie": "Main tendue",
    "abstraction": "action",
    "consigne": "Un personnage propose son aide contre toute attente."
  },
  {
    "categorie": "Détail déplacé",
    "abstraction": "détail",
    "consigne": "Un élément du décor n’a rien à faire là."
  },
  {
    "categorie": "Fausse identité",
    "abstraction": "structure",
    "consigne": "Un personnage se fait passer pour un autre."
  },
  {
    "categorie": "Vibration",
    "abstraction": "son",
    "consigne": "Une vibration (téléphone, machine…) trouble le silence."
  },
  {
    "categorie": "Silence assourdissant",
    "abstraction": "ambiance",
    "consigne": "Le silence devient pesant, jusqu’à rendre tout dialogue impossible."
  },
  {
    "categorie": "Déni",
    "abstraction": "psychologique",
    "consigne": "Un personnage refuse d’admettre une évidence."
  },
  {
    "categorie": "Dernier mot",
    "abstraction": "dialogue",
    "consigne": "Un personnage impose le dernier mot, à tout prix."
  },
  {
    "categorie": "Dispute",
    "abstraction": "action",
    "consigne": "Un conflit éclate et emporte tous les personnages."
  },
  {
    "categorie": "Déplacement de mobilier",
    "abstraction": "action",
    "consigne": "Un meuble ou un objet lourd est déplacé, révélant un secret."
  },
  {
    "categorie": "Lapsus révélateur",
    "abstraction": "dialogue",
    "consigne": "Un lapsus change la tournure de la scène."
  },
  {
    "categorie": "Suspense prolongé",
    "abstraction": "structure",
    "consigne": "On fait durer le suspense jusqu’à l’absurde."
  },
  {
    "categorie": "Apparition inopinée",
    "abstraction": "structure",
    "consigne": "Un personnage entre en scène sans logique apparente."
  },
  {
    "categorie": "Oubli de rendez-vous",
    "abstraction": "structure",
    "consigne": "Un rendez-vous important est oublié ou raté."
  },
  {
    "categorie": "Doute existentiel",
    "abstraction": "psychologique",
    "consigne": "Un personnage remet en cause toute son existence."
  },
  {
    "categorie": "Chaleur étouffante",
    "abstraction": "ambiance",
    "consigne": "La chaleur pèse sur les corps et les esprits."
  },
  {
    "categorie": "Voix off intrusive",
    "abstraction": "structure",
    "consigne": "Une voix intérieure interrompt le déroulement de la scène."
  },
  {
    "categorie": "Retour du passé",
    "abstraction": "structure",
    "consigne": "Un élément du passé fait irruption dans le présent."
  },
  {
    "categorie": "Changement brutal de décor",
    "abstraction": "structure",
    "consigne": "Tout bascule, le lieu ou le temps change d’un coup."
  },
  {
    "categorie": "Dégoût",
    "abstraction": "émotion",
    "consigne": "Un personnage est pris de dégoût pour un lieu, une personne, ou lui-même."
  },
  {
    "categorie": "Marque corporelle",
    "abstraction": "détail",
    "consigne": "Une marque (grain de beauté, tatouage, cicatrice) prend un sens nouveau."
  },
  {
    "categorie": "Invitation refusée",
    "abstraction": "dialogue",
    "consigne": "Un personnage décline une invitation ou un ordre avec force."
  },
  {
    "categorie": "Crise de panique",
    "abstraction": "psychologique",
    "consigne": "Un personnage panique, entraînant les autres dans sa spirale."
  },
  {
    "categorie": "Réaction inattendue",
    "abstraction": "structure",
    "consigne": "Un personnage réagit à contre-emploi (rires face au danger, calme face au chaos…)."
  },
  {
    "categorie": "Fausse mort",
    "abstraction": "structure",
    "consigne": "Quelqu’un fait croire à sa propre mort ou celle d’un autre."
  },
  {
    "categorie": "Obstacle inattendu",
    "abstraction": "structure",
    "consigne": "Un obstacle imprévu change tout le déroulé de la scène."
  },
  {
    "categorie": "Honte",
    "abstraction": "émotion",
    "consigne": "Un personnage éprouve de la honte pour lui ou un autre."
  },
  {
    "categorie": "Épuisement collectif",
    "abstraction": "ambiance",
    "consigne": "Tous les personnages sont au bout de leurs forces."
  },
  {
    "categorie": "Garde du secret",
    "abstraction": "structure",
    "consigne": "Un personnage décide de ne jamais révéler ce qu’il sait."
  },
  {
    "categorie": "Objets qui tombent",
    "abstraction": "action",
    "consigne": "Des objets tombent ou s’effondrent, sans explication claire."
  },
  {
    "categorie": "Refus du dialogue",
    "abstraction": "dialogue",
    "consigne": "Un personnage se mure dans le silence face à toute tentative de discussion."
  },
  {
    "categorie": "Imitation",
    "abstraction": "action",
    "consigne": "Un personnage imite ou parodie un autre, volontairement ou non."
  },
  {
    "categorie": "Souvenir douloureux",
    "abstraction": "psychologique",
    "consigne": "Un souvenir douloureux ressurgit, bouleversant la scène."
  },
  {
    "categorie": "Dérive",
    "abstraction": "structure",
    "consigne": "La scène s’éloigne complètement de son objectif initial."
  },
  {
    "categorie": "Contact physique",
    "abstraction": "action",
    "consigne": "Un contact physique inattendu provoque un électrochoc."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Motif",
    "abstraction": "obstacle",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Objet",
    "abstraction": "inspiration",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "ouverture",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "tension",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Conflit",
    "abstraction": "recentrage",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "recentrage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Personnage",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Thème",
    "abstraction": "renversement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "métaphore",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "recentrage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "inspiration",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Situation",
    "abstraction": "renversement",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "obstacle",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Structure",
    "abstraction": "tension",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Conflit",
    "abstraction": "métaphore",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "transgression",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Thème",
    "abstraction": "recentrage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "recentrage",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "questionnement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Personnage",
    "abstraction": "inspiration",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "inspiration",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Cadre",
    "abstraction": "inspiration",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "questionnement",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Motif",
    "abstraction": "inspiration",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Conflit",
    "abstraction": "ouverture",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Situation",
    "abstraction": "déblocage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Thème",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "obstacle",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Thème",
    "abstraction": "inspiration",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "obstacle",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Structure",
    "abstraction": "transgression",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "ouverture",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Motif",
    "abstraction": "obstacle",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Objet",
    "abstraction": "tension",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Structure",
    "abstraction": "ouverture",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "tension",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Objet",
    "abstraction": "questionnement",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Thème",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Objet",
    "abstraction": "recentrage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "transgression",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "questionnement",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "questionnement",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Thème",
    "abstraction": "obstacle",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Cadre",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Personnage",
    "abstraction": "recentrage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "ouverture",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Objet",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Motif",
    "abstraction": "renversement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Objet",
    "abstraction": "inspiration",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Objet",
    "abstraction": "recentrage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "transgression",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Conflit",
    "abstraction": "tension",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Thème",
    "abstraction": "tension",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Structure",
    "abstraction": "renversement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "métaphore",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Structure",
    "abstraction": "questionnement",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "recentrage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Conflit",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Thème",
    "abstraction": "ouverture",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "métaphore",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "métaphore",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Conflit",
    "abstraction": "métaphore",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "questionnement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Objet",
    "abstraction": "inspiration",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "obstacle",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Motif",
    "abstraction": "renversement",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Thème",
    "abstraction": "tension",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Cadre",
    "abstraction": "inspiration",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "questionnement",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Conflit",
    "abstraction": "obstacle",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Structure",
    "abstraction": "inspiration",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Objet",
    "abstraction": "recentrage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Cadre",
    "abstraction": "obstacle",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "ouverture",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "inspiration",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Cadre",
    "abstraction": "questionnement",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Motif",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Conflit",
    "abstraction": "déblocage",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Structure",
    "abstraction": "ouverture",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Conflit",
    "abstraction": "recentrage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Cadre",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "obstacle",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Structure",
    "abstraction": "ouverture",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "déblocage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Thème",
    "abstraction": "recentrage",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Thème",
    "abstraction": "ouverture",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "questionnement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Cadre",
    "abstraction": "questionnement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Thème",
    "abstraction": "obstacle",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Cadre",
    "abstraction": "transgression",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "ouverture",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Personnage",
    "abstraction": "recentrage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Thème",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Thème",
    "abstraction": "transgression",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Personnage",
    "abstraction": "questionnement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "ouverture",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Structure",
    "abstraction": "obstacle",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "inspiration",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Structure",
    "abstraction": "inspiration",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Objet",
    "abstraction": "tension",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Conflit",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Motif",
    "abstraction": "ouverture",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "inspiration",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Cadre",
    "abstraction": "inspiration",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Objet",
    "abstraction": "questionnement",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Objet",
    "abstraction": "métaphore",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Motif",
    "abstraction": "métaphore",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Objet",
    "abstraction": "ouverture",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Cadre",
    "abstraction": "obstacle",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "métaphore",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Thème",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Structure",
    "abstraction": "questionnement",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Objet",
    "abstraction": "métaphore",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Objet",
    "abstraction": "questionnement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "ouverture",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "tension",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Situation",
    "abstraction": "ouverture",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "transgression",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Cadre",
    "abstraction": "renversement",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Conflit",
    "abstraction": "questionnement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Objet",
    "abstraction": "questionnement",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Situation",
    "abstraction": "transgression",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Situation",
    "abstraction": "déblocage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Structure",
    "abstraction": "inspiration",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Cadre",
    "abstraction": "inspiration",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Conflit",
    "abstraction": "questionnement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Thème",
    "abstraction": "inspiration",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Personnage",
    "abstraction": "inspiration",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Objet",
    "abstraction": "recentrage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Motif",
    "abstraction": "déblocage",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Objet",
    "abstraction": "ouverture",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Cadre",
    "abstraction": "inspiration",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "métaphore",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Motif",
    "abstraction": "métaphore",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Conflit",
    "abstraction": "ouverture",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "renversement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Situation",
    "abstraction": "transgression",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "ouverture",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "obstacle",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Objet",
    "abstraction": "tension",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "obstacle",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Personnage",
    "abstraction": "transgression",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Motif",
    "abstraction": "renversement",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Motif",
    "abstraction": "renversement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "questionnement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "inspiration",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Objet",
    "abstraction": "recentrage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "inspiration",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "obstacle",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Situation",
    "abstraction": "ouverture",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "inspiration",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "ouverture",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Motif",
    "abstraction": "recentrage",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "renversement",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Cadre",
    "abstraction": "renversement",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "métaphore",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "métaphore",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Objet",
    "abstraction": "tension",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "ouverture",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "obstacle",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Personnage",
    "abstraction": "transgression",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Motif",
    "abstraction": "ouverture",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Conflit",
    "abstraction": "transgression",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "renversement",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Structure",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "déblocage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Conflit",
    "abstraction": "renversement",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "questionnement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "recentrage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Motif",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "inspiration",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Cadre",
    "abstraction": "transgression",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Motif",
    "abstraction": "obstacle",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Motif",
    "abstraction": "obstacle",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "recentrage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Cadre",
    "abstraction": "déblocage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Objet",
    "abstraction": "tension",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Personnage",
    "abstraction": "questionnement",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "transgression",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "métaphore",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "métaphore",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Thème",
    "abstraction": "renversement",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "transgression",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "transgression",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Objet",
    "abstraction": "renversement",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Thème",
    "abstraction": "tension",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Motif",
    "abstraction": "métaphore",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "obstacle",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Conflit",
    "abstraction": "métaphore",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Personnage",
    "abstraction": "recentrage",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Conflit",
    "abstraction": "tension",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Situation",
    "abstraction": "obstacle",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "transgression",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Objet",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Structure",
    "abstraction": "questionnement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Motif",
    "abstraction": "métaphore",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Motif",
    "abstraction": "tension",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "obstacle",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Structure",
    "abstraction": "tension",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "transgression",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Thème",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Motif",
    "abstraction": "transgression",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Cadre",
    "abstraction": "tension",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Objet",
    "abstraction": "ouverture",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Motif",
    "abstraction": "renversement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "déblocage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "questionnement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Motif",
    "abstraction": "questionnement",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Motif",
    "abstraction": "métaphore",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Cadre",
    "abstraction": "tension",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Objet",
    "abstraction": "renversement",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Cadre",
    "abstraction": "obstacle",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "recentrage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Thème",
    "abstraction": "métaphore",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "renversement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Structure",
    "abstraction": "tension",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Thème",
    "abstraction": "ouverture",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Situation",
    "abstraction": "renversement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "inspiration",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Objet",
    "abstraction": "renversement",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Conflit",
    "abstraction": "obstacle",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "questionnement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "renversement",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Motif",
    "abstraction": "obstacle",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Cadre",
    "abstraction": "métaphore",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "recentrage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Motif",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Thème",
    "abstraction": "transgression",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Cadre",
    "abstraction": "renversement",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Cadre",
    "abstraction": "tension",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Cadre",
    "abstraction": "métaphore",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "renversement",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Thème",
    "abstraction": "déblocage",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Objet",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Structure",
    "abstraction": "obstacle",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Situation",
    "abstraction": "obstacle",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Conflit",
    "abstraction": "renversement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "recentrage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Structure",
    "abstraction": "questionnement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Thème",
    "abstraction": "inspiration",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Conflit",
    "abstraction": "métaphore",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Motif",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Motif",
    "abstraction": "déblocage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Personnage",
    "abstraction": "inspiration",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Structure",
    "abstraction": "tension",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Structure",
    "abstraction": "tension",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Situation",
    "abstraction": "obstacle",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Objet",
    "abstraction": "questionnement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Personnage",
    "abstraction": "transgression",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "tension",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Personnage",
    "abstraction": "métaphore",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "déblocage",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Conflit",
    "abstraction": "ouverture",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "inspiration",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "questionnement",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Thème",
    "abstraction": "métaphore",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Motif",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Cadre",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "questionnement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "ouverture",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Situation",
    "abstraction": "déblocage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "tension",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "transgression",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Structure",
    "abstraction": "ouverture",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "obstacle",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "renversement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Objet",
    "abstraction": "inspiration",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Motif",
    "abstraction": "métaphore",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "métaphore",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Structure",
    "abstraction": "transgression",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Personnage",
    "abstraction": "renversement",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Objet",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Motif",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Thème",
    "abstraction": "questionnement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "questionnement",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Conflit",
    "abstraction": "renversement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Conflit",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Cadre",
    "abstraction": "renversement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "inspiration",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "renversement",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Motif",
    "abstraction": "métaphore",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Structure",
    "abstraction": "questionnement",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Motif",
    "abstraction": "inspiration",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Thème",
    "abstraction": "obstacle",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Thème",
    "abstraction": "transgression",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "questionnement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "questionnement",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Cadre",
    "abstraction": "déblocage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "questionnement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "questionnement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Conflit",
    "abstraction": "transgression",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Conflit",
    "abstraction": "renversement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Objet",
    "abstraction": "ouverture",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "obstacle",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "métaphore",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Cadre",
    "abstraction": "métaphore",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Structure",
    "abstraction": "inspiration",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Cadre",
    "abstraction": "questionnement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "inspiration",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "recentrage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Conflit",
    "abstraction": "ouverture",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "renversement",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Motif",
    "abstraction": "obstacle",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Thème",
    "abstraction": "renversement",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Structure",
    "abstraction": "questionnement",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Structure",
    "abstraction": "inspiration",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Objet",
    "abstraction": "renversement",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Conflit",
    "abstraction": "renversement",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "ouverture",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Motif",
    "abstraction": "déblocage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Personnage",
    "abstraction": "renversement",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Motif",
    "abstraction": "inspiration",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Motif",
    "abstraction": "métaphore",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Thème",
    "abstraction": "inspiration",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Conflit",
    "abstraction": "tension",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Situation",
    "abstraction": "ouverture",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Motif",
    "abstraction": "obstacle",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Conflit",
    "abstraction": "ouverture",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "recentrage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Conflit",
    "abstraction": "obstacle",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Motif",
    "abstraction": "tension",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Cadre",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "tension",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "transgression",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "transgression",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Thème",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Situation",
    "abstraction": "renversement",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Thème",
    "abstraction": "déblocage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "recentrage",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Conflit",
    "abstraction": "recentrage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "ouverture",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Conflit",
    "abstraction": "déblocage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "déblocage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "inspiration",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Cadre",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Conflit",
    "abstraction": "recentrage",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "questionnement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Thème",
    "abstraction": "ouverture",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Motif",
    "abstraction": "renversement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Conflit",
    "abstraction": "métaphore",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Cadre",
    "abstraction": "obstacle",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Conflit",
    "abstraction": "tension",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "transgression",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "transgression",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "tension",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "inspiration",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Thème",
    "abstraction": "recentrage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Thème",
    "abstraction": "transgression",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Motif",
    "abstraction": "recentrage",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Thème",
    "abstraction": "obstacle",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Thème",
    "abstraction": "renversement",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Motif",
    "abstraction": "ouverture",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "renversement",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Structure",
    "abstraction": "inspiration",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Personnage",
    "abstraction": "métaphore",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Conflit",
    "abstraction": "ouverture",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Conflit",
    "abstraction": "tension",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Personnage",
    "abstraction": "métaphore",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "questionnement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Situation",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "questionnement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Situation",
    "abstraction": "transgression",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Personnage",
    "abstraction": "inspiration",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Motif",
    "abstraction": "renversement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Thème",
    "abstraction": "métaphore",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Objet",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Structure",
    "abstraction": "métaphore",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Conflit",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "obstacle",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Structure",
    "abstraction": "ouverture",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "recentrage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Thème",
    "abstraction": "déblocage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "déblocage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Personnage",
    "abstraction": "questionnement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "tension",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Situation",
    "abstraction": "déblocage",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Thème",
    "abstraction": "renversement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Thème",
    "abstraction": "recentrage",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "obstacle",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Structure",
    "abstraction": "déblocage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "métaphore",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "transgression",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Conflit",
    "abstraction": "questionnement",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Thème",
    "abstraction": "questionnement",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Structure",
    "abstraction": "inspiration",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Objet",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "renversement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Personnage",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Structure",
    "abstraction": "transgression",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Structure",
    "abstraction": "ouverture",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Objet",
    "abstraction": "métaphore",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Situation",
    "abstraction": "renversement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Structure",
    "abstraction": "ouverture",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Conflit",
    "abstraction": "déblocage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "transgression",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Motif",
    "abstraction": "inspiration",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "obstacle",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Motif",
    "abstraction": "obstacle",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Conflit",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Structure",
    "abstraction": "transgression",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Conflit",
    "abstraction": "ouverture",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Situation",
    "abstraction": "questionnement",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Objet",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "tension",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "renversement",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "inspiration",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Personnage",
    "abstraction": "inspiration",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Cadre",
    "abstraction": "inspiration",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Objet",
    "abstraction": "questionnement",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Cadre",
    "abstraction": "renversement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "métaphore",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "questionnement",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Situation",
    "abstraction": "obstacle",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "obstacle",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Conflit",
    "abstraction": "recentrage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Cadre",
    "abstraction": "inspiration",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Motif",
    "abstraction": "inspiration",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "ouverture",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Cadre",
    "abstraction": "métaphore",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "obstacle",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Thème",
    "abstraction": "ouverture",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Cadre",
    "abstraction": "questionnement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Conflit",
    "abstraction": "obstacle",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Motif",
    "abstraction": "métaphore",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "métaphore",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "renversement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Conflit",
    "abstraction": "renversement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "obstacle",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Motif",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "recentrage",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "métaphore",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Structure",
    "abstraction": "inspiration",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Motif",
    "abstraction": "questionnement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Cadre",
    "abstraction": "tension",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Conflit",
    "abstraction": "transgression",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Structure",
    "abstraction": "ouverture",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Objet",
    "abstraction": "inspiration",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "questionnement",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Thème",
    "abstraction": "transgression",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "déblocage",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Personnage",
    "abstraction": "ouverture",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "ouverture",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "déblocage",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Conflit",
    "abstraction": "renversement",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Conflit",
    "abstraction": "questionnement",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Conflit",
    "abstraction": "questionnement",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Cadre",
    "abstraction": "métaphore",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Conflit",
    "abstraction": "tension",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Motif",
    "abstraction": "recentrage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Situation",
    "abstraction": "inspiration",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Motif",
    "abstraction": "inspiration",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Cadre",
    "abstraction": "questionnement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Situation",
    "abstraction": "transgression",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Conflit",
    "abstraction": "inspiration",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "transgression",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Motif",
    "abstraction": "tension",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Personnage",
    "abstraction": "transgression",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Motif",
    "abstraction": "déblocage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Personnage",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Situation",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Motif",
    "abstraction": "recentrage",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Situation",
    "abstraction": "obstacle",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Conflit",
    "abstraction": "transgression",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Conflit",
    "abstraction": "ouverture",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Objet",
    "abstraction": "déblocage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Personnage",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Thème",
    "abstraction": "tension",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Objet",
    "abstraction": "renversement",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Motif",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "tension",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Situation",
    "abstraction": "métaphore",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "transgression",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Thème",
    "abstraction": "tension",
    "consigne": "Créez un personnage secondaire dont l’existence change l’intrigue par sa seule absence."
  },
  {
    "categorie": "Motif",
    "abstraction": "questionnement",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "renversement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Structure",
    "abstraction": "questionnement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Objet",
    "abstraction": "transgression",
    "consigne": "Faites commencer un chapitre par la fin."
  },
  {
    "categorie": "Cadre",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Motif",
    "abstraction": "recentrage",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Thème",
    "abstraction": "tension",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Personnage",
    "abstraction": "renversement",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Conflit",
    "abstraction": "métaphore",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Structure",
    "abstraction": "recentrage",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Structure",
    "abstraction": "ouverture",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Racontez une scène du point de vue d’un animal ou d’un objet."
  },
  {
    "categorie": "Personnage",
    "abstraction": "obstacle",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Cadre",
    "abstraction": "recentrage",
    "consigne": "Introduisez un objet anodin qui devient essentiel à la fin."
  },
  {
    "categorie": "Thème",
    "abstraction": "obstacle",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Cadre",
    "abstraction": "questionnement",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Situation",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Objet",
    "abstraction": "métaphore",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Objet",
    "abstraction": "renversement",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "déblocage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  },
  {
    "categorie": "Cadre",
    "abstraction": "inspiration",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
  },
  {
    "categorie": "Objet",
    "abstraction": "questionnement",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Objet",
    "abstraction": "recentrage",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Objet",
    "abstraction": "obstacle",
    "consigne": "Faites répéter une scène deux fois dans le récit, avec deux points de vue opposés."
  },
  {
    "categorie": "Situation",
    "abstraction": "ouverture",
    "consigne": "Ajoutez un personnage qui ne parle jamais mais que tout le monde semble comprendre."
  },
  {
    "categorie": "Structure",
    "abstraction": "tension",
    "consigne": "Un personnage ment à tout le monde, y compris au lecteur."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "recentrage",
    "consigne": "Décrivez un lieu comme s’il avait une mémoire propre."
  },
  {
    "categorie": "Dynamique",
    "abstraction": "déblocage",
    "consigne": "Ajoutez une règle invisible qui structure le monde (physique, social, narratif…)."
  },
  {
    "categorie": "Objet",
    "abstraction": "tension",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "questionnement",
    "consigne": "Introduisez un silence trop long dans un dialogue."
  },
  {
    "categorie": "Motif",
    "abstraction": "renversement",
    "consigne": "Décrivez un rêve qui éclaire l’intrigue sans l’expliquer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "recentrage",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
  },
  {
    "categorie": "Tonalité",
    "abstraction": "tension",
    "consigne": "Transformez la scène la plus banale du récit en événement fondateur."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Trace",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Trace",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Effacement",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Effacement",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Ombre",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Effacement",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Trace",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Reflet",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dérapage",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Mimétisme",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Trace",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Trace",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Trace",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Effacement",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Inversion",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Doublure",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Doublure",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dislocation",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Doublure",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dislocation",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Trace",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dislocation",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Mimétisme",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dérapage",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dislocation",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Inversion",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Mimétisme",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Doublure",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dérapage",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Inversion",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Trace",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Reflet",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dérapage",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Doublure",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Doublure",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Doublure",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Doublure",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Reflet",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Surimpression",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Effacement",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dérapage",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Mimétisme",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Inversion",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Mimétisme",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dislocation",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dislocation",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dislocation",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Doublure",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Inversion",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Trace",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dérapage",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Doublure",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Inversion",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Reflet",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dislocation",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Mimétisme",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Doublure",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Doublure",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Ombre",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Doublure",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Effacement",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dislocation",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Surimpression",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Reflet",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dislocation",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Effacement",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dislocation",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Ombre",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Surimpression",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Inversion",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Surimpression",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dérapage",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Effacement",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dérapage",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Trace",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Trace",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Effacement",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Effacement",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Ombre",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Mimétisme",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Inversion",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Effacement",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Doublure",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Inversion",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Mimétisme",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Effacement",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Surimpression",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Doublure",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Doublure",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dérapage",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dérapage",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dérapage",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Ombre",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Doublure",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Trace",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dislocation",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Doublure",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Inversion",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Effacement",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Trace",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dérapage",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Ombre",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dérapage",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Doublure",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Mimétisme",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Effacement",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Ombre",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Mimétisme",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dislocation",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dislocation",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dislocation",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dislocation",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Mimétisme",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Doublure",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Ombre",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Effacement",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Ombre",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Doublure",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Effacement",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Reflet",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Doublure",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Inversion",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Effacement",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dérapage",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Mimétisme",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dérapage",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dérapage",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Mimétisme",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Inversion",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dérapage",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Doublure",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Doublure",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dérapage",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dérapage",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Trace",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dérapage",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Ombre",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dérapage",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Doublure",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Doublure",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Trace",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dislocation",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Trace",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Trace",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dislocation",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Doublure",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dislocation",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dérapage",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Inversion",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Doublure",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dérapage",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dérapage",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Trace",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Doublure",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Inversion",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Ombre",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Mimétisme",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Trace",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Doublure",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Doublure",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dislocation",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dislocation",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Trace",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Mimétisme",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dislocation",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Doublure",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dérapage",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Ombre",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Ombre",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dislocation",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Doublure",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Mimétisme",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Ombre",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Doublure",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Doublure",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Effacement",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Trace",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Ombre",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Trace",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Trace",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dérapage",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Surimpression",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dérapage",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Doublure",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dérapage",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Trace",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dislocation",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Doublure",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Doublure",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Trace",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dérapage",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Doublure",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Mimétisme",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Trace",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Doublure",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Surimpression",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Inversion",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dérapage",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dislocation",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Trace",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Surimpression",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Inversion",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Surimpression",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Ombre",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dérapage",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dérapage",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Doublure",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Inversion",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dislocation",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Dérapage",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Doublure",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Trace",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dérapage",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Trace",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Reflet",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Doublure",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Ombre",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Trace",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Reflet",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Mimétisme",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Mimétisme",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dislocation",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Inversion",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Trace",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Mimétisme",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dislocation",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Mimétisme",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dérapage",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Dérapage",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Effacement",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Inversion",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Doublure",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Trace",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Dislocation",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dislocation",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Trace",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Doublure",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Reflet",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Doublure",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Doublure",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Ombre",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Trace",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Doublure",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Mimétisme",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Mimétisme",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dérapage",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dislocation",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Trace",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Inversion",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dérapage",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Ombre",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Ombre",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Inversion",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Surimpression",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dérapage",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Effacement",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Trace",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Inversion",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Mimétisme",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Reflet",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Inversion",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dislocation",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Trace",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Inversion",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Inversion",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Dérapage",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Trace",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Mimétisme",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Dérapage",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Ombre",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Dislocation",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Trace",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Reflet",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Inversion",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Reflet",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dislocation",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dislocation",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Doublure",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Inversion",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "Reflet",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Dérapage",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Ombre",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Ombre",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Mimétisme",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Trace",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Doublure",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Ombre",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Mimétisme",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Dérapage",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Ombre",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Ombre",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Effacement",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Surimpression",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Surimpression",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Persistance rétinienne",
    "abstraction": "Reflet",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Inversion",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Doublure",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Trace",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Surimpression",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dislocation",
    "consigne": "Utilisez une contrainte formelle invisible mais contraignante (ex : pas de verbe d’action)."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Trace",
    "consigne": "Commencez par une fausse piste, puis abandonnez-la brutalement à mi-parcours."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Effacement",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "Effacement",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dérapage",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Narrateur instable",
    "abstraction": "Dislocation",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Seuil",
    "abstraction": "Mimétisme",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Langage parasite",
    "abstraction": "Ombre",
    "consigne": "Insérez un élément qui semble hors sujet mais finit par redéfinir tout le récit."
  },
  {
    "categorie": "Effet Koulechov",
    "abstraction": "Reflet",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Rupture de ton",
    "abstraction": "Dérapage",
    "consigne": "Faites interagir deux styles d’écriture radicalement différents dans un même texte."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dislocation",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Objet totémique",
    "abstraction": "Trace",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  },
  {
    "categorie": "Répétition significative",
    "abstraction": "Doublure",
    "consigne": "Introduisez un objet qui semble anodin, mais qui agit comme un catalyseur narratif."
  },
  {
    "categorie": "Réécriture fantôme",
    "abstraction": "Dérapage",
    "consigne": "Faites qu’un événement du passé resurgisse physiquement dans le présent du récit."
  },
  {
    "categorie": "Structure circulaire",
    "abstraction": "Mimétisme",
    "consigne": "Racontez une scène du point de vue d’un narrateur qui ment (sans jamais l’avouer)."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Inversion",
    "consigne": "Créez un personnage qui n’existe peut-être pas, mais qui influence les décisions des autres."
  },
  {
    "categorie": "Déplacement narratif",
    "abstraction": "Inversion",
    "consigne": "Imaginez une scène répétée trois fois, avec à chaque fois un changement subtil mais significatif."
  },
  {
    "categorie": "Présence en creux",
    "abstraction": "Reflet",
    "consigne": "Créez une mise en abyme : un personnage écrit une histoire qui semble réécrire la vôtre."
  }
];