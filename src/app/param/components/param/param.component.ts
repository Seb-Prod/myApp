import { Component, computed, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InfoProgrammeComponent } from '../../../shared/components/info-programme/info-programme.component';
import { Param } from '../../../shared/models/programme.model';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';
import { InputNumberComponent } from '../../../shared/components/input-number/input-number.component';
import { SwitchButtonComponent } from '../../../shared/components/switch-button/switch-button.component';

@Component({
  selector: 'ecran-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css'],
  standalone:true,
  imports:[InfoProgrammeComponent, InputTextComponent, IconButtonComponent, InputNumberComponent, SwitchButtonComponent]
})
export class ParamComponent {
  @Input() param:Param = new Param();

  @Output() commandeClicked = new EventEmitter<Param>();

  onClickRfid(value:number){
    this.param.rfid = value;
  }
  
  onClick(myAction:string){ 
    this.commandeClicked.emit(this.param);
  }
}
