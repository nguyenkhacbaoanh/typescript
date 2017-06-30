"use strict";
var getBonus = function (value) {
    if (value === void 0) { value = 10; }
    console.log(value);
};
getBonus(); //si on ne declare que "value" dans la parenthèse,
// d'ici va être erreur (souligne rouge)
//la parenthèse dans laquelle qu'on met les paramètres de fonction
//on declare plusieur paramètres, les paramètres suivants peuvent
// utiliser la valeur de paramètre pécédente sauf l'inverse
// car il n'a pas été supporté "hoisting", il faut déclarer pour utiliser
var salary_month_gross = function (day, smic, hour_day, bonus) {
    if (day === void 0) { day = 23; }
    if (smic === void 0) { smic = 9.76; }
    if (hour_day === void 0) { hour_day = 8; }
    if (bonus === void 0) { bonus = 0.3; }
    var salary_day = smic * hour_day;
    var result = day * salary_day * bonus;
    console.log(arguments.length);
    console.log(result);
};
salary_month_gross(undefined, 10, 7);
//# sourceMappingURL=defautparametrefunc.js.map