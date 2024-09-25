import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '../../../shared/models/programme.model';

@Component({
  selector: 'app-action-generic',
  templateUrl: './action-generic.component.html',
  standalone:true
})
export class ActionGenericComponent {
  /** Paramètres de l'action */
  @Input() action: Action = (new Action());
  /** Au click du bouton valid */
  @Output() newAction = new EventEmitter<Action>();
  /** Au click des boutons supprime ou */
  @Output() btClicked = new EventEmitter<string>();
  
  param: any;

  onClick(myAction: string) {
    if (myAction == "validModif") {
      this.newAction.emit(new Action(this.param.setValue()))
    } else {
      this.btClicked.emit(myAction);
    }
  }
}
