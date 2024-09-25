import { Component, OnInit } from '@angular/core';
import { Camera } from '../../../models/actions.model';
import { SwitchButtonComponent } from '../../../../shared/components/switch-button/switch-button.component';
import { InputNumberComponent } from '../../../../shared/components/input-number/input-number.component';
import { ButtonsComponent } from '../../buttons/buttons.component';
import { ActionGenericComponent } from '../../action-generic/action-generic.component';

/** Ecran d'action controle caméra
 * @author Sébastien Drillaud
 * @version 20240919
 */

@Component({
  selector: 'ecran-action-camera',
  templateUrl: './action-camera.component.html',
  styleUrls: ['./action-camera.component.css'],
  standalone:true,
  imports:[SwitchButtonComponent, InputNumberComponent, ButtonsComponent]
})

export class ActionCameraComponent extends ActionGenericComponent implements OnInit {
  ngOnInit(): void {
    this.param = (new Camera(this.action.action));
  }

}
