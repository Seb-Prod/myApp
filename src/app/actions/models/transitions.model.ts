import { Convertisseur } from "./convertisseur.model";

/** Model Transition */
export class TransitionModel extends Convertisseur {

    tempo: number = this.getNumber(12, 10);
    defaut: number = this.getNumber(14, 10);

    entreeE2: number[][] =[];
    entreeE3: number[][] =[];
    entreeE4: number[][] =[];
    entreeE6: number[][] =[];
    entreeE7: number[][] =[];

    constructor(param?: number[]){
        super();
        this.param = param || [];
        this.entreeE2 = this.initValeurEntree(6,0);
        this.entreeE3 = this.initValeurEntree(7,1);
        this.entreeE4 = this.initValeurEntree(8,2);
        this.entreeE6 = this.initValeurEntree(10,4);
        this.entreeE7 = this.initValeurEntree(11,5);
        
    }

    
    initValeurEntree(index0:number, index1:number):number[][]{
        let retour:number[][] = [];
        //Récupération des poids binaires
        const poids0:number[] = this.getBytesToBin(index0, 8);
        const poids1:number[] = this.getBytesToBin(index1, 8);
        
        //Répartition des poids binaire
        let poids = 1;
        for(let i = 0 ; i < 8 ; i++){
            retour.push([poids, poids0[i], poids1[i]])
            poids = poids * 2;
        }
        
        return retour;
    }

}