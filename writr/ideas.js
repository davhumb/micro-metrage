const ideas = [
  {
    "categorie": "Dissonance",
    "abstraction": "contraste",
    "consigne": "Écris une scène joyeuse dans un lieu sinistre."
  },
  {
    "categorie": "Point de rupture",
    "abstraction": "événement",
    "consigne": "Ton personnage fait quelque chose qu’il s’était juré de ne jamais faire."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "défi formel",
    "consigne": "Écris un dialogue sans utiliser le verbe 'être'."
  },
  {
    "categorie": "Retour de flamme",
    "abstraction": "conséquence",
    "consigne": "Un mensonge sans importance finit par tout détruire."
  },
  {
    "categorie": "Inversion",
    "abstraction": "structure",
    "consigne": "Commence par la fin, et ne révèle le début qu’en dernier."
  },
  {
    "categorie": "Mémoire altérée",
    "abstraction": "perception",
    "consigne": "Ton personnage est sûr d’avoir vécu une scène, mais elle s’est passée autrement."
  },
  {
    "categorie": "Objets",
    "abstraction": "détail déclencheur",
    "consigne": "Un objet trouve chaque jour un nouvel emplacement, sans que personne ne l’ait déplacé."
  },
  {
    "categorie": "Secret",
    "abstraction": "non-dit",
    "consigne": "Tout le monde dans la pièce sait quelque chose que le lecteur ignore."
  },
  {
    "categorie": "Miroir",
    "abstraction": "réflexion",
    "consigne": "Écris une scène deux fois : une vue de l’extérieur, une de l’intérieur."
  },
  {
    "categorie": "Répétition",
    "abstraction": "anomalie",
    "consigne": "Un événement anodin se reproduit exactement à l’identique, plusieurs jours de suite."
  },
  {
    "categorie": "Fusion",
    "abstraction": "relation",
    "consigne": "Deux personnages finissent par se comporter comme une seule personne."
  },
  {
    "categorie": "Voix",
    "abstraction": "ton",
    "consigne": "Un personnage adopte un ton qui n’est pas le sien, sans explication."
  },
  {
    "categorie": "Contamination",
    "abstraction": "glissement",
    "consigne": "Un élément de fiction s’introduit dans un monde réaliste, sans que personne ne s’en étonne."
  },
  {
    "categorie": "Effacement",
    "abstraction": "disparition",
    "consigne": "Un souvenir disparaît à mesure qu’on le raconte."
  },
  {
    "categorie": "Anachronisme",
    "abstraction": "décalage",
    "consigne": "Un personnage moderne agit comme s’il vivait à une autre époque."
  },
  {
    "categorie": "Voisinage",
    "abstraction": "dynamique",
    "consigne": "Un nouveau voisin provoque un léger malaise, sans jamais rien faire de répréhensible."
  },
  {
    "categorie": "Présent toxique",
    "abstraction": "atmosphère",
    "consigne": "Décris une journée parfaitement normale, mais tout semble... malveillant."
  },
  {
    "categorie": "Errance",
    "abstraction": "mouvement",
    "consigne": "Un personnage marche sans but, mais chaque lieu qu’il traverse fait remonter un souvenir."
  },
  {
    "categorie": "Mésaventure",
    "abstraction": "contretemps",
    "consigne": "Un petit retard entraîne une série de catastrophes."
  },
  {
    "categorie": "Transmission",
    "abstraction": "héritage",
    "consigne": "Un personnage hérite d’un objet sans savoir à quoi il sert — mais il va s’en servir."
  },
  {
    "categorie": "Relecture",
    "abstraction": "structure",
    "consigne": "Une scène relue avec une nouvelle information change entièrement de sens."
  },
  {
    "categorie": "Absence",
    "abstraction": "vide",
    "consigne": "Tout tourne autour d’un personnage qui n’apparaît jamais dans la scène."
  },
  {
    "categorie": "Animalité",
    "abstraction": "transformation",
    "consigne": "Décris un personnage comme s’il était un animal — sans jamais le dire."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "identité",
    "consigne": "Ton personnage se rend compte qu’il n’est pas seul dans son propre corps."
  },
  {
    "categorie": "Refus",
    "abstraction": "tension",
    "consigne": "Un personnage ne répond jamais à ce qu’on lui demande, mais change toujours de sujet."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence de dialogue",
    "consigne": "Écris une scène forte sans aucune ligne de dialogue."
  },
  {
    "categorie": "Suspicion",
    "abstraction": "psychologie",
    "consigne": "Un personnage doute de tout — même de lui-même."
  },
  {
    "categorie": "Micro-geste",
    "abstraction": "action minime",
    "consigne": "Fais reposer toute une scène sur un seul geste insignifiant."
  },
  {
    "categorie": "Temps brisé",
    "abstraction": "structure",
    "consigne": "Alterne présent et passé sans balises ni transition explicite."
  },
  {
    "categorie": "Déni",
    "abstraction": "psychologie",
    "consigne": "Le personnage continue à vivre comme si rien n’avait changé — alors que tout a changé."
  },
  {
    "categorie": "Lapsus",
    "abstraction": "langage",
    "consigne": "Un personnage dit accidentellement quelque chose de terrible, sans s’en rendre compte."
  },
  {
    "categorie": "Vertige",
    "abstraction": "perception",
    "consigne": "La description d’un lieu tourne lentement à l’hallucination."
  },
  {
    "categorie": "Désorientation",
    "abstraction": "espace",
    "consigne": "Un personnage tourne en rond dans un lieu familier qu’il ne reconnaît plus."
  },
  {
    "categorie": "Négation",
    "abstraction": "langage",
    "consigne": "Une scène entière est racontée au négatif : ce qui n’est pas fait, pas dit, pas pensé."
  },
  {
    "categorie": "Langue étrangère",
    "abstraction": "communication",
    "consigne": "Un personnage tente de comprendre une langue qu’il ne parle pas."
  },
  {
    "categorie": "Échange",
    "abstraction": "rencontre",
    "consigne": "Deux personnages échangent leur place, rôle ou situation — volontairement ou non."
  },
  {
    "categorie": "Faux-semblants",
    "abstraction": "thème",
    "consigne": "Décris un lieu ou une personne comme parfaits, avant de révéler la faille."
  },
  {
    "categorie": "Hors-champ",
    "abstraction": "suggestion",
    "consigne": "L’élément central de la scène ne doit jamais être montré, seulement évoqué."
  },
  {
    "categorie": "Confusion",
    "abstraction": "structure",
    "consigne": "Mêle deux voix narratives sans jamais préciser qui parle."
  },
  {
    "categorie": "Oubli",
    "abstraction": "thème",
    "consigne": "Un personnage oublie un détail vital, et ce détail manque à l’histoire entière."
  },
  {
    "categorie": "Résistance",
    "abstraction": "psychologie",
    "consigne": "Un personnage refuse obstinément de changer — à ses dépens."
  },
  {
    "categorie": "Contact",
    "abstraction": "élément déclencheur",
    "consigne": "Quelqu’un touche le personnage, et ce simple contact change tout."
  },
  {
    "categorie": "Écho",
    "abstraction": "structure",
    "consigne": "Un détail du début de scène revient à la fin, transformé."
  },
  {
    "categorie": "Perspective",
    "abstraction": "narration",
    "consigne": "Raconte une scène avec un changement brutal de point de vue au milieu."
  },
  {
    "categorie": "Surimpression",
    "abstraction": "mémoire",
    "consigne": "Un souvenir s’infiltre dans une scène présente, sans que le personnage s’en rende compte."
  },
  {
    "categorie": "Déviation",
    "abstraction": "rythme",
    "consigne": "Commence une scène très tendue, mais brise la tension par une absurdité inattendue."
  },
  {
    "categorie": "Obstacle",
    "abstraction": "structure",
    "consigne": "Le but est clair, mais le personnage n’y parvient jamais pour des raisons absurdes."
  },
  {
    "categorie": "Voix intérieure",
    "abstraction": "psychologie",
    "consigne": "Le personnage est constamment interrompu par sa propre pensée parasite."
  },
  {
    "categorie": "Focalisation",
    "abstraction": "structure",
    "consigne": "Ne montre que ce que le personnage voit ou entend — rien d’autre."
  },
  {
    "categorie": "Boucle",
    "abstraction": "structure",
    "consigne": "Le personnage revit une scène, en essayant à chaque fois de la corriger."
  },
  {
    "categorie": "Point de rupture",
    "abstraction": "événement déclencheur",
    "consigne": "Un personnage dit quelque chose qu’il regrettera toute sa vie."
  },
  {
    "categorie": "Perspective",
    "abstraction": "changement de point de vue",
    "consigne": "Réécris une scène en changeant le narrateur à la première personne."
  },
  {
    "categorie": "Conflit interne",
    "abstraction": "dilemme",
    "consigne": "Ton personnage reçoit une lettre qu’il n’ouvre jamais. Que contient-elle ?"
  },
  {
    "categorie": "Transmission",
    "abstraction": "héritage",
    "consigne": "Un enfant reçoit un objet chargé d’histoire familiale."
  },
  {
    "categorie": "Errance",
    "abstraction": "déambulation",
    "consigne": "Écris une scène où ton personnage marche sans but, mais trouve quelque chose."
  },
  {
    "categorie": "Rupture du réel",
    "abstraction": "glissement",
    "consigne": "Un détail familier change de manière inexplicable."
  },
  {
    "categorie": "Écho",
    "abstraction": "répétition",
    "consigne": "Fais revenir une phrase, une image ou un geste plusieurs fois dans ton texte."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation",
    "consigne": "Écris une page sans utiliser le mot « je » ni aucun pronom personnel."
  },
  {
    "categorie": "Objets narratifs",
    "abstraction": "déclencheur",
    "consigne": "Un objet trouvé dans la rue bouleverse l’histoire."
  },
  {
    "categorie": "Déviation",
    "abstraction": "changement de cap",
    "consigne": "L’intrigue devait aller dans une direction, mais un choix anodin tout change."
  },
  {
    "categorie": "Mémoire",
    "abstraction": "souvenir",
    "consigne": "Un personnage oublie un souvenir essentiel. Son entourage prétend qu’il ne s’est jamais produit."
  },
  {
    "categorie": "Décalage",
    "abstraction": "incongru",
    "consigne": "Décris une scène très sérieuse dans un décor absurde sans jamais souligner le contraste."
  },
  {
    "categorie": "Langage",
    "abstraction": "contrainte",
    "consigne": "Écris un dialogue sans utiliser une seule voyelle."
  },
  {
    "categorie": "Renversement",
    "abstraction": "inversion",
    "consigne": "Le héros devient l’antagoniste sans s’en rendre compte."
  },
  {
    "categorie": "Voix",
    "abstraction": "identité",
    "consigne": "Un personnage entend une voix intérieure. Elle a sa propre volonté."
  },
  {
    "categorie": "Silence",
    "abstraction": "non-dit",
    "consigne": "Crée une tension dramatique uniquement avec des silences et des regards."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "distorsion",
    "consigne": "Écris une scène à rebours, phrase par phrase."
  },
  {
    "categorie": "Mouvement",
    "abstraction": "rythme",
    "consigne": "Écris une poursuite où chaque phrase commence par un verbe."
  },
  {
    "categorie": "Frontière",
    "abstraction": "limite",
    "consigne": "Ton personnage franchit un lieu interdit, mais personne ne semble le remarquer."
  },
  {
    "categorie": "Transmission",
    "abstraction": "rituel",
    "consigne": "Une tradition familiale est transmise mais personne n’en comprend le sens."
  },
  {
    "categorie": "Mensonge",
    "abstraction": "révélation",
    "consigne": "Tout le récit s’appuie sur un mensonge que le lecteur découvre à la fin."
  },
  {
    "categorie": "Écriture",
    "abstraction": "métatextuel",
    "consigne": "Un personnage écrit le livre que nous lisons sans le savoir."
  },
  {
    "categorie": "Détail",
    "abstraction": "obsession",
    "consigne": "Un petit détail devient progressivement une obsession pour ton personnage."
  },
  {
    "categorie": "Langage",
    "abstraction": "contrainte",
    "consigne": "Écris une page entière sans utiliser la lettre E."
  },
  {
    "categorie": "Objet",
    "abstraction": "métaphore",
    "consigne": "Un objet abîmé devient le miroir du personnage principal."
  },
  {
    "categorie": "Errance",
    "abstraction": "flottement",
    "consigne": "Le personnage erre dans une ville sans nom, en quête d’un souvenir incertain."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "instabilité",
    "consigne": "Rends volontairement ambigu ce qui est réel et ce qui est rêvé."
  },
  {
    "categorie": "Corps",
    "abstraction": "changement",
    "consigne": "Le corps du personnage change lentement, mais personne ne le remarque."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "non-dits",
    "consigne": "Un personnage fait tout pour cacher une faute ancienne, mais les signes s’accumulent."
  },
  {
    "categorie": "Voix",
    "abstraction": "absence",
    "consigne": "Écris une scène où un personnage disparu hante les dialogues des autres."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "anomalie",
    "consigne": "Une horloge tourne à l’envers, mais tous s’y habituent."
  },
  {
    "categorie": "Observation",
    "abstraction": "regard",
    "consigne": "Décris une scène uniquement à travers les reflets d’un miroir."
  },
  {
    "categorie": "Changement",
    "abstraction": "tournant",
    "consigne": "Un événement anodin devient le point de bascule du récit."
  },
  {
    "categorie": "Intime",
    "abstraction": "révélation",
    "consigne": "Un personnage est surpris dans un moment de solitude intense."
  },
  {
    "categorie": "Lieu",
    "abstraction": "fermeture",
    "consigne": "Le décor se rétrécit physiquement au fil de la scène."
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Un même rêve revient chaque nuit, avec un détail en plus à chaque fois."
  },
  {
    "categorie": "Transmission",
    "abstraction": "manuscrit",
    "consigne": "Un texte ancien contient une vérité que le personnage refuse d’admettre."
  },
  {
    "categorie": "Langage",
    "abstraction": "substitution",
    "consigne": "Un mot du langage courant a été remplacé par un autre, sans explication."
  },
  {
    "categorie": "Conflit",
    "abstraction": "intérieur",
    "consigne": "Le personnage est en guerre contre une part de lui-même devenue autonome."
  },
  {
    "categorie": "Nostalgie",
    "abstraction": "perte",
    "consigne": "Décris un monde dont le héros sait qu’il va disparaître."
  },
  {
    "categorie": "Folie",
    "abstraction": "perception",
    "consigne": "Les objets parlent entre eux, mais jamais au personnage principal."
  },
  {
    "categorie": "Rupture",
    "abstraction": "relation",
    "consigne": "Un couple se sépare, mais continue de vivre dans la même maison."
  },
  {
    "categorie": "Découverte",
    "abstraction": "initiation",
    "consigne": "Un enfant découvre un lieu interdit qui le transforme à jamais."
  },
  {
    "categorie": "Autre",
    "abstraction": "double",
    "consigne": "Un personnage rencontre son sosie, mais il agit de façon imprévisible."
  },
  {
    "categorie": "Oubli",
    "abstraction": "absence",
    "consigne": "Un personnage se rend à un rendez-vous sans se souvenir pourquoi."
  },
  {
    "categorie": "Décor",
    "abstraction": "métaphore",
    "consigne": "La météo reflète précisément les émotions du personnage, mais personne ne le remarque."
  },
  {
    "categorie": "Langage",
    "abstraction": "décalage",
    "consigne": "Les mots employés par les personnages ne veulent plus rien dire pour eux."
  },
  {
    "categorie": "Écriture",
    "abstraction": "circularité",
    "consigne": "La dernière phrase du texte est identique à la première, mais leur sens a changé."
  },
  {
    "categorie": "Temps",
    "abstraction": "ralenti",
    "consigne": "Décris une scène qui dure une seconde comme si elle durait dix pages."
  },
  {
    "categorie": "Présence",
    "abstraction": "invisible",
    "consigne": "Un personnage absent est pourtant le plus influent dans la scène."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Écris une scène de western qui vire à la science-fiction dystopique."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Raconte une enquête policière dans un monde de conte de fées."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Transforme une romance réaliste en récit de possession démoniaque."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Mélange un témoignage autobiographique avec une épopée mythologique."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Écris un huis clos horrifique dans le style d’un dialogue philosophique."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Imagine un manuel scolaire écrit comme un thriller psychologique."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Raconte une guerre médiévale avec les codes d’un reportage contemporain."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Écris une scène de science-fiction dans le style d’un vaudeville du XIXe siècle."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Fais dialoguer un personnage de tragédie grecque avec un influenceur TikTok."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Mets en scène une attaque de zombies durant une cérémonie diplomatique historique."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Décris un combat de gladiateurs dans un monde cyberpunk."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Écris une lettre d’amour au style juridique, avec articles et clauses."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Imagine un récit d'espionnage dans l’univers d’un dessin animé pour enfants."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Fais cohabiter un personnage de roman noir avec un monde féerique."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Mélange une scène de procès avec les codes du film d’horreur."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Écris un rêve symbolique avec la logique froide d’un rapport d’expert."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Incarne une créature fantastique en plein burn-out de start-up moderne."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Décris un complot politique comme une tragédie romantique."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Invente une prophétie biblique racontée par un personnage de sitcom."
  },
  {
    "categorie": "Mash-up narratif",
    "abstraction": "défi de style",
    "consigne": "Crée une scène d’accouchement écrite comme un récit d’aventure épique."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Réécris une scène de conflit entre deux personnages en inversant totalement leurs rôles."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Raconte un enterrement vu par un animal présent sur les lieux."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Fais décrire une scène romantique par un personnage misanthrope et aigri."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Une scène entière est racontée à la première personne par un miroir."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Une chaise raconte une dispute conjugale qu'elle a subie."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Fais raconter une même journée par un enfant, un adulte et un vieillard."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Ton personnage devient le narrateur du récit qu’il croyait lire."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Écris une scène d’amour du point de vue du décor."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Une scène de crime racontée par l’arme du crime."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "point de vue",
    "consigne": "Fais raconter un souvenir douloureux par la voix du corps (sans passer par les pensées)."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Le personnage ne peut s’exprimer qu’avec des proverbes détournés."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Une scène entière sans utiliser la lettre 'e'."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Un dialogue entre deux personnages où chaque phrase doit rimer."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Le narrateur est incapable d’utiliser les temps du passé."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Un personnage doit tout raconter comme s’il était un jeu vidéo."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Un récit où les personnages ignorent la gravité terrestre."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Un dialogue entièrement composé de questions."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Un personnage ne peut dire que la vérité… mais à l’envers."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Le personnage principal change de genre à chaque paragraphe."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "défi narratif",
    "consigne": "Personne ne peut parler, mais tout le monde pense très fort."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Écris un récit où tout est raconté à rebours, minute par minute."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Le temps passe deux fois plus vite pour le narrateur que pour les autres."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Une scène racontée simultanément au présent, passé et futur."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Un personnage se souvient d’un moment… qu’il n’a pas encore vécu."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Une scène banale étalée sur une centaine d’années."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Chaque chapitre représente un battement de cœur."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Un personnage saute chaque seconde phrase dans sa mémoire."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Un récit où la notion de temps est floutée, comme un rêve."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Chaque événement est perçu comme un souvenir par le narrateur."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "défi narratif",
    "consigne": "Le texte tourne en boucle, revenant au début à la fin."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "Un récit raconté par une chaussure abandonnée."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "Un fantôme tente d'écrire sa propre biographie."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "Un meuble de famille raconte la chute d’une lignée."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "La pluie devient la narratrice mélancolique d’un drame."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "Un bouton raconte une journée sur le torse d’un dictateur."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "Une photo parle depuis l’intérieur d’un album."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "Un bébé raconte son propre accouchement."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "Une idée abstraite devient narratrice (ex : La Honte)."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "Un chat tente de décrire les émotions humaines."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "défi narratif",
    "consigne": "Le souvenir d’un lieu devient narrateur à part entière."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Un personnage ne pense qu’en formules mathématiques."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Un personnage croit que tout le monde peut lire dans ses pensées."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Le narrateur doute de chaque mot qu’il emploie."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Le personnage pense que chaque événement est un signe divin."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Un héros incapable de comprendre le non-verbal."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Le personnage pense que le monde est un roman à écrire."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Un héros dont les pensées ne sont que bruits et textures."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Un personnage voit le monde comme un plan d’architecture."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Le narrateur est persuadé d’être contrôlé par quelqu’un d’autre."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "défi narratif",
    "consigne": "Le héros parle une langue intérieure que personne ne comprend."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Raconte un braquage comme une recette de cuisine."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Écris une scène romantique façon manuel technique."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Imite le style d’un article Wikipédia pour une scène d’action."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Décris une rupture comme une plaidoirie judiciaire."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Écris un drame personnel comme un rapport médical."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Fais d’un souvenir une légende médiévale."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Transforme une querelle de couple en tragédie grecque."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Un chapitre entier écrit comme un article de presse people."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Un conte d’enfant qui cache une histoire sordide."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "défi narratif",
    "consigne": "Un récit écrit comme une vieille publicité des années 50."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "Le monstre d’horreur est juste mal compris."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "Le héros découvre que sa quête était une opération marketing."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "Le savant fou est surtout un père débordé."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "La victime du thriller est en fait le coupable… par choix."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "Le prince charmant a un TOC qui ruine tout."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "Le vieux sage ment pour avoir la paix."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "Un monde post-apocalyptique causé par une allergie collective."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "Le super-héros ne supporte plus sa tenue."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "Le détective oublie systématiquement le mobile du crime."
  },
  {
    "categorie": "Détournement",
    "abstraction": "défi narratif",
    "consigne": "Une guerre intergalactique née d’un malentendu orthographique."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "défi narratif",
    "consigne": "Un personnage se réinvente à chaque lieu qu’il traverse."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "défi narratif",
    "consigne": "Chaque chapitre adopte le style d’un autre auteur célèbre."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "défi narratif",
    "consigne": "Un personnage prétend être quelqu’un d’autre… puis s’y perd."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "défi narratif",
    "consigne": "L’auteur interrompt le récit pour incarner un des personnages."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "défi narratif",
    "consigne": "Un même événement vu par 5 identités du héros."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "défi narratif",
    "consigne": "Le narrateur est un acteur qui joue mal son propre rôle."
  },
  {
    "categorie": "Changement de masque",
    "abstraction": "défi narratif",
    "consigne": "À chaque page, un personnage secondaire prend la narration."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "contrainte formelle",
    "consigne": "Le récit tout entier doit se dérouler sans la lettre « A »."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "contrainte formelle",
    "consigne": "Un chapitre rédigé sans aucun verbe."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "contrainte formelle",
    "consigne": "Chaque phrase est une anagramme de la précédente."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "contrainte formelle",
    "consigne": "Le texte alterne mots longs et mots très courts."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "contrainte formelle",
    "consigne": "Le héros ne parle qu'en haïkus."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "contrainte formelle",
    "consigne": "L’histoire se développe uniquement par des onomatopées."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "contrainte formelle",
    "consigne": "Un personnage ne comprend que les phrases avec un nombre impair de mots."
  },
  {
    "categorie": "Contrainte absurde",
    "abstraction": "contrainte formelle",
    "consigne": "La ponctuation devient un personnage hostile."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "structure temporelle",
    "consigne": "Un personnage vieillit de 10 ans chaque fois qu’il ment."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "structure temporelle",
    "consigne": "Le héros revit éternellement la même seconde."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "structure temporelle",
    "consigne": "Le temps recule dès que quelqu’un crie."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "structure temporelle",
    "consigne": "Une scène se passe en 1 seconde mais occupe 10 pages."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "structure temporelle",
    "consigne": "L’histoire débute à la fin et finit au commencement."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "structure temporelle",
    "consigne": "Le héros prend conscience qu’il saute les chapitres de sa vie."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "structure temporelle",
    "consigne": "Le futur se mélange au passé dans un récit flou."
  },
  {
    "categorie": "Temps déformé",
    "abstraction": "structure temporelle",
    "consigne": "Un personnage vit toujours un jour en avance sur les autres."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "changement de perspective",
    "consigne": "Une chaise raconte les disputes qui ont eu lieu sur elle."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "changement de perspective",
    "consigne": "Une cicatrice prend la parole."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "changement de perspective",
    "consigne": "Une ville entière est la narratrice du roman."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "changement de perspective",
    "consigne": "Une pensée collective se met à raconter sa version des faits."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "changement de perspective",
    "consigne": "Le feu d’un incendie raconte ce qu’il consume."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "changement de perspective",
    "consigne": "Une vieille blague oubliée tente de redevenir drôle."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "changement de perspective",
    "consigne": "Un objet brisé raconte les fragments de son passé."
  },
  {
    "categorie": "Voix inattendue",
    "abstraction": "changement de perspective",
    "consigne": "Le silence devient le narrateur omniscient."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "cognition",
    "consigne": "Le héros ne distingue pas ses souvenirs de ses rêves."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "cognition",
    "consigne": "Un personnage croit que chaque mot a un pouvoir magique."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "cognition",
    "consigne": "Le narrateur ne peut formuler ses pensées qu’en proverbes."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "cognition",
    "consigne": "Chaque action est précédée d’un monologue intérieur critique."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "cognition",
    "consigne": "Le personnage croit que ses pensées changent le monde."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "cognition",
    "consigne": "Un héros vit dans une boucle logique infernale."
  },
  {
    "categorie": "Défi de pensée",
    "abstraction": "cognition",
    "consigne": "Le narrateur doute de sa propre conscience."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "style emprunté",
    "consigne": "Une scène de jalousie racontée comme une tragédie antique."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "style emprunté",
    "consigne": "Une poursuite écrite comme un guide touristique."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "style emprunté",
    "consigne": "Une dispute racontée en bulletin météo."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "style emprunté",
    "consigne": "Un chapitre entier écrit comme un tutoriel YouTube."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "style emprunté",
    "consigne": "Un accident décrit comme une scène d’opéra."
  },
  {
    "categorie": "Mimétisme",
    "abstraction": "style emprunté",
    "consigne": "Un dialogue amoureux transcrit comme un procès-verbal."
  },
  {
    "categorie": "Détournement",
    "abstraction": "renversement narratif",
    "consigne": "Le méchant voulait juste retrouver son chat."
  },
  {
    "categorie": "Détournement",
    "abstraction": "renversement narratif",
    "consigne": "La prophétie se révèle être un mauvais doublage."
  },
  {
    "categorie": "Détournement",
    "abstraction": "renversement narratif",
    "consigne": "Une apocalypse causée par l’oubli d’un anniversaire."
  },
  {
    "categorie": "Détournement",
    "abstraction": "renversement narratif",
    "consigne": "Le récit d’un vol de banque se transforme en thérapie de groupe."
  },
  {
    "categorie": "Détournement",
    "abstraction": "renversement narratif",
    "consigne": "Le monstre de l’histoire est un acteur en reconversion."
  },
  {
    "categorie": "Détournement",
    "abstraction": "renversement narratif",
    "consigne": "Le récit d’un héros s’avère être une publicité déguisée."
  },
  {
    "categorie": "Incident",
    "abstraction": "événement",
    "consigne": "Ton personnage croise une version future de lui-même, sans en avoir conscience."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "forme",
    "consigne": "N’utilise que des mots d’une syllabe dans un paragraphe clé."
  },
  {
    "categorie": "Déplacement",
    "abstraction": "dynamique",
    "consigne": "Fais voyager ton personnage sans qu’il bouge physiquement."
  },
  {
    "categorie": "Objet narratif",
    "abstraction": "élément",
    "consigne": "Un objet anodin réapparaît dans chaque chapitre, sans explication."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "structure",
    "consigne": "Commence la scène par sa dernière phrase, puis remonte."
  },
  {
    "categorie": "Voix / Point de vue",
    "abstraction": "perspective",
    "consigne": "Fais raconter la scène par un personnage secondaire très biaisé."
  },
  {
    "categorie": "Dissonance",
    "abstraction": "incohérence",
    "consigne": "Un même personnage tient deux discours opposés dans une même scène."
  },
  {
    "categorie": "Perception",
    "abstraction": "sensoriel",
    "consigne": "Le personnage confond les bruits avec des pensées."
  },
  {
    "categorie": "Lien",
    "abstraction": "relation",
    "consigne": "Deux personnages n’ont jamais parlé, mais partagent un traumatisme identique."
  },
  {
    "categorie": "Révélation",
    "abstraction": "renversement",
    "consigne": "La révélation finale n’éclaire pas le récit mais le rend plus ambigu."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "défi d’écriture",
    "consigne": "Mélange le genre polar et le conte de fées."
  },
  {
    "categorie": "Objet décalé",
    "abstraction": "élément perturbateur",
    "consigne": "Ton personnage reçoit une boîte aux lettres qui ne contient que des souvenirs d’enfance."
  },
  {
    "categorie": "Mythe reconstitué",
    "abstraction": "relecture mythologique",
    "consigne": "Réécris le mythe d’Orphée en situant l’enfer dans une salle d’attente."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "changement de regard",
    "consigne": "Écris une scène de poursuite vue par un animal errant."
  },
  {
    "categorie": "Épiphanie",
    "abstraction": "révélation tardive",
    "consigne": "Ton personnage comprend enfin ce que signifiait la phrase qu’on lui répétait enfant."
  },
  {
    "categorie": "Cadavre narratif",
    "abstraction": "structure éclatée",
    "consigne": "Un narrateur meurt en pleine phrase. Quelqu’un d’autre reprend le récit."
  },
  {
    "categorie": "Temps suspendu",
    "abstraction": "ralenti narratif",
    "consigne": "Écris une scène figée dans le temps où tout le monde retient son souffle."
  },
  {
    "categorie": "Personnage troué",
    "abstraction": "amnésie dynamique",
    "consigne": "Un personnage oublie ce qu’il fait à mesure qu’il agit."
  },
  {
    "categorie": "Contrainte linguistique",
    "abstraction": "jeu stylistique",
    "consigne": "Écris une page entière sans utiliser de verbe d’action."
  },
  {
    "categorie": "Écriture médiumnique",
    "abstraction": "possession créative",
    "consigne": "Ton personnage écrit sans se souvenir avoir tenu un stylo."
  },
  {
    "categorie": "Idée inspirante 1",
    "abstraction": "graine de fiction",
    "consigne": "Invente une scène où un personnage découvre un double."
  },
  {
    "categorie": "Idée inspirante 2",
    "abstraction": "graine de fiction",
    "consigne": "Invente une scène où un personnage découvre un message effacé."
  },
  {
    "categorie": "Idée inspirante 3",
    "abstraction": "graine de fiction",
    "consigne": "Invente une scène où un personnage découvre que le temps passe plus vite."
  },
  {
    "categorie": "Idée inspirante 4",
    "abstraction": "graine de fiction",
    "consigne": "Invente une scène où un personnage découvre un souvenir dans un objet."
  },
  {
    "categorie": "Idée inspirante 5",
    "abstraction": "graine de fiction",
    "consigne": "Invente une scène où un personnage découvre qu’il rêve éveillé."
  },
  {
    "categorie": "Défi stylistique",
    "abstraction": "contrainte",
    "consigne": "Écris un dialogue où chaque personnage ne peut parler qu'en questions."
  },
  {
    "categorie": "Lieu – espace narratif",
    "abstraction": "cadre",
    "consigne": "Une scène entière se passe dans un ascenseur coincé entre deux étages."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Ton personnage reçoit une lettre écrite de sa propre main, mais ne se souvient pas l'avoir envoyée."
  },
  {
    "categorie": "Relation",
    "abstraction": "dynamique",
    "consigne": "Deux inconnus prétendent être un couple pour éviter un danger."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "contrainte",
    "consigne": "Mélange un conte de fées avec un roman noir."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "technique",
    "consigne": "Raconte une scène dramatique du point de vue d’un animal présent dans la pièce."
  },
  {
    "categorie": "Objet narratif",
    "abstraction": "élément",
    "consigne": "Un objet du quotidien prend progressivement le contrôle des décisions du personnage principal."
  },
  {
    "categorie": "Temporalité inversée",
    "abstraction": "structure",
    "consigne": "Fais commencer ton texte par la fin et remonte jusqu’à l’origine du conflit."
  },
  {
    "categorie": "Interférence",
    "abstraction": "perturbation",
    "consigne": "Une autre histoire semble contaminer ton récit au fil des paragraphes."
  },
  {
    "categorie": "Défi linguistique",
    "abstraction": "contrainte",
    "consigne": "Écris un texte sans utiliser de verbes d’état (être, paraître, sembler…)."
  },
  {
    "categorie": "Incident",
    "abstraction": "événement",
    "consigne": "Une panne d’électricité plonge un immeuble entier dans l’obscurité pendant une nuit."
  },
  {
    "categorie": "Défi stylistique",
    "abstraction": "contrainte",
    "consigne": "Écris un texte où chaque phrase commence par la lettre suivante de l’alphabet."
  },
  {
    "categorie": "Relation",
    "abstraction": "dynamique",
    "consigne": "Un personnage tombe amoureux d’un inconnu uniquement à travers sa playlist."
  },
  {
    "categorie": "Cadre temporel",
    "abstraction": "structure",
    "consigne": "Tout se déroule pendant une minute et demie de silence entre deux personnages."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Quelqu’un sonne à la porte et disparaît avant qu’on ait ouvert."
  },
  {
    "categorie": "Objet narratif",
    "abstraction": "élément",
    "consigne": "Un vieux téléphone reçoit un message vocal d’un proche décédé."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "contrainte",
    "consigne": "Écris une scène mêlant western et science-fiction."
  },
  {
    "categorie": "Voix narrative",
    "abstraction": "point de vue",
    "consigne": "Le narrateur s’adresse directement à un autre personnage, absent de la scène."
  },
  {
    "categorie": "Point de bascule",
    "abstraction": "structure",
    "consigne": "Le personnage principal fait un choix irréversible — mais ne s’en rend compte qu’à la fin du texte."
  },
  {
    "categorie": "Lieu – espace narratif",
    "abstraction": "cadre",
    "consigne": "Une grande fête dans une maison au bord de l’eau tourne au huis clos inattendu."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "contrainte",
    "consigne": "N’utilise pas la lettre « e » dans un dialogue."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "perspective",
    "consigne": "Fais parler un objet sans jamais révéler ce qu’il est."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "intertextualité",
    "consigne": "Ton histoire commence par la fin d’un autre roman célèbre."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "tonalité",
    "consigne": "Un texte qui ne comporte que des phrases interrogatives."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "focalisation",
    "consigne": "Le personnage principal n’agit jamais lui-même, seulement à travers les autres."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "intégration absurde",
    "consigne": "Insère dans ton texte un mode d’emploi, sans expliquer pourquoi."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "structure descendante",
    "consigne": "Ton histoire suit un compte à rebours. Chaque paragraphe contient un chiffre en moins."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "stylistique",
    "consigne": "Écris un texte sans ponctuation aucune."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "sensoriel",
    "consigne": "Un seul sens est disponible pour le personnage (vue, ouïe, toucher, etc.)."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "introspection",
    "consigne": "L’histoire doit se dérouler dans un seul et unique espace mental."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 1)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 2)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 3)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 4)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 5)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 6)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 7)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 8)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 9)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 10)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 11)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 12)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 13)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 14)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 15)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 16)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 17)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 18)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 19)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 20)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 21)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 22)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 23)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 24)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 25)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 26)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 27)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 28)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 29)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "variante",
    "consigne": "Décris une scène entière sans jamais nommer les personnages ni les lieux. (variante 30)"
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "langue",
    "consigne": "Écris un texte dont chaque phrase commence par la même lettre."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "contrainte sensorielle",
    "consigne": "Décris une scène uniquement à travers le goût et l’odorat."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "narration inversée",
    "consigne": "Le texte commence par la mort du personnage principal et remonte vers son origine."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "point de vue",
    "consigne": "Raconte une rupture amoureuse du point de vue… d’un animal domestique."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "mise en abyme",
    "consigne": "Ton personnage découvre un carnet où chaque page anticipe ce qu’il va vivre."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "répétition",
    "consigne": "Répète une phrase à chaque paragraphe, mais son sens doit changer à chaque fois."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "dialogue impossible",
    "consigne": "Fais dialoguer deux personnages sans qu’aucun ne comprenne ce que l’autre dit."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "géométrie narrative",
    "consigne": "Le texte doit obéir à une forme : spirale, boucle, escalier… choisis-en une."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "composition",
    "consigne": "Compose ton texte uniquement à partir de titres de livres existants."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "temporelle",
    "consigne": "Ton histoire se déroule en 5 minutes réelles, minute par minute."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "narration",
    "consigne": "Décris une scène d’enterrement du point de vue du défunt."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "animal",
    "consigne": "Raconte une journée entière du point de vue d’un oiseau perché sur un balcon urbain."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "objet",
    "consigne": "Décris la scène d’un cambriolage du point de vue d’une lampe de chevet."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "lieu",
    "consigne": "Raconte une fête d’anniversaire du point de vue de la pièce dans laquelle elle se déroule."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "corps",
    "consigne": "Une partie du corps (main, oreille, pied) devient le narrateur de la journée."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "typographie",
    "consigne": "Écris une histoire dans laquelle la mise en page fait partie intégrante du sens."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "métaphore imposée",
    "consigne": "Utilise la même métaphore (un animal, un objet) pour décrire tous les personnages."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "récit tronqué",
    "consigne": "Commence au chapitre 7 d’un livre fictif. Laisse le lecteur deviner le début."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "déni",
    "consigne": "Ton narrateur refuse de reconnaître ce qu’il voit. Le lecteur comprend à sa place."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "jeux de mots",
    "consigne": "Inclue un maximum d'expressions toutes faites dans une scène sérieuse."
  },
  {
    "categorie": "Incident",
    "abstraction": "santé",
    "consigne": "Ton personnage perd la voix au pire moment."
  },
  {
    "categorie": "Incident",
    "abstraction": "relation",
    "consigne": "Une personne qui ne devait jamais revenir sonne à la porte."
  },
  {
    "categorie": "Incident",
    "abstraction": "temps",
    "consigne": "Il y a un saut dans le temps que le personnage semble seul à remarquer."
  },
  {
    "categorie": "Incident",
    "abstraction": "enquête",
    "consigne": "Une lettre jamais ouverte est enfin dépliée. Ce qu’elle révèle change tout."
  },
  {
    "categorie": "Incident",
    "abstraction": "intimité",
    "consigne": "Un journal intime est découvert par la mauvaise personne."
  },
  {
    "categorie": "Objet déclencheur",
    "abstraction": "héritage",
    "consigne": "Ton personnage hérite d’un objet mystérieux dont il ignore l’usage exact."
  },
  {
    "categorie": "Objet déclencheur",
    "abstraction": "quotidien",
    "consigne": "Un objet banal commence à produire un effet étrange et inexplicable."
  },
  {
    "categorie": "Objet déclencheur",
    "abstraction": "erreur",
    "consigne": "Un colis contenant quelque chose de précieux est livré à la mauvaise adresse."
  },
  {
    "categorie": "Objet déclencheur",
    "abstraction": "manuscrit",
    "consigne": "Un brouillon abandonné contient la fin d’une histoire qui n’a pas encore commencé."
  },
  {
    "categorie": "Objet déclencheur",
    "abstraction": "métaphysique",
    "consigne": "Un objet semble modifier la perception du temps pour celui qui le porte."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "perspective",
    "consigne": "Raconte la scène d’un incendie du point de vue d’un extincteur."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "objet narratif",
    "consigne": "Décris une dispute familiale vue par un miroir de salle à manger."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "animal",
    "consigne": "Une mouche raconte les secrets d’un appartement qu’elle hante depuis des années."
  },
  {
    "categorie": "Point de vue inversé",
    "abstraction": "personnalisation",
    "consigne": "Le narrateur est un tatouage sur le bras d’un personnage."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "syntaxe",
    "consigne": "Écris un texte sans utiliser une seule virgule."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "forme",
    "consigne": "Structure ton récit comme les mouvements d’une symphonie."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "sensoriel",
    "consigne": "Décris un monde où les couleurs sont interdites."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "jeu de langage",
    "consigne": "Chaque paragraphe contient un mot inventé dont on devine le sens par le contexte."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "poétique",
    "consigne": "Ton texte alterne entre narration et vers libres."
  },
  {
    "categorie": "Défi créatif",
    "abstraction": "rythme",
    "consigne": "Construit ton récit en accélérant progressivement les événements."
  },
  {
    "categorie": "Incident",
    "abstraction": "absurde",
    "consigne": "Un jour, tout le monde commence à parler une autre langue. Sauf ton héros."
  },
  {
    "categorie": "Incident",
    "abstraction": "physique",
    "consigne": "Ton personnage se réveille avec une gravité deux fois plus forte."
  },
  {
    "categorie": "Incident",
    "abstraction": "familial",
    "consigne": "Un oncle inconnu arrive à la porte avec une valise pleine de souvenirs et de non-dits."
  },
  {
    "categorie": "Incident",
    "abstraction": "social",
    "consigne": "Un inconnu publie la biographie de ton héros… avant qu’elle ne soit écrite."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "fusion de genre",
    "consigne": "Mélange le polar noir et la comédie romantique dans une même scène."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "incongru",
    "consigne": "Écris une scène de western dans l’univers d’un conte de fées."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "pastoral-futuriste",
    "consigne": "Imagine une idylle champêtre… dans une station spatiale."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "documentaire-fantastique",
    "consigne": "Écris une fausse entrée Wikipédia sur un personnage de ton roman."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "satirique",
    "consigne": "Transforme une scène d’heroic fantasy en débat télévisé."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "dramatique-horrifique",
    "consigne": "Une scène de réunion familiale bascule lentement dans le film d’horreur."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "défi narratif",
    "consigne": "Écris une scène où un détective enquête dans un monde de fantasy épique."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "défi narratif",
    "consigne": "Mélange une comédie romantique avec les codes du film d’horreur."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "défi narratif",
    "consigne": "Raconte une scène post-apocalyptique avec les codes d’un conte pour enfants."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "défi narratif",
    "consigne": "Mélange les codes du western et de la science-fiction dans une seule scène."
  },
  {
    "categorie": "Défi Mash-up",
    "abstraction": "défi narratif",
    "consigne": "Fais interagir deux personnages issus de genres opposés : fantasy et thriller psychologique."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "défi formel",
    "consigne": "Écris une scène sans utiliser la lettre 'e'."
  },
  {
    "categorie": "Inversion",
    "abstraction": "structure",
    "consigne": "Commence par la dernière phrase du livre, puis remonte progressivement le fil."
  },
  {
    "categorie": "Objet",
    "abstraction": "déclencheur",
    "consigne": "Un personnage trouve un objet dont il semble connaître l’origine... mais ce n’est pas le cas."
  },
  {
    "categorie": "Temps suspendu",
    "abstraction": "expérience",
    "consigne": "Décris une scène figée dans le temps, où seul ton personnage peut se mouvoir."
  },
  {
    "categorie": "Style mimétique",
    "abstraction": "expérimentation",
    "consigne": "Adopte le style de ton personnage dans la narration (ex : syntaxe, vocabulaire)."
  }
];