import { Component, Input,OnInit} from '@angular/core';
import { ButtonsComponent } from '../../buttons/buttons.component';
import { InputNumberComponent } from '../../../../shared/components/input-number/input-number.component';
import { SwitchButtonComponent } from '../../../../shared/components/switch-button/switch-button.component';
import { Vissage } from '../../../models/actions.model';
import { ActionGenericComponent } from '../../action-generic/action-generic.component';

/** Ecran d'action vissage ou soudure US
 * @author Sébastien Drillaud
 * @version 20240919
 */

@Component({
  selector: 'ecran-action-vissage',
  templateUrl: './action-vissage.component.html',
  styleUrls: ['./action-vissage.component.css'],
  standalone:true,
  imports:[ButtonsComponent, InputNumberComponent, SwitchButtonComponent]
})
export class ActionVissageComponent extends ActionGenericComponent implements OnInit {
  @Input() estVissage:boolean = true;

  ngOnInit(): void {
    this.param = (new Vissage(this.action.action));
  }

  onClickCheck(value:number, indexBt:number){
    this.param.bt[indexBt] = value;
    console.log(this.param.bt);
  }
}
