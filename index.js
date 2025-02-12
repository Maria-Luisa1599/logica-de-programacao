let nomeHeroi = "CODEGIRL";
let nivel;

//"Se XP for menor do que 1000 = Ferro." Se o herói tiver 1000 de xp, ele não terá nenhum nível.

for (let xp = 500; xp <= 10500; xp += 1000) {
    if(xp < 1000){ 
        nivel = "FERRO";

    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "BRONZE";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "PRATA";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "OURO";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "PLATINA";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "ASCENDENTE";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "IMORTAL";
    } else if (xp >= 10001) {
        nivel = "RADIANTE";
    }
 
    console.log("A Heroína de nome " + nomeHeroi + " matou um boss e subiu para o nível de " + nivel + " com o total de XP de " + xp)
}