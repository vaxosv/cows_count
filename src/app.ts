// import { Zroxa } from "./animal";

class Zroxa {
    static odenoba: number = 0;
    private asaki: number = 0;
    constructor() {
        Zroxa.odenoba += 1;
    }

    drois_atvla() {
        this.asaki += 1;
    }

    shvilis_gachena(){
        if (this.asaki > 4) {
            boseli.push(new Zroxa())
        }
    }
}

let boseli = [new Zroxa()];

for (let i = 1; i <= 40; i++) {
    boseli.forEach(a => {
    a.drois_atvla();
    a.shvilis_gachena()
  });
}

console.log(Zroxa.odenoba)
document.getElementById("answer").textContent = String(Zroxa.odenoba);
