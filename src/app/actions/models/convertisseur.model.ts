export class Convertisseur {
    param: number[] = [];



    constructor(param?: number[]) {
        this.param = param || [];
    }

    getNumber(index: number, div: number): number {
        const n1: number = this.param[index];
        const n2: number = this.param[index + 1];

        return ((n1 * 256) + n2) / div
    }

    setNumber(index: number, value: number, div: number): void {
        value = value * div;
        let n1 = Math.floor(value / 256);
        let n2 = value - (n1 * 256);

        this.param[index] = n1;
        this.param[index + 1] = n2;
    }

    getString(index: number, nb: number): string {
        let chaine: string = ""
        for (let i = index; i < index + nb; i++) {
            chaine = chaine + String.fromCharCode(this.param[i]);
        }
        return chaine.trim();
    }

    setString(index: number, value: string, nb: number) {
        for (let i = 0; i < nb; i++) {
            this.param[index + i] = 32;
        }
        for (let i = 0; i < value.length; i++) {
            this.param[index + i] = value.charCodeAt(i);
        }
    }

    getBytesToBin(index: number, nb: number): number[] {
        // initialise le tableau de retour
        let retour: number[] = [];
        if (this.param[index] > 0) {
            // la valeur à convertir
            let val: number = this.param[index];

            // initialise le poids binaire du premier
            let poids = 1;

            // boucle sur valeur, tant qu'elle n'est pas équal à 0
            while (val != 0) {
                // si il y a un reste sur la division le bit est à 1 sion à 0
                if (val % 2 == 1) {
                    retour.push(poids);
                } else {
                    retour.push(0);
                }
                // on recalcul la valur
                val = Math.floor(val / 2);
                // on recalcul le poids
                poids = poids * 2;
            }
        } else {
            for (let i = 0; i < nb; i++) {
                retour.push(0);
            }

        }

        if (retour.length < nb) {
            for (let i = retour.length; i < nb; i++) {
                retour.push(0);
            }
        }


        return retour;


    }
}