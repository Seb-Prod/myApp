import { Component, OnInit} from '@angular/core';
import { Impression } from '../../../models/actions.model';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';
import { ButtonsComponent } from '../../buttons/buttons.component';
import { ActionGenericComponent } from '../../action-generic/action-generic.component';
import { expand } from 'rxjs';

/** Ecran d'action impression
 * @author Sébastien Drillaud
 * @version 20240919
 */
@Component({
  selector: 'ecran-action-impression',
  templateUrl: './action-impression.component.html',
  styleUrls: ['./action-impression.component.css'],
  standalone:true,
  imports:[InputTextComponent, ButtonsComponent]
})
export class ActionImpressionComponent extends ActionGenericComponent implements OnInit {
  ngOnInit(): void {
    this.param = (new Impression(this.action.action));
  }
}
