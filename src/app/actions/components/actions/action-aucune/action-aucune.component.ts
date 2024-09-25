
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Action } from '../../../../shared/models/programme.model';
import { SwitchButtonComponent } from '../../../../shared/components/switch-button/switch-button.component';
import { IconButtonComponent } from '../../../../shared/components/icon-button/icon-button.component';


/** Ecran d'action aucune
 * 
 * Ecran de sélection de l'action à ajouter
 * 
 * @author Sébastien Drillaud
 * @version 20240919
 * 
 */
@Component({
  selector: 'ecran-action-aucune',
  templateUrl: './action-aucune.component.html',
  styleUrls: ['./action-aucune.component.css'],
  standalone: true,
  imports: [SwitchButtonComponent, IconButtonComponent],
})
export class ActionAucuneComponent implements OnInit {
  ngOnInit(): void {
    for (let i = 0; i < this.autreAction.length; i++) {
      // renplie le tableau avec les actions déjà utilisé dans l'étape
      this.actionList[this.autreAction[i] - 1] = this.autreAction[i];
    }
  }
  /** Contenue de l'action */
  @Input() action: Action = (new Action());
  /** Liste des autres actions de l'étape */
  @Input() autreAction: number[] = [];
/** Click sur le bouton valide */
  @Output() newAction = new EventEmitter<Action>();
  /** Click sur les boutons retour ou supprime */
  @Output() btClicked = new EventEmitter<string>();

  // initialise le tableau des type d'action
  actionList: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


  /** Click sur le bouton retour ou supprime */
  onClick(myAction: string) {
    this.btClicked.emit(myAction);
  }

  /** Click sur une action */
  onClickAction(myActionId: number) {
    let existe:boolean = false;

    // Vérification si l'action choisie est déjà utilisé dans l'étape
    for (let i = 0; i < this.autreAction.length; i++) {
      if(this.autreAction[i] == myActionId){
        existe = true;
      }
    }

    // Si n'est pas déjà utilisé on ajoute une nouvelle action initialisé selon le type d'action
    if(!existe){
      let actionTemps:number[] = [];
      switch(myActionId){
        case (1):
          actionTemps = [0,myActionId,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          break;
        case (2):
          actionTemps = [0,myActionId,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          break;
        case (3):
          actionTemps = [0,myActionId,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          break;
        case (4):
          actionTemps = [0,myActionId,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          break;
        case (5):
          actionTemps = [0,myActionId,0,0,32,32,32,32,32,32,0,0,32,32,32,32,32,32,32,32,0,0]
          break;
        case (6):
          actionTemps = [0,myActionId,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          break;
        case (7):
          actionTemps = [0,myActionId,32,32,32,32,32,32,32,32,0,0,32,32,32,32,0,0,0,0,0,0]
          break;
        case (8):
          actionTemps = [0,myActionId,32,32,32,32,32,32,32,32,0,0,0,0,0,0,0,0,0,0,0,0]
          break;
        case (9):
          actionTemps = [0,myActionId,32,32,32,32,32,32,32,32,0,0,0,0,0,0,0,0,0,0,0,0]
          break;
        case (10):
          actionTemps = [0,myActionId,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          break;
        case (11):
          actionTemps = [0,myActionId,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          break;


      }

      
      this.newAction.emit(new Action(actionTemps));
    }

  }
}
