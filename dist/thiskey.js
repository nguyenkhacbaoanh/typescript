"use strict";
//caracterique de clé this in typescript
var employee = {
    id: 1,
    greet: function () {
        var self = this; // parce que "this" est 
        //dans le contexte de fonction de "greet", 
        setTimeout(function () {
            console.log(self.id); // si on met "this.id", c'est erreur
            // function de setTimeout n'est pas dans la même scope
            // de function de greet
        }, 1000);
    }
};
employee.greet();
//deuxeme solution for this dans le cas au-dessus:
//on utilise "arrow function"
var employee2 = {
    id: 2,
    greet: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.id); }, 1000);
    }
};
employee2.greet();
//# sourceMappingURL=thiskey.js.map