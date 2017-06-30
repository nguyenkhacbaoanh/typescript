let getBonus = function (value = 10): void {
    console.log(value);
}
getBonus(); //si on ne declare que "value" dans la parenthèse,
// d'ici va être erreur (souligne rouge)

//la parenthèse dans laquelle qu'on met les paramètres de fonction
//on declare plusieur paramètres, les paramètres suivants peuvent
// utiliser la valeur de paramètre pécédente sauf l'inverse
// car il n'a pas été supporté "hoisting", il faut déclarer pour utiliser
let salary_month_gross = function (day = 23, smic = 9.76, hour_day = 8, bonus = 0.3) {
    let salary_day = smic * hour_day
    let result = day * salary_day * bonus
    console.log(arguments.length)
    console.log(result)
}
salary_month_gross(undefined, 10, 7, )