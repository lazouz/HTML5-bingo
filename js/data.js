
var headerText = "Bingo";

var footerText = "<a href='https://github.com/qwertygc/HTML5-bingo/' target='_blank'>Code available on github</a> Bingo by <a href='http://grisebouille.net/le-bingo-du-troll/'>Gee</a> - licence CC-BY-SA";

var winText = "Winner";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var JSONBingo = {"squares": [
        {"square": "« ON PEUT PLUS RIEN DIRE » après une réponse argumentée, se plaint du simple fait qu'on lui réponde."},
        {"square": "ABANDON « J'arrête là, vous êtes borné » quand il n'a plus d'argument."},
        {"square": "MÉCHANCETÉ GRATUITE Sarcasme acerbe puis « oh ça va, j'plaisantais » quand vous réagissez."},
        {"square": "POINT ORTHO/GRAMMAIRE Après une réponse avec une faute : « avant de me parler, apprenez à écrire. »"},
        {"square": "MELTING POT « C'est bien un argument de bobo-gaucho-fémino-nazi-bien pensant. »"},
        {"square": "CHANGEMENT DE TON Commence agressif, puis répond avec de l'humour, puis sérieusement, etc."},
        {"square": "JOUE AU CON Fait semblant de ne pas comprendre quelque chose de pourtant très clair."},
        {"square": "POINT « VOUS INTERPRÉTEZ » « J'vous traite de connard et vous prenez ça pour une insulte, vous interprétez ! »"},
        {"square": "POINT « J'INTERPRÈTE » Vos mots ont 2 interprétations possibles : choisit celle qui vous fait passer pour un connard."},
        {"square": "C'EST PAS MIEUX QUE RIEN Affirme que vous auriez dû ne rien faire plutôt que faire quelque chose d'imparfait."},
        {"square": "ÉGOCENTRISME « MOI, j'ai la vérité. »"},
        {"square": "LIBERTÉ D'EXPRESSION Grands mots et ton larmoyant : « c'est ça la liberté d'expression ? »"},
        {"square": "POINT GODWIN « Votre comportement me rappelle les heures les plus sombres de notre Histoire. »"},
        {"square": "REVERSE GODWIN Invoque le point Godwin à votre encontre sans aucune justification."},
        {"square": "VIEUX DOSSIER  Et toujours sans rapport : « en 92, tu avais dit ça, alors ton avis, hein...»"},
        {"square": "POINT AGRESSIVITÉ Après une réponse un peu sèche : « ah bah voilà tout de suite l'agressivité ! »"},
        {"square": "À CÔTÉ Infléchit le sujet dans une autre direction quand il se sent à cours d'arguments."},
        {"square": "ATTAQUE Grossièreté standard ou attaque ad hominem."},
        {"square": "PARANOÏA « De toute façon j'ai bien compris que vous m'en vouliez personnellement. »"},
        {"square": "MOI J'M'EN FOUS Le débat ne l'intéresse soudain plus : « moi j'm'en fous, hein, j'dis ça, c'est pour vous. »"},
        {"square": "DÉTAIL Réponse à un détail sans intérêt juste pour le plaisir de continuer à troller."},
        {"square": "MIROIR ! « Je trolle ? Non mais je rêve ! C'est vous le troll ! »"},
        {"square": "ARGUMENT À LA TRAPPE Répond à 2 arguments sur 3 (en laissant de côté le plus épineux et pertinent)."},
        {"square": "SANS ISSUE Vous pesez le pour et le contre d'un argument, il détruit l'un comme l'autre."},    	
        {"square": "POINT SOUPÇON « Mouais, vous dites ça mais de toute façon je suis sûr qu'en vrai vous pensez... »"}
    ]
};
