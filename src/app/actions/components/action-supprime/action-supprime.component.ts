import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';
/** Ecran suppression d'une action
 * 
 * @author Sébastien Drillaud
 * @version 20240919
 * 
 */
@Component({
  selector: 'ecran-action-supprime',
  templateUrl: './action-supprime.component.html',
  styleUrls: ['./action-supprime.component.css'],
  standalone:true,
  imports:[IconButtonComponent]
})
export class ActionSupprimeComponent {
  @Output() clicked = new EventEmitter<string>()

  onclickButton(myAction:string){
    this.clicked.emit(myAction);
  }
}
