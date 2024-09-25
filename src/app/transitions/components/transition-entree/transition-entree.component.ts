import { Component, Input, OnInit } from '@angular/core';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { SwitchButtonComponent } from '../../../shared/components/switch-button/switch-button.component';

@Component({
  selector: 'app-transition-entree',
  templateUrl: './transition-entree.component.html',
  styleUrls: ['./transition-entree.component.css'],
  standalone:true,
  imports:[InputTextComponent, SwitchButtonComponent]
})
export class TransitionEntreeComponent{
  @Input() lbl:string = "Ex.x";
  @Input() texte:string = "";
  @Input() poids: number[]= [];

  

  onClickBt0(val:number){
    if(val == 0){
      this.poids[1] = 0;
    }else{
      this.poids[1] = this.poids[0];
      this.poids[2] = 0;
    }

    console.log(this.poids);
  }

  onClickBt1(val:number){
    if(val == 0){
      this.poids[2] = 0;
    }else{
      this.poids[2] = this.poids[0];
      this.poids[1] = 0;
    }

    console.log(this.poids);
  }
}
