// Vous vous souvenez de **Motus** ? Aujourd'hui on va le coder ! Petit rappel des règles :

// Un mot mystère (ici de 5 lettres) est proposé, on ne connaît que la première lettre
// Le joueur a six tentatives pour deviner le mot mystère, et pour chaque tentative :
    //  Les lettres qui sont à la bonne place sont en rouge
//     - Les lettres qui sont à la mauvaise place sont en jaune
//     - Les lettres qui n'existent pas dans le mot mystère restent neutres

// ⇒ Si le joueur propose un mot qui n'a pas le bon nombre de lettres (ici 5) alors il a perdu

// ⇒ Si le joueur propose "BOTTE" et que le mot mystère est "BRUTE" attention : un des "T" proposés doit rester neutre !


// un mot de 5 lettres
// on affiche que la premiere lettre du mot / indexOf
// le joueur a six tentatives / prompt.get
// les lettres à la bonne place en rouge/ if? regex color
// les lettres à la mauvaise place en jaune/ else regex color
// les mauvaises lettres neutres/ else if regex color

// renvoyer le mot mystere en affichant la première lettre indexOf

// parcourir les lettres du mot envoyé par le joueur pour voir s il y a une lettre qui correspond /boucle for
// si on trouve une lettre à la bonne place on la met en rouge / if regex color
// si on trouve une lettre à la mauvaise place on la met en jaune / else regex color
// si ya une mauvaise lettre on la laisse en neutre / else if regex color

// ajouter cette lettre dans le mot que l'on va renvoyer au joueur

// si le nombre des lettres n'est pas bon alors il a perdu if max lenght
// le joueur n'a que six tentatives
// si le mot est bon renvoyer un message de félicitations

var prompt = require("prompt");

var mysteryMot = Math.floor(Math.random() * (5 - 1 + 1) + 1);

prompt.start();