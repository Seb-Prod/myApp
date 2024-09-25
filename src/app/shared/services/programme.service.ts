import { Injectable } from '@angular/core';
import { Action, Entree, Etape, Programme, Sortie, Transition } from '../models/programme.model';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {
  programme: Programme = new Programme;

  constructor() {
    this.load();
  }

  private load() {
    const localFile = localStorage.getItem('programme');
    if (localFile) {
      this.programme = JSON.parse(localFile);

    } else {
      this.initEtape();

      this.initEntree("E2.", 7, 0);
      this.initEntree("E3.", 7, 0);
      this.initEntree("E4.", 7, 0);
      this.initEntree("E6.", 7, 0);
      this.initEntree("E7.", 3, 2);

      this.initSortie("A2.", 5, 0);
      this.initSortie("A4.", 3, 0);
      this.initSortie("A5.", 7, 6);
      this.initSortie("A6.", 5, 5);

      this.initTransition();

      this.save();
    }
  }

  private initEtape(): void {
    // boucle sur le nombre d'étape
    for (let i = 1; i < 21; i++) {
      const etape = new Etape();
      etape.message = "Etape n° " + i;
      for (let i = 0; i < 5; i++) {
        etape.actions.push(new Action())
      }
      this.programme.etapes.push(etape);
    }
  }

  private initEntree(name: string, idLast: number, idFirst: number): void {
    for (let i = idFirst; i < idLast + 1; i++) {
      const entree = new Entree();
      entree.entree = name + i;
      entree.label = name + i;

      //condition qui ne charge pas certaine entée en E6
      if (!(name == "E6." && (i == 4 || i == 5 || i == 6))) {
        this.programme.entrees.push(entree);
      }
    }
  }

  private initSortie(name: string, idLast: number, idFirst: number) {
    for (let i = idFirst; i < idLast + 1; i++) {
      const sortie = new Sortie();
      sortie.sortie = name + i;
      sortie.label = name + i;
      this.programme.sorties.push(sortie);
    }
  }

  private initTransition(): void {
    // boucle sur le nombre de transition
    for (let i = 0; i < 21; i++) {
      const transition = new Transition();
      transition.transition = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      this.programme.transitions.push(transition);
    }
  }




  public save(): void {
    localStorage.removeItem('programme');
    localStorage.setItem('programme', JSON.stringify(this.programme));
    location.reload();
  }

}
