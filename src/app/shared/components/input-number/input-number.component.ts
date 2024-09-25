import { Component, Input, model, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
  standalone: true,
  imports: [FormsModule],
  
  
})

export class InputNumberComponent {
  value =model<number>(0);
  @Input() min: number = 0;
  @Input() max: number = 5;
  @Input() step: number = 1;
  @Input() enabled: boolean = true;
  @Output() retour:number =0;
  
  onChange(){
    if(!this.value()){
      this.value.set(0)
    }

    this.retour = this.value();
  }
}
