import { Component,Input, OnInit} from '@angular/core';
import { Inconnue } from '../../../models/actions.model';
import { ButtonsComponent } from '../../buttons/buttons.component';
import { ActionGenericComponent } from '../../action-generic/action-generic.component';


/** Ecran d'action scan
 * @author Sébastien Drillaud
 * @version 20240919
 */
@Component({
  selector: 'ecran-action-scan',
  templateUrl: './action-scan.component.html',
  styleUrls: ['./action-scan.component.css'],
  standalone:true,
  imports:[ButtonsComponent]
})
export class ActionScanComponent extends ActionGenericComponent implements OnInit {
  @Input() txt:string = "";
  @Input() txt2:string = "";

  ngOnInit(): void {
    this.param = (new Inconnue(this.action.action));
  }
}
