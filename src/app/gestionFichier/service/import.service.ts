import { Injectable } from '@angular/core';
import { Action, Entree, Etape, Programme, Sortie, Transition } from '../../shared/models/programme.model';

@Injectable({
  providedIn: 'root'
})

export class ImportService {
  //tableau de byte avec tout le programme importé
  myImport: number[] = [];

  //initialisation d'un programme
  programme: Programme = new Programme;

  constructor(myImport:Array<number>) { 
    this.myImport = myImport;

    this.getEntree("E2.", 0, 7, 0);
    this.getEntree("E3.", 160, 7, 0);
    this.getEntree("E4.", 320, 7, 0);
    this.getEntree("E6.", 480, 7, 0);
    this.getEntree("E7.", 680, 3, 2);

    this.getSortie("A2.", 800, 5, 0);
    this.getSortie("A4.", 940, 3, 0);
    this.getSortie("A5.", 1020, 7, 6);
    this.getSortie("A6.", 1060, 5, 5);

    this.getEtape();

    this.getTransition();

    this.getParam();

    this.save();
  }


  /**
   * Récupération des étapes
   */
  private getEtape(): void {
    // index de la première étape
    let indexEtape = 1600;
    // pas entre chaque étape
    const pas = 140;

    // boucle sur le nombre d'étape
    for (let i = 1; i < 21; i++) {
      const etape = new Etape();
      etape.message = this.getString(indexEtape, 30);
      
      let indexAction = indexEtape + 30;
      for(let i = 0;i<5; i++){
        etape.actions.push(new Action(this.getByte(indexAction, 22)))
        indexAction = indexAction + 22;
      }

      this.programme.etapes.push(etape);
      indexEtape = indexEtape + pas;
    }
  }

  /**
   * Récupération des transition
   */
  private getTransition(): void {
    // index de la première transition
    let indexTransition = 4400;
    // pas entre chaque transition
    const pas = 18;

    // boucle sur le nombre de transition
    for (let i = 0; i < 21; i++) {
      const transition = new Transition();
      transition.transition = this.getByte(indexTransition, 18);
      this.programme.transitions.push(transition);
      indexTransition = indexTransition + pas;
    }
  }

  /**
   * Recupération des entrées
   * @param name nom de l'entree
   * @param index index de la première entree
   * @param nb nombre d'entrée
   * @param idFirst id de la première entree
   */
  private getEntree(name: string, index: number, idLast: number, idFirst: number): void {
    let indexEntree = index;
    let pas = 20;

    for (let i = idFirst; i < idLast + 1; i++) {
      const entree = new Entree();
      entree.entree = name + i;
      entree.label = this.getString(indexEntree, 20);

      //condition qui ne charge pas certaine entée en E6
      if (!(name == "E6." && (i == 4 || i == 5 || i == 6))) {
        this.programme.entrees.push(entree);
      }

      indexEntree = indexEntree + pas;
    }
  }

  /**
 * Recupération des sorites
 * @param name nom de la sortie
 * @param index index de la première sortie
 * @param nb nombre de sortie
 * @param idFirst id de la première sortie
 */
  private getSortie(name: string, index: number, idLast: number, idFirst: number) {
    let indexSortie = index;
    let pas = 20;

    for (let i = idFirst; i < idLast + 1; i++) {
      const sortie = new Sortie();
      sortie.sortie = name + i;
      sortie.label = this.getString(indexSortie, 20);
      this.programme.sorties.push(sortie);
      indexSortie = indexSortie + pas;
    }
  }

  private getParam(): void {
    this.programme.param.nEtape = this.myImport[4779];
    this.programme.param.time = this.byteToNumber(4780, 1);
    this.programme.param.rfid = this.myImport[4783];
    this.programme.param.name = this.getString(4784, 30);
    this.programme.param.code = this.myImport[4815];
    this.programme.param.ref = this.getString(780, 11);

  }

  /**
   * Récupération d'un tableau de byte
   * @param index index du premier byte
   * @param nb nimbre de byte à récupérer
   * @returns un tableau
   */
  private getByte(index: number, nb: number): Array<number> {
    let retour: number[] = [];
    for (let i = index; i < index + nb; i++) {
      retour.push(this.myImport[i])
    }
    return retour;
  }

  /**
   * Récupération d'une String
   * @param index index du premier byte
   * @param nb nombre de byte à lire
   * @returns une string
   */
  private getString(index: number, nb: number): string {
    let retour: string = "";
    for (let i = index; i < index + nb; i++) {
      const code: number = this.myImport[i];
      retour = retour + String.fromCharCode(code);
    }

    return retour.trim();
  }


  /**
   * Convertie deux byte en nombre
   * @param index index du premier byte
   * @param div  diviseur
   * @returns un nombre
   */
  private byteToNumber(index: number, div: number): number {
    const n1 = this.myImport[index];
    const n2 = this.myImport[index + 1];
    return ((n1 * 256) + n2) / div;
  }

  /**
   * Sauvegarde dans le local storage
   */
  private save(): void {
    localStorage.removeItem('programme');
    localStorage.setItem('programme', JSON.stringify(this.programme));
    location.reload();
  }

}
