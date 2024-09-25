import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Action, Sortie } from '../../../shared/models/programme.model';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';
import { ActionConsoComponent } from '../actions/action-conso/action-conso.component';
import { ActionRfidComponent } from '../actions/action-rfid/action-rfid.component';
import { ActionTracabilitePcbComponent } from '../actions/action-tracabilite-pcb/action-tracabilite-pcb.component';
import { ActionInconnueComponent } from '../action-inconnue/action-inconnue.component';
import { ActionVissageComponent } from "../actions/action-vissage/action-vissage.component";
import { ActionImpressionComponent } from '../actions/action-impression/action-impression.component';
import { ActionScanComponent } from '../actions/action-scan/action-scan.component';
import { ActionSortieComponent } from '../actions/action-sortie/action-sortie.component';
import { ActionAucuneComponent } from '../actions/action-aucune/action-aucune.component';
import { ActionCameraComponent } from '../actions/action-camera/action-camera.component';

/** Ecran d'action
 * 
 * Affichage de l'écran paramètres de l'action choisie
 * 
 * @author Sébastien Drillaud
 * @version 20240919
 * 
 */

@Component({
  selector: 'ecran-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  standalone: true,
  imports: [IconButtonComponent, ActionConsoComponent, ActionRfidComponent, ActionTracabilitePcbComponent, ActionInconnueComponent, ActionVissageComponent, ActionImpressionComponent, ActionScanComponent, ActionSortieComponent, ActionAucuneComponent, ActionCameraComponent]
})

export class ActionComponent{
  /** Index de l'étape en cours */
  @Input() stepIndex: number = 0;
  /** Index de l'action en cours */
  @Input() actionIndex: number = 0;
  /** Contenue de l'action */
  @Input() action: Action = new Action();
  /** Tableau avec les ID des actions 1 à 5. Utiliser pour ajout d'une action et éviter les doublons d'action */
  @Input() autreAction: number[] = [0, 0, 0, 0, 0];
  /** Labels des sorties */
  @Input() sorties: Sortie[] = [];
  /** Click sur les boutons retour ou supprime */
  @Output() buttonClicked = new EventEmitter<string>();
  /** Click sur le bouton valide */
  @Output() newAction = new EventEmitter<Action>();


  /**
   * Click sur le bouton retour ou supprime
   * @param myAction string avec l'action à effectuer
   */
  onClickButton(myAction: string) {
    this.buttonClicked.emit(myAction);
  }

  /**
   * Click sur le bouton valide
   * @param newAction model Action avec les nouveau pamamètre
   */
  onClickValidModif(newAction: Action) {
    this.newAction.emit(newAction);
  }
}
