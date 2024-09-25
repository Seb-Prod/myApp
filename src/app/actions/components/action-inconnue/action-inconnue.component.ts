import { Inconnue } from './../../models/actions.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Action } from '../../../shared/models/programme.model';
import { ButtonsComponent } from '../buttons/buttons.component';

/** Ecran d'action inconnue
 * 
 * Ecran qui affiche le contenue d'une action qui n'exitait pas au moment de la création de l'application
 * 
 * @author Sébastien Drillaud
 * @version 20240919
 * 
 */
@Component({
  selector: 'ecran-action-inconnue',
  templateUrl: './action-inconnue.component.html',
  styleUrls: ['./action-inconnue.component.css'],
  standalone:true,
  imports:[ButtonsComponent]
})
export class ActionInconnueComponent implements OnInit {
  @Input() action: Action = (new Action());
  @Output() newAction = new EventEmitter<Action>();
  @Output() btClicked = new EventEmitter<string>();

  param: Inconnue= (new Inconnue);

  ngOnInit(): void {
    this.param = (new Inconnue(this.action.action));
  }

  onClick(myAction: string) {
    if (myAction == "validModif") {
      this.newAction.emit(new Action(this.param.setValue()))
    } else {
      this.btClicked.emit(myAction);
    }
  }
}
