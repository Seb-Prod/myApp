import { Component, OnInit} from '@angular/core';
import { Rfid } from '../../../models/actions.model';
import { SwitchButtonComponent } from '../../../../shared/components/switch-button/switch-button.component';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';
import { ButtonsComponent } from '../../buttons/buttons.component';
import { ActionGenericComponent } from '../../action-generic/action-generic.component';

/** Ecran d'action RFID
 * @author Sébastien Drillaud
 * @version 20240919
 * 
 */
@Component({
  selector: 'ecran-action-rfid',
  templateUrl: './action-rfid.component.html',
  styleUrls: ['./action-rfid.component.css'],
  standalone: true,
  imports: [SwitchButtonComponent, InputTextComponent, ButtonsComponent]
})
export class ActionRfidComponent extends ActionGenericComponent implements OnInit {
  ngOnInit(): void {
    this.param = (new Rfid(this.action.action));
  }
}
