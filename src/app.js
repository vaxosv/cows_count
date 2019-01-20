// import { Zroxa } from "./animal";
var Zroxa = /** @class */ (function () {
    function Zroxa() {
        this.asaki = 0;
        Zroxa.odenoba += 1;
    }
    Zroxa.prototype.drois_atvla = function () {
        this.asaki += 1;
    };
    Zroxa.prototype.shvilis_gachena = function () {
        if (this.asaki > 4) {
            boseli.push(new Zroxa());
        }
    };
    Zroxa.odenoba = 0;
    return Zroxa;
}());
var boseli = [new Zroxa()];
for (var i = 1; i <= 40; i++) {
    //   var bochola = new Zroxa();
    boseli.forEach(function (a) {
        a.drois_atvla();
        a.shvilis_gachena();
    });
}
console.log(Zroxa.odenoba);
document.getElementById("answer").textContent = String(Zroxa.odenoba);
