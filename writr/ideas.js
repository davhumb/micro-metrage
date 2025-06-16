const ideas = [
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
    "categorie": "Personnage",
    "abstraction": "recentrage",
    "consigne": "Ajoutez une superstition locale que tous les personnages respectent sans savoir pourquoi."
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
    "categorie": "Dynamique",
    "abstraction": "inspiration",
    "consigne": "Faites écrire un mot ou une lettre à un personnage que personne ne lira jamais."
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
    "categorie": "Objet",
    "abstraction": "recentrage",
    "consigne": "Donnez à votre protagoniste un souvenir qu’il ne devrait pas avoir."
  }
];
export default ideas;
