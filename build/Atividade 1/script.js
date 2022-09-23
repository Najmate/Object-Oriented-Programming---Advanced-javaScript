"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Patinete_1 = require("./Patinete");
var prompt = PromptSync();
var cor = prompt("Digite a cor do seu patinete: ");
var nRodS = Number(prompt("Diga o número de rodas do seu patinete: "));
var patinete = new Patinete_1.Patinete({
    cor: cor,
    nRodS: nRodS,
});
console.table("O seu patinete \u00E9 da cor ".concat(cor, ", tem ").concat(nRodS, " rodas"));
