import { Convertisseur } from "./convertisseur.model";

/**
 * Model Vissage
 */
export class Vissage extends Convertisseur {
    bt: number[] = this.getBytesToBin(3, 6);
    angle1Val: number = this.getNumber(6, 10);
    angle1Tol: number = this.getNumber(8, 10);
    angle2Val: number = this.getNumber(10, 10);
    angle2Tol: number = this.getNumber(12, 10);
    axeVal: number = this.getNumber(14, 10);
    axeTol: number = this.getNumber(16, 10);
    prog: number = this.param[5];

    setValue(): number[] {
        this.setNumber(6, this.angle1Val, 10);
        this.setNumber(8, this.angle1Tol, 10);
        this.setNumber(10, this.angle2Val, 10);
        this.setNumber(12, this.angle2Tol, 10);
        this.setNumber(14, this.axeVal, 10);
        this.setNumber(16, this.axeTol, 10);
        this.param[5] = this.prog;
        let somme = 0;
        for (let i = 0; i < this.bt.length; i++) {
            somme += this.bt[i];
        }
        this.param[3] = somme;
        return this.param
    }
}

/**
 * Model Consommation
 */
export class Conso extends Convertisseur {
    consoMini: number = this.getNumber(4, 1);
    consoMaxi: number = this.getNumber(6, 1);
    dureeMesure: number = this.getNumber(8, 10);
    fonction: number = this.param[3]

    setValue(): number[] {
        this.param[3] = this.fonction;
        this.setNumber(4, this.consoMini, 1);
        this.setNumber(6, this.consoMaxi, 1);
        this.setNumber(8, this.dureeMesure, 10);
        return this.param;
    }
}

/**
 * Model Caméra
 */
export class Camera extends Convertisseur {
    camera: number = this.param[3];
    programme: number = this.param[5];

    setValue(): number[] {
        this.param[3] = this.camera;
        this.param[5] = this.programme;
        return this.param;
    }
}

/**
 * Model RFID
 */
export class Rfid extends Convertisseur {
    acces: number = this.param[3];
    tete: number = this.param[21];
    stAv: string = this.getString(4, 3);
    stAc: string = this.getString(8, 3);
    produit: string = this.getString(12, 8);

    setValue(): number[] {
        this.param[3] = this.acces;
        this.param[21] = this.tete;
        this.setString(4, this.stAv, 3);
        this.setString(8, this.stAc, 3);
        this.setString(12, this.produit, 7);
        return this.param
    }
}

/**
 * Model Traçabilité PCB
 */
export class TracabilitePCB extends Convertisseur {
    code: string = this.getString(2, 8);
    num: number = this.param[11];
    revision: string = this.getString(12, 4);
    tempo: number = this.getNumber(20, 1000);

    setValue(): number[] {
        this.setString(2, this.code, 8);
        this.param[11] = this.num;
        this.setString(12, this.revision, 4);
        this.setNumber(20, this.tempo, 1000);
        return this.param;
    }
}

/**
 * Model Impression
 */
export class Impression extends Convertisseur {
    ref: string = this.getString(2, 8);

    setValue(): number[] {
       
        this.setString(2, this.ref, 8)
        console.log(this.param)
        return this.param;
    }
}

/**
 * Model Sortie
 */
export class ActionSortie extends Convertisseur{
    btA2: number[] = this.getBytesToBin(5, 8);
    btA4: number[] = this.getBytesToBin(9, 8);
    btA5: number[] = this.getBytesToBin(11, 8);
    btA6: number[] = this.getBytesToBin(13, 8);

    setValue():number[]{
        let sommeA2 = 0;
        let sommeA4 = 0;
        let sommeA5 = 0;
        let sommeA6 = 0;
        for (let i = 0; i < this.btA2.length; i++) {
            sommeA2 += this.btA2[i];
            sommeA4 += this.btA4[i];
            sommeA5 += this.btA5[i];
            sommeA6 += this.btA6[i];
        }
        this.param[5] = sommeA2;
        this.param[9] = sommeA4;
        this.param[11] = sommeA5;
        this.param[13] = sommeA6;
        return this.param
    }
}



/** Model Action Inconnue (mise à jour à faire **/
export class Inconnue extends Convertisseur {
    setValue(): number[] {
        return this.param;
    }
}


