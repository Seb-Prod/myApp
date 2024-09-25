import { Component, OnInit} from '@angular/core';
import { Conso } from '../../../models/actions.model';
import { SwitchButtonComponent } from '../../../../shared/components/switch-button/switch-button.component';
import { InputNumberComponent } from '../../../../shared/components/input-number/input-number.component';
import { ButtonsComponent } from '../../buttons/buttons.component';
import { ActionGenericComponent } from '../../action-generic/action-generic.component';

/** Ecran d'action mesure consomation
 * @author Sébastien Drillaud
 * @version 20240919
 */
@Component({
  selector: 'ecran-action-conso',
  templateUrl: './action-conso.component.html',
  styleUrls: ['./action-conso.component.css'],
  standalone: true,
  imports: [SwitchButtonComponent, InputNumberComponent, ButtonsComponent]
})
export class ActionConsoComponent extends ActionGenericComponent implements OnInit {
  ngOnInit(): void {
    this.param = (new Conso(this.action.action));
  }
}
