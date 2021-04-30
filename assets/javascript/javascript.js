//constante valeur carte

var paquetBanque = [
    "AsPique", "AsTrefle", "AsCarreau", "AsCoeur", 
    "deuxPique", "deuxTrefle", "deuxCarreau", "deuxCoeur",
    "troisPique", "troisTrefle", "troisCarreau", "troisCoeur",
    "quattrePique", "quattreTrefle", "quattreCarreau", "quattreCoeur",
    "cinqPique", "cinqTrefle", "cinqCarreau", "cinqCoeur",
    "sixPique", "sixTrefle", "sixCarreau", "sixCoeur",
    "septPique", "septTrefle", "septCarreau", "septCoeur",
    "huitPique", "huitTrefle", "huitCarreau","huitCoeur",
    "neufPique", "neufTrefle", "neufCarreau", "neufCoeur",
    "dixPique", "dixTrefle", "dixCarreau", "dixCarreau",
    "valetPique", "valetTrefle", "valetCarreau", "valetCoeur",
    "damePique", "dameTrefle", "dameCarreau", "dameCoeur",
    "roiPique", "roiTrefle", "roiCarreau", "roiCoeur"
];
var score = 0;
var scJ = 0;
var scB = 0;
var pioche =[];
var piocheJ="";
var tabPiocheJ =[];
var piocheB="";
var tabPiocheB =[];
var count = 0;
var faitJ1 = false;
var faitJ2 = false;
var faitB1 = false;
var faitB2 = false;

//fonction lancer au chargement de la page

window.onload = melange();
window.onload = moyennePoint ();
window.onload = tirageDepart();

//fonction mélangeant les cartes
function melange(){
    let paquetNeuf=[
        "AsPique", "deuxPique", "troisPique", "quattrePique", "cinqPique", "sixPique", "septPique", "huitPique", "neufPique", "dixPique", "valetPique", "damePique", "roiPique",
        "AsTrefle", "deuxTrefle", "troisTrefle", "quattreTrefle", "cinqTrefle", "sixTrefle", "septTrefle", "huitTrefle", "neufTrefle", "dixTrefle", "valetTrefle", "dameTrefle", "roiTrefle",
        "AsCarreau", "deuxCarreau", "troisCarreau", "quattreCarreau", "cinqCarreau", "sixCarreau", "septCarreau", "huitCarreau", "neufCarreau", "dixCarreau", "valetCarreau", "dameCarreau", "roiCarreau",
        "AsCoeur", "deuxCoeur", "troisCoeur", "quattreCoeur", "cinqCoeur", "sixCoeur", "septCoeur", "huitCoeur", "neufCoeur", "dixCarreau", "valetCoeur", "dameCoeur", "roiCoeur"
    ];
    for (x=0; x<52; x++){
        min = Math.ceil(0);
        max = Math.floor(paquetNeuf.length);
        var numCarte = Math.floor(Math.random() * (max - min)) + min;
        var carte =paquetNeuf[numCarte];
        pioche.push(carte);
        paquetNeuf.splice(numCarte, 1);
    }
}

//fonction des point obtenu avec la carte tirer
function comptageDesPoints (carte){
    if((carte=="AsPique") || (carte=="AsTrefle") || (carte=="AsCarreau") || (carte=="AsCoeur")) {
        score = 1;
        return score;
    } else if((carte=="deuxPique") || (carte=="deuxTrefle") || (carte=="deuxCarreau") || (carte=="deuxCoeur")) {
        score = 2;
        return score;
    } else if ((carte=="troisPique") || (carte=="troisTrefle") || (carte=="troisCarreau") || (carte=="troisCoeur")) {
        score = 3;
        return score;
    } else if ((carte=="quattrePique") || (carte=="quattreTrefle") || (carte=="quattreCarreau") || (carte=="quattreCoeur")) {
        score = 4;
        return score;
    } else if ((carte=="cinqPique") || (carte=="cinqTrefle") || (carte=="cinqCarreau") || (carte=="cinqCoeur")) {
        score = 5;
        return score;
    } else if ((carte=="sixPique") || (carte=="sixTrefle") || (carte=="sixCarreau") || (carte=="sixCoeur")) {
        score = 6;
        return score;
        } else if ((carte=="septPique") || (carte=="septTrefle") || (carte=="septCarreau") || (carte=="septCoeur")) {
        score = 7;""
        return score;
    } else if ((carte=="huitPique") || (carte=="huitTrefle") || (carte=="huitCarreau") || (carte=="huitCoeur")) {
        score = 8;
        return score;
    } else if ((carte=="neufPique") || (carte=="neufTrefle") || (carte=="neufCarreau") || (carte=="neufCoeur")) {
        score = 9;
        return score;
    } else if ((carte=="dixPique") || (carte=="valetPique") || (carte=="damePique") || (carte=="roiPique") ||
    (carte=="dixTrefle") || (carte=="valetTrefle") || (carte=="dameTrefle") || (carte=="roiTrefle") ||
    (carte=="dixCarreau") || (carte=="valetCarreau") || (carte=="dameCarreau") || (carte=="roiCarreau") ||
    (carte=="dixCoeur") || (carte=="valetCoeur") || (carte=="dameCoeur") || (carte=="roiCoeur")) {
        score = 10;
        return score;
    } else {
        console.log("ERROR CARD "+carte);
    };
}

//fonction de comptage des cartes pour la banque
function comptagePtCartesB(carte){
    indexCarte = paquetBanque.indexOf(carte);
    paquetBanque.splice(indexCarte, 1);
}

//*/Modif
// Simulation de l'IA de la banque
    // Fonction de calcul de carte étant a la position de la moyenne des cartes et
        //Fonction de calcul des point du reste des cartes    
    function moyennePoint (){
        verifSabot();

        nbCartePiocheB = paquetBanque.length;
        var valMoyenneTotaleBasse = 0;
        var valMoyenneTotaleMillieu = 0;
        var valMoyenneTotaleHaute = 0;
        let valTotalPt = 0;
        let valMedianne = 0;
        let y = 0;

        if (paquetBanque.length>5){
            for (x=0; x<nbCartePiocheB; x++){
                temp = comptageDesPoints (paquetBanque[x]);
                valTotalPt += temp;
            }
            moyenneGeneral = valTotalPt/nbCartePiocheB;
            valMedianne =valTotalPt/5;

            do{
                temp = comptageDesPoints (paquetBanque[y]);
                valMoyenneTotaleBasse += temp;
                y++;
            }while(valMoyenneTotaleBasse<(valMedianne*2));
            nbCarteBas = y-1;
            moyenneBas = valMoyenneTotaleBasse/nbCarteBas;
            valMoyenneTotaleMillieu += valMoyenneTotaleBasse;

            do{
                temp = comptageDesPoints (paquetBanque[y]);
                valMoyenneTotaleMillieu += temp;
                y++;
            }while(valMoyenneTotaleMillieu<(valMedianne*3));
            valMoyenneTotaleMillieu = valMoyenneTotaleMillieu - valMoyenneTotaleBasse
            nbCarteMillieu = y-nbCarteBas;
            moyenneMillieu = valMoyenneTotaleMillieu/nbCarteMillieu;

            do{
                temp = comptageDesPoints (paquetBanque[y]);
                valMoyenneTotaleHaute += temp;
                y++;
            }while(y<paquetBanque.length);
            nbCarteHaut = y - (nbCarteMillieu + nbCarteBas);
            moyenneHaut = valMoyenneTotaleHaute/nbCarteHaut;
        }else{
            for (x=0; x<nbCartePiocheB; x++){
                temp = comptageDesPoints (paquetBanque[x]);
                valTotalPt += temp;
            }
            moyenneGeneral = valTotalPt/nbCartePiocheB;
        }
    }

            //fonction calcul des probabilités
    function proba(nbCartePart, nbCarteTotalRestant){
        probaTirage = (Math.round(((nbCartePart * 100) / nbCarteTotalRestant)*100))/100;
        return probaTirage;
    }

    var probaBas = proba(nbCarteBas, nbCartePiocheB);
    var probaMillieu = proba(nbCarteMillieu, nbCartePiocheB);
    var probaHaut = proba(nbCarteHaut, nbCartePiocheB);

            //fonction tirage un score + moyenne vaut 18 et les 2 autres valent (18 ou 15) pour une partie valant 2/5eme des points
    function TirageProb2infH(moy1,moy2,moy3,resulScore,probaVerif,numRand){
        let rand =Math.round(Math.random()*10);
        if (((scB+moy1)<resulScore) && ((scB+moy2)<resulScore) && ((scB+moy3) > 18) && probaVerif>28){
            count++;
            tirageB();
            return 0;
        }else if (((scB+moy1)<resulScore) && ((scB+moy2)<resulScore) && ((scB+moy3) > 18) && probaVerif>=20){
            if (rand>=numRand){
                count++;
                tirageB();
                return 0;
            }
            else{
                count++;
                return 1;
            }
        }else if (((scB+moy1)<resulScore) && ((scB+moy2)<resulScore) && ((scB+moy3) > 18) && probaVerif<20){
            count++;
            return 1;
        }
    }

            //fonction tirage un score + moyenne vaut 18 et les 2 autres valent (18 ou 15) pour une partie valant 1/5eme des points
    function TirageProb2infB(moy1,moy2,moy3,resulScore,probaVerif,numRand){
        let rand =Math.round(Math.random()*10);
        if (((scB+moy1)<resulScore) && ((scB+moy2)<resulScore) && ((scB+moy3) > 18) && probaVerif>14){
            count++;
            tirageB();
            return 0;
        }else if (((scB+moy1)<resulScore) && ((scB+moy2)<resulScore) && ((scB+moy3) > 18) && probaVerif>=10){
            if (rand>=numRand){
                count++;
                tirageB();
                return 0;
            }
            else{
                count++;
                return 1;
            }
        }else if (((scB+moy1)<resulScore) && ((scB+moy2)<resulScore) && ((scB+moy3) > 18) && probaVerif<10){
            count++;
            return 1;
        }
    }

            //fonction tirage avec un score+moyenne inférieur au resultat a comparer (18 ou 15) pour une part des pourcentages haut
    function TirageProb2supH(moy1,moy2,moy3,resulScore){
        let rand =Math.round(Math.random()*10);
        if (((scB+moy1) > resulScore) && ((scB+moy2) > resulScore) && ((scB+moy3)<18)){
            if (rand>8){
                tirageB();
                count++;
                return 0;
            }
            else{
                count++;
                return 1;
            }
        }
    }

            //fonction de réaction de l'IA en fonction des probabilités
    function IAPioche(){
        do{
    // si score banque >21
            if (scB>21){
                return;
            }
    // si score banque = 21
            else if (scB==21){
                return;
            }
    // si score banque > 18
            else if (scB>18){
                return;
            }
    // si score joueur = 18 = 19 ou = 20
            else if (scJ==18 || scJ==19 || scJ==20){
                tirageB();
                return;
            }
    // un score + moyenne >  18  et les 2 autres < 15
        // si score + moyenne haute > 18
            TirageProb2infH(moyenneBas, moyenneMillieu, moyenneHaut, 15, probaHaut, 5);
        // si score + moyenne Bas > 18
            TirageProb2infH(moyenneMillieu, moyenneHaut, moyenneBas, 15, probaBas, 5);
        // si score + moyenne Millieu > 18
            TirageProb2infB(moyenneBas, moyenneHaut, moyenneMillieu, 15, probaMillieu, 5);

    // un score + moyenne >  18  et les 2 autres > 15 et < 18
        // si score + moyenne haute > 18
            TirageProb2infH(moyenneBas, moyenneMillieu, moyenneHaut, 18, probaHaut, 7);
        // si score + moyenne Bas > 18
            TirageProb2infH(moyenneMillieu, moyenneHaut, moyenneBas, 18,  probaBas, 7);
        // si score + moyenne Millieu > 18
            TirageProb2infB(moyenneBas, moyenneHaut, moyenneMillieu, 18, probaMillieu, 7);

    // si score + moyenne < 18 et les deux autres > 18
        // si score + moyenne Haute < 18 
            TirageProb2supH(moyenneBas, moyenneMillieu, moyenneHaut, 18);
        // si score + moyenne Bas < 18 
            TirageProb2supH(moyenneMillieu, moyenneHaut, moyenneBas, 18);
    // je ne l'ai pas fait pour le millieu car les proba de le tirer ne sont pas assez importante

    // si score + moyenne < 18 et les deux autres > 21
            //la banque ne tire pas

    // Si tous les scores + moyenne <  21
        if (((scB+moyenneBas)<21) && ((scB+moyenneMillieu)<21) && ((scB+moyenneHaut)<21)){
            tirageB();
            count++;
        }
    // Si tous les scores <  16
        else if ((scB+moyenneGeneral)<18){
            tirageB();
            count++;
        }
        else{
            count++;
            return;
        }
        }while(scB<16);
    // Si tous les scores <  15
        if (scB<15 && count<3){
            IAPioche();
        }
    }
//fin de L'IA

// Fonction  de vérification si il y a deja un as de pioché pour la banque ou le joueur
function verifAs(tab){
    for (i=0; i<2; i++){
        if ((tab[i]=="AsPique") || (tab[i]=="AsTrefle") || (tab[i]=="AsCarreau") || (tab[i]=="AsCoeur")){
            return true;
        }
    };
}

// Fonction valeur de l'As
    // Pour le joueur
function valAsJ(card, tab){
    let carteAs = ((card=="AsPique") || (card=="AsTrefle") || (card=="AsCarreau") || (card=="AsCoeur"));
    let scTemp = 0;
    if(carteAs && (!verifAs(tab) || verifAs(tab)==undefined) && tab.length<2 && faitJ1==false && faitJ2==false){
        scTemp = 10;
        faitJ1 = true;
        return scTemp;
    }
    else if (carteAs && verifAs(tab) && tab.length<2 && faitJ1==true && faitJ2==false){
        scTemp = 0;
        faitJ2 = true;
        return scTemp;        
    }
    else if (verifAs(tab) && faitJ1==true && tab.length>=2 && faitJ2==false){
        scTemp = -10;
        faitJ2 = true;
        return scTemp;        
    }
    else{
        return scTemp;   
    }
}

    // Pour la banque
function valAsB(card, tab){
    let carteAs = ((card=="AsPique") || (card=="AsTrefle") || (card=="AsCarreau") || (card=="AsCoeur"));
    let scTemp = 0;
    if(carteAs && (!verifAs(tab) || verifAs(tab)==undefined) && tab.length<2 && faitB1==false && faitB2==false){
        scTemp = 10;
        faitB1 = true;
        return scTemp;
    }
    else if (carteAs && verifAs(tab) && tab.length<2 && faitB1==true && faitB2==false){
        scTemp = 0;
        faitB2 = true;
        return scTemp;        
    }
    else if (verifAs(tab) && faitB1==true && tab.length>=2 && faitB2==false){
        scTemp = -10;
        faitB2 = true;
        return scTemp;        
    }
    else{
        return scTemp;   
    }
}

var btnStart = document.getElementById("js___btnstart");
var affMiseGauche = document.getElementById("aff-mise-gauche");
var affMiseCentre = document.getElementById("affiMiseCenter");
var boxBtnStart = document.getElementById("js___box-btnstart");
var containerImgAll = document.getElementsByClassName("container-img-all");
var btnStay = document.getElementsByClassName("btn-player__stay")[0];

btnStay.addEventListener("click",tourBanque);
btnStart.addEventListener("click",affichageMise);

function affichageMise (){
            affMiseGauche.classList.toggle("js___aff-mise-gauche");
        affMiseGauche.classList.toggle("js___aff-mise-gauche-masquer");
        affMiseCentre.classList.toggle("js___block-central__Mise-masquer");
        affMiseCentre.classList.toggle("js___block-central__Mise");
        boxBtnStart.classList.toggle("js__block-central__start-game");
        boxBtnStart.classList.toggle("js__block-central__start-game-masquer");
        for (i=0; i<containerImgAll.length;i++){
            containerImgAll[i].classList.toggle("btn-all-visible");
    }
}

// Tirage de départ
function tirageDepart() {
    verifSabot();
    for (y=0; y<2; y++){
        verifSabot();
        min = Math.ceil(0);
        max = Math.floor(pioche.length-1);
        var numCartePiocher = Math.floor(Math.random() * (max - min)) + min;
        var carte =pioche[numCartePiocher];
        scJ = scJ+valAsJ(carte, tabPiocheJ);
        tabPiocheJ.push (carte);
        comptagePtCartesB(carte);
        piocheJ = piocheJ +" " + carte;
        scJ = scJ+comptageDesPoints(carte);
        pioche.splice(numCartePiocher, 1);
        verifSabot();
        moyennePoint ();
        appearanceCardPlayer(carte);
    }

    verifSabot();
    min = Math.ceil(0);
    max = Math.floor(pioche.length-1);
    var numCartePiocher = Math.floor(Math.random() * (max - min)) + min;
    var carte = pioche[numCartePiocher];
    scB = scB+valAsB(carte, tabPiocheB);
    tabPiocheB.push(carte);
    comptagePtCartesB(carte);
    piocheB = piocheB +" " +  carte;
    scB = scB+comptageDesPoints(carte);
    pioche.splice(numCartePiocher, 1);
    verifSabot();
    moyennePoint ();
    appearanceCardBank(carte);
}

var btnHit = document.getElementsByClassName("btn-player__hit")[0];

btnHit.addEventListener('click',tirageJ);

//tirage du joueur
function tirageJ() {
    verifSabot();
    min = Math.ceil(0);
    max = Math.floor(pioche.length-1);
    var numCartePiocher = Math.floor(Math.random() * (max - min)) + min;
    var carte =pioche[numCartePiocher];
    scB = scB+valAsB(carte, tabPiocheB);
    tabPiocheB.push (carte);
    comptagePtCartesB(carte);
    piocheB = piocheB +" " +  carte;
    scB = scB+comptageDesPoints(carte);
    pioche.splice(numCartePiocher, 1);
    verifSabot();
    moyennePoint ();
    appearanceCardPlayer(carte);
}

//tirage de la banque
function tirageB() {
    verifSabot();
    min = Math.ceil(0);
    max = Math.floor(pioche.length-1);
    var numCartePiocher = Math.floor(Math.random() * (max - min)) + min;
    var carte =pioche[numCartePiocher];
    scB = scB+valAsB(carte, tabPiocheB);
    tabPiocheB.push (carte);
    comptagePtCartesB(carte);
    piocheB = piocheB +" " +  carte;
    scB = scB+comptageDesPoints(carte);
    pioche.splice(numCartePiocher, 1);
    verifSabot();
    moyennePoint ();
    appearanceCardBank(carte);
    IAPioche();
}

//fonction vérifier qu'il reste des cartes dans le sabot
function verifSabot(){
    if (pioche.length == 0){
        melange();
        paquetBanque = [
            "AsPique", "AsTrefle", "AsCarreau", "AsCoeur", 
            "deuxPique", "deuxTrefle", "deuxCarreau", "deuxCoeur",
            "troisPique", "troisTrefle", "troisCarreau", "troisCoeur",
            "quattrePique", "quattreTrefle", "quattreCarreau", "quattreCoeur",
            "cinqPique", "cinqTrefle", "cinqCarreau", "cinqCoeur",
            "sixPique", "sixTrefle", "sixCarreau", "sixCoeur",
            "septPique", "septTrefle", "septCarreau", "septCoeur",
            "huitPique", "huitTrefle", "huitCarreau","huitCoeur",
            "neufPique", "neufTrefle", "neufCarreau", "neufCoeur",
            "dixPique", "dixTrefle", "dixCarreau", "dixCarreau",
            "valetPique", "valetTrefle", "valetCarreau", "valetCoeur",
            "damePique", "dameTrefle", "dameCarreau", "dameCoeur",
            "roiPique", "roiTrefle", "roiCarreau", "roiCoeur"
        ]
        apparenceSabot();
        setTimeout(apparenceSabot, 1000);
    }
}

//*/modif
//fonction pour faire apparaitre ou disparaitre le dos de cartes dans le sabot
var sabot = document.getElementById("sabot");
function apparenceSabot(){
        sabot.classList.toggle("block-right__sabot");
        sabot.classList.toggle("block-right__sabot-vide");
}

//*Déclaration des variables
var accountPlayer = 1000;
var mise = 0;

//*Variable test pour fonction WIN
var winPlayer = false;
var winBank = false;
var exAequo = false;

//*Véfif' de l'appel de la function doubler
var hasBeenCalled = false;

//*Déclaration constante des jetons
const jeton1 = 1;
const jeton5 = 5;
const jeton10 = 10;
const jeton50 = 50;
const jeton100 = 100;

//*Déclaration des élements du DOM
//Jeton 1
    var addJ1 = document.getElementById('addJeton1');
    var subJ1 = document.getElementById('subJeton1');
//Jeton 5
    var addJ5 = document.getElementById('addJeton5');
    var subJ5 = document.getElementById('subJeton5');
//Jeton 10
    var addJ10 = document.getElementById('addJeton10');
    var subJ10 = document.getElementById('subJeton10');
//Jeton 50
    var addJ50 = document.getElementById('addJeton50');
    var subJ50 = document.getElementById('subJeton50');
//Jeton 100
    var addJ100 = document.getElementById('addJeton100');
    var subJ100 = document.getElementById('subJeton100');

//*Affichage des valeurs
var account = document.getElementById('accPlayerStartGame');
var start = document.getElementsByClassName('startGame')[0];
var start1 = document.getElementsByClassName('startGame')[1];

function compteJ(){
    //Mise à zero des valeurs mise et compte
        updateAccount = accountPlayer;
        account.innerHTML = accountPlayer;
        start.innerHTML = 0;
        start1.innerHTML = 0;

    //*Mise jeton 1
        subJeton1.addEventListener('click',() => moins(jeton1));
        addJeton1.addEventListener('click',() => plus(jeton1));
    //*Mise jeton 5
        subJeton5.addEventListener('click',() => moins(jeton5));
        addJeton5.addEventListener('click',() => plus(jeton5));
    //*Mise jeton 10
        subJeton10.addEventListener('click',() => moins(jeton10));
        addJeton10.addEventListener('click',() => plus(jeton10));
    //*Mise jeton 50
        subJeton50.addEventListener('click',() => moins(jeton50));
        addJeton50.addEventListener('click',() => plus(jeton50));
    //*Mise jeton 100
        subJeton100.addEventListener('click',() => moins(jeton100));
        addJeton100.addEventListener('click',() => plus(jeton100));

}
//*? Fonction lancement mise au chargement de la page
window.onload = compteJ();

//*! Fonction ajouter et soustraire jeton à cagnotte

function plus(jeton){
    if(mise < accountPlayer){
        //Vérification qu'on ne peut pas ajouter plus que account player (1000); 
        if(mise + jeton <= accountPlayer){
            mise = mise + jeton;
            updateAccount = accountPlayer - mise;
            account.innerHTML = updateAccount;
            start.innerHTML = mise;
            start1.innerHTML = mise;
        } else {
            console.log("Pas assez sur votre compte, misez moins ! ")
        }
    } else{
        console.log("Vérifiez votre solde de compte");
    }

    return mise;
}

function moins(jeton){
    if(mise >= 0){
        //Vérification qu'on ne peut pas enlever plus que la mise de départ, pas de valeur négatif; 
        if(mise-jeton >= 0){
            mise = mise - jeton;
            updateAccount = accountPlayer - mise;
            account.innerHTML = updateAccount;
            start.innerHTML = mise;
            start1.innerHTML = mise;
        } else {
            console.log("Vous ne pouvez pas enlever plus que ce que vous avez miser !");
        }
    }else{
        console.log("Vérifiez votre solde de compte");
    }
    return mise;
}

//* Retour des gains au joueurs

var scorePlayer = 0;
var scoreBanque = 0;
var scorePlayerAffichage= document.getElementById("score-player");
var scoreBanqueAffichage= document.getElementById("score-banque");

//Fonction victoire
function win(){
    if (scJ==scB){
        exAequo = true;
    }
    else if((scJ==21) || scB>21 || (scJ<21 && scJ>scB)){
        winPlayer = true;
        scorePlayer++;
    }
    else if((scB==21) || scJ>21 || (scB<21 && scB>scJ)){
        winBank = true;
        scoreBanque++;
    }
}

//*Bouton doubler

var  stayBtn = document.getElementsByClassName('btn-player__double pointer');

stayBtn[0].addEventListener('click', doubleMise);

function doubleMise(){
    miseValue = mise;
    if(hasBeenCalled == false){
        //Soustrait la mise du compte du joueur
        updateAccount = updateAccount - miseValue;
        //Multiplie la mise du joueur par 2
        miseValue = mise * 2;
        //Affichage du nouveau compte et des nouvelles mises
        start.innerHTML = miseValue;
        start1.innerHTML = miseValue;
        account.innerHTML = updateAccount;
        hasBeenCalled = true;
    }else{
        return miseValue;
    }
}

function retourGain(){
    if(hasBeenCalled == true){
        miseReturn =  miseValue;
    } else {
        miseReturn = plus();
    }
    if(winPlayer == true){
        updateAccount += miseReturn * 2;
        account.innerHTML = updateAccount;
    } else if ( exAequo == true){
        updateAccount += miseReturn;
        account.innerHTML = updateAccount;
    }else if (winBank== true){
        updateAccount - miseReturn;
        account.innerHTML = updateAccount;
    }
    accountPlayer = updateAccount;
}

function tourBanque(){
    if(mise != 0){
        tirageB();
        win();
        retourGain()
        scorePlayerAffichage.innerHTML = scorePlayer;
        scoreBanqueAffichage.innerHTML = scoreBanque;
        scB = 0;
        scJ = 0;
        piocheB = "";
        piocheJ = "";
        tabPiocheB = [];
        tabPiocheJ = [];
        mise = 0;
        start.innerHTML = mise;
        affichageMise ();
        deleteCard();
        tirageDepart();
    }
}

function appearanceCardBank(carte) {
    let container = document.getElementsByClassName("block-central__bank-card")[0];
    let divBankCard = document.createElement("div");
    divBankCard.setAttribute("class", "card")
    divBankCard.style.backgroundImage = "url('assets/img/carte/" + carte + ".png')";
    divBankCard.style.backgroundSize = "100%";
    divBankCard.style.backgroundRepeat = "no-repeat";
    container.appendChild(divBankCard);
}

function appearanceCardPlayer(carte) {
    let container = document.getElementsByClassName("block-central__player-card")[0];
    let divPlayerCard = document.createElement("div");
    divPlayerCard.setAttribute("class", "card")
    divPlayerCard.style.backgroundImage = "url('assets/img/carte/" + carte + ".png')";
    divPlayerCard.style.backgroundSize = "100%";
    divPlayerCard.style.backgroundRepeat = "no-repeat";
    container.appendChild(divPlayerCard);
}

function deleteCard(){
    let containerJ = document.getElementsByClassName("block-central__player-card")[0];
    let containerB = document.getElementsByClassName("block-central__bank-card")[0];
    while (containerJ.firstChild) {
        containerJ.removeChild(containerJ.firstChild);
    }
    while (containerB.firstChild) {
        containerB.removeChild(containerB.firstChild);
    }
}