import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonsComponent } from '../../buttons/buttons.component';
import { SwitchButtonComponent } from '../../../../shared/components/switch-button/switch-button.component';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';
import { IconButtonComponent } from '../../../../shared/components/icon-button/icon-button.component';
import { Action, Sortie } from '../../../../shared/models/programme.model';
import { ActionSortie } from '../../../models/actions.model';
/** Ecran d'action sortie
 * 
 * Ecran de paramétrage des sortie et l'édition des label
 * 
 * @author Sébastien Drillaud
 * @version 20240919
 * 
 */
@Component({
  selector: 'ecran-action-sortie',
  templateUrl: './action-sortie.component.html',
  styleUrls: ['./action-sortie.component.css'],
  standalone:true,
  imports:[ButtonsComponent, SwitchButtonComponent, InputTextComponent, IconButtonComponent]
})
export class ActionSortieComponent implements OnInit {
  @Input() action: Action = (new Action());
  @Input() labelSortie:Sortie[] = [];
  @Output() newAction = new EventEmitter<Action>();
  @Output() btClicked = new EventEmitter<string>();

  param: ActionSortie = (new ActionSortie());

  page:number = 1;
  

  ngOnInit(): void {
    this.param = (new ActionSortie(this.action.action));
  }

  onClickPage(step:number){
    this.page = this.page + step
  }

  onClick(myAction: string) {
    if (myAction == "validModif") {
      this.newAction.emit(new Action(this.param.setValue()))
    } else {
      this.btClicked.emit(myAction);
    }
  }

  onClickCheckA2(value:number, indexBt:number){
    this.param.btA2[indexBt] = value;
  }
  onClickCheckA4(value:number, indexBt:number){
    this.param.btA4[indexBt] = value;
  }
  onClickCheckA5(value:number, indexBt:number){
    this.param.btA5[indexBt] = value;
  }
  onClickCheckA6(value:number, indexBt:number){
    this.param.btA6[indexBt] = value;
  }
}
