import { Component, OnInit } from '@angular/core';
import { TracabilitePCB } from '../../../models/actions.model';
import { InputNumberComponent } from '../../../../shared/components/input-number/input-number.component';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';
import { ButtonsComponent } from '../../buttons/buttons.component';
import { ActionGenericComponent } from '../../action-generic/action-generic.component';
/** Ecran d'action traçabilité PCB
 * 
 * @author Sébastien Drillaud
 * @version 20240919
 * 
 */
@Component({
  selector: 'ecran-action-tracabilite-pcb',
  templateUrl: './action-tracabilite-pcb.component.html',
  styleUrls: ['./action-tracabilite-pcb.component.css'],
  standalone:true,
  imports:[InputNumberComponent, InputTextComponent, ButtonsComponent]
})
export class ActionTracabilitePcbComponent extends ActionGenericComponent implements OnInit {

  ngOnInit(): void {
    this.param = (new TracabilitePCB(this.action.action));
  }
}
