const ideas = [
  {
    "categorie": "Cycle",
    "abstraction": "structure",
    "consigne": "Un dialogue éclate à propos de un nom sur une liste – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Un événement mineur lié à la disparition d’un objet familier déclenche une réaction en chaîne."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par la présence d’un animal silencieux."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Transforme une scène banale par l’introduction soudaine de la présence d’un animal silencieux."
  },
  {
    "categorie": "Présage",
    "abstraction": "tension / mystère",
    "consigne": "Incorpore un rêve récurrent dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Incorpore la voix d’un proche, alors qu’il est loin dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Un dialogue éclate à propos de une vieille photo trouvée dans un livre – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Fais ressentir la sensation d’avoir déjà été ici comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Incorpore un objet qui n’a rien à faire là dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Présage",
    "abstraction": "tension / mystère",
    "consigne": "Ton personnage croit que un objet qui n’a rien à faire là, mais tout le monde nie."
  },
  {
    "categorie": "Cycle",
    "abstraction": "structure",
    "consigne": "Incorpore une note de musique obsédante dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Rituel",
    "abstraction": "structure / répétition",
    "consigne": "Un événement mineur lié à une note de musique obsédante déclenche une réaction en chaîne."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Incorpore la présence d’un animal silencieux dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Décris une scène marquée par le goût d’un fruit qui ramène en enfance, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par la sensation d’avoir déjà été ici."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Fais ressentir une note de musique obsédante comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Décris une scène marquée par le retour inespéré d’un personnage oublié, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Un dialogue éclate à propos de le goût d’un fruit qui ramène en enfance – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Voix",
    "abstraction": "perturbation sensorielle",
    "consigne": "Décris une scène marquée par une blessure sans origine, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Présage",
    "abstraction": "tension / mystère",
    "consigne": "Ton personnage croit que le goût d’un fruit qui ramène en enfance, mais tout le monde nie."
  },
  {
    "categorie": "Rituel",
    "abstraction": "structure / répétition",
    "consigne": "Fais ressentir une vieille photo trouvée dans un livre comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Disparition",
    "abstraction": "événement",
    "consigne": "Transforme une scène banale par l’introduction soudaine de le goût d’un fruit qui ramène en enfance."
  },
  {
    "categorie": "Rituel",
    "abstraction": "structure / répétition",
    "consigne": "Incorpore une erreur dans une date de naissance dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Disparition",
    "abstraction": "événement",
    "consigne": "Décris une scène marquée par une odeur de brûlé, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Transforme une scène banale par l’introduction soudaine de la voix d’un proche, alors qu’il est loin."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par le goût d’un fruit qui ramène en enfance."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Fais ressentir la présence d’un animal silencieux comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Présage",
    "abstraction": "tension / mystère",
    "consigne": "Un événement mineur lié à une vieille photo trouvée dans un livre déclenche une réaction en chaîne."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Fais ressentir le regard insistant d’un inconnu comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Un dialogue éclate à propos de un texte retrouvé sans signature – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur une note de musique obsédante."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Transforme une scène banale par l’introduction soudaine de une note de musique obsédante."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Quelqu’un affirme que la présence d’un animal silencieux n’est jamais arrivé."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Fais ressentir un rêve récurrent comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Présage",
    "abstraction": "tension / mystère",
    "consigne": "Incorpore la mémoire d’un événement jamais vécu dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Un dialogue éclate à propos de une blessure sans origine – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Un événement mineur lié à le regard insistant d’un inconnu déclenche une réaction en chaîne."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Transforme une scène banale par l’introduction soudaine de le retour inespéré d’un personnage oublié."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par un cri entendu la nuit."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur un nom sur une liste."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Un événement mineur lié à une odeur de brûlé déclenche une réaction en chaîne."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par la voix d’un proche, alors qu’il est loin."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Ton personnage croit que le regard insistant d’un inconnu, mais tout le monde nie."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur le regard insistant d’un inconnu."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Un dialogue éclate à propos de le retour inespéré d’un personnage oublié – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Un événement mineur lié à un texte retrouvé sans signature déclenche une réaction en chaîne."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur la disparition d’un objet familier."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Quelqu’un affirme que un objet qui n’a rien à faire là n’est jamais arrivé."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Décris une scène marquée par une note de musique obsédante, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par une blessure sans origine."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Décris une scène marquée par le reflet qui ne correspond pas, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Ton personnage croit que la sensation d’avoir déjà été ici, mais tout le monde nie."
  },
  {
    "categorie": "Voix",
    "abstraction": "perturbation sensorielle",
    "consigne": "Incorpore un mot prononcé au mauvais moment dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Présage",
    "abstraction": "tension / mystère",
    "consigne": "Un dialogue éclate à propos de un mot prononcé au mauvais moment – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur une erreur dans une date de naissance."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Incorpore la sensation d’avoir déjà été ici dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Cycle",
    "abstraction": "structure",
    "consigne": "Un dialogue éclate à propos de la présence d’un animal silencieux – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Quelqu’un affirme que le retour inespéré d’un personnage oublié n’est jamais arrivé."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Ton personnage croit que une odeur de brûlé, mais tout le monde nie."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Décris une scène marquée par la voix d’un proche, alors qu’il est loin, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Un événement mineur lié à un cri entendu la nuit déclenche une réaction en chaîne."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Décris une scène marquée par un nom sur une liste, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Ton personnage croit que un rêve récurrent, mais tout le monde nie."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Un dialogue éclate à propos de une odeur de brûlé – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Transforme une scène banale par l’introduction soudaine de une vieille photo trouvée dans un livre."
  },
  {
    "categorie": "Présage",
    "abstraction": "tension / mystère",
    "consigne": "Quelqu’un affirme que une note de musique obsédante n’est jamais arrivé."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Décris une scène marquée par un texte retrouvé sans signature, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Disparition",
    "abstraction": "événement",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur la présence d’un animal silencieux."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Incorpore le regard insistant d’un inconnu dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Quelqu’un affirme que une odeur de brûlé n’est jamais arrivé."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Incorpore un nom sur une liste dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Incorpore le goût d’un fruit qui ramène en enfance dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Fais ressentir un objet qui n’a rien à faire là comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Transforme une scène banale par l’introduction soudaine de un mot prononcé au mauvais moment."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Un événement mineur lié à un mot prononcé au mauvais moment déclenche une réaction en chaîne."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par le regard insistant d’un inconnu."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Décris une scène marquée par une vieille photo trouvée dans un livre, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Quelqu’un affirme que la voix d’un proche, alors qu’il est loin n’est jamais arrivé."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Un événement mineur lié à le goût d’un fruit qui ramène en enfance déclenche une réaction en chaîne."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Fais ressentir un nom sur une liste comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Fais ressentir le retour inespéré d’un personnage oublié comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Décris une scène marquée par un mot prononcé au mauvais moment, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Quelqu’un affirme que un mot prononcé au mauvais moment n’est jamais arrivé."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Un dialogue éclate à propos de la disparition d’un objet familier – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur une blessure sans origine."
  },
  {
    "categorie": "Rituel",
    "abstraction": "structure / répétition",
    "consigne": "Décris une scène marquée par la présence d’un animal silencieux, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Rituel",
    "abstraction": "structure / répétition",
    "consigne": "Un dialogue éclate à propos de un objet qui n’a rien à faire là – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Quelqu’un affirme que le goût d’un fruit qui ramène en enfance n’est jamais arrivé."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par une note de musique obsédante."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Incorpore une odeur de brûlé dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Un dialogue éclate à propos de un rêve récurrent – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Voix",
    "abstraction": "perturbation sensorielle",
    "consigne": "Un dialogue éclate à propos de une note de musique obsédante – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Ton personnage croit que la mémoire d’un événement jamais vécu, mais tout le monde nie."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Décris une scène marquée par un rêve récurrent, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Voix",
    "abstraction": "perturbation sensorielle",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par une odeur de brûlé."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Transforme une scène banale par l’introduction soudaine de le regard insistant d’un inconnu."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Un dialogue éclate à propos de la mémoire d’un événement jamais vécu – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Incorpore un texte retrouvé sans signature dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Quelqu’un affirme que un texte retrouvé sans signature n’est jamais arrivé."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Décris une scène marquée par la sensation d’avoir déjà été ici, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Disparition",
    "abstraction": "événement",
    "consigne": "Ton personnage croit que la disparition d’un objet familier, mais tout le monde nie."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Fais ressentir le goût d’un fruit qui ramène en enfance comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Quelqu’un affirme que la mémoire d’un événement jamais vécu n’est jamais arrivé."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur un objet qui n’a rien à faire là."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Décris une scène marquée par le regard insistant d’un inconnu, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Rituel",
    "abstraction": "structure / répétition",
    "consigne": "Un dialogue éclate à propos de le regard insistant d’un inconnu – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Quelqu’un affirme que une vieille photo trouvée dans un livre n’est jamais arrivé."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Quelqu’un affirme que une blessure sans origine n’est jamais arrivé."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Transforme une scène banale par l’introduction soudaine de la sensation d’avoir déjà été ici."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par le reflet qui ne correspond pas."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Ton personnage croit que un cri entendu la nuit, mais tout le monde nie."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par un nom sur une liste."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Un événement mineur lié à une erreur dans une date de naissance déclenche une réaction en chaîne."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Un dialogue éclate à propos de la voix d’un proche, alors qu’il est loin – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Incorpore le retour inespéré d’un personnage oublié dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Transforme une scène banale par l’introduction soudaine de une blessure sans origine."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Ton personnage croit que un nom sur une liste, mais tout le monde nie."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Décris une scène marquée par une erreur dans une date de naissance, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur un mot prononcé au mauvais moment."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Fais ressentir un cri entendu la nuit comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Disparition",
    "abstraction": "événement",
    "consigne": "Quelqu’un affirme que le regard insistant d’un inconnu n’est jamais arrivé."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Quelqu’un affirme que le reflet qui ne correspond pas n’est jamais arrivé."
  },
  {
    "categorie": "Cycle",
    "abstraction": "structure",
    "consigne": "Transforme une scène banale par l’introduction soudaine de une odeur de brûlé."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Fais ressentir la mémoire d’un événement jamais vécu comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Rituel",
    "abstraction": "structure / répétition",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur le reflet qui ne correspond pas."
  },
  {
    "categorie": "Voix",
    "abstraction": "perturbation sensorielle",
    "consigne": "Décris une scène marquée par la disparition d’un objet familier, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Quelqu’un affirme que une erreur dans une date de naissance n’est jamais arrivé."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Incorpore le reflet qui ne correspond pas dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Cycle",
    "abstraction": "structure",
    "consigne": "Un événement mineur lié à la présence d’un animal silencieux déclenche une réaction en chaîne."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Un dialogue éclate à propos de une erreur dans une date de naissance – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Fais ressentir la voix d’un proche, alors qu’il est loin comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Fais ressentir la disparition d’un objet familier comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Ton personnage croit que la présence d’un animal silencieux, mais tout le monde nie."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par un texte retrouvé sans signature."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Fais ressentir une odeur de brûlé comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Incorpore un cri entendu la nuit dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Disparition",
    "abstraction": "événement",
    "consigne": "Quelqu’un affirme que la disparition d’un objet familier n’est jamais arrivé."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Transforme une scène banale par l’introduction soudaine de un nom sur une liste."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur une odeur de brûlé."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Un dialogue éclate à propos de la sensation d’avoir déjà été ici – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Voix",
    "abstraction": "perturbation sensorielle",
    "consigne": "Ton personnage croit que le retour inespéré d’un personnage oublié, mais tout le monde nie."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Un événement mineur lié à la mémoire d’un événement jamais vécu déclenche une réaction en chaîne."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur le goût d’un fruit qui ramène en enfance."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par une vieille photo trouvée dans un livre."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Décris une scène marquée par un objet qui n’a rien à faire là, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par un mot prononcé au mauvais moment."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par la disparition d’un objet familier."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Transforme une scène banale par l’introduction soudaine de la disparition d’un objet familier."
  },
  {
    "categorie": "Disparition",
    "abstraction": "événement",
    "consigne": "Un événement mineur lié à la sensation d’avoir déjà été ici déclenche une réaction en chaîne."
  },
  {
    "categorie": "Empreinte",
    "abstraction": "élément de mystère",
    "consigne": "Ton personnage croit que une blessure sans origine, mais tout le monde nie."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Ton personnage croit que une note de musique obsédante, mais tout le monde nie."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Incorpore une blessure sans origine dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Transforme une scène banale par l’introduction soudaine de un objet qui n’a rien à faire là."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Décris une scène marquée par un cri entendu la nuit, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Voix",
    "abstraction": "perturbation sensorielle",
    "consigne": "Transforme une scène banale par l’introduction soudaine de un texte retrouvé sans signature."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur une vieille photo trouvée dans un livre."
  },
  {
    "categorie": "Cycle",
    "abstraction": "structure",
    "consigne": "Un événement mineur lié à un objet qui n’a rien à faire là déclenche une réaction en chaîne."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par la mémoire d’un événement jamais vécu."
  },
  {
    "categorie": "Cycle",
    "abstraction": "structure",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur un cri entendu la nuit."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Fais ressentir un texte retrouvé sans signature comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Quelqu’un affirme que un cri entendu la nuit n’est jamais arrivé."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Un dialogue éclate à propos de le reflet qui ne correspond pas – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Rituel",
    "abstraction": "structure / répétition",
    "consigne": "Quelqu’un affirme que un nom sur une liste n’est jamais arrivé."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par un objet qui n’a rien à faire là."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Transforme une scène banale par l’introduction soudaine de un cri entendu la nuit."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Incorpore la disparition d’un objet familier dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Un événement mineur lié à le reflet qui ne correspond pas déclenche une réaction en chaîne."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Incorpore une vieille photo trouvée dans un livre dans une scène de tension sans en faire le centre."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur la sensation d’avoir déjà été ici."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Un événement mineur lié à un rêve récurrent déclenche une réaction en chaîne."
  },
  {
    "categorie": "Disparition",
    "abstraction": "événement",
    "consigne": "Transforme une scène banale par l’introduction soudaine de la mémoire d’un événement jamais vécu."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Un événement mineur lié à une blessure sans origine déclenche une réaction en chaîne."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Quelqu’un affirme que un rêve récurrent n’est jamais arrivé."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Ton personnage croit que un mot prononcé au mauvais moment, mais tout le monde nie."
  },
  {
    "categorie": "Culpabilité",
    "abstraction": "émotion",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par un rêve récurrent."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Fais ressentir une blessure sans origine comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Fais ressentir une erreur dans une date de naissance comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Cycle",
    "abstraction": "structure",
    "consigne": "Transforme une scène banale par l’introduction soudaine de une erreur dans une date de naissance."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Un événement mineur lié à la voix d’un proche, alors qu’il est loin déclenche une réaction en chaîne."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Transforme une scène banale par l’introduction soudaine de le reflet qui ne correspond pas."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par une erreur dans une date de naissance."
  },
  {
    "categorie": "Projection",
    "abstraction": "psychologie",
    "consigne": "Fais ressentir un mot prononcé au mauvais moment comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Ton personnage croit que une erreur dans une date de naissance, mais tout le monde nie."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Ton personnage croit que le reflet qui ne correspond pas, mais tout le monde nie."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur un rêve récurrent."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Fais ressentir le reflet qui ne correspond pas comme un malaise diffus, jamais expliqué."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Ton personnage croit que un texte retrouvé sans signature, mais tout le monde nie."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Quelqu’un affirme que la sensation d’avoir déjà été ici n’est jamais arrivé."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Décris une scène marquée par la mémoire d’un événement jamais vécu, sans jamais nommer ce que c’est."
  },
  {
    "categorie": "Voix",
    "abstraction": "perturbation sensorielle",
    "consigne": "Écris une scène dont l’émotion dominante est provoquée par le retour inespéré d’un personnage oublié."
  },
  {
    "categorie": "Décalage",
    "abstraction": "structure",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur un texte retrouvé sans signature."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur le retour inespéré d’un personnage oublié."
  },
  {
    "categorie": "Vision",
    "abstraction": "perception",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur la mémoire d’un événement jamais vécu."
  },
  {
    "categorie": "Dédoublement",
    "abstraction": "trouble identitaire",
    "consigne": "Transforme une scène banale par l’introduction soudaine de un rêve récurrent."
  },
  {
    "categorie": "Disparition",
    "abstraction": "événement",
    "consigne": "Ton personnage croit que la voix d’un proche, alors qu’il est loin, mais tout le monde nie."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Ton personnage croit que une vieille photo trouvée dans un livre, mais tout le monde nie."
  },
  {
    "categorie": "Mirage",
    "abstraction": "situation étrange",
    "consigne": "Un dialogue éclate à propos de un cri entendu la nuit – mais aucun mot important n’est prononcé."
  },
  {
    "categorie": "Doute",
    "abstraction": "tension",
    "consigne": "Un événement mineur lié à le retour inespéré d’un personnage oublié déclenche une réaction en chaîne."
  },
  {
    "categorie": "Rupture",
    "abstraction": "événement",
    "consigne": "Un personnage secondaire apporte un point de vue étrange sur la voix d’un proche, alors qu’il est loin."
  },
  {
    "categorie": "Erreur",
    "abstraction": "déclencheur",
    "consigne": "Un événement mineur lié à un nom sur une liste déclenche une réaction en chaîne."
  },
  {
    "categorie": "Langage détourné",
    "abstraction": "contrainte stylistique",
    "consigne": "Écris un dialogue entier sans utiliser la lettre « e »."
  },
  {
    "categorie": "Interférence",
    "abstraction": "perturbation narrative",
    "consigne": "Une voix extérieure interrompt régulièrement le récit, sans qu'on en comprenne la source."
  },
  {
    "categorie": "Objet déclencheur",
    "abstraction": "élément déclencheur",
    "consigne": "Ton personnage découvre un objet dont il ne peut se débarrasser. Chaque tentative échoue ou empire la situation."
  },
  {
    "categorie": "Suspension du réel",
    "abstraction": "déformation de la réalité",
    "consigne": "Les lois du monde se figent pendant quelques minutes. Tout s’immobilise, sauf ton personnage."
  },
  {
    "categorie": "Incertitude morale",
    "abstraction": "dilemme",
    "consigne": "Fais agir ton personnage pour ce qu’il pense être une bonne cause... mais découvre ensuite qu’il a empiré les choses."
  },
  {
    "categorie": "Structure inversée",
    "abstraction": "forme narrative",
    "consigne": "Raconte une scène à l’envers, en partant de la fin pour remonter jusqu’au commencement."
  },
  {
    "categorie": "Texte contaminé",
    "abstraction": "altération de la narration",
    "consigne": "Le texte semble infecté par une voix parasite qui interrompt, modifie ou contredit le récit."
  },
  {
    "categorie": "Empreinte invisible",
    "abstraction": "influence latente",
    "consigne": "Un personnage agit sous l’influence d’une personne qu’il ne mentionne jamais. À toi de suggérer cette présence par petites touches."
  },
  {
    "categorie": "Rémanence",
    "abstraction": "persistances sensorielles",
    "consigne": "Ton personnage est hanté par une odeur qui réapparaît sans raison apparente."
  },
  {
    "categorie": "Cadavre narratif",
    "abstraction": "fragment troublant",
    "consigne": "Insère un paragraphe sans lien logique avec l’histoire. Il ne sera jamais expliqué."
  },
  {
    "categorie": "Interférence",
    "abstraction": "perturbation narrative",
    "consigne": "Une voix extérieure interrompt régulièrement l’histoire, sans qu'on en comprenne la source."
  },
  {
    "categorie": "Texte contaminé",
    "abstraction": "altération de la narration",
    "consigne": "Le texte semble infecté par une voix parasite qui interrompt, modifie ou contredit l’histoire."
  },
  {
    "categorie": "Incertitude morale",
    "abstraction": "dilemme",
    "consigne": "Fais agir votre héros pour ce qu’il pense être une bonne cause... mais découvre ensuite qu’il a empiré les choses."
  },
  {
    "categorie": "Suspension du réel",
    "abstraction": "déformation de la réalité",
    "consigne": "Les lois du monde se figent pendant quelques minutes. Tout s’immobilise, sauf votre héros."
  },
  {
    "categorie": "Langage détourné",
    "abstraction": "contrainte stylistique",
    "consigne": "Compose un monologue intérieur en n'utilisant que des phrases interrogatives."
  },
  {
    "categorie": "Objet omniscient",
    "abstraction": "point de vue détourné",
    "consigne": "Un objet raconte ce qu’il a vu, sans comprendre ce qu’il a causé."
  },
  {
    "categorie": "Micro-fiction buissonnière",
    "abstraction": "fragment narratif",
    "consigne": "Décris une scène qui commence, mais ne se termine jamais."
  },
  {
    "categorie": "Temps suspendu",
    "abstraction": "altération temporelle",
    "consigne": "Ton personnage vit une journée où l’heure ne change jamais."
  },
  {
    "categorie": "Cadavre narratif",
    "abstraction": "fragment troublant",
    "consigne": "Ajoute un chapitre dont la pagination ne correspond à rien."
  },
  {
    "categorie": "Personnage troué",
    "abstraction": "construction lacunaire",
    "consigne": "Un personnage n’apparaît jamais directement, mais tout tourne autour de lui."
  },
  {
    "categorie": "Écriture médiumnique",
    "abstraction": "forme inspirée",
    "consigne": "Décris une page où votre protagoniste retranscrit une voix qu’il entend sans comprendre."
  },
  {
    "categorie": "Style mimétique",
    "abstraction": "jeu littéraire",
    "consigne": "Imite le style d’un auteur célèbre pour raconter une scène banale."
  },
  {
    "categorie": "Interférence",
    "abstraction": "perturbation narrative",
    "consigne": "Ton personnage est interrompu par des flashs d’un récit parallèle."
  },
  {
    "categorie": "Structure inversée",
    "abstraction": "forme narrative",
    "consigne": "Commence par la conséquence finale, puis remonte vers l’origine émotionnelle."
  },
  {
    "categorie": "Micro-fiction buissonnière",
    "abstraction": "fragment narratif",
    "consigne": "Imagine une scène qui commence, mais ne se termine jamais."
  },
  {
    "categorie": "Écriture médiumnique",
    "abstraction": "forme inspirée",
    "consigne": "Compose une page où votre protagoniste retranscrit une voix qu’il entend sans comprendre."
  },
  {
    "categorie": "Micro-fiction buissonnière",
    "abstraction": "fragment narratif",
    "consigne": "Compose une scène qui commence, mais ne se termine jamais."
  },
  {
    "categorie": "Langage détourné",
    "abstraction": "contrainte stylistique",
    "consigne": "Décris un monologue intérieur en n'utilisant que des phrases interrogatives."
  },
  {
    "categorie": "Écriture médiumnique",
    "abstraction": "forme inspirée",
    "consigne": "Raconte une page où votre protagoniste retranscrit une voix qu’il entend sans comprendre."
  },
  {
    "categorie": "Déplacement invisible",
    "abstraction": "événement déclencheur",
    "consigne": "Votre protagoniste se rend compte qu’il se déplace sans laisser de traces."
  },
  {
    "categorie": "Répétition étrange",
    "abstraction": "altération temporelle",
    "consigne": "Écris une journée qui recommence à chaque lever de soleil, mais change subtilement."
  },
  {
    "categorie": "Objet omniscient",
    "abstraction": "point de vue détourné",
    "consigne": "Un objet raconte le dernier instant d’un personnage sans connaître sa propre implication."
  },
  {
    "categorie": "Personnage effacé",
    "abstraction": "construction lacunaire",
    "consigne": "Un personnage disparaît progressivement des souvenirs des autres."
  },
  {
    "categorie": "Double narratif",
    "abstraction": "forme fracturée",
    "consigne": "Un chapitre est raconté simultanément par deux versions divergentes du même personnage."
  },
  {
    "categorie": "Micro-fiction buissonnière",
    "abstraction": "fragment narratif",
    "consigne": "Une scène surgit, absurde ou belle, puis s’efface comme si elle n’avait jamais existé."
  },
  {
    "categorie": "Cadavre narratif",
    "abstraction": "trou dans la diégèse",
    "consigne": "Insère une page qui semble provenir d’un autre roman."
  },
  {
    "categorie": "Langage détourné",
    "abstraction": "contrainte stylistique",
    "consigne": "Écris un dialogue où un personnage parle uniquement en proverbes déformés."
  },
  {
    "categorie": "Écriture médiumnique",
    "abstraction": "forme inspirée",
    "consigne": "Votre protagoniste entend une voix qui lui dicte des instructions incompréhensibles."
  },
  {
    "categorie": "Structure inversée",
    "abstraction": "forme narrative",
    "consigne": "Compose une histoire qui commence par un souvenir et finit par une naissance."
  },
  {
    "categorie": "Répétition étrange",
    "abstraction": "altération temporelle",
    "consigne": "Imagine une journée qui recommence à chaque lever de soleil, mais change subtilement."
  },
  {
    "categorie": "Répétition étrange",
    "abstraction": "altération temporelle",
    "consigne": "Invente une journée qui recommence à chaque lever de soleil, mais change subtilement."
  },
  {
    "categorie": "Répétition étrange",
    "abstraction": "altération temporelle",
    "consigne": "Décris une journée qui recommence à chaque lever de soleil, mais change subtilement."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Fais durer un frigo vide bien trop longtemps."
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Un personnage entend parler de un mot d’enfant, mais il n’existe pas."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Écris toute une scène sans jamais utiliser le mot un billet oublié, même s’il est partout."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Construit une scène où une valise pleine de lettres devient vital."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Tout le chapitre tourne autour de une voix dans le mur, sans jamais le nommer."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Un personnage entend parler de un jumeau imaginaire, mais il n’existe pas."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence",
    "consigne": "Insère un paragraphe absurde sur une porte entrouverte."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Construit une scène où une gifle qui n’arrive jamais devient vital."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Commence un chapitre par : « Ce jour-là, un mot interdit »"
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Insère un paragraphe absurde sur un secret en papier."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Écris toute une scène sans jamais utiliser le mot un miroir flou, même s’il est partout."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "forme narrative",
    "consigne": "Fais intervenir un animal mort au pire moment."
  },
  {
    "categorie": "Lieu",
    "abstraction": "espace narratif",
    "consigne": "Tout le chapitre tourne autour de un pull trop grand, sans jamais le nommer."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Transforme une boîte scellée en métaphore filée."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Commence un chapitre par : « Ce jour-là, un frigo vide »"
  },
  {
    "categorie": "Objet",
    "abstraction": "élément symbolique",
    "consigne": "Commence un chapitre par : « Ce jour-là, une silhouette derrière le rideau »"
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Transforme un frigo vide en métaphore filée."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Crée une attente autour de le prénom d’un ex, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Tout le chapitre tourne autour de le prénom d’un ex, sans jamais le nommer."
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Tout le chapitre tourne autour de un frigo vide, sans jamais le nommer."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence",
    "consigne": "Transforme une porte entrouverte en métaphore filée."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Écris toute une scène sans jamais utiliser le mot un stylo rouge, même s’il est partout."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence",
    "consigne": "Transforme une cicatrice en métaphore filée."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Crée une attente autour de une boîte scellée, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Écris toute une scène sans jamais utiliser le mot une promesse tenue, même s’il est partout."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Fais durer un secret en papier bien trop longtemps."
  },
  {
    "categorie": "Lieu",
    "abstraction": "espace narratif",
    "consigne": "Un personnage entend parler de un chuchotement dans le noir, mais il n’existe pas."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Commence un chapitre par : « Ce jour-là, une voix dans le mur »"
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Transforme une coupure de courant en métaphore filée."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Construit une scène où une silhouette derrière le rideau devient vital."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Écris toute une scène sans jamais utiliser le mot un mot d’enfant, même s’il est partout."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "forme narrative",
    "consigne": "Écris toute une scène sans jamais utiliser le mot une tache indélébile, même s’il est partout."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Insère un paragraphe absurde sur un appel inconnu."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "contrainte stylistique",
    "consigne": "Crée une attente autour de un mot d’enfant, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Lieu",
    "abstraction": "espace narratif",
    "consigne": "Insère un paragraphe absurde sur une valise pleine de lettres."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Écris toute une scène sans jamais utiliser le mot un chuchotement dans le noir, même s’il est partout."
  },
  {
    "categorie": "Fragment",
    "abstraction": "extrait isolé",
    "consigne": "Construit une scène où un billet oublié devient vital."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Commence un chapitre par : « Ce jour-là, un jumeau imaginaire »"
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Insère un paragraphe absurde sur une voix dans le mur."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Tout le chapitre tourne autour de un chuchotement dans le noir, sans jamais le nommer."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "contrainte stylistique",
    "consigne": "Insère un paragraphe absurde sur un animal mort."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Tout le chapitre tourne autour de un miroir flou, sans jamais le nommer."
  },
  {
    "categorie": "Fragment",
    "abstraction": "extrait isolé",
    "consigne": "Écris toute une scène sans jamais utiliser le mot un animal mort, même s’il est partout."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence",
    "consigne": "Fais de la mauvaise clé un piège narratif."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Écris une scène où un animal mort est au centre de l’attention."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Un personnage entend parler de une promesse tenue, mais il n’existe pas."
  },
  {
    "categorie": "Fragment",
    "abstraction": "extrait isolé",
    "consigne": "Commence un chapitre par : « Ce jour-là, un mot d’enfant »"
  },
  {
    "categorie": "Contrainte",
    "abstraction": "contrainte stylistique",
    "consigne": "Tout le chapitre tourne autour de un mot interdit, sans jamais le nommer."
  },
  {
    "categorie": "Fragment",
    "abstraction": "extrait isolé",
    "consigne": "Fais intervenir le prénom d’un ex au pire moment."
  },
  {
    "categorie": "Fragment",
    "abstraction": "extrait isolé",
    "consigne": "Construit une scène où un pull trop grand devient vital."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Fais intervenir une gifle qui n’arrive jamais au pire moment."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Transforme un billet oublié en métaphore filée."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "contrainte stylistique",
    "consigne": "Transforme une gifle qui n’arrive jamais en métaphore filée."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Insère un paragraphe absurde sur une promesse tenue."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Transforme une tache indélébile en métaphore filée."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Crée une attente autour de un jumeau imaginaire, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Écris une scène où une voix dans le mur est au centre de l’attention."
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Construit une scène où une tache indélébile devient vital."
  },
  {
    "categorie": "Lieu",
    "abstraction": "espace narratif",
    "consigne": "Crée une attente autour de un stylo rouge, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Fais durer un mot interdit bien trop longtemps."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Un personnage entend parler de un miroir flou, mais il n’existe pas."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Commence un chapitre par : « Ce jour-là, le prénom d’un ex »"
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Tout le chapitre tourne autour de un jumeau imaginaire, sans jamais le nommer."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Insère un paragraphe absurde sur une coupure de courant."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Commence un chapitre par : « Ce jour-là, une tache indélébile »"
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Fais durer un chuchotement dans le noir bien trop longtemps."
  },
  {
    "categorie": "Objet",
    "abstraction": "élément symbolique",
    "consigne": "Tout le chapitre tourne autour de un billet oublié, sans jamais le nommer."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Écris une scène où une valise pleine de lettres est au centre de l’attention."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Insère un paragraphe absurde sur une cicatrice."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Commence un chapitre par : « Ce jour-là, une gifle qui n’arrive jamais »"
  },
  {
    "categorie": "Objet",
    "abstraction": "élément symbolique",
    "consigne": "Insère un paragraphe absurde sur une gifle qui n’arrive jamais."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Écris une scène où une cicatrice est au centre de l’attention."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Un personnage entend parler de une valise pleine de lettres, mais il n’existe pas."
  },
  {
    "categorie": "Objet",
    "abstraction": "élément symbolique",
    "consigne": "Fais durer un miroir flou bien trop longtemps."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Fais intervenir une cicatrice au pire moment."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Crée une attente autour de une coupure de courant, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Construit une scène où le prénom d’un ex devient vital."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence",
    "consigne": "Crée une attente autour de un chuchotement dans le noir, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Insère un paragraphe absurde sur un jumeau imaginaire."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Fais durer la mauvaise clé bien trop longtemps."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Commence un chapitre par : « Ce jour-là, une porte entrouverte »"
  },
  {
    "categorie": "Fragment",
    "abstraction": "extrait isolé",
    "consigne": "Fais intervenir un frigo vide au pire moment."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Un personnage entend parler de un frigo vide, mais il n’existe pas."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "forme narrative",
    "consigne": "Construit une scène où une cicatrice devient vital."
  },
  {
    "categorie": "Objet",
    "abstraction": "élément symbolique",
    "consigne": "Fais durer une porte entrouverte bien trop longtemps."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Écris une scène où un mot interdit est au centre de l’attention."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Fais intervenir une porte entrouverte au pire moment."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "forme narrative",
    "consigne": "Construit une scène où une boîte scellée devient vital."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Un personnage entend parler de un appel inconnu, mais il n’existe pas."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Écris toute une scène sans jamais utiliser le mot une gifle qui n’arrive jamais, même s’il est partout."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Écris une scène où un chuchotement dans le noir est au centre de l’attention."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Construit une scène où un jumeau imaginaire devient vital."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Fais intervenir une tache indélébile au pire moment."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence",
    "consigne": "Transforme la mauvaise clé en métaphore filée."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "contrainte stylistique",
    "consigne": "Insère un paragraphe absurde sur un mot d’enfant."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "contrainte stylistique",
    "consigne": "Construit une scène où un miroir flou devient vital."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Un personnage entend parler de un billet oublié, mais il n’existe pas."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Fais durer un billet oublié bien trop longtemps."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "forme narrative",
    "consigne": "Tout le chapitre tourne autour de une cicatrice, sans jamais le nommer."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence",
    "consigne": "Un personnage entend parler de une silhouette derrière le rideau, mais il n’existe pas."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Commence un chapitre par : « Ce jour-là, un miroir flou »"
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Écris une scène où une boîte scellée est au centre de l’attention."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Fais durer une voix dans le mur bien trop longtemps."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "forme narrative",
    "consigne": "Fais durer une gifle qui n’arrive jamais bien trop longtemps."
  },
  {
    "categorie": "Fragment",
    "abstraction": "extrait isolé",
    "consigne": "Écris une scène où un mot d’enfant est au centre de l’attention."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Tout le chapitre tourne autour de un mot d’enfant, sans jamais le nommer."
  },
  {
    "categorie": "Fragment",
    "abstraction": "extrait isolé",
    "consigne": "Construit une scène où un appel inconnu devient vital."
  },
  {
    "categorie": "Fragment",
    "abstraction": "extrait isolé",
    "consigne": "Écris une scène où un secret en papier est au centre de l’attention."
  },
  {
    "categorie": "Lieu",
    "abstraction": "espace narratif",
    "consigne": "Fais durer une promesse tenue bien trop longtemps."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Construit une scène où un animal mort devient vital."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence",
    "consigne": "Construit une scène où une voix dans le mur devient vital."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Insère un paragraphe absurde sur une tache indélébile."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Un personnage entend parler de un animal mort, mais il n’existe pas."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Tout le chapitre tourne autour de une porte entrouverte, sans jamais le nommer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Un personnage entend parler de la mauvaise clé, mais il n’existe pas."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Fais croire que la mauvaise clé est réel, puis déjoue cette attente."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Fais intervenir une valise pleine de lettres au pire moment."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Crée une attente autour de une tache indélébile, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Objet",
    "abstraction": "élément symbolique",
    "consigne": "Crée une attente autour de une chanson oubliée, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Crée une attente autour de une valise pleine de lettres, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Perturbation",
    "abstraction": "rupture de rythme",
    "consigne": "Crée une attente autour de un mot interdit, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Tout le chapitre tourne autour de une promesse tenue, sans jamais le nommer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Crée une attente autour de un pull trop grand, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Fais durer une cicatrice bien trop longtemps."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Insère un paragraphe absurde sur une boîte scellée."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Écris toute une scène sans jamais utiliser le mot un appel inconnu, même s’il est partout."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "forme narrative",
    "consigne": "Tout le chapitre tourne autour de une silhouette derrière le rideau, sans jamais le nommer."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Insère un paragraphe absurde sur une silhouette derrière le rideau."
  },
  {
    "categorie": "Point de vue",
    "abstraction": "forme narrative",
    "consigne": "Tout le chapitre tourne autour de un stylo rouge, sans jamais le nommer."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Écris une scène où le prénom d’un ex est au centre de l’attention."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Commence un chapitre par : « Ce jour-là, un stylo rouge »"
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Écris toute une scène sans jamais utiliser le mot un mot interdit, même s’il est partout."
  },
  {
    "categorie": "Temporalité",
    "abstraction": "altération temporelle",
    "consigne": "Tout le chapitre tourne autour de une gifle qui n’arrive jamais, sans jamais le nommer."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Fais intervenir une chanson oubliée au pire moment."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Insère un paragraphe absurde sur un billet oublié."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Un personnage entend parler de un stylo rouge, mais il n’existe pas."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Écris une scène où un jumeau imaginaire est au centre de l’attention."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Écris une scène où une silhouette derrière le rideau est au centre de l’attention."
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Écris une scène où une tache indélébile est au centre de l’attention."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Fais intervenir un billet oublié au pire moment."
  },
  {
    "categorie": "Déclencheur",
    "abstraction": "événement",
    "consigne": "Crée une attente autour de une silhouette derrière le rideau, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Fais intervenir une silhouette derrière le rideau au pire moment."
  },
  {
    "categorie": "Répétition",
    "abstraction": "motif",
    "consigne": "Commence un chapitre par : « Ce jour-là, un secret en papier »"
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Crée une attente autour de un billet oublié, puis change de sujet au dernier moment."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "contrainte stylistique",
    "consigne": "Fais intervenir la mauvaise clé au pire moment."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Insère un paragraphe absurde sur un miroir flou."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Transforme un appel inconnu en métaphore filée."
  },
  {
    "categorie": "Silence",
    "abstraction": "absence",
    "consigne": "Un personnage entend parler de une porte entrouverte, mais il n’existe pas."
  },
  {
    "categorie": "Structure",
    "abstraction": "forme",
    "consigne": "Écris toute une scène sans jamais utiliser le mot une voix dans le mur, même s’il est partout."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Tout le chapitre tourne autour de la mauvaise clé, sans jamais le nommer."
  },
  {
    "categorie": "Contrainte",
    "abstraction": "contrainte stylistique",
    "consigne": "Fais intervenir une promesse tenue au pire moment."
  },
  {
    "categorie": "Personnage",
    "abstraction": "construction psychologique",
    "consigne": "Un personnage entend parler de le prénom d’un ex, mais il n’existe pas."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Fais intervenir un mot interdit au pire moment."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Écris une scène où un billet oublié est au centre de l’attention."
  },
  {
    "categorie": "Langage",
    "abstraction": "expérimentation linguistique",
    "consigne": "Fais intervenir un stylo rouge au pire moment."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Construit une scène où une promesse tenue devient vital."
  },
  {
    "categorie": "Incertitude",
    "abstraction": "situation ambiguë",
    "consigne": "Écris toute une scène sans jamais utiliser le mot une silhouette derrière le rideau, même s’il est partout."
  },
  {
    "categorie": "Souvenir",
    "abstraction": "passé rémanent",
    "consigne": "Insère un paragraphe absurde sur un stylo rouge."
  }
];
export default ideas;
