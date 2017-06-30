"use strict";
// let displayColor = function () {
//     for (let color in arguments) {
//         console.log(arguments[color]);
//     }
// }
var displayColor = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log(colors);
};
//Dans typescripts langage, quand on le utilise la fonction qui n'as pas des parametres défault
//il sera disparait des erreurs(mais js fonctionne bien)
// enfin d'éviter ces erreurs, on utilise "rest parameter" en déclarant trois point "..." avant une paramètre
// l'objectif d'utilisation "rest parameter" est de travailler avec "array" paramètre de la fonction,
//ne pas de travailler avec des paramètres séparées
displayColor("Red");
displayColor("Red", "Green");
displayColor("Red", "Green", "Blue");
//# sourceMappingURL=restparameter.js.map