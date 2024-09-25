export class Programme {
    etapes: Etape[] = [];
    entrees: Entree[] = [];
    sorties: Sortie[] = [];
    transitions: Transition[] = [];
    param: Param = new Param;
}

export class Etape {
    message: string = "Etape n°"
    actions: Action[] = [];
}

export class Action {
    action: number[] = [];
    actionName:string = "";
    actionNameTitre:string = "";
    actionID:number = 0;

    constructor(tab?: number[]){
        this.action = tab || [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.actionName = this.getActionName(0);
        this.actionNameTitre = this.getActionName(1);
        this.actionID = this.action[1];
    }

    /**
     * Récupère le label avec le nom de l'action pour le bouton et son écran de paramètrage
     * @param n 1- label du bouton, 2- label de l'écran
     * @returns 
     */
    getActionName(n:number): string {
        let retour: string[] = [];
        switch (this.action[1]) {
            case 0:
                retour.push("Aucune");
                retour.push("Choisir une fonction:")
                break;
            case 1:
                retour.push("Vissage");
                retour.push("Vissage");
                break;
            case 2:
                retour.push("Soudure US");
                retour.push("Soudure US");
                break;
            case 3:
                retour.push("Consommation");
                retour.push("Messure Consommation");
                break;
            case 4:
                retour.push("Caméra");
                retour.push("Contrôle caméra");
                break;
            case 5:
                retour.push("RFID");
                retour.push("Type d'accès RFID");
                break;
            case 6:
                retour.push("Sorties");
                retour.push("Action");
                break;
            case 7:
                retour.push("Traçabilité PCB");
                retour.push("Traçabilité du PCB");
                break;
            case 8:
                retour.push("Impression gauche");
                retour.push("Impression gauche");
                break;
            case 9:
                retour.push("Impression droite");
                retour.push("Impression droite");
                break;
            case 10:
                retour.push("Scan DATAMATRIX");
                retour.push("Scan DATAMATRIX");
                break;
            case 11:
                retour.push("Save PCB .TXT");
                retour.push("Save PCB .TXT");
                break;
            default:
                retour.push("Inconue");
                retour.push("Fonction Inconnue");
                break;
        }
        return retour[n];
    }
}

export class Entree {
    entree:string="";
    label:string="";
}

export class Sortie {
    sortie:string="";
    label:string="";
}

export class Transition {
    transition:number[] = [];

    constructor(tab?: number[]){
        this.transition = tab || [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    }
}

export class Param {
    nEtape:number=0;
    time:number=0;
    rfid:number=0;
    name:string="Nouveau Programme";
    code:number=0;
    ref:string="XXXXXXXX";
}